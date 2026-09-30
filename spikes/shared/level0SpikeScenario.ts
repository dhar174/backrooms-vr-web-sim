import { BENCHMARK_METADATA, PLAYER_BENCHMARK_CONFIG } from "./spikeConfig.ts";
import type { BenchmarkScenario, DeepReadonly } from "./spikeTypes.ts";

/** Only JSON-shaped data is passed here. Freeze all nested arrays/records too. */
function deepFreeze<T>(value: T): DeepReadonly<T> {
  if (value !== null && typeof value === "object") {
    for (const child of Object.values(value)) deepFreeze(child);
    Object.freeze(value);
  }
  return value as DeepReadonly<T>;
}

export const LEVEL0_SPIKE_SCENARIO: DeepReadonly<BenchmarkScenario> = deepFreeze({
  ...BENCHMARK_METADATA,
  canonStatus: "experimental",
  coordinateSystem: { units: "meters", up: "+Y", east: "+X", north: "+Z", bounds: "clear-interior" },
  graph: {
    nodes: {
      "spawn-room": { id: "spawn-room", kind: "spawn", bounds: { min: { x: -3, y: 0, z: -3 }, max: { x: 3, y: 2.7, z: 3 } }, connections: ["main-corridor"] },
      "main-corridor": { id: "main-corridor", kind: "corridor", bounds: { min: { x: -1.1, y: 0, z: 3 }, max: { x: 1.1, y: 2.7, z: 11 } }, connections: ["spawn-room", "secondary-room"] },
      "secondary-room": { id: "secondary-room", kind: "room", bounds: { min: { x: -2.5, y: 0, z: 11 }, max: { x: 2.5, y: 2.7, z: 15 } }, connections: ["main-corridor", "dead-end-branch"] },
      "dead-end-branch": { id: "dead-end-branch", kind: "branch", bounds: { min: { x: 2.5, y: 0, z: 11.9 }, max: { x: 6.5, y: 2.7, z: 14.1 } }, connections: ["secondary-room"] },
    },
    connections: {
      "spawn-to-corridor": { id: "spawn-to-corridor", fromNodeId: "spawn-room", toNodeId: "main-corridor", bidirectional: true, opening: { center: { x: 0, y: 0, z: 3 }, normalAxis: "z", widthMeters: 2.2, heightMeters: 2.3 } },
      "corridor-to-secondary": { id: "corridor-to-secondary", fromNodeId: "main-corridor", toNodeId: "secondary-room", bidirectional: true, opening: { center: { x: 0, y: 0, z: 11 }, normalAxis: "z", widthMeters: 2.2, heightMeters: 2.3 } },
      "secondary-to-branch": { id: "secondary-to-branch", fromNodeId: "secondary-room", toNodeId: "dead-end-branch", bidirectional: true, opening: { center: { x: 2.5, y: 0, z: 13 }, normalAxis: "x", widthMeters: 2.2, heightMeters: 2.3 } },
    },
  },
  spawn: { nodeId: "spawn-room", position: { x: 0, y: 0, z: 0 }, forward: { x: 0, y: 0, z: 1 } },
  player: PLAYER_BENCHMARK_CONFIG,
  visualIntent: {
    surfaces: [
      { role: "wall", paletteSrgb: "#C9C18A", character: "sickly-yellow-beige-wallpaper", roughnessHint: 0.85, emissiveHint: 0 },
      { role: "floor", paletteSrgb: "#77704F", character: "worn-carpet", roughnessHint: 1, emissiveHint: 0 },
      { role: "ceiling", paletteSrgb: "#C9C6B6", character: "office-drop-ceiling", roughnessHint: 0.9, emissiveHint: 0 },
      { role: "fixture", paletteSrgb: "#EEE9CF", character: "fluorescent-panel", roughnessHint: 0.5, emissiveHint: 1 },
    ],
    fixtures: [
      { id: "fixture-spawn-01", nodeId: "spawn-room", position: { x: -1.5, y: 2.6, z: 0 } },
      { id: "fixture-spawn-02", nodeId: "spawn-room", position: { x: 1.5, y: 2.6, z: 0 } },
      { id: "fixture-corridor-01", nodeId: "main-corridor", position: { x: 0, y: 2.6, z: 5 } },
      { id: "fixture-corridor-02", nodeId: "main-corridor", position: { x: 0, y: 2.6, z: 9 } },
      { id: "fixture-secondary-01", nodeId: "secondary-room", position: { x: 0, y: 2.6, z: 13 } },
      { id: "fixture-branch-01", nodeId: "dead-end-branch", position: { x: 4.5, y: 2.6, z: 13 } },
    ],
    localLightCountTarget: 6,
    geometryModuleCountTarget: 40,
    wallThicknessMeters: 0.10,
    wallThicknessPlacement: "outside-clear-bounds",
    randomizedVariation: false,
    shadowsRequired: false,
    postProcessingRequired: false,
  },
  note: {
    id: "lore-note-01", nodeId: "secondary-room", position: { x: -2.45, y: 1.35, z: 13 },
    facing: { x: 1, y: 0, z: 0 }, interactable: true, canonStatus: "original",
    content: "The lights point the wrong way.", initialState: "unread",
    onInteract: { from: "unread", to: "read", effect: "display-note", reread: "idempotent" },
  },
  anomaly: {
    id: "flicker-zone-01", nodeId: "secondary-room", position: { x: 0, y: 0, z: 12 },
    trigger: { condition: "first-zone-entry-while-active", horizontalRadiusMeters: 0.75, oncePerRun: true },
    initialState: "idle", transitions: ["idle", "active", "completed"], durationMs: 6000,
    affectedFixtureIds: ["fixture-secondary-01"],
    brightnessTimeline: [
      { atMs: 0, relativeBrightness: 1 }, { atMs: 1000, relativeBrightness: 0.65 },
      { atMs: 2000, relativeBrightness: 1 }, { atMs: 3000, relativeBrightness: 0.65 },
      { atMs: 4000, relativeBrightness: 1 }, { atMs: 5000, relativeBrightness: 0.65 },
      { atMs: 6000, relativeBrightness: 1 },
    ],
    interpolation: "hold-until-next-sample", finalRelativeBrightness: 1,
  },
  audio: {
    ambient: { id: "ambient-hum-01", character: "low-fluorescent-electrical-hum", loop: true, gainIntent: 0.15, trigger: "valid-user-gesture-while-active", requiresUserGesture: true, oncePerRun: false },
    positional: { id: "spatial-sound-01", character: "muffled-distant-knock", loop: false, gainIntent: 0.25, trigger: "first-branch-entry-while-active", requiresUserGesture: true, oncePerRun: true, maxDurationMs: 2000, location: { nodeId: "dead-end-branch", position: { x: 6.2, y: 1.2, z: 13 } } },
  },
  exit: {
    id: "exit-threshold-01", nodeId: "dead-end-branch", position: { x: 6.45, y: 1.2, z: 13 }, interactable: true,
    activation: "interact-in-range-with-line-of-sight-while-active", requiresNoteRead: false,
    transition: { from: "active", to: "completed" },
    completionMessage: "You slipped out of this place. But not out of the Backrooms.", loadsSecondLevel: false,
  },
  lifecycle: {
    initialRunState: "active",
    pause: { runState: "paused", freezesLogicalTime: true, audio: "suspend" },
    resume: { runState: "active", audio: "resume-without-retrigger" },
    completion: { movement: "stop", interactionPrompts: "clear", audio: "stop" },
    teardown: { audio: "stop" },
    reset: { scenario: "same-fixture", spawn: "original", note: "unread", anomaly: "idle", positionalAudio: "unplayed", lighting: "normal", runState: "active" },
  },
} satisfies BenchmarkScenario);
