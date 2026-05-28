# DOC 07 — Procedural Generation Design Spec: Backrooms VR Web Simulation

## Document status

**Document type:** Procedural Generation Design Spec<br>**Project:** Backrooms VR Web Simulation<br>**Phase:** Systems Design / Pre-Implementation<br>**Follows:** dhar174/backrooms-vr-web-sim#4 — DOC 06: Game Design Document (GDD)<br>**Precedes:** DOC 08 — Technical Feasibility Notes<br>**Purpose:** Define how procedural generation should work for the MVP and future versions, including level definitions, seeds, layout representation, room/corridor generation, landmarks, anomalies, exits, lore constraints, validation, and local spatial continuity rules.

---

## 1\. Executive summary

Backrooms VR Web Simulation should use procedural generation to make the Backrooms feel infinite, replayable, and unstable while still remaining coherent, fair, and lore-aligned.

The procedural generation system should not produce arbitrary random mazes. It should generate playable environments from structured level definitions, lore constraints, visual/audio/layout profiles, anomaly rules, and exit rules.

For MVP-1, the generator should focus on one Level 0-style environment:

> A seed-generated, lore-constrained Level 0-style space with rooms, corridors, repetition, rare landmarks, subtle anomalies, clues, and at least one exit condition.

A critical design constraint is **local spatial continuity**:

> The Backrooms may change, but not cheaply. The player must be able to return to rooms and hallways they were just in. Structural changes should only become possible outside the player’s recent local stability radius, roughly 5–6 rooms or hallway segments away.

This rule preserves fairness, player orientation, and short-term spatial memory while still allowing the Backrooms to feel unstable at larger distances.

---

## 2\. Procedural generation goals

The procedural system should support the following goals:

 1. Generate replayable Level 0-style layouts from seeds.
 2. Preserve recognizable Level 0 identity across generated runs.
 3. Create spaces that feel coherent rather than random.
 4. Support rare landmarks and navigational memory.
 5. Support disorientation without unfairness.
 6. Place anomalies, clues, and exits according to rules.
 7. Allow future levels to be added through data-driven definitions.
 8. Keep recently visited local space stable.
 9. Allow distant previously visited areas to become unreliable after sufficient travel distance.
10. Eventually support lore validation and debug tooling.

The core generator design principle is:

> Procedural generation should produce a place that feels discovered, not assembled.

---

## 3\. Procedural generation anti-goals

The generator should avoid:

* Arbitrary random mazes.
* Obvious square-grid monotony.
* Layouts that feel like algorithmic noise.
* Instant changes behind the player after they turn around.
* Rooms changing immediately after the player exits them.
* Exit placement too close to spawn.
* Exit placement so obscure it feels unfair.
* Landmarks so frequent that navigation becomes easy.
* Landmarks so rare that the layout becomes unreadable.
* Structural changes within line of sight.
* Structural changes within immediate backtracking distance.
* Lore-breaking visuals, audio, entities, items, or exits.
* Unbounded generation that hurts browser/VR performance.

The generator should create uncertainty, not confusion caused by broken design.

---

## 4\. MVP generation scope

MVP-1 should support a single procedural level profile:

> Level 0-style liminal office maze.

### Included in MVP generation

* Seeded layout generation.
* Spawn area.
* Rooms and corridors.
* Turns, dead ends, and loops.
* Rare landmarks.
* Level 0 visual motif placement.
* Basic lighting placement.
* Basic ambience/audio zone metadata.
* Lore artifact/clue placement.
* 2–3 simple anomaly hooks.
* At least one exit condition.
* Local spatial continuity/stability buffer.
* Basic generation debug data.

### Excluded from MVP generation

* Multiple full levels.
* Infinite chunk streaming at production scale.
* Full lore linter implementation.
* Advanced entities.
* Complex inventory/resource placement.
* Multiplayer-safe generation.
* Runtime LLM-generated layout.
* Complex non-Euclidean geometry beyond controlled loops/illusions.

---

## 5\. Core generation pipeline

The intended MVP pipeline is:

```text
Receive run seed
        ↓
Select level definition
        ↓
Initialize seeded RNG
        ↓
Generate abstract layout graph
        ↓
Assign room/corridor types
        ↓
Place spawn
        ↓
Place candidate exit zones
        ↓
Place landmarks and clue paths
        ↓
Place anomaly trigger zones
        ↓
Apply visual/audio/lighting metadata
        ↓
Validate basic lore and layout constraints
        ↓
Instantiate renderable scene chunks
        ↓
Track player movement and local stability buffer
        ↓
Allow distant mutation/recontextualization outside stability radius
```

The generator should separate **abstract generation** from **rendering**.

This makes the system easier to test, debug, validate, and eventually port between rendering engines.

---

## 6\. Seed model

A seed is the deterministic input used to reproduce a run.

### Seed requirements

<!-- linear:table-colwidths:200,200 -->
| ID | Requirement |
| -- | -- |
| SEED-001 | The same seed and level definition should produce the same base layout. |
| SEED-002 | Different seeds should produce meaningfully different layouts. |
| SEED-003 | Seeded generation should be deterministic for debugging. |
| SEED-004 | Seed should be stored in run data. |
| SEED-005 | Seed may be visible in debug mode or completion screen. |
| SEED-006 | Seed sharing may be added later. |

### Recommended seed structure

A future seed object may include:

```ts
type RunSeed = {
  rawSeed: string;
  normalizedSeed: number | string;
  levelId: string;
  generatorVersion: string;
  rulesetVersion: string;
};
```

Including generator/ruleset versions matters because the same raw seed may produce a different layout after generation algorithms change.

---

## 7\. Level definition input

Generation should start from a structured level definition.

For MVP, the Level 0-style definition should include:

* Level ID.
* Core identity.
* Visual rules.
* Architecture/layout rules.
* Audio rules.
* Lighting rules.
* Safety profile.
* Anomaly rules.
* Lore artifact rules.
* Exit rules.
* Forbidden elements.
* Procedural constraints.

Example simplified input:

```ts
type LevelGenerationProfile = {
  levelId: string;
  layoutStyle: "maze" | "hub" | "network" | "hybrid";
  roomTypes: RoomTypeDefinition[];
  corridorTypes: CorridorTypeDefinition[];
  visualTheme: VisualThemeDefinition;
  audioProfile: AudioProfileDefinition;
  lightingProfile: LightingProfileDefinition;
  landmarkRules: LandmarkRules;
  anomalyRules: AnomalyPlacementRules;
  exitRules: ExitPlacementRules;
  constraints: ProceduralConstraint[];
};
```

The generator should never produce a level without first loading a level profile.

---

## 8\. Abstract layout representation

The MVP should represent the generated environment as a graph before rendering it.

### Layout graph concept

Rooms, corridors, turns, landmarks, and exits can be represented as connected nodes.

```ts
type LayoutNode = {
  id: string;
  nodeType: "spawn" | "room" | "corridor" | "turn" | "dead_end" | "landmark" | "exit" | "anomaly_zone";
  levelId: string;
  positionHint?: GridPosition | Vector3Like;
  connections: string[];
  tags: string[];
  stabilityState: StabilityState;
  generationMetadata: Record<string, unknown>;
};
```

Connections define navigable relationships.

```ts
type LayoutEdge = {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  edgeType: "doorway" | "open_connection" | "hallway" | "threshold" | "loop" | "blocked";
  distanceClass: "short" | "medium" | "long";
  tags: string[];
};
```

### Why graph-first generation?

A graph representation supports:

* Seeded deterministic generation.
* Room/corridor placement before rendering.
* Exit distance checks.
* Landmark spacing.
* Anomaly placement.
* Backtracking distance tracking.
* Local stability buffer.
* Distant mutation eligibility.
* Debug visualization.
* Future lore linting.

---

## 9\. Spatial structure model

The MVP does not need true infinite geometry. It needs to feel large, replayable, and unstable.

Recommended structure:

1. Generate a finite but sufficiently large layout graph.
2. Render nearby connected nodes/chunks.
3. Keep recent nodes stable.
4. Allow distant nodes to be recontextualized or swapped under controlled conditions.
5. Use loops and layout graph tricks to imply more space than is actually present.

### Layout scale target

Initial MVP target can be refined later, but a useful starting range might be:

* 40–100 layout nodes for a small prototype.
* 100–250 nodes for a stronger MVP run.
* Exit minimum distance from spawn: at least 8–12 connected spaces.
* Landmarks: rare, maybe 5–10% of nodes.
* Anomaly zones: occasional, maybe 5–15% of nodes.

These values are provisional and should be tuned through testing.

---

## 10\. Room and corridor types

MVP Level 0 generation should support a small set of modular room/corridor types.

### Room types

<!-- linear:table-colwidths:200,200,200 -->
| Type | Description | Purpose |
| -- | -- | -- |
| Small office-like room | Compact room with wallpaper/carpet/ceiling tiles. | Repetition and exploration. |
| Empty partitioned room | Larger space with partial wall divisions. | Visual variation. |
| Long rectangular room | Extended room that almost feels like a hallway. | Disorientation. |
| Landmark room | Rare room with unique stain, broken light, note, symbol, or unusual geometry. | Navigation memory and clue placement. |
| Exit candidate room | Room that may contain or later reveal an exit. | Escape loop support. |

### Corridor types

<!-- linear:table-colwidths:200,200,200 -->
| Type | Description | Purpose |
| -- | -- | -- |
| Short connector | Links nearby rooms. | Basic navigation. |
| Long repetitive hallway | Extended hallway with similar repeating modules. | Liminal dread. |
| Turning hallway | 90-degree or angled turn. | Navigation uncertainty. |
| Dead-end hallway | Ends in wall, note, stain, or clue. | Exploration tension. |
| Loop hallway | Connects back in subtle or surprising ways. | Spatial unreliability. |

---

## 11\. Layout generation algorithm direction

The exact algorithm will be selected later, but the MVP should likely use a hybrid approach rather than pure random grid generation.

### Candidate approach: graph-first modular generation

Recommended MVP approach:

1. Generate an abstract connectivity graph.
2. Assign node types.
3. Enforce spawn-to-exit distance.
4. Place landmarks sparsely.
5. Place clue chain nodes between spawn and exit.
6. Mark anomaly zones.
7. Convert nodes/edges into modular geometry.
8. Validate constraints.

### Why not pure maze generation?

Pure maze generation can be playable but often feels too algorithmic. Backrooms spaces should feel repetitive and maze-like, but not like a perfect puzzle maze.

### Why not full wave function collapse first?

Wave Function Collapse could be useful later for modular tile constraints, but it may be overkill for MVP and harder to debug in VR/browser context.

### Recommended initial algorithm

Use a **seeded graph-based generator with modular room/corridor instantiation**.

Future versions may hybridize with:

* Grid subdivision.
* Chunk streaming.
* Wave Function Collapse.
* Grammar-based generation.
* Constraint solving.
* Non-Euclidean portal-like connections.

---

## 12\. Local spatial continuity requirement

This is a core procedural design rule.

Although the Backrooms environment should be procedurally generated, replayable, and capable of changing over time, it must not feel like the world is arbitrarily rewriting itself the moment the player looks away.

The player should be able to trust the immediate local environment.

A hallway, room, corner, or landmark the player just passed through should remain stable if the player turns around, backtracks, or re-enters the area after traveling only a short distance.

The environment should **not** structurally change in cases like:

* The player turns down a hallway, walks a short distance, then turns back.
* The player looks away from a room and immediately looks back.
* The player exits a room, pauses, and re-enters it soon after.
* The player uses a nearby landmark to orient themselves.
* The player backtracks through the last few connected spaces.

The design principle is:

> The player can trust what they just saw, but they cannot fully trust what they left far behind.

---

## 13\. Local stability buffer

The procedural system should track a **local stability buffer**.

The local stability buffer is the set of rooms, corridors, landmarks, and nearby connections that are protected from structural mutation.

### Initial stability target

As an initial design target:

> Areas within the last several connected spaces should remain stable, while areas roughly **5–6 rooms/hallway segments or more behind the player** may become eligible for subtle mutation, replacement, looping, or recontextualization.

This means the player can reliably return to rooms and hallways they were just in, but may not always be able to trust areas from much earlier in their route.

### Possible data structure

```ts
type StabilityState = "locked_current" | "locked_recent" | "stable" | "eligible_for_mutation" | "mutated";

type LocalStabilityBuffer = {
  currentNodeId: string;
  recentNodeIds: string[];
  lockedRadiusEdges: number;
  mutationEligibilityDistance: number;
  lineOfSightLockedNodeIds: string[];
};
```

### Suggested MVP values

```ts
const LOCAL_LOCK_RADIUS_EDGES = 3;
const RECENT_HISTORY_LOCK_COUNT = 5;
const MUTATION_ELIGIBILITY_DISTANCE = 6;
```

These values mean:

* Current node is always locked.
* Adjacent/nearby nodes are locked.
* Last several visited nodes are locked.
* Nodes roughly 5–6 connections behind may become eligible for mutation.

Exact values should be tuned through playtesting.

---

## 14\. Mutation eligibility rules

A node or chunk may become eligible for structural mutation only if all required conditions are met.

### Required conditions

A node may be eligible for mutation if:

1. It is not the current node.
2. It is not adjacent to the current node.
3. It is not in the recent visited buffer.
4. It is not within immediate backtracking distance.
5. It is not in current line of sight.
6. It is at least 5–6 room/hallway segments behind the player or otherwise outside the stability radius.
7. It does not contain a currently required clue or unresolved critical objective unless the mutation preserves gameplay validity.
8. Mutation would not break the path to the exit unfairly.
9. Mutation would not violate level/lore constraints.

### Prohibited mutation cases

Structural mutation must not happen:

* Directly behind the player after a simple turn.
* In a room the player just left.
* In a room visible through an open doorway.
* In a nearby landmark the player is using for orientation.
* In the current path if it would trap the player.
* In the active exit room after the player has discovered it, unless it is part of the designed exit event.

---

## 15\. Mutation categories

Not all procedural changes are equal. The system should distinguish **atmospheric changes** from **structural changes**.

### Local/immediate atmospheric changes

These may occur within or near the local stability buffer because they do not break spatial continuity:

* Flickering lights.
* Audio events.
* Brief ambience changes.
* Creaks, thuds, buzz changes.
* Slight prop movement or sound.
* Minor decal visibility changes if not navigationally important.

### Delayed/distant structural changes

These should only occur outside the local stability buffer:

* Door appearing or disappearing.
* Hallway connection changing.
* Room replaced by similar room.
* Loop connection forming.
* Landmark recurring in an impossible place.
* A previously explored distant route leading somewhere new.
* Exit candidate becoming available far from immediate player memory.

### Major mutation events

Major mutations should be rare and possibly tied to anomaly rules or level-specific behavior.

Examples:

* A long route behind the player becomes a loop.
* A distant dead end becomes a threshold.
* A previously ordinary room becomes an exit candidate.
* A landmark appears again impossibly far away.

Major mutation events should never feel like an accidental renderer/generator bug.

---

## 16\. Chunk locking and generation states

If the renderer uses chunks, each chunk should have a generation state.

```ts
type ChunkGenerationState =
  | "unseen"
  | "generated"
  | "visited"
  | "locked_recent"
  | "stable_cached"
  | "eligible_for_mutation"
  | "mutating"
  | "mutated"
  | "retired";
```

### Chunk lifecycle

```text
unseen
  ↓
generated
  ↓
visited
  ↓
locked_recent
  ↓
stable_cached
  ↓
eligible_for_mutation
  ↓
mutated or retained
```

The key rule:

> No chunk should transition into structural mutation while it is current, visible, adjacent, or recently visited.

---

## 17\. Line-of-sight and perception constraints

Procedural changes should respect player perception.

### Hard rules

* Do not structurally change visible geometry.
* Do not remove a door while the player is looking at it unless it is a deliberate scripted anomaly with strong design justification.
* Do not alter a corridor that is visible through an open line of sight.
* Do not change a room that is audible or visually cued as currently important unless the event is designed and communicated.

### Soft rules

* Prefer mutation behind several corners.
* Prefer mutation after the player has moved through multiple connections.
* Prefer mutation during transitions, loading masks, darkness, turns, or audio distraction.
* Prefer subtle recontextualization over dramatic swaps.

This keeps the experience uncanny rather than buggy.

---

## 18\. Landmark generation

Landmarks help players build spatial memory.

### Landmark types

* Distinct stain pattern.
* Broken fluorescent light.
* Unusual wallpaper tear.
* Oddly placed chair/table/object.
* Wall marking.
* Warning note.
* Ceiling damage.
* Strange carpet seam.
* Anomalous doorway.

### Landmark rules

* Landmarks should be rare.
* Landmarks should not appear in every room.
* Some landmarks may be false/repeated later as distant anomalies.
* Recently seen landmarks should remain stable in the local stability buffer.
* A landmark should not relocate immediately after the player turns away.

### Landmark contradiction design

A strong Backrooms effect is when a landmark reappears in a way that should be impossible.

This should happen only when:

* The original landmark is far outside the local stability buffer.
* The player has moved enough distance to create uncertainty.
* The repeated landmark supports an anomaly or clue.
* It does not break immediate spatial memory.

---

## 19\. Clue path generation

The MVP should include clue placement that can support the escape loop.

### Clue path concept

A clue path is not a strict quest chain. It is a loose set of environmental hints that increase the chance a player finds the exit.

Possible clue types:

* Note.
* Arrow or symbol.
* Unusual light pattern.
* Audio cue.
* Repeated landmark.
* Carpet seam.
* Door frame irregularity.
* Wall damage pointing toward a route.

### Clue placement rules

* Do not place all clues on the shortest path.
* Place some clues in optional branches.
* Ensure at least one clue exists within early/mid exploration range.
* Ensure exit-related clues are not immediately next to spawn.
* Keep clue text short.
* Avoid requiring the player to solve a complex puzzle in MVP.

### Clue and stability interaction

Critical clues should be protected from mutation until they are no longer needed or until mutation preserves the clue’s purpose.

---

## 20\. Exit placement generation

The MVP must generate at least one valid exit or run-completion condition.

### Exit placement requirements

* Exit must not be too close to spawn.
* Exit must be reachable.
* Exit must be level-appropriate.
* Exit should be discoverable through clues, atmosphere, or observation.
* Exit should not be placed in a structurally unstable region that can disappear unfairly.
* Once discovered, exit should remain stable unless its transformation is part of the exit event.

### Exit placement algorithm concept

```text
Generate layout graph
        ↓
Find candidate nodes with sufficient spawn distance
        ↓
Filter by level rules and layout suitability
        ↓
Choose exit candidate using seeded RNG
        ↓
Place clue nodes along or near routes to exit
        ↓
Validate reachability
        ↓
Lock critical exit path elements as needed
```

### MVP exit types

Recommended first exit type:

* An anomalous threshold, door, or wall/floor no-clip zone.

Avoid building a full second level for MVP. Use a completion or placeholder transition.

---

## 21\. Anomaly placement generation

Anomalies should be generated from rules, not randomly spammed.

### Anomaly placement rules

* Place anomaly zones away from spawn unless intentionally subtle.
* Place some anomalies near clue paths.
* Avoid stacking too many anomalies close together.
* Avoid anomalies that soft-lock the player.
* Allow local atmospheric anomalies inside the stability buffer.
* Restrict structural anomalies to distant eligible areas.

### MVP anomaly types

Recommended first implementation set:

1. Flicker zone.
2. Distant spatial sound event.
3. Exit threshold activation or reveal.

Later anomaly types:

* Repeated room variant.
* Distant door disappearance.
* Loop formation.
* Landmark recurrence.
* Ambience dropout.

---

## 22\. Visual/material generation

The generator should assign visual metadata to layout nodes and chunks.

### Visual metadata examples

```ts
type VisualGenerationMetadata = {
  wallMaterial: string;
  floorMaterial: string;
  ceilingType: string;
  lightingVariant: string;
  stainDecals: string[];
  damageLevel: "none" | "subtle" | "moderate";
  propSet: string[];
  landmarkId?: string;
};
```

### MVP visual constraints

* Use Level 0 palette.
* Avoid outdoor visuals.
* Avoid normal windows to outside.
* Avoid dense decorative clutter.
* Use modular repetition with subtle variations.
* Keep materials performant.

---

## 23\. Audio zone generation

Audio should be generated as metadata tied to nodes/chunks.

```ts
type AudioZoneMetadata = {
  ambienceProfile: string;
  reverbProfile: string;
  randomEventPool: string[];
  spatialCuePoints: SpatialCuePoint[];
  silenceDropoutAllowed: boolean;
};
```

### Audio placement goals

* Persistent hum everywhere.
* Occasional local variation.
* Distant sounds behind corners/walls.
* Audio cues near possible exit routes.
* Rare ambience dropout events.

Audio events can occur locally because they do not necessarily break spatial continuity.

---

## 24\. Spawn generation

Spawn should establish atmosphere and allow immediate orientation.

### Spawn rules

* Spawn should not face a wall at extremely close range.
* Spawn should not be next to the exit.
* Spawn should not begin in a high-anomaly zone.
* Spawn should show recognizable Level 0 motifs immediately.
* Spawn should allow at least two possible exploration directions if feasible.
* Spawn should be safe enough for the player to learn controls.

---

## 25\. Navigation fairness rules

The generator should preserve fairness even when the level is disorienting.

### Fairness requirements

* The player should not be trapped by generation errors.
* The exit should be reachable.
* The local area should remain stable.
* Clues should not be invalidated unfairly.
* Generated geometry should not create impossible collision traps.
* Backtracking should work for recently visited spaces.
* Distant changes should be explainable as Backrooms instability, not bugs.

### Navigational dread vs unfair confusion

Good dread:

> “I think this place changed several turns back.”

Bad confusion:

> “The game deleted the room I was standing in.”

The procedural system must prefer the first.

---

## 26\. Lore constraint validation

Even before a full lore linter exists, MVP generation should perform basic validation.

### MVP validation checks

* Level ID exists.
* Spawn exists.
* Exit exists.
* Exit is reachable.
* Spawn-to-exit distance is above minimum.
* Forbidden visual tags do not appear.
* Required ambience is assigned.
* At least one valid path exists.
* Critical clue/exit nodes are not immediately eligible for mutation.
* Local stability settings are defined.

### Future lore linter checks

* Entity eligibility.
* Item eligibility.
* Faction reference validity.
* Source/canon mode compliance.
* Contradiction records.
* Lore artifact claim validation.
* Level-specific required/forbidden motif scoring.

---

## 27\. Generation debug tools

Procedural generation will be hard to tune without debugging tools.

### Useful debug views

* Current seed.
* Layout graph map.
* Node IDs.
* Node types.
* Spawn node.
* Exit node.
* Landmark nodes.
* Anomaly nodes.
* Stability buffer nodes.
* Mutation-eligible nodes.
* Current player node.
* Reachability validation.
* Performance metrics.

### Debug requirement

The code should eventually allow a developer to inspect why a generated run feels too confusing, too simple, too empty, or too unstable.

---

## 28\. Performance considerations

The generator must respect browser and WebXR performance constraints.

### Performance principles

* Generate abstract layout cheaply.
* Instantiate only necessary geometry when possible.
* Reuse modular assets.
* Avoid heavy runtime mesh operations during VR play.
* Avoid blocking the main thread during play.
* Prefer precomputed metadata.
* Keep local stability buffer lightweight.
* Avoid uncontrolled infinite geometry.

### Possible optimization strategies

* Object pooling.
* Chunk caching.
* Instanced meshes.
* Baked or simplified lighting where possible.
* Low-cost material variation.
* Preloaded audio pools.
* Lazy rendering of distant areas.
* Web Worker for generation if needed later.

---

## 29\. Data model summary

Potential core data objects:

```ts
type GeneratedRun = {
  seed: RunSeed;
  levelId: string;
  layoutGraph: LayoutGraph;
  spawnNodeId: string;
  exitNodeIds: string[];
  landmarkNodeIds: string[];
  anomalyZoneIds: string[];
  stabilityBuffer: LocalStabilityBuffer;
  validationResults: GenerationValidationResult[];
};

type LayoutGraph = {
  nodes: Record<string, LayoutNode>;
  edges: Record<string, LayoutEdge>;
};
```

Potential runtime update loop:

```text
Track player position
        ↓
Resolve current layout node
        ↓
Update recent visited history
        ↓
Lock current/recent/visible nodes
        ↓
Mark distant nodes eligible for mutation
        ↓
Trigger allowed atmospheric events
        ↓
Trigger distant structural anomalies only if safe
        ↓
Validate critical path/exit accessibility if needed
```

---

## 30\. MVP implementation sequence for generation

Suggested order:

 1. Implement seeded RNG utility.
 2. Define Level 0 generation profile.
 3. Implement layout graph types.
 4. Generate rooms/corridors graph.
 5. Place spawn.
 6. Place reachable exit candidate.
 7. Place landmarks.
 8. Place clue artifacts.
 9. Place basic anomaly zones.
10. Validate reachability and constraints.
11. Convert graph to renderable modular scene.
12. Track player current node.
13. Implement local stability buffer.
14. Add atmospheric anomaly events.
15. Add distant mutation eligibility markers.
16. Add simple distant mutation only after stability rules work.

Important sequencing rule:

> Do not implement structural mutation until local spatial continuity and reachability validation are working.

---

## 31\. Open questions

 1. Should MVP use a pure graph layout, grid layout, chunk layout, or graph-grid hybrid?
 2. What is the ideal number of rooms/corridor nodes for a 5–15 minute run?
 3. What exact spawn-to-exit minimum distance should be used?
 4. Should the first MVP include true distant mutation, or only mark the system for future mutation?
 5. How many recent nodes should be locked in the local stability buffer?
 6. Should the mutation distance be fixed at 5–6 segments or configurable by level?
 7. Should structural mutation happen only during anomaly events or as background recontextualization?
 8. Should landmarks be unique, repeatable, or sometimes intentionally duplicated?
 9. How should clue paths be generated without becoming too obvious?
10. Should the exit be selected first and clues generated backward, or should clues guide exit selection?
11. How should line-of-sight locking be implemented in the chosen engine?
12. Should generation run fully before play, stream during play, or hybridize both?
13. Should debug visualization be part of the first implementation milestone?
14. How strict should MVP lore validation be before the full lore linter exists?
15. Should seed sharing wait until generator versioning is stable?

---

## 32\. Procedural design conclusion

The procedural generation system should make the Backrooms feel infinite and unstable without sacrificing fairness, coherence, or lore identity.

The central procedural design rule is:

> Generate from lore-constrained level definitions, preserve the player’s recent local reality, and allow unreliability only at a distance large enough to feel uncanny rather than cheap.

For MVP-1, the generator should create a Level 0-style run with seeded layout variation, rare landmarks, subtle anomalies, clues, an exit condition, and a local stability buffer.

The next document should be **DOC 08 — Technical Feasibility Notes**, which will evaluate the practical engine and platform choices for implementing this design in a browser/WebXR environment.
