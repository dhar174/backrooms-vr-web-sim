import { LEVEL0_SPIKE_SCENARIO } from "./level0SpikeScenario.ts";
import type { BenchmarkBounds, BenchmarkLocation, BenchmarkScenario, BenchmarkValidationIssue, DeepReadonly, LogicalPosition } from "./spikeTypes.ts";

const EPSILON = 1e-9;
const axes = ["x", "y", "z"] as const;
type Issues = BenchmarkValidationIssue[];
function fail(issues: Issues, code: string, message: string, id?: string): void {
  issues.push(id === undefined ? { code, message } : { code, message, id });
}
/** Validate the JSON shape of this versioned fixture, not an arbitrary game schema. */
function checkShape(value: unknown, reference: unknown, path: string, issues: Issues): void {
  if (Array.isArray(reference)) {
    if (!Array.isArray(value) || (reference.length > 0 && value.length === 0)) {
      fail(issues, "schema", "Expected a nonempty array at " + path);
    } else {
      value.forEach((item, index) => checkShape(item, reference[0], path + "[" + index + "]", issues));
    }
  } else if (reference !== null && typeof reference === "object") {
    if (value === null || typeof value !== "object" || Array.isArray(value)) {
      fail(issues, "schema", "Expected an object at " + path);
      return;
    }
    const record = value as Record<string, unknown>;
    for (const [key, child] of Object.entries(reference)) checkShape(record[key], child, path + "." + key, issues);
    for (const key of Object.keys(record)) {
      if (!(key in reference)) fail(issues, "schema", "Unexpected field at " + path + "." + key);
    }
  } else if (typeof value !== typeof reference || (typeof value === "number" && !Number.isFinite(value))) {
    fail(issues, "schema", "Wrong type or nonfinite value at " + path);
  }
}
function inside(position: LogicalPosition, bounds: BenchmarkBounds): boolean {
  return axes.every(axis => position[axis] >= bounds.min[axis] - EPSILON && position[axis] <= bounds.max[axis] + EPSILON);
}
function checkLocations(scenario: DeepReadonly<BenchmarkScenario>, issues: Issues): void {
  const locations: readonly BenchmarkLocation[] = [
    scenario.spawn, scenario.note, scenario.anomaly, scenario.exit,
    ...scenario.visualIntent.fixtures,
    ...(scenario.audio.positional.location ? [scenario.audio.positional.location] : []),
  ];
  for (const location of locations) {
    const node = scenario.graph.nodes[location.nodeId];
    if (!node || !inside(location.position, node.bounds)) fail(issues, "location", "Location is outside its declared node", location.nodeId);
  }
  const spawn = scenario.graph.nodes[scenario.spawn.nodeId];
  if (spawn && (Math.abs(scenario.spawn.position.y - spawn.bounds.min.y) > EPSILON ||
      scenario.spawn.position.y + scenario.player.heightMeters >= spawn.bounds.max.y ||
      ["x", "z"].some(axis => {
        const a = axis as "x" | "z";
        return scenario.spawn.position[a] - scenario.player.collisionRadiusMeters < spawn.bounds.min[a] ||
          scenario.spawn.position[a] + scenario.player.collisionRadiusMeters > spawn.bounds.max[a];
      }))) fail(issues, "spawn-clearance", "Spawn must have floor, eye-height, and radius clearance");
  if (Math.abs(Math.hypot(scenario.spawn.forward.x, scenario.spawn.forward.y, scenario.spawn.forward.z) - 1) > EPSILON ||
      scenario.spawn.forward.y !== 0) fail(issues, "spawn-direction", "Spawn forward must be a horizontal unit direction");
  if (Math.abs(Math.hypot(scenario.note.facing.x, scenario.note.facing.y, scenario.note.facing.z) - 1) > EPSILON) {
    fail(issues, "note-direction", "Note facing must be a unit direction");
  }
  const anomalyNode = scenario.graph.nodes[scenario.anomaly.nodeId];
  if (anomalyNode && (scenario.anomaly.trigger.horizontalRadiusMeters <= 0 ||
      Math.abs(scenario.anomaly.position.y - anomalyNode.bounds.min.y) > EPSILON ||
      (["x", "z"] as const).some(axis =>
        scenario.anomaly.position[axis] - scenario.anomaly.trigger.horizontalRadiusMeters < anomalyNode.bounds.min[axis] ||
        scenario.anomaly.position[axis] + scenario.anomaly.trigger.horizontalRadiusMeters > anomalyNode.bounds.max[axis]))) {
    fail(issues, "trigger-clearance", "Anomaly trigger disk must fit on its node floor");
  }
}
function checkGraph(scenario: DeepReadonly<BenchmarkScenario>, issues: Issues): void {
  const { nodes, connections } = scenario.graph;
  const pairs = new Set<string>();
  for (const [key, node] of Object.entries(nodes)) {
    if (key !== node.id || !["spawn", "room", "corridor", "branch"].includes(node.kind)) fail(issues, "node", "Invalid node ID or kind", key);
    if (axes.some(axis => node.bounds.max[axis] <= node.bounds.min[axis])) fail(issues, "dimensions", "Dimensions must be positive", key);
    if (new Set(node.connections).size !== node.connections.length) fail(issues, "adjacency", "Duplicate neighbor", key);
    for (const neighbor of node.connections) {
      if (neighbor === key || !nodes[neighbor]?.connections.includes(key)) fail(issues, "adjacency", "Invalid or nonreciprocal neighbor", key);
      const exists = Object.values(connections).some(edge =>
        (edge.fromNodeId === key && edge.toNodeId === neighbor) || (edge.toNodeId === key && edge.fromNodeId === neighbor));
      if (!exists) fail(issues, "adjacency", "Neighbor has no connection record", key);
    }
  }
  for (const [key, edge] of Object.entries(connections)) {
    const from = nodes[edge.fromNodeId], to = nodes[edge.toNodeId];
    const pair = [edge.fromNodeId, edge.toNodeId].sort().join("|");
    if (key !== edge.id || edge.bidirectional !== true || edge.fromNodeId === edge.toNodeId || pairs.has(pair)) fail(issues, "connection", "Invalid or duplicate connection", key);
    pairs.add(pair);
    if (!from || !to) { fail(issues, "connection-reference", "Connection endpoint does not exist", key); continue; }
    if (!from.connections.includes(to.id) || !to.connections.includes(from.id)) fail(issues, "adjacency", "Connection is absent from node adjacency", key);
    const opening = edge.opening;
    if (opening.normalAxis !== "x" && opening.normalAxis !== "z") {
      fail(issues, "opening", "Opening normal must be x or z", key); continue;
    }
    const normal = opening.normalAxis, tangent = normal === "x" ? "z" : "x";
    const sharedPlane = (Math.abs(from.bounds.max[normal] - to.bounds.min[normal]) <= EPSILON &&
      Math.abs(opening.center[normal] - from.bounds.max[normal]) <= EPSILON) ||
      (Math.abs(to.bounds.max[normal] - from.bounds.min[normal]) <= EPSILON &&
      Math.abs(opening.center[normal] - to.bounds.max[normal]) <= EPSILON);
    const fits = [from, to].every(node =>
      opening.center[tangent] - opening.widthMeters / 2 >= node.bounds.min[tangent] - EPSILON &&
      opening.center[tangent] + opening.widthMeters / 2 <= node.bounds.max[tangent] + EPSILON &&
      Math.abs(opening.center.y - node.bounds.min.y) <= EPSILON &&
      opening.center.y + opening.heightMeters <= node.bounds.max.y + EPSILON);
    if (!sharedPlane || !fits) fail(issues, "opening-alignment", "Opening must fit a shared boundary and floor", key);
    if (opening.widthMeters <= 2 * scenario.player.collisionRadiusMeters ||
        opening.heightMeters <= scenario.player.heightMeters) fail(issues, "opening-clearance", "Opening must clear the player", key);
  }
  const visited = new Set<string>(), pending = [scenario.spawn.nodeId];
  while (pending.length) {
    const id = pending.pop();
    if (id === undefined || visited.has(id) || !nodes[id]) continue;
    visited.add(id);
    for (const edge of Object.values(connections)) {
      if (edge.bidirectional === true) {
        if (edge.fromNodeId === id) pending.push(edge.toNodeId);
        if (edge.toNodeId === id) pending.push(edge.fromNodeId);
      }
    }
  }
  if (!visited.has(scenario.exit.nodeId)) fail(issues, "exit-unreachable", "Exit is not reachable through connection records");
  const nodeList = Object.values(nodes);
  nodeList.forEach((a, index) => {
    for (const b of nodeList.slice(index + 1)) {
      if (axes.every(axis => Math.min(a.bounds.max[axis], b.bounds.max[axis]) - Math.max(a.bounds.min[axis], b.bounds.min[axis]) > EPSILON)) {
        fail(issues, "overlap", "Clear node interiors overlap", a.id + "/" + b.id);
      }
    }
  });
}
function checkBehavior(scenario: DeepReadonly<BenchmarkScenario>, issues: Issues): void {
  const reference = LEVEL0_SPIKE_SCENARIO;
  const equal = (actual: unknown, expected: unknown, label: string): void => {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) fail(issues, "behavior", "Invalid frozen behavior: " + label);
  };
  equal(scenario.coordinateSystem, reference.coordinateSystem, "coordinates");
  equal(scenario.note.initialState, "unread", "note initial state");
  equal(scenario.note.onInteract, reference.note.onInteract, "note interaction");
  equal(scenario.note.interactable, true, "note interactability");
  equal(scenario.note.canonStatus, "original", "note provenance");
  equal(scenario.anomaly.initialState, "idle", "anomaly initial state");
  equal(scenario.anomaly.transitions, reference.anomaly.transitions, "anomaly transitions");
  equal(scenario.anomaly.trigger.condition, reference.anomaly.trigger.condition, "anomaly trigger");
  equal(scenario.anomaly.trigger.oncePerRun, true, "anomaly repeat");
  equal(scenario.anomaly.interpolation, reference.anomaly.interpolation, "flicker interpolation");
  equal(scenario.exit.activation, reference.exit.activation, "exit activation");
  equal(scenario.exit.transition, reference.exit.transition, "run completion");
  equal(scenario.exit.requiresNoteRead, false, "exit independence");
  equal(scenario.exit.interactable, true, "exit interactability");
  equal(scenario.exit.loadsSecondLevel, false, "no second level");
  equal(scenario.lifecycle, reference.lifecycle, "pause/resume/completion/reset");
  equal(scenario.canonStatus, "experimental", "fixture provenance");
  equal(scenario.visualIntent.wallThicknessPlacement, reference.visualIntent.wallThicknessPlacement, "clear bounds");
  equal(scenario.visualIntent.randomizedVariation, false, "no random variation");
  equal(scenario.visualIntent.shadowsRequired, false, "shadow baseline");
  equal(scenario.visualIntent.postProcessingRequired, false, "post-processing baseline");
  const { ambient, positional } = scenario.audio;
  for (const [actual, expected] of [[ambient, reference.audio.ambient], [positional, reference.audio.positional]] as const) {
    equal(actual.loop, expected.loop, "audio loop");
    equal(actual.trigger, expected.trigger, "audio trigger");
    equal(actual.requiresUserGesture, true, "audio gesture");
    equal(actual.oncePerRun, expected.oncePerRun, "audio repeat");
    if (actual.gainIntent < 0 || actual.gainIntent > 1) fail(issues, "audio-gain", "Audio gain hint must be in [0, 1]");
  }
  if (!scenario.note.content.trim() || !scenario.exit.completionMessage.trim()) fail(issues, "content", "Content must be nonempty");
  if (!positional.location || !positional.maxDurationMs || positional.maxDurationMs > 2000 || positional.maxDurationMs < 0) fail(issues, "audio-duration", "Positional sound requires a location and at most two seconds");
  const { anomaly } = scenario, timeline = anomaly.brightnessTimeline;
  if (anomaly.durationMs <= 0 || anomaly.durationMs > 6000 || timeline[0]?.atMs !== 0 ||
      timeline.at(-1)?.atMs !== anomaly.durationMs || timeline.at(-1)?.relativeBrightness !== 1 ||
      timeline[0]?.relativeBrightness !== 1 || anomaly.finalRelativeBrightness !== 1) fail(issues, "flicker-duration", "Flicker must be limited and return to normal");
  timeline.forEach((sample, index) => {
    if (sample.relativeBrightness < 0.65 || sample.relativeBrightness > 1 ||
        (index > 0 && sample.atMs - (timeline[index - 1]?.atMs ?? 0) < 1000)) fail(issues, "flicker-cadence", "Flicker must be restrained with at least one second between samples");
  });
  const fixtures = new Set(scenario.visualIntent.fixtures.map(f => f.id));
  if (!anomaly.affectedFixtureIds.length || anomaly.affectedFixtureIds.some(id => !fixtures.has(id))) fail(issues, "fixture-reference", "Anomaly must reference existing fixtures");
  const roles = scenario.visualIntent.surfaces.map(surface => surface.role);
  if (roles.length !== 4 || new Set(roles).size !== 4 || roles.some(role => !["wall", "floor", "ceiling", "fixture"].includes(role))) fail(issues, "surface-role", "Require four unique surface roles");
  for (const surface of scenario.visualIntent.surfaces) {
    if (!/^#[0-9A-F]{6}$/i.test(surface.paletteSrgb) || surface.roughnessHint < 0 || surface.roughnessHint > 1 || surface.emissiveHint < 0 || surface.emissiveHint > 1) fail(issues, "surface", "Invalid surface hints");
  }
}
export function validateBenchmarkScenario(input: unknown): readonly BenchmarkValidationIssue[] {
  const issues: Issues = [];
  checkShape(input, LEVEL0_SPIKE_SCENARIO, "scenario", issues);
  if (issues.length) return issues;
  const scenario = input as DeepReadonly<BenchmarkScenario>;
  if (scenario.benchmarkId !== LEVEL0_SPIKE_SCENARIO.benchmarkId ||
      scenario.benchmarkVersion !== LEVEL0_SPIKE_SCENARIO.benchmarkVersion ||
      scenario.seed !== LEVEL0_SPIKE_SCENARIO.seed) fail(issues, "metadata", "Validator is for the frozen v1 benchmark");
  const allIds = [
    ...Object.values(scenario.graph.nodes).map(n => n.id),
    ...Object.values(scenario.graph.connections).map(e => e.id),
    ...scenario.visualIntent.fixtures.map(f => f.id),
    scenario.note.id, scenario.anomaly.id, scenario.audio.ambient.id, scenario.audio.positional.id, scenario.exit.id,
  ];
  if (allIds.some(id => !id.trim()) || new Set(allIds).size !== allIds.length) fail(issues, "ids", "Logical IDs must be nonempty and globally unique");
  for (const [key, value] of Object.entries(scenario.player)) {
    if (typeof value === "number" && value <= 0) fail(issues, "player", "Player parameter must be positive: " + key);
    if (typeof value !== "number" && value !== LEVEL0_SPIKE_SCENARIO.player[key as keyof typeof scenario.player]) fail(issues, "player", "Invalid control policy: " + key);
  }
  if (scenario.player.desktopVerticalFovDegrees >= 180 || scenario.player.snapTurnDegrees > 180) fail(issues, "player", "Invalid player angle");
  for (const value of [scenario.visualIntent.localLightCountTarget, scenario.visualIntent.geometryModuleCountTarget]) {
    if (!Number.isInteger(value) || value <= 0) fail(issues, "visual-count", "Visual targets must be positive integers");
  }
  if (scenario.visualIntent.wallThicknessMeters <= 0) fail(issues, "wall-thickness", "Wall thickness must be positive");
  checkGraph(scenario, issues);
  checkLocations(scenario, issues);
  checkBehavior(scenario, issues);
  return issues;
}
