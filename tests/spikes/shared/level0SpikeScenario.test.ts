import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { LEVEL0_SPIKE_SCENARIO } from "../../../spikes/shared/level0SpikeScenario.ts";
import { validateBenchmarkScenario } from "../../../spikes/shared/validateBenchmarkScenario.ts";
import { COMPARISON_METRICS } from "../../../spikes/shared/comparisonMetrics.ts";
import { COMPARISON_PROTOCOL, PLAYER_BENCHMARK_CONFIG } from "../../../spikes/shared/spikeConfig.ts";
import type { BenchmarkScenario } from "../../../spikes/shared/spikeTypes.ts";

function clone(): BenchmarkScenario {
  return JSON.parse(JSON.stringify(LEVEL0_SPIKE_SCENARIO)) as BenchmarkScenario;
}
const golden = JSON.parse(readFileSync(new URL("./fixtures/level0SpikeScenario.v1.json", import.meta.url), "utf8")) as unknown;
const expectedSerialized = JSON.stringify(golden);

describe("frozen Level 0 benchmark", () => {
  it("validates the scenario against the v1 schema and graph rules", () => {
    expect(validateBenchmarkScenario(LEVEL0_SPIKE_SCENARIO)).toEqual([]);
  });
  it("matches the reviewed golden logical fixture and its stable serialization", () => {
    expect(LEVEL0_SPIKE_SCENARIO).toEqual(golden);
    expect(JSON.stringify(LEVEL0_SPIKE_SCENARIO)).toBe(expectedSerialized);
    expect(validateBenchmarkScenario(golden)).toEqual([]);
  });
  it("serializes identically across three fresh Node processes", () => {
    const url = new URL("../../../spikes/shared/level0SpikeScenario.ts", import.meta.url).href;
    for (let trial = 0; trial < 3; trial++) {
      const result = spawnSync(process.execPath, ["--input-type=module", "-e",
        "const { LEVEL0_SPIKE_SCENARIO } = await import(" + JSON.stringify(url) + "); process.stdout.write(JSON.stringify(LEVEL0_SPIKE_SCENARIO));"],
      { encoding: "utf8" });
      expect(result.error).toBeUndefined();
      expect(result.status, result.stderr).toBe(0);
      expect(result.stderr).toBe("");
      expect(result.stdout).toBe(expectedSerialized);
    }
  });
  it("deeply freezes every scenario object and array", () => {
    function verify(value: unknown): void {
      if (value !== null && typeof value === "object") {
        expect(Object.isFrozen(value)).toBe(true);
        Object.values(value).forEach(verify);
      }
    }
    verify(LEVEL0_SPIKE_SCENARIO);
    expect(() => Reflect.set(LEVEL0_SPIKE_SCENARIO.note, "content", "changed")).not.toThrow();
    expect(Reflect.set(LEVEL0_SPIKE_SCENARIO.player, "movementSpeedMps", 99)).toBe(false);
    expect(JSON.stringify(LEVEL0_SPIKE_SCENARIO)).toBe(expectedSerialized);
    expect(Object.isFrozen(PLAYER_BENCHMARK_CONFIG)).toBe(true);
    expect(Object.isFrozen(COMPARISON_PROTOCOL)).toBe(true);
  });
  it("freezes measurement conditions independently of renderer statistics", () => {
    expect(COMPARISON_PROTOCOL).toEqual({ desktopViewportWidth: 1280, desktopViewportHeight: 720,
      devicePixelRatio: 1, performanceRuns: 3, warmupSeconds: 20, sampleSeconds: 60, resetCycles: 10 });
  });
  it("includes the complete comparison categories with unique IDs and evidence requirements", () => {
    expect(new Set(COMPARISON_METRICS.map(m => m.id)).size).toBe(COMPARISON_METRICS.length);
    expect([...new Set(COMPARISON_METRICS.map(m => m.category))].sort()).toEqual([
      "audio", "debugging", "desktop", "maintainability", "performance", "runtime-ownership", "scene-construction", "setup", "webxr",
    ]);
    for (const metric of COMPARISON_METRICS) {
      expect(metric.evidenceRequired).toBe(true);
      expect(metric.description.length).toBeGreaterThan(10);
      expect(Object.isFrozen(metric)).toBe(true);
      expect(metric).not.toHaveProperty("weight");
    }
    expect(Object.isFrozen(COMPARISON_METRICS)).toBe(true);
  });
  it("retains all 26 report headings", () => {
    const template = readFileSync(new URL("../../../spikes/shared/reportTemplate.md", import.meta.url), "utf8");
    const headings = ["Executive summary","Candidate/version tested","Benchmark ID/version","Baseline commit SHA","Environment","Setup experience","Runtime architecture","Desktop controls","Collision","Scene construction","WebXR","Locomotion and comfort","Interaction","Audio","Anomaly and exit","Debugging/tooling","Performance","Resource lifecycle","Custom infrastructure cost","Dependencies introduced","Architecture fit","Lock-in/portability concerns","Known untested areas","Benchmark deviations","Recommendation","Evidence for BACVR-12"];
    expect(template.match(/^## /gm)).toHaveLength(26);
    headings.forEach((heading, i) => expect(template).toContain("## " + (i + 1) + ". " + heading));
  });
  it("keeps candidate runtime dependencies out of the root verification package", () => {
    const manifest = JSON.parse(readFileSync(fileURLToPath(new URL("../../../package.json", import.meta.url)), "utf8")) as {
      private: boolean; dependencies?: Record<string, string>; devDependencies: Record<string, string>;
    };
    expect(manifest.private).toBe(true);
    expect(manifest.dependencies ?? {}).toEqual({});
    expect(Object.keys(manifest.devDependencies).sort()).toEqual([
      "@eslint/js", "@types/node", "eslint", "typescript", "typescript-eslint", "vite", "vitest",
    ]);
  });
});

const corruptions: readonly [string, string, (scenario: BenchmarkScenario) => void][] = [
  ["duplicate IDs", "ids", s => { s.note.id = s.exit.id; }],
  ["invalid node kind", "node", s => { s.graph.nodes["spawn-room"]!.kind = "bad" as "spawn"; }],
  ["dangling adjacency", "adjacency", s => { s.graph.nodes["spawn-room"]!.connections = ["missing"]; }],
  ["missing reciprocal adjacency", "adjacency", s => { s.graph.nodes["main-corridor"]!.connections = ["secondary-room"]; }],
  ["dangling connection endpoint", "connection-reference", s => { s.graph.connections["spawn-to-corridor"]!.toNodeId = "missing"; }],
  ["misaligned opening", "opening-alignment", s => { s.graph.connections["spawn-to-corridor"]!.opening.center.z = 4; }],
  ["narrow opening", "opening-clearance", s => { s.graph.connections["spawn-to-corridor"]!.opening.widthMeters = 0.5; }],
  ["short opening", "opening-clearance", s => { s.graph.connections["spawn-to-corridor"]!.opening.heightMeters = 1; }],
  ["negative dimensions", "dimensions", s => { s.graph.nodes["spawn-room"]!.bounds.max.x = -4; }],
  ["overlapping interiors", "overlap", s => { s.graph.nodes["main-corridor"]!.bounds.min.z = 2; }],
  ["unreachable exit despite adjacency claims", "exit-unreachable", s => {
    const edge = s.graph.connections["secondary-to-branch"]!;
    edge.fromNodeId = "spawn-room"; edge.toNodeId = "main-corridor";
  }],
  ["spawn too near wall", "spawn-clearance", s => { s.spawn.position.x = 2.9; }],
  ["wrong spawn direction", "spawn-direction", s => { s.spawn.forward.z = 0; }],
  ["zero movement speed", "player", s => { s.player.movementSpeedMps = 0; }],
  ["invalid field of view", "player", s => { s.player.desktopVerticalFovDegrees = 180; }],
  ["invalid note state", "behavior", s => { s.note.initialState = "read"; }],
  ["note-gated exit", "behavior", s => { s.exit.requiresNoteRead = true as false; }],
  ["second-level exit", "behavior", s => { s.exit.loadsSecondLevel = true as false; }],
  ["invalid reset state", "behavior", s => { s.lifecycle.reset.note = "read" as "unread"; }],
  ["audio without gesture", "behavior", s => { s.audio.ambient.requiresUserGesture = false as true; }],
  ["out-of-range gain", "audio-gain", s => { s.audio.positional.gainIntent = 2; }],
  ["long positional sound", "audio-duration", s => { s.audio.positional.maxDurationMs = 3000; }],
  ["missing affected fixture", "fixture-reference", s => { s.anomaly.affectedFixtureIds = ["missing"]; }],
  ["rapid flicker", "flicker-cadence", s => { s.anomaly.brightnessTimeline = [{ atMs: 0, relativeBrightness: 1 }, { atMs: 100, relativeBrightness: 0.65 }, { atMs: 6000, relativeBrightness: 1 }]; }],
  ["flicker blackout", "flicker-cadence", s => { s.anomaly.brightnessTimeline = [{ atMs: 0, relativeBrightness: 1 }, { atMs: 1000, relativeBrightness: 0 }, { atMs: 6000, relativeBrightness: 1 }]; }],
  ["flicker does not restore lighting", "flicker-duration", s => { s.anomaly.finalRelativeBrightness = 0.65; }],
  ["oversized trigger", "trigger-clearance", s => { s.anomaly.trigger.horizontalRadiusMeters = 5; }],
  ["wrong benchmark version", "metadata", s => { s.benchmarkVersion = "2.0.0"; }],
  ["empty note", "content", s => { s.note.content = ""; }],
  ["invalid visual role", "surface-role", s => { s.visualIntent.surfaces[0]!.role = "floor"; }],
  ["negative visual budget", "visual-count", s => { s.visualIntent.geometryModuleCountTarget = -1; }],
  ["invalid palette", "surface", s => { s.visualIntent.surfaces[0]!.paletteSrgb = "yellow"; }],
  ["zero wall thickness", "wall-thickness", s => { s.visualIntent.wallThicknessMeters = 0; }],
];
describe("rejects broken benchmark fixtures", () => {
  it.each(corruptions)("%s", (_name, code, mutate) => {
    const scenario = clone(); mutate(scenario);
    expect(validateBenchmarkScenario(scenario).map(issue => issue.code)).toContain(code);
  });
  it.each(["note", "anomaly", "exit"] as const)("rejects invalid %s node/location", key => {
    const scenario = clone(); scenario[key].nodeId = "missing";
    expect(validateBenchmarkScenario(scenario).map(issue => issue.code)).toContain("location");
    const other = clone(); other[key].position.x = 100;
    expect(validateBenchmarkScenario(other).map(issue => issue.code)).toContain("location");
  });
  it("rejects misplaced positional sound and fixtures", () => {
    const scenario = clone(); scenario.audio.positional.location!.position.x = 100;
    scenario.visualIntent.fixtures[0]!.position.y = 4;
    expect(validateBenchmarkScenario(scenario).filter(issue => issue.code === "location")).toHaveLength(2);
  });
  it.each([null, {}, { graph: {} }, "scenario", []])("rejects malformed input without throwing: %j", input => {
    expect(validateBenchmarkScenario(input).some(issue => issue.code === "schema")).toBe(true);
  });
  it("rejects missing, additional, and nonfinite fields", () => {
    expect(validateBenchmarkScenario({ ...clone(), unexpected: true }).some(i => i.code === "schema")).toBe(true);
    const scenario = clone(); scenario.player.movementSpeedMps = Number.NaN;
    expect(validateBenchmarkScenario(scenario).some(i => i.code === "schema")).toBe(true);
    const missing = clone(); delete missing.audio.positional.location;
    expect(validateBenchmarkScenario(missing).some(i => i.code === "schema")).toBe(true);
  });
});
