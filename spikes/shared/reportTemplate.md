# Runtime candidate findings

Copy into the candidate's report, keeping all headings. This is a blank template, not candidate evidence. Populate every metric from `comparisonMetrics.ts`; use null/not-measured for unavailable data. Common protocol and definitions: [shared README](README.md).

## 1. Executive summary

<!-- Summarize findings only after testing; link supporting evidence. -->

## 2. Candidate/version tested

- Candidate:
- Version(s):
- Tested implementation commit SHA:
- PR:

## 3. Benchmark ID/version

- Benchmark ID:
- Benchmark version:
- Seed:

## 4. Baseline commit SHA

- Full merged BACVR-27 baseline commit SHA:
- Source completion comment/PR:
- Shared-file diff against baseline:

## 5. Environment

- OS/CPU/GPU/RAM:
- Node/npm/tool versions:
- Browser/version:
- Viewport/DPR/FOV/render settings:
- Headset/browser/runtime/refresh rate:
- Emulator/tool/version:
- Test dates:
- Environment differences from other lanes:

## 6. Setup experience

<!-- setup.*: commands, failed attempts, time, configuration, and deployment effort. -->

## 7. Runtime architecture

<!-- Runtime ownership, logical-to-runtime boundary, ECS if applicable, built-in versus custom responsibilities. -->

## 8. Desktop controls

<!-- desktop.pointer-lock and desktop.movement: acquisition, focus loss, pause/resume, speeds, diagonal normalization. -->

## 9. Collision

<!-- desktop.collision: walls, corners, all openings, backtracking, floor/height, tunneling, decorations. -->

## 10. Scene construction

<!-- scene-construction.*: mapping code, modularity, coupling, actual modules/fixtures/material interpretations. -->

## 11. WebXR

<!-- webxr.*: report every capability separately as real-headset-verified, emulator-verified, implemented-unverified, or blocked. Identify exact evidence; unsupported is not verified support. -->

## 12. Locomotion and comfort

<!-- 45-degree snap turn and conservative 1.5 m/s smooth movement target; any teleport alternative, reduced comfort settings, narrow-space behavior, and untested comfort. -->

## 13. Interaction

<!-- Note and exit selection on desktop/XR, eye-distance/line-of-sight checks, logical unread/read state, readability, re-reading. -->

## 14. Audio

<!-- audio.*: gesture activation, ambient loop, branch one-shot, spatial origin, pause/resume, cleanup; placeholder provenance and acoustic differences. -->

## 15. Anomaly and exit

<!-- desktop.anomaly-exit: entry trigger, six-second timeline, normal final lighting, independent exit, completion feedback, no second level. -->

## 16. Debugging/tooling

<!-- debugging.*: tools actually exercised, screenshots/logs/state inspection, agent-assisted inspection; distinguish configured and advertised from tested. -->

## 17. Performance

<!-- performance.*: same settings/hardware where possible; three 20-second warmups + 60-second stationary spawn samples. Record unavailable values as not-measured, never zero. -->

| Trial | FPS median/min/variability | Frame ms median/p95/max | Draw calls | Triangles | Objects | Lights | Method/evidence |
|---|---|---|---|---|---|---|---|
| 1 | | | | | | | |
| 2 | | | | | | | |
| 3 | | | | | | | |

## 18. Resource lifecycle

<!-- Ten resets: before/after resources/memory, cleanup method, remaining growth, audio/listener/physics/XR disposal. -->

## 19. Custom infrastructure cost

<!-- runtime-ownership.* and scene-construction.mapping-code: source paths and nonblank, non-comment source lines by responsibility; exclude vendor/generated/assets/shared code and avoid double-counting the total. Include manual counting limitations. -->

## 20. Dependencies introduced

<!-- setup.*-packages and candidate-dependencies: distinguish direct/transitive and runtime/dev packages, official add-ons, helpers, licenses, and exact versions. Exclude root shared-tooling packages from candidate totals; list them separately. -->

## 21. Architecture fit

<!-- maintainability.architecture-fit: canonical data stays shared; candidate owns rendering, input, collision, audio, interaction effects, and XR. -->

## 22. Lock-in/portability concerns

<!-- maintainability.*: framework/platform assumptions, ecosystem evidence, upgrade risk, browser/headset portability, and licensing. -->

## 23. Known untested areas

<!-- List untested behaviors and environments explicitly, with blockers and next evidence needed. -->

## 24. Benchmark deviations

<!-- List every changed parameter, content/audio/visual variation, unsupported behavior, shared-data change, and environment mismatch; explain comparison impact. No silent lane-only benchmark edits. -->

## 25. Recommendation

<!-- Evidence-based select / keep as fallback / reject / defer. This template defines no weighting or overall score. -->

## 26. Evidence for BACVR-12

<!-- Provide evidence index and metric ledger covering EVERY COMPARISON_METRICS ID, with value (or null), verification category, and source. Link PR, implementation SHA, baseline SHA, logs, measurements, captures, reports, and exact hardware/emulator coverage. -->

| Metric ID | Value or unavailable | Verification category | Evidence |
|---|---|---|---|
| <!-- repeat for every metric --> | | | |
