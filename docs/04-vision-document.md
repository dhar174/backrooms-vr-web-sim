# DOC 04 — Vision Document: Backrooms VR Web Simulation

## Document status

**Document type:** Vision Document<br>**Project:** Backrooms VR Web Simulation<br>**Phase:** Concept / Product Definition<br>**Follows:** dhar174/backrooms-vr-web-sim#1 — DOC 03: Lore Alignment Spec<br>**Precedes:** DOC 05 — Product Requirements Document<br>**Purpose:** Define the long-term product vision, emotional target, gameplay identity, simulation ambition, and experience goals before converting the project into concrete product requirements.

---

## 1\. Executive vision

Backrooms VR Web Simulation should become a browser-accessible WebXR liminal horror simulation that makes players feel as though they have entered an endless, unstable, lore-governed reality.

The long-term vision is:

> A living Backrooms simulation engine where players can enter from a browser, explore procedurally generated lore-aligned levels, encounter strange rules and anomalies, discover fragments of human presence, and search for exits through spaces that feel infinite, coherent, and wrong.

This project should not be just another static Backrooms map or a short chase game. It should be a replayable system: a procedural, lore-aware simulation of liminal reality.

---

## 2\. Vision statement

The product vision is:

> Build the most accessible, replayable, lore-aware browser-based Backrooms simulation possible: a WebXR experience where the Backrooms are generated from structured rules, not hand-waved randomness, and where every run feels like a new descent into an impossible place.

The player should feel that the Backrooms exist beyond the current session, beyond the current level, and beyond the current visible hallway.

The game should imply a larger world than it shows.

---

## 3\. North star experience

The north star experience is the ideal player story:

> The player opens a link, enters a generated Level 0-style space, and immediately recognizes the sickly yellow walls, damp carpet, and fluorescent hum. At first, the space seems like a simple maze. Then details begin to feel wrong: a hallway seems longer than before, a distant noise comes from an impossible direction, a room repeats with one changed feature, and an exit appears only after the player interprets clues left by someone else. The player escapes, but the next run is different — the same level identity, a new arrangement, new events, new uncertainty.

This is the emotional and experiential target.

---

## 4\. Emotional vision

The project should create a specific emotional arc.

### Primary emotions

* Unease
* Curiosity
* Isolation
* Disorientation
* Suspicion
* Quiet dread
* Relief after discovery
* Anxiety before turning corners

### Secondary emotions

* Wonder
* Obsession
* Pattern-hunting
* Paranoia
* Existential smallness
* Strange comfort in familiar repetition

### Emotional anti-goals

The game should avoid becoming primarily:

* A loud jump-scare machine.
* A generic monster hallway.
* A combat arena.
* A puzzle room collection with Backrooms wallpaper.
* A random maze with no identity.
* A lore encyclopedia with no embodied tension.

The emotional vision is:

> Make the player afraid of space itself.

---

## 5\. Product identity vision

The product should sit at the intersection of several forms:

<!-- linear:table-colwidths:200,200 -->
| Identity | Vision |
| -- | -- |
| Liminal exploration simulator | The player explores uncanny spaces that feel empty, familiar, and wrong. |
| Procedural horror sandbox | The world is generated from seedable systems, enabling meaningful replayability. |
| Lore-aware simulation | Levels, exits, entities, and anomalies are constrained by structured lore. |
| WebXR app | The experience is browser-first and optionally VR-enhanced. |
| Environmental storytelling game | Story is discovered through places, traces, notes, sounds, and contradictions. |
| Systems platform | The architecture can eventually support many levels and generation rules. |

The product should be described internally as:

> A browser-native procedural liminal horror simulation platform.

---

## 6\. Long-term gameplay vision

The long-term gameplay vision is not simply to walk through rooms. The player should learn, infer, survive, and adapt.

The long-term gameplay loop should be:

1. Enter or transition into a level.
2. Observe the level’s visual, audio, and spatial rules.
3. Explore while managing orientation, fear, danger, and uncertainty.
4. Collect or interpret environmental clues.
5. Identify hazards, anomalies, entities, or safe patterns.
6. Locate or trigger an exit condition.
7. Transition to another level or restart with a new seed.
8. Build mental models of how different levels behave.

The player’s core skill should be **interpretation**.

They should ask:

* What kind of level am I in?
* What rules does this place follow?
* Can I trust this hallway?
* Is this sound a clue or a threat?
* Is this note reliable?
* Is this door an exit, a trap, or a loop?

---

## 7\. Simulation vision

The Backrooms should be simulated as a rule-governed environment.

The long-term simulation should include:

* Level definitions.
* Procedural layout generation.
* Visual motif systems.
* Audio atmosphere systems.
* Lighting behavior.
* Anomaly events.
* Entity eligibility and behavior.
* Hazard rules.
* Item/resource placement.
* Lore artifact placement.
* Exit and transition systems.
* Seed-based replayability.
* Validation through a lore linter.

The key design principle is:

> The generated world should feel discovered, not assembled.

The player should never feel that the system simply shuffled random rooms together.

---

## 8\. Procedural generation vision

Procedural generation should express the infinite nature of the Backrooms.

The generator should eventually support:

* Repeatable seeds.
* Level-specific generation profiles.
* Room graph generation.
* Corridor and connectivity rules.
* Landmarks and anti-landmarks.
* Controlled loops.
* Rare exits.
* Environmental event placement.
* Lore artifact placement.
* Threat and hazard placement.
* Validation against level constraints.

Procedural generation should create variation at several layers:

<!-- linear:table-colwidths:200,200 -->
| Layer | Vision |
| -- | -- |
| Spatial layout | Different rooms, corridors, loops, dead ends, and landmarks per seed. |
| Atmosphere | Different flickers, hum patterns, silence breaks, and distant audio events. |
| Lore artifacts | Different notes, warnings, traces, and clue combinations. |
| Anomalies | Different subtle reality disruptions and timing. |
| Exits | Different escape placement and discovery conditions. |
| Threats | Different hazards/entities depending on level rules. |

The generator should be **constrained randomness**, not chaos.

---

## 9\. Lore vision

The lore vision is:

> Transform Backrooms lore into structured data that the simulation can use.

Lore should guide:

* What a level looks like.
* What it sounds like.
* How it is laid out.
* What entities can appear.
* What resources can appear.
* What exits are valid.
* What anomalies are appropriate.
* What information artifacts can claim.
* What should never appear.

The project should not attempt to become a definitive authority on all Backrooms canon. Instead, it should build a clear internal canon model that is source-aligned, documented, and usable.

The long-term lore vision includes:

* Source review records.
* Level profiles.
* Entity profiles.
* Item/resource profiles.
* Faction handling rules.
* Contradiction records.
* Content labeling.
* Lore linter checks.
* Clear separation between source-aligned and original game content.

---

## 10\. VR vision

VR should make the Backrooms feel embodied.

VR should enhance:

* Scale.
* Presence.
* Claustrophobia.
* Spatial audio.
* Fear of looking behind oneself.
* Feeling physically surrounded by repetition.
* The discomfort of moving through uncanny spaces.

VR should not be mandatory. The game must remain playable on desktop, but VR should feel like the premium version of the experience.

The VR vision must include comfort-first design:

* Snap turning.
* Optional smooth turning.
* Teleport locomotion option.
* Smooth locomotion option for players who prefer it.
* Vignette/tunneling options if needed.
* Adjustable movement speed.
* Seated and standing play consideration.
* No forced camera movement.
* Minimal artificial acceleration.

The VR design rule is:

> The player should feel physically present, not physically sick.

---

## 11\. Browser-first vision

The browser is not merely a deployment target. It is part of the product identity.

The browser-first vision is:

> The player should be able to enter the Backrooms from a link.

This creates several product advantages:

* Easy sharing.
* Easy testing.
* No installer.
* Fast iteration.
* Potential seed sharing.
* Potential embeddable demos.
* Potential classroom/devlog/demo usage.
* Cross-device accessibility where supported.

The browser-first strategy also creates constraints:

* Performance must be carefully managed.
* Asset sizes must be controlled.
* VR support must account for WebXR compatibility.
* Rendering must be optimized.
* Procedural generation must not stall the main thread.
* The game must gracefully degrade when WebXR is unavailable.

The product should embrace those constraints as creative boundaries.

---

## 12\. MVP vision

The MVP vision is deliberately narrow:

> Create a procedural Level 0-style WebXR prototype that proves atmosphere, replayability, lore-constrained generation, basic anomalies, and an escape loop.

The MVP should not prove every future feature.

It should prove the foundation.

MVP-1 should include:

* Browser-playable 3D scene.
* Desktop fallback controls.
* Basic WebXR entry.
* Seeded Level 0-style procedural layout.
* Recognizable Level 0 visual identity.
* Fluorescent audio atmosphere.
* Basic anomaly events.
* Short lore artifacts or environmental clues.
* A simple exit condition.
* Restart/new seed flow.

MVP-1 should not include:

* Multiple levels.
* Full multiplayer.
* Complex inventory.
* Full combat.
* Advanced AI entities.
* Account systems.
* Large asset pipeline complexity.
* Runtime AI-generated levels.

The MVP success statement is:

> This feels like the Backrooms, and it is different every time.

---

## 13\. Future product vision

After the MVP, the product can expand in phases.

### Phase 1 — Level 0 proof

Prove the core loop and technical feasibility.

### Phase 2 — Lore data foundation

Formalize level definitions, source review records, schemas, and lore validation.

### Phase 3 — Additional level archetypes

Add one or two new levels that stress different systems:

* A darker level for lighting/resource pressure.
* An industrial level for hazards and audio complexity.
* A habitable/safe-ish level for lore artifacts and faction traces.

### Phase 4 — Entity and hazard systems

Introduce more advanced threats after the environment itself works.

### Phase 5 — Progression and transition network

Allow levels to connect through transition rules and exit conditions.

### Phase 6 — Replayability and sharing

Support seed sharing, run summaries, and possibly challenge seeds.

### Phase 7 — Advanced simulation and possible AI assistance

Explore AI-assisted content generation only after deterministic systems, lore validation, and safety boundaries exist.

---

## 14\. Environmental storytelling vision

Story should be discovered, not delivered as exposition.

The world should tell stories through:

* Notes.
* Signs.
* Warnings.
* Abandoned supplies.
* Repeated symbols.
* Broken lights.
* Stains.
* Makeshift arrows.
* Contradictory maps.
* Strange recordings.
* Evidence of prior explorers.
* Rooms that imply events without explaining them.

The player should feel that others have been here before, but not that anyone truly understands the place.

Good environmental storytelling should create questions:

* Who left this?
* Were they right?
* Did they escape?
* Is this warning current?
* Is this map lying?
* Why is this room different?

---

## 15\. Entity vision

Entities should not dominate the experience too early.

The long-term vision for entities is:

> Entities should feel like part of the ecology of the Backrooms, not random enemies pasted into hallways.

Entity appearance should be governed by:

* Level eligibility.
* Sound rules.
* Light rules.
* Player behavior.
* Time spent in level.
* Proximity to certain areas.
* Lore constraints.
* Spawn rarity.

The MVP may avoid overt entities entirely or include only implied presence.

Entity principles:

* Rarity increases fear.
* Implication can be stronger than visibility.
* Entities should obey rules players can partially infer.
* Entity behavior should be level-aware.
* Entities should not turn every level into a chase sequence.

---

## 16\. Anomaly vision

Anomalies should be the primary supernatural system in early versions.

Anomalies should make the environment feel unreliable.

Examples:

* Lights flicker in impossible sequences.
* A door disappears behind the player.
* A room repeats with one changed object.
* A corridor is longer than it should be.
* A distant sound comes from the wrong direction.
* A landmark appears twice.
* The ambience cuts out suddenly.
* An exit appears only after a condition is met.

The anomaly vision is:

> The Backrooms should scare the player before anything living does.

---

## 17\. Visual style vision

The visual style should prioritize atmosphere and performance over photorealistic spectacle.

The look should be:

* Clean enough to run in browser.
* Textured enough to feel tangible.
* Stylized-realistic rather than hyperrealistic.
* Material-focused.
* Lighting-focused.
* Repetition-aware.
* Slightly degraded.
* Mundane but wrong.

For Level 0-style spaces, the visual target includes:

* Sickly yellow wallpaper.
* Damp carpet.
* Low ceilings.
* Fluorescent lights.
* Repeating wall modules.
* Water stains.
* Peeling surfaces.
* Rare landmarks.
* Subtle geometry variation.

The art direction should avoid overdecorating. Empty space is part of the horror.

---

## 18\. Audio style vision

Audio should be one of the strongest pillars of the experience.

The audio style should include:

* Persistent ambience.
* Directional uncertainty.
* Distant unconfirmed sounds.
* Footstep and room reverb.
* Electrical hum.
* Sudden silence.
* Subtle sound events behind or around the player.
* Audio cues that may indicate exits, anomalies, or danger.

The player should sometimes stop moving just to listen.

Audio should not be constant noise. It should breathe, mislead, and create tension.

---

## 19\. Narrative vision

The narrative should remain fragmented and mysterious.

The game should not immediately explain:

* What the Backrooms are.
* Why the player is there.
* Who controls the space.
* Whether the lore artifacts are reliable.
* Whether escape is permanent.

Instead, the narrative should emerge through:

* Repeated motifs.
* Level transitions.
* Notes from prior explorers.
* Strange environmental traces.
* Contradictions between clues.
* Implicit rules discovered through play.

Long-term, the project can support multiple narrative layers:

1. Personal survival story.
2. Level-specific lore.
3. Survivor/faction traces.
4. Meta-mystery about the structure of the Backrooms.
5. Optional original game canon.

---

## 20\. Technical vision

The technical vision is a modular browser-native simulation architecture.

Likely principles:

* TypeScript-first implementation.
* Data-driven level definitions.
* Deterministic seeded generation.
* Clear separation between generation, simulation, rendering, input, and audio.
* WebXR support as a first-class module.
* Desktop fallback as a first-class mode.
* Engine decision captured by ADR.
* Lore schemas stored in version-controlled files.
* Validation/linting available for generated sessions.
* Performance budgets established early.

Potential engine options remain:

* Babylon.js.
* Three.js.
* React Three Fiber.
* PlayCanvas.

The technical feasibility document and ADRs should choose the stack later.

---

## 21\. Design non-goals

The vision explicitly does not require:

* Photorealistic AAA graphics.
* Dozens of levels at launch.
* Full multiplayer at launch.
* Complex combat.
* Heavy RPG stats.
* A complete definitive Backrooms encyclopedia.
* Runtime generative AI as a dependency for MVP.
* Mobile-first design.
* A massive backend for the initial version.

The project should avoid confusing ambition with scope.

---

## 22\. Success vision

The project succeeds if players say things like:

* “This feels like the Backrooms.”
* “It was different when I replayed it.”
* “I got lost, but not because the map was bad.”
* “The sound design made me paranoid.”
* “I started noticing patterns.”
* “I was scared before anything actually appeared.”
* “The place felt like it had rules.”
* “I want to try another seed.”
* “VR made it feel way too real.”

The strongest success signal is:

> Players believe the generated world extends beyond what they have seen.

---

## 23\. Vision risks

The vision is strong but risky.

<!-- linear:table-colwidths:200,200,200 -->
| Risk | Vision-level concern | Mitigation |
| -- | -- | -- |
| Over-scope | The Backrooms concept can expand infinitely. | Keep MVP focused on Level 0. |
| Procedural blandness | Generated spaces may feel random or empty. | Use lore-constrained generation and validation. |
| Lore conflict | Sources may contradict each other. | Use source-aligned internal canon and contradiction records. |
| VR sickness | Immersion can become discomfort. | Build comfort options early. |
| Browser limits | Web delivery constrains assets/performance. | Use performance budgets and optimized generation. |
| Horror imbalance | Too many entities can weaken liminal dread. | Prioritize environmental fear and anomalies first. |
| Legal ambiguity | Wiki content may have reuse constraints. | Track licensing and avoid direct text copying. |

---

## 24\. Product future: what this could become

If the MVP succeeds, the project could become:

* A public WebXR Backrooms exploration game.
* A procedural liminal horror engine.
* A seed-sharing Backrooms exploration platform.
* A framework for lore-constrained procedural horror levels.
* A devlog-friendly open-source game/simulation project.
* A showcase for browser-based VR procedural environments.
* A future AI-assisted environmental storytelling sandbox.

The best version of this project is not just a game. It is a platform for generating unsettling, lore-aware liminal experiences.

---

## 25\. Vision-to-requirements bridge

This vision implies the PRD must define concrete requirements for:

* Browser play.
* Desktop controls.
* WebXR support.
* MVP Level 0 generation.
* Seeded replayability.
* Lore-constrained level definitions.
* Audio atmosphere.
* Lighting behavior.
* Basic anomalies.
* Lore artifacts.
* Exit mechanics.
* Performance expectations.
* VR comfort options.
* Non-goals and scope boundaries.

The PRD should convert this vision into testable requirements and acceptance criteria.

---

## 26\. Initial conclusion

The vision for Backrooms VR Web Simulation is to create a browser-accessible, WebXR-capable, lore-aware procedural liminal horror simulation.

The product should make the Backrooms feel:

* Infinite.
* Coherent.
* Replayable.
* Systemic.
* Unsettling.
* Lore-aligned.
* Accessible from a link.
* More immersive in VR.

The central vision statement remains:

> Build a browser-native Backrooms simulation engine where lore-constrained procedural generation makes the impossible feel explorable, replayable, and real.

The next document should be **DOC 05 — Product Requirements Document (PRD)**, which will transform this vision into concrete requirements, priorities, and acceptance criteria.
