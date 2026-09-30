# Frozen engine comparison baseline — BACVR-27

This is a controlled runtime integration fixture for BACVR-10 (Babylon.js), BACVR-11 (raw Three.js), and BACVR-17 (Meta IWSDK). It is not a procedural generator or the final game architecture. BACVR-12 compares the three findings reports and owns the runtime decision.

- Benchmark: `level0-runtime-comparison`, version `1.0.0`.
- Seed label: `bacvr-engine-spike-v1` (metadata only; no RNG).
- Canon status: experimental comparison fixture; note text is original project writing.
- Authoritative baseline: the full default-branch **merge commit SHA** published in the BACVR-27 completion comment and repeated on all three candidate issues. The starting documentation commit and PR head SHA are not that baseline.
- Mutable gameplay state belongs to the candidate runtime. Never mutate the deeply frozen exported descriptor.

## Shared files and consumption

| File | Purpose |
|---|---|
| [spikeTypes.ts](spikeTypes.ts) | Small JSON-compatible logical contracts and observation types |
| [spikeConfig.ts](spikeConfig.ts) | Benchmark metadata, player defaults, measurement protocol |
| [level0SpikeScenario.ts](level0SpikeScenario.ts) | Deeply frozen topology, content, visual placement, event contracts |
| [validateBenchmarkScenario.ts](validateBenchmarkScenario.ts) | v1 fixture schema, placements, portal geometry, reachability, behavior validation |
| [comparisonMetrics.ts](comparisonMetrics.ts) | Common metric IDs, units, evidence requirements; no weights |
| [reportTemplate.md](reportTemplate.md) | Blank findings template with all 26 headings |

Candidates import `LEVEL0_SPIKE_SCENARIO` from `../../shared/level0SpikeScenario.ts` when importing from a lane's `src/` directory, and config/validator from the same shared directory. Keep `.ts` extensions with compatible TypeScript configuration. The graph uses records keyed by stable IDs, neighbor node IDs, and explicit bidirectional connections. This follows DOC 07/BACVR-19's graph-first boundary without committing to the production `LayoutGraph` API. Rendering adapters project the data into runtime objects; input, collision, audio playback, XR, and effect scheduling remain candidate responsibilities.

The validator accepts unknown input, checks the concrete v1 fixture's required JSON shape, then validates graph and behavior constraints. It is not a general-purpose level-data loader. The reviewed golden JSON under `tests/spikes/shared/fixtures/` additionally pins exact values and serialization.

## Coordinates, spaces, and openings

Coordinates use meters: +Y up, +X east, +Z north. All spaces have floor Y=0 and ceiling Y=2.7. Bounds are clear interiors; wall thickness (0.10 m) extends outward. Convert handedness and forward conventions inside the runtime adapter.

| Node | X range | Z range | Interior dimensions |
|---|---|---|---|
| spawn-room | -3 to 3 | -3 to 3 | 6 × 6 × 2.7 m |
| main-corridor | -1.1 to 1.1 | 3 to 11 | 2.2 × 8 × 2.7 m |
| secondary-room | -2.5 to 2.5 | 11 to 15 | 5 × 4 × 2.7 m |
| dead-end-branch | 2.5 to 6.5 | 11.9 to 14.1 | 4 m along X × 2.2 m across Z × 2.7 m |

All openings have 2.2 m clear width and 2.3 m height measured from the floor:

| Connection | Opening center (X,Y,Z) | Normal axis |
|---|---|---|
| spawn-to-corridor | (0,0,3) | Z |
| corridor-to-secondary | (0,0,11) | Z |
| secondary-to-branch | (2.5,0,13) | X |

The route turns east inside the secondary room. The branch ends at X=6.5; the threshold is an interactable marker on that terminal wall, not a doorway into another level.

## Player defaults

Spawn foot position is (0,0,0), facing logical +Z. The 1.65 m height is the eye-height target above the floor, not an engine-specific capsule definition. Collision radius is 0.30 m.

- Desktop movement: 2.1 m/s with normalized diagonal movement; no sprint, jumping, or crouching is required.
- Mouse look: default 0.002 radians per movement pixel, configurable.
- Desktop vertical FOV: 70 degrees.
- Interact: `KeyE`; unlock/pause: `Escape`.
- Interaction: eye-to-target distance at most 1.5 m and clear line of sight. XR selection must produce the same logical interaction conditions.
- Snap turn: 45 degrees; conservative smooth locomotion target: 1.5 m/s, configurable for comfort.
- No forced camera motion, head bob, or forced falls. Report comfort adjustments or a teleport alternative as deviations/coverage.

Settings may be adjustable, but primary comparison measurements use these defaults. Actual tracked headset height is hardware behavior, not proof of the desktop eye-height implementation; report the rig/floor mapping and any difference.

## Visual intent

Surfaces are abstract sRGB tokens, not materials or shaders: wall #C9C18A (yellow/beige wallpaper), floor #77704F (worn carpet), ceiling #C9C6B6 (office drop ceiling), and fixture #EEE9CF (fluorescent panel). Roughness/emission values are hints interpreted by each material system.

Six fixed ceiling fixtures: (-1.5,2.6,0), (1.5,2.6,0), (0,2.6,5), (0,2.6,9), (0,2.6,13), (4.5,2.6,13). Target six local illumination sources and approximately 40 simple geometry modules (floors, ceilings, wall/opening pieces, fixtures, note, threshold). Module count is a complexity target, not a prescribed mesh count. Report actual objects, lights, triangles, draw calls, batching, instancing, extra fill lighting, and material interpretation. No randomized variation, shadows, post-processing, dense props, or production textures are required.

## Note, anomaly, audio, exit, and lifecycle

- `lore-note-01`: secondary room, (-2.45,1.35,13), facing +X. Text: **The lights point the wrong way.** Original project text already present in DOC 06 §15. Starts unread; interaction displays it and changes unread → read. Re-reading is idempotent.
- `flicker-zone-01`: secondary room floor, centered (0,0,12), horizontal radius 0.75 m. The runtime tests the logical foot position in X/Z. First entry while active triggers idle → active → completed once per run.
- Flicker affects only `fixture-secondary-01`. Hold each relative brightness value until the next sample: 0 ms=1; 1000=0.65; 2000=1; 3000=0.65; 4000=1; 5000=0.65; 6000=1. Duration six seconds, normal final lighting, no blackout or rapid strobe.
- `ambient-hum-01`: looping low fluorescent/electrical hum, gain-intent 0.15. Start only after a valid user gesture while the run is active.
- `spatial-sound-01`: (6.2,1.2,13) in the branch, muffled distant knock, gain-intent 0.25, once on first branch entry while active, maximum two seconds. Requires prior audio activation by a user gesture; do not queue late autoplay. The standard route starts with a user gesture.
- Audio gain is an intent hint, not guaranteed perceptual loudness. No audio assets or engine audio objects are committed. Candidates document placeholder provenance, synthesis/source method, and acoustic differences; identical assets require a coordinated shared version change.
- `exit-threshold-01`: branch, (6.45,1.2,13). E/equivalent selection in range with clear line of sight while active changes active → completed, independently of note reading. Completion text from DOC 06 §16: **You slipped out of this place. But not out of the Backrooms.** No second level loads.
- Pause freezes logical event time and suspends playback. Resume does not retrigger events. Completion stops movement, clears prompts, and stops audio; teardown stops audio. Reset uses the same fixture and restores original spawn, unread note, idle anomaly, unplayed positional sound, normal lighting, and active run.

These are declarative contracts. Tests validate the data and constraints; runtime effects and subjective comfort/audio quality are tested by the later candidates.

## Common measurement and evidence protocol

Use `COMPARISON_PROTOCOL` and populate every `COMPARISON_METRICS` ID in a copy of the report template.

1. Record baseline SHA, benchmark version, implementation SHA, candidate/tool versions, date, OS, CPU/GPU/RAM, browser, renderer settings, and exact headset/emulator coverage.
2. Desktop: 1280 × 720 viewport, DPR 1, default player settings, no optional visual extras. Use the same hardware/browser across lanes where available; disclose differences.
3. Three fresh runs: warm up 20 seconds, then measure 60 seconds stationary at spawn facing +Z. Keep note unread, anomaly idle, and positional sound unplayed. Report per-trial FPS median/minimum/variability and frame-time median/p95/maximum, plus available native scene statistics and the collection method.
4. Functional route: user gesture/start → spawn → corridor → trigger at (0,0,12) → allow the six-second anomaly to finish → approach/read note → turn east into branch/play sound → approach/interact with exit. Also test an exit run without reading the note.
5. Exercise walls, corners, every opening, backtracking, floor/height, interaction range/occlusion, pause/resume during the anomaly and audio, and cleanup.
6. Run ten reset/rebuild cycles; record before/after resource counts and memory observations, disposal/listener/audio/physics/XR cleanup, and measurement limitations.
7. Label XR evidence separately: real-headset-verified, emulator-verified, implemented-unverified, or blocked. Never infer physical comfort/headset performance from emulation.

Unavailable metrics are null/not-measured, not zero. Report FPS variability with the chosen statistic and raw evidence. Counters with different engine meanings must include their definition. Do not compare unlike hardware as an isolated engine-performance result.

Count custom nonblank, non-comment source lines by runtime, lifecycle, input, collision, XR, interaction, audio, cleanup, and scene mapping. Include source paths and built-in/helper versus custom ownership. Exclude generated/vendor/assets/shared code. Report total unique custom lines without double-counting overlaps. Distinguish direct/transitive and runtime/development package counts from `npm ls` evidence; exclude root verification tooling from candidate totals and list it separately. BACVR-12 owns recommendations/decision weighting; this baseline provides no aggregate score.

## Run shared verification

Use Node 24.13.0 and npm 11.12.1 (pinned in the root manifest and CI). PowerShell, from the repository/worktree root:

```powershell
node --version
npm --version
npm ci
if ($LASTEXITCODE -ne 0) { throw 'npm ci failed' }
npm run check
if ($LASTEXITCODE -ne 0) { throw 'Shared verification failed' }
```

Individual commands: `npm run typecheck`, `npm run lint`, `npm test`. Shared typecheck excludes DOM/Node/XR ambient libraries. Tests check JSON shape, graph/portal geometry, reachability, IDs/placements, contracts, deep freezing, fresh-process serialization, metrics/template coverage, and AST import boundaries. CI runs the same checks on Ubuntu and Windows.

## Exact-SHA worktrees and independent packages

The root package owns shared verification only. It is not an npm workspace. Future packages:

```text
spikes/shared/   # frozen plain TypeScript benchmark
spikes/babylon/  # lane-owned manifest, lockfile, config, dependencies, src, build
spikes/three/   # lane-owned manifest, lockfile, config, dependencies, src, build
spikes/iwsdk/   # lane-owned manifest, lockfile, config, dependencies, src, build
```

Copy the same published full SHA into the following PowerShell instructions. The candidate branches/worktrees are created by their owning issues, not BACVR-27:

```powershell
$baselineSha = '<full merge SHA published on BACVR-27/BACVR-10/BACVR-11/BACVR-17>'
if ($baselineSha -notmatch '^[0-9a-f]{40}$') { throw 'Use the published full SHA' }
git fetch origin
if ($LASTEXITCODE -ne 0) { throw 'Fetch failed' }
git cat-file -e "$baselineSha^{commit}"
if ($LASTEXITCODE -ne 0) { throw 'Baseline commit is unavailable' }
git merge-base --is-ancestor $baselineSha origin/main
if ($LASTEXITCODE -ne 0) { throw 'Baseline must be a merged default-branch commit' }

# Execute the line for the lane being started; every lane uses the SAME SHA.
git worktree add -b spike/bacvr-10-babylon ../backrooms-babylon-spike $baselineSha
if ($LASTEXITCODE -ne 0) { throw 'Babylon worktree creation failed' }
git worktree add -b spike/bacvr-11-three ../backrooms-three-spike $baselineSha
if ($LASTEXITCODE -ne 0) { throw 'Three worktree creation failed' }
git worktree add -b spike/bacvr-17-iwsdk ../backrooms-iwsdk-spike $baselineSha
if ($LASTEXITCODE -ne 0) { throw 'IWSDK worktree creation failed' }
```

Each lane installs dependencies from its own directory (`npm --prefix spikes/babylon install`, or the respective lane). Its app scripts run with `npm --prefix spikes/<lane> run dev/build`. Keep all candidate dependencies and configuration in that lane; never amend the root lockfile to add an engine. Candidate tests/configuration must not broaden the root shared checks. Relative imports work without a root workspace/link or cross-lane package dependency; configure the lane's bundler to consume the shared TypeScript outside its package directory.

Copy the template into a lane-owned findings report (for example `docs/spikes/babylon-mvp-slice-report.md`) and fix its shared README link for the new location. Lane reports/implementation merge independently. Preserve scaffold → validation dependencies: BACVR-20 → BACVR-21, BACVR-22 → BACVR-23, BACVR-25 → BACVR-26.

## Freeze, versioning, and deviations

Freeze all of `spikes/shared/`, `tests/spikes/shared/`, the root verification manifest/lockfile/configuration, and shared CI at the published SHA. Before reporting, inspect `git diff <baselineSha> -- spikes/shared tests/spikes/shared` and record any deviation. Do not silently cherry-pick baseline changes or rebase one lane onto a different benchmark.

Changing dimensions, coordinates, IDs, player defaults, text, timing, trigger/state rules, audio scenario, visual budgets, metrics, or comparison conditions requires a separate shared PR, a new benchmark version, updated validator/golden data, and a coordinated replacement merge SHA published to all three lanes. Root-tooling changes also require coordination. Keep old baseline commits reproducible. All three comparable reports must consume the same version and SHA.

Publish the merge SHA in Linear/PR completion evidence after merging; do not make another commit merely to insert the commit's own SHA into itself. BACVR-27 is complete only after the merged SHA is verified and distributed. Hardware/rendering/audio/comfort claims and final engine selection remain downstream work.
