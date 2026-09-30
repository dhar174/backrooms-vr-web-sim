import type { BenchmarkPlayerConfig, DeepReadonly } from "./spikeTypes.ts";

export const BENCHMARK_METADATA = Object.freeze({
  benchmarkId: "level0-runtime-comparison",
  benchmarkVersion: "1.0.0",
  seed: "bacvr-engine-spike-v1",
});
export const PLAYER_BENCHMARK_CONFIG: DeepReadonly<BenchmarkPlayerConfig> = Object.freeze({
  heightMeters: 1.65,
  collisionRadiusMeters: 0.30,
  movementSpeedMps: 2.1,
  normalizeDiagonalMovement: true,
  mouseSensitivityRadiansPerPixel: 0.002,
  mouseSensitivityConfigurable: true,
  desktopVerticalFovDegrees: 70,
  interactKey: "KeyE",
  pauseKey: "Escape",
  snapTurnDegrees: 45,
  smoothLocomotionSpeedMps: 1.5,
  smoothLocomotionSpeedConfigurable: true,
  interactionRangeMeters: 1.5,
  interactionRequiresLineOfSight: true,
});
export const COMPARISON_PROTOCOL = Object.freeze({
  desktopViewportWidth: 1280,
  desktopViewportHeight: 720,
  devicePixelRatio: 1,
  performanceRuns: 3,
  warmupSeconds: 20,
  sampleSeconds: 60,
  resetCycles: 10,
});
