/** Comparison-only contracts. These are not the production simulation architecture. */
export type DeepReadonly<T> = T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T;

export type LogicalPosition = { x: number; y: number; z: number };
export type BenchmarkBounds = { min: LogicalPosition; max: LogicalPosition };
export type BenchmarkNode = {
  id: string;
  kind: "spawn" | "room" | "corridor" | "branch";
  bounds: BenchmarkBounds;
  connections: readonly string[];
};
export type BenchmarkConnection = {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  bidirectional: true;
  opening: {
    center: LogicalPosition;
    normalAxis: "x" | "z";
    widthMeters: number;
    heightMeters: number;
  };
};
export type BenchmarkPlayerConfig = {
  heightMeters: number;
  collisionRadiusMeters: number;
  movementSpeedMps: number;
  normalizeDiagonalMovement: true;
  mouseSensitivityRadiansPerPixel: number;
  mouseSensitivityConfigurable: true;
  desktopVerticalFovDegrees: number;
  interactKey: "KeyE";
  pauseKey: "Escape";
  snapTurnDegrees: number;
  smoothLocomotionSpeedMps: number;
  smoothLocomotionSpeedConfigurable: true;
  interactionRangeMeters: number;
  interactionRequiresLineOfSight: true;
};
export type BenchmarkLocation = { nodeId: string; position: LogicalPosition };
export type SurfaceIntent = {
  role: "wall" | "floor" | "ceiling" | "fixture";
  paletteSrgb: string;
  character: string;
  roughnessHint: number;
  emissiveHint: number;
};
export type BenchmarkFixture = BenchmarkLocation & { id: string };
export type BenchmarkVisualIntent = {
  surfaces: readonly SurfaceIntent[];
  fixtures: readonly BenchmarkFixture[];
  localLightCountTarget: number;
  geometryModuleCountTarget: number;
  wallThicknessMeters: number;
  wallThicknessPlacement: "outside-clear-bounds";
  randomizedVariation: false;
  shadowsRequired: false;
  postProcessingRequired: false;
};
export type NoteState = "unread" | "read";
export type AnomalyState = "idle" | "active" | "completed";
export type RunState = "active" | "paused" | "completed";
export type BenchmarkInteractable = BenchmarkLocation & {
  id: string;
  interactable: true;
};
export type BenchmarkNote = BenchmarkInteractable & {
  content: string;
  canonStatus: "original";
  facing: LogicalPosition;
  initialState: NoteState;
  onInteract: { from: "unread"; to: "read"; effect: "display-note"; reread: "idempotent" };
};
export type BenchmarkAnomaly = BenchmarkLocation & {
  id: string;
  trigger: { condition: "first-zone-entry-while-active"; horizontalRadiusMeters: number; oncePerRun: true };
  initialState: AnomalyState;
  transitions: readonly ["idle", "active", "completed"];
  durationMs: number;
  affectedFixtureIds: readonly string[];
  brightnessTimeline: readonly { atMs: number; relativeBrightness: number }[];
  interpolation: "hold-until-next-sample";
  finalRelativeBrightness: number;
};
export type BenchmarkAudioEvent = {
  id: string;
  character: string;
  loop: boolean;
  gainIntent: number;
  trigger: "valid-user-gesture-while-active" | "first-branch-entry-while-active";
  requiresUserGesture: true;
  location?: BenchmarkLocation;
  maxDurationMs?: number;
  oncePerRun: boolean;
};
export type BenchmarkExit = BenchmarkInteractable & {
  activation: "interact-in-range-with-line-of-sight-while-active";
  requiresNoteRead: false;
  transition: { from: "active"; to: "completed" };
  completionMessage: string;
  loadsSecondLevel: false;
};
export type BenchmarkScenario = {
  benchmarkId: string;
  benchmarkVersion: string;
  seed: string;
  canonStatus: "experimental";
  coordinateSystem: { units: "meters"; up: "+Y"; east: "+X"; north: "+Z"; bounds: "clear-interior" };
  graph: {
    nodes: Readonly<Record<string, BenchmarkNode>>;
    connections: Readonly<Record<string, BenchmarkConnection>>;
  };
  spawn: BenchmarkLocation & { forward: LogicalPosition };
  player: BenchmarkPlayerConfig;
  visualIntent: BenchmarkVisualIntent;
  note: BenchmarkNote;
  anomaly: BenchmarkAnomaly;
  audio: { ambient: BenchmarkAudioEvent; positional: BenchmarkAudioEvent };
  exit: BenchmarkExit;
  lifecycle: {
    initialRunState: "active";
    pause: { runState: "paused"; freezesLogicalTime: true; audio: "suspend" };
    resume: { runState: "active"; audio: "resume-without-retrigger" };
    completion: { movement: "stop"; interactionPrompts: "clear"; audio: "stop" };
    teardown: { audio: "stop" };
    reset: { scenario: "same-fixture"; spawn: "original"; note: "unread"; anomaly: "idle"; positionalAudio: "unplayed"; lighting: "normal"; runState: "active" };
  };
};
export type BenchmarkValidationIssue = { code: string; message: string; id?: string };
export type MetricCategory = "setup" | "runtime-ownership" | "desktop" | "scene-construction" | "webxr" | "audio" | "debugging" | "performance" | "maintainability";
export type ComparisonMetric = {
  id: string;
  category: MetricCategory;
  description: string;
  unit: "observation" | "minutes" | "packages" | "source-lines" | "fps" | "milliseconds" | "count";
  evidenceRequired: true;
};
export type ComparisonObservation = {
  metricId: string;
  value: number | string | null;
  verification: "measured" | "desktop-verified" | "real-headset-verified" | "emulator-verified" | "implemented-unverified" | "blocked" | "not-measured";
  evidence: string;
};
