# DOC 06 — Game Design Document (GDD): Backrooms VR Web Simulation

## Document status

**Document type:** Game Design Document (GDD)<br>**Project:** Backrooms VR Web Simulation<br>**Phase:** Game Design / Pre-Implementation<br>**Follows:** dhar174/backrooms-vr-web-sim#3 — DOC 05: Product Requirements Document (PRD)<br>**Precedes:** DOC 07 — Procedural Generation Design Spec<br>**Purpose:** Convert product requirements into player-facing gameplay systems, moment-to-moment interactions, level experience, anomaly behavior, environmental storytelling, pacing, objectives, and MVP gameplay scope.

---

## 1\. Executive summary

Backrooms VR Web Simulation is a browser-based WebXR/desktop liminal horror exploration game where the player enters a procedurally generated, lore-aligned Level 0-style Backrooms environment, explores uncanny repeating spaces, interprets clues and anomalies, and finds or triggers an exit from the current generated run.

The game should feel like a simulation of a place rather than a traditional level. The primary antagonist in the MVP is not a monster. It is the environment: repetition, uncertainty, sound, spatial ambiguity, unreliable landmarks, and the dread of not knowing whether the space has changed.

The MVP gameplay target is:

> Enter Level 0 → explore → observe clues and anomalies → infer an exit condition → escape the current generated instance → replay with a new seed.

The player should feel that they escaped one pocket or instance of Level 0, not the entire Backrooms.

---

## 2\. Design pillars

### Pillar 1 — Liminal dread first

The game should create fear through ordinary spaces made wrong.

Primary horror tools:

* Repetition.
* Lighting.
* Spatial audio.
* Long empty corridors.
* Rare landmarks.
* Unreliable navigation.
* Subtle anomalies.
* Evidence of prior explorers.
* The player’s own uncertainty.

Jump scares and overt monsters are not the foundation of the MVP.

### Pillar 2 — The environment is the main character

The environment should feel active, even when nothing visible is happening.

The level should appear to have rules:

* Lights behave strangely.
* Sounds come from impossible directions.
* Some rooms repeat.
* Some paths loop.
* Some doors appear meaningful.
* Some landmarks seem to move or recur.

### Pillar 3 — Procedural, but not arbitrary

Every run should be different, but still recognizable as Level 0-style Backrooms.

The player should feel:

> This place changed, but it still follows the same nightmare logic.

### Pillar 4 — Interpretation is gameplay

The player’s main skill is not combat or resource optimization. It is interpretation.

The player should interpret:

* Layout repetition.
* Audio cues.
* Flicker patterns.
* Notes and warnings.
* Landmark placement.
* Door behavior.
* Exit clues.
* Environmental contradictions.

### Pillar 5 — Browser-first, VR-enhanced

The game must be playable on desktop browser. VR should make the experience more immersive, but not replace the core design.

Desktop is the baseline; VR is the embodied premium mode.

---

## 3\. Player fantasy

The player fantasy is:

> I accidentally entered a place outside normal reality. I do not fully understand its rules, but I can survive if I observe carefully, stay calm, and find the way out of this level instance.

The player should feel:

* Lost but not helpless.
* Afraid but curious.
* Disoriented but able to learn.
* Alone but not necessarily safe.
* Rewarded for noticing patterns.
* Unsure whether a change was real or imagined.

---

## 4\. Core gameplay loop

The core gameplay loop is:

1. Spawn in a procedurally generated Level 0-style space.
2. Explore rooms and corridors.
3. Observe visual, audio, and spatial patterns.
4. Encounter subtle anomalies and environmental clues.
5. Interpret clues to locate or trigger an exit condition.
6. Reach/interact with the exit.
7. Complete the run or transition to a placeholder state.
8. Restart with a new seed.

Condensed:

> Explore → Notice → Interpret → Approach → Escape → Replay

---

## 5\. MVP escape loop

The escape loop is the gameplay structure that gives the MVP purpose.

For MVP-1, the player is not escaping the entire Backrooms. The player is escaping the current generated Level 0-style instance.

### MVP escape loop steps

1. The player spawns in Level 0.
2. The player explores the layout.
3. The player finds clues, such as a note, unusual sound, lighting pattern, repeated symbol, broken fixture, or odd wall segment.
4. The player follows or interprets the clue.
5. The player finds or triggers an exit.
6. The run ends, completes, or transitions to a placeholder.
7. The player can replay with a new seed.

### MVP exit forms

Possible first-version exits:

* Anomalous door.
* No-clip threshold.
* Flickering wall section.
* Elevator-like door.
* Stairwell that should not exist.
* Distorted corner or carpet seam.
* Corridor that becomes a threshold after conditions are met.

### Exit design rules

* The exit should be rare.
* The exit should not be visible immediately from spawn.
* The exit should be discoverable through observation.
* The exit should not require complex puzzle logic in MVP.
* The exit should feel strange but valid for Level 0.
* The exit should end the current run cleanly.

---

## 6\. Game modes

### 6.1 Desktop mode

Desktop mode is the baseline.

Expected controls:

* WASD movement.
* Mouse look.
* Pointer lock.
* Interact key.
* Pause/settings key.
* Restart/new seed option.

Desktop mode must support full MVP completion.

### 6.2 VR/WebXR mode

VR mode should support the same core game loop with embodied presence.

Expected VR support:

* WebXR session entry.
* Head tracking.
* Controller or gaze/ray interaction if feasible.
* Comfort-oriented locomotion.
* Snap turning as a likely default.
* No forced camera movement.

VR mode should not introduce gameplay mechanics that desktop cannot complete.

### 6.3 Debug/developer mode

A future debug mode may expose:

* Current seed.
* Generation graph.
* Spawn position.
* Exit position.
* Active anomalies.
* Lore rule checks.
* Performance metrics.
* Collision visualization.
* Room/chunk IDs.

Debug mode is not player-facing MVP content, but it will be valuable during development.

---

## 7\. Player perspective and avatar

### Perspective

The game should be first-person.

First-person supports:

* Immersion.
* Spatial dread.
* VR embodiment.
* Audio localization.
* Limited information.
* Fear of turning around.

### Avatar presence

For MVP, the player does not need a visible full-body avatar.

Potential MVP representation:

* Camera/head only.
* Footstep audio.
* Optional minimal hands/controllers in VR later.
* No mirror/body requirement.

The player should feel present through movement, sound, and scale rather than complex avatar rendering.

---

## 8\. Movement design

### Desktop movement

Desktop movement should feel familiar and reliable.

Baseline:

* WASD movement.
* Mouse look.
* Smooth walking speed.
* Optional sprint may be deferred.
* Collision with walls.
* No jumping required for MVP.
* No crouching required for MVP unless needed for atmosphere.

### VR movement

VR movement must prioritize comfort.

Possible options:

* Teleport locomotion.
* Smooth locomotion.
* Snap turn.
* Optional smooth turn.
* Adjustable movement speed.
* Optional vignette/tunneling.

MVP recommendation:

* Desktop: smooth movement.
* VR: snap turn plus either teleport or slow smooth locomotion.

### Movement anti-goals

Avoid:

* Forced camera shakes.
* Forced head movement.
* Fast acceleration.
* Required platforming.
* Frequent falling.
* Mandatory tight chase movement in MVP.

---

## 9\. Interaction design

Interactions should be simple and rare.

### MVP interactables

Possible interactables:

* Notes.
* Warning signs.
* Doors.
* Exit threshold.
* Light switch or breaker-like object, if useful.
* Strange object/landmark.
* Map scrap or unreliable guide.

### Interaction rules

* Interactables should be visually readable.
* The player should not need a complex inventory.
* Interactions should reinforce exploration and interpretation.
* Notes should be short enough to read without breaking tension.
* VR interactions should use a simple ray/gaze/controller approach if supported.

### Interaction feedback

Feedback may include:

* Subtle sound.
* UI text panel.
* Object highlight.
* Door movement.
* Light flicker.
* Audio cue.
* Run state change.

---

## 10\. Inventory and items

MVP should avoid a complex inventory.

### MVP item philosophy

Items should mostly be environmental or informational.

Possible MVP item types:

* Notes.
* Clue objects.
* Exit markers.
* Rare map fragments.
* Environmental props.

### Deferred item systems

Future versions may include:

* Flashlight.
* Batteries.
* Keys.
* Consumables.
* Tools.
* Navigation aids.
* Entity deterrents.
* Level-specific resources.

For MVP, item complexity should not distract from environment, generation, and escape loop.

---

## 11\. Level 0 MVP design

Level 0 is the MVP setting.

### Core identity

Level 0-style MVP should emphasize:

* Yellow/beige wallpaper.
* Damp carpet.
* Fluorescent lighting.
* Low office-like ceilings.
* Repetitive rooms and corridors.
* Rare landmarks.
* Subtle decay.
* Ambient electrical hum.
* Isolation.
* Disorientation.
* Rare exits.

### Gameplay role

Level 0 should teach the player:

* How movement works.
* How to observe the environment.
* How anomalies can happen.
* How clues can lead to exits.
* That the game is replayable.
* That the Backrooms are rule-governed but unreliable.

### Level 0 anti-goals

Avoid:

* Dense props everywhere.
* Bright safe-feeling rooms.
* Outdoor sky.
* Normal exterior windows.
* Crowds or NPC settlements.
* Heavy combat.
* Entity spam.
* Overly complex puzzles.

---

## 12\. Procedural level experience

The level should be procedurally generated from a seed.

### Required generated elements

* Player spawn area.
* Connected rooms and corridors.
* Dead ends.
* Turns.
* Loops or loop-like experiences.
* Rare landmarks.
* At least one exit condition.
* Possible clue placements.
* Possible anomaly trigger zones.

### Procedural feel goals

The player should feel:

* The layout is too large to fully understand quickly.
* The space repeats but is not identical everywhere.
* Some landmarks are useful but not common.
* The exit could be nearby or far away.
* The level behaves according to subtle rules.

### Procedural anti-goals

Avoid:

* Obvious square grid monotony.
* Empty endless corridors with no variation.
* Too many landmarks.
* Too few landmarks.
* Frequent impossible deadlocks.
* Exit placement too close to spawn.
* Exit placement so hidden it feels unfair.

---

## 13\. Pacing design

The MVP should have a slow-burn pacing curve.

### Suggested run pacing

<!-- linear:table-colwidths:200,200,200 -->
| Phase | Player experience | Design purpose |
| -- | -- | -- |
| Spawn | Orientation and initial unease. | Establish atmosphere and controls. |
| Early exploration | Repetition, hum, subtle landmarks. | Let player become familiar. |
| First disturbance | Flicker, distant sound, odd room, note. | Signal that the space is unstable. |
| Pattern search | Player follows clues or notices repetition. | Make interpretation matter. |
| Exit pressure | Player senses they are near something meaningful. | Build tension and purpose. |
| Escape moment | Player finds/interacts with exit. | Provide closure and replay motivation. |

The first MVP run should ideally be playable in roughly 5–15 minutes, though exact target length should be refined through testing.

---

## 14\. Anomaly design

Anomalies are the MVP’s main supernatural system.

### Anomaly principles

* Subtle first.
* Rare enough to feel meaningful.
* Level-appropriate.
* Not obviously random.
* Not unfair.
* Not always harmful.
* Sometimes useful as clues.

### MVP anomaly candidates

<!-- linear:table-colwidths:200,200,200 -->
| Anomaly | Description | Gameplay purpose |
| -- | -- | -- |
| Light flicker cluster | Lights flicker in a small area or sequence. | Atmosphere or exit clue. |
| Distant directional sound | Sound occurs behind a wall or around a corner. | Tension or guidance. |
| Repeated room variant | A room resembles another but has one changed detail. | Disorientation and pattern recognition. |
| Disappearing door | A door visible from one angle/location is gone later. | Environmental unreliability. |
| Loop corridor | A corridor appears to return player near a prior space. | Spatial dread. |
| Sudden ambience drop | Fluorescent hum cuts out briefly. | Tension spike. |
| Exit flicker | An exit candidate becomes visible or active after a condition. | Escape loop support. |

### MVP anomaly recommendation

For the first prototype, implement 2–3 simple anomalies:

1. Light flicker event.
2. Distant spatial sound event.
3. Exit-related threshold/door anomaly.

More complex room repetition and door disappearance can follow after the layout system is stable.

---

## 15\. Lore artifact design

Lore artifacts should support exploration without becoming lore dumps.

### Artifact types

* Notes.
* Warning signs.
* Scratched arrows.
* Wall markings.
* Abandoned object clusters.
* Map fragments.
* Short recordings later.

### Artifact content goals

Artifacts should:

* Suggest prior explorers.
* Hint at exits.
* Warn about anomalies.
* Create uncertainty.
* Reinforce unreliability.
* Support source-aligned tone.

### Artifact tone examples

Possible short note styles:

* “The lights point the wrong way.”
* “If the hum stops, do not move.”
* “I counted this hallway twice.”
* “The exit was not a door until I looked away.”
* “Do not trust the arrows unless you made them.”

These should be treated as original game text unless later source-reviewed.

---

## 16\. Objective design

The MVP objective should be simple:

> Find a way out of the current Level 0 instance.

The player does not need a quest log. The environment can communicate the goal through:

* Start screen text.
* Minimal intro prompt.
* Notes.
* Exit-like landmarks.
* Audio/lighting cues.
* Completion screen.

### Possible MVP objective text

Start prompt:

> You are somewhere you should not be. Find a way out.

Completion prompt:

> You slipped out of this place. But not out of the Backrooms.

The objective should create direction without over-explaining the world.

---

## 17\. Failure states

The MVP does not require complex death/failure systems.

Possible MVP failure states:

* Player gets lost and restarts manually.
* Optional timerless exploration with no hard fail.
* Falling out of bounds resets position.
* Severe anomaly failure may be deferred.

Future failure states may include:

* Entity capture.
* Sanity/perception collapse.
* Hazard damage.
* Light/resource depletion.
* Wrong exit transitions.

For MVP, the primary risk should be psychological and navigational, not mechanical death.

---

## 18\. Entity design

Entities should be deferred or minimized in MVP.

### MVP recommendation

The first MVP should rely on:

* Environmental dread.
* Audio implication.
* Anomalies.
* Unreliable space.

Optional MVP entity approach:

* No visible entity.
* Implied presence through sound.
* Distant silhouette only if easy and not disruptive.
* No chase system.

### Future entity principles

When added, entities should:

* Be level-valid.
* Have partial rules players can infer.
* Be rare enough to remain frightening.
* React to player behavior, sound, light, or proximity.
* Not turn every level into a chase game.

---

## 19\. Hazard design

MVP hazards should be subtle and mostly environmental.

Possible MVP hazards:

* Navigation confusion.
* Low visibility zones.
* Flickering disorientation.
* Misleading audio.
* False exit cues.
* Out-of-bounds prevention.

Deferred hazards:

* Damage zones.
* Toxic air.
* Flooding.
* Electrical hazards.
* Entity attacks.
* Resource starvation.

Hazards should never feel like random punishment. They should communicate the rules of the space.

---

## 20\. UI and HUD design

The UI should be minimal.

### MVP UI elements

* Start screen.
* Mode/start button.
* Optional seed display or debug seed.
* Interaction prompt.
* Note reading panel.
* Pause/settings menu.
* Completion/restart screen.

### HUD principles

* Keep screen mostly clear.
* Avoid gamey meters unless needed.
* Avoid minimaps in MVP.
* Avoid quest trackers unless extremely subtle.
* Let environment guide the player.

### VR UI principles

* Avoid large flat menus during play.
* Use simple diegetic or gaze/ray interaction.
* Keep text readable at comfortable distance.
* Avoid UI pinned directly to head movement if uncomfortable.

---

## 21\. Audio design

Audio is one of the most important gameplay systems.

### MVP audio layers

* Constant fluorescent/electrical hum.
* Room tone/reverb.
* Footstep sounds if feasible.
* Occasional distant sounds.
* Light flicker sounds.
* Interaction sounds.
* Exit cue sound.
* Ambience drop event.

### Audio gameplay roles

Audio should:

* Create atmosphere.
* Suggest scale.
* Misdirect or guide.
* Mark anomalies.
* Hint at exits.
* Make the player stop and listen.

Audio should be spatial where feasible, especially in VR.

---

## 22\. Visual design

The visual design should emphasize material, repetition, and lighting over asset complexity.

### MVP visual elements

* Modular wall sections.
* Wallpaper material.
* Carpet material.
* Ceiling tiles.
* Fluorescent fixtures.
* Stains and damage decals.
* Rare props.
* Rare landmarks.
* Exit/threshold visual language.

### Visual readability

The player should be able to distinguish:

* Normal wall.
* Landmark wall.
* Interactable note/object.
* Possible exit clue.
* Active exit.

Visual cues should be subtle but not invisible.

---

## 23\. Run structure

A run is one generated Level 0-style instance.

### Run states

1. Main menu.
2. Generate seed/layout.
3. Spawn player.
4. Exploration state.
5. Anomaly/clue events.
6. Exit discovered or activated.
7. Completion/transition state.
8. Restart/new seed.

### Run data

Each run should eventually track:

* Seed.
* Level ID.
* Spawn position.
* Exit position/type.
* Generated layout summary.
* Triggered anomalies.
* Collected/read lore artifacts.
* Completion state.
* Time spent.

Not all data needs to be shown to players in MVP.

---

## 24\. Progression design

MVP progression is run-based, not campaign-based.

The player progresses by:

* Learning how Level 0 behaves.
* Finding clues.
* Recognizing anomaly patterns.
* Finding the exit.
* Trying another seed.

Future progression may include:

* Level unlocks.
* Run history.
* Discovered lore index.
* Transition map.
* Seed records.
* Challenge runs.
* Persistent exploration logs.

---

## 25\. Level transition design

MVP transition can be simple.

Possible completion outcomes:

1. Completion screen: “You escaped this instance.”
2. Placeholder transition: “Level ???” or “You slipped deeper.”
3. Fade out and return to menu.
4. Fade out and restart with new seed.

MVP recommendation:

> Use a completion screen or placeholder transition rather than building a second level.

This preserves the sense of the larger Backrooms without requiring multi-level scope.

---

## 26\. Difficulty design

The MVP should be low-combat but high-uncertainty.

Difficulty should come from:

* Navigation.
* Observation.
* Pattern recognition.
* Subtle clues.
* Unreliable space.
* Exit rarity.

Difficulty should not come from:

* Complex controls.
* Obscure puzzles.
* Random instant death.
* Forced chase sequences.
* Poor visibility with no counterplay.

Future difficulty options may alter:

* Layout size.
* Exit rarity.
* Anomaly frequency.
* Landmark frequency.
* Entity presence.
* Resource availability.

---

## 27\. Player guidance

Guidance should be subtle.

### Direct guidance

Minimal direct guidance may appear as:

* Start prompt.
* Control hints.
* Interaction prompts.
* Completion message.

### Environmental guidance

Primary guidance should come from:

* Lighting patterns.
* Audio direction.
* Notes.
* Symbols.
* Landmarks.
* Exit visual language.

The game should avoid overexplaining.

---

## 28\. Accessibility and comfort design

### Desktop accessibility

MVP should include or plan for:

* Mouse sensitivity.
* Volume control.
* Clear pause/restart.
* Readable note text.
* Avoidance of required fast reflexes.

### VR comfort

MVP should include or plan for:

* Snap turning.
* Optional smooth turn.
* Movement speed adjustment.
* No forced camera movement.
* Optional teleport if feasible.
* Avoid forced falls or rapid acceleration.

Comfort is a design requirement, not a polish task.

---

## 29\. MVP gameplay content list

Minimum satisfying MVP content:

* 1 Level 0-style procedural level definition.
* 1 player spawn flow.
* 1 desktop movement/control scheme.
* 1 WebXR entry path or technical stub if full support is deferred.
* 1 persistent ambience profile.
* 1 visual material set for walls/floors/ceilings.
* 2–3 anomaly types.
* 3–8 lore artifact text snippets.
* 1 exit type.
* 1 completion/restart flow.
* Basic settings.

---

## 30\. Future gameplay expansion

After MVP, future expansions may include:

* Multiple levels.
* Level transition graph.
* Entity encounters.
* Hazard systems.
* Light/resource systems.
* Simple inventory.
* Persistent run logs.
* Seed sharing.
* Challenge seeds.
* Source-reviewed lore database.
* Lore linter debug mode.
* Additional VR interactions.
* Environmental storytelling packs.
* AI-assisted authoring tools, not runtime dependency.

---

## 31\. GDD open questions

 1. Should the MVP include any visible entity, or only implied presence?
 2. Should the player have a flashlight in MVP?
 3. Should sprint exist in MVP?
 4. Should crouch exist in MVP?
 5. Should the exit be a door, no-clip zone, elevator, stairwell, or randomized among several simple forms?
 6. Should the player manually choose a seed or only receive a random seed?
 7. Should notes be interactable UI panels or readable directly in-world?
 8. How obvious should exit clues be?
 9. How long should an average MVP run last?
10. Should anomalies be purely atmospheric or sometimes mechanically useful?
11. Should generated layouts have an invisible boundary or infinite chunk streaming illusion?
12. Should VR locomotion default to teleport or smooth movement?
13. Should the game include a debug overlay from the start?
14. Should completion say “escaped” or “slipped deeper”?
15. Should the first prototype include a title/menu aesthetic or load directly into the run?

---

## 32\. GDD conclusion

The MVP game design should focus on a simple but strong experience:

> The player enters a generated Level 0-style space, explores an eerie and repetitive environment, observes subtle anomalies and clues, finds or triggers an exit, escapes the current level instance, and can replay with a new seed.

The game should prioritize atmosphere, coherence, replayability, and interpretation over enemies, combat, inventory, or complex progression.

The next document should be **DOC 07 — Procedural Generation Design Spec**, which will define how the Level 0 generator works, how seeds are handled, how layouts are represented, how rooms/corridors/landmarks/anomalies/exits are placed, and how generation can be validated against lore constraints.
