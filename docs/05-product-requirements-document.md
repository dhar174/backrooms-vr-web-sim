# DOC 05 — Product Requirements Document (PRD): Backrooms VR Web Simulation

## Document status

**Document type:** Product Requirements Document (PRD)<br>**Project:** Backrooms VR Web Simulation<br>**Phase:** Product Definition / Requirements<br>**Follows:** dhar174/backrooms-vr-web-sim#2 — DOC 04: Vision Document<br>**Precedes:** DOC 06 — Game Design Document (GDD)<br>**Purpose:** Convert the project vision, problem statement, and lore alignment strategy into concrete product requirements, MVP scope, user stories, priorities, acceptance criteria, risks, and open questions.

---

## 1\. Executive summary

Backrooms VR Web Simulation is a browser-based WebXR liminal horror simulation where players explore procedurally generated, lore-aligned Backrooms levels. The first MVP should focus on a Level 0-style experience that proves browser-based 3D exploration, desktop fallback controls, basic WebXR support, seeded procedural generation, atmosphere, subtle anomalies, lore artifacts, and a basic escape loop.

The PRD defines what the MVP and future product must do, what is explicitly out of scope, which features are required first, and how success should be evaluated.

The main MVP product promise is:

> Open a link, enter a generated Level 0-style Backrooms space, explore, notice clues/anomalies, find or trigger an exit, and replay with a new seed.

The MVP success statement is:

> This feels like the Backrooms, and it is different every time.

---

## 2\. Product summary

Backrooms VR Web Simulation is a browser-native procedural liminal horror simulation platform.

The product combines:

* Liminal exploration.
* Lore-aligned procedural generation.
* WebXR immersion.
* Desktop browser accessibility.
* Environmental storytelling.
* Subtle anomaly-driven horror.
* Seed-based replayability.

The first release should not attempt to model the entire Backrooms universe. It should prove one focused experience extremely well:

> A replayable, procedurally generated, Level 0-style WebXR/desktop prototype with atmosphere, clues, anomalies, and an exit objective.

---

## 3\. Problem being solved

Many Backrooms-inspired games resemble the Backrooms visually but do not behave like an infinite, systemic, lore-governed liminal reality.

This product solves that gap by creating a system where:

* The world is generated from structured level rules.
* Lore constrains generation.
* Layouts vary by seed.
* Atmosphere comes from spatial design, audio, lighting, and anomalies.
* The player has a lightweight objective: find or trigger an exit from the current generated level instance.

---

## 4\. Goals

### 4.1 MVP goals

MVP-1 should achieve the following goals:

 1. Provide a browser-playable 3D Backrooms experience.
 2. Support desktop controls as the baseline interaction mode.
 3. Support basic WebXR entry on compatible devices.
 4. Generate a Level 0-style environment from a seed.
 5. Ensure the Level 0-style environment is visually and atmospherically recognizable.
 6. Support replayability through different seeds.
 7. Include subtle environmental anomalies.
 8. Include lore artifacts or environmental clues.
 9. Include a simple exit/escape loop.
10. Maintain enough performance to support comfortable desktop play and early VR testing.

### 4.2 Long-term product goals

Future versions may expand toward:

* Multiple lore-modeled Backrooms levels.
* Level-to-level transition networks.
* More sophisticated anomaly systems.
* Entity systems.
* Hazard systems.
* Item/resource systems.
* Seed sharing.
* Lore linter validation.
* Source review tooling.
* Expanded environmental storytelling.
* Possible AI-assisted content workflows after deterministic systems work.

---

## 5\. Non-goals

The MVP should explicitly avoid the following:

* Full multiplayer.
* Multiple complete Backrooms levels.
* Advanced combat.
* Complex inventory.
* Advanced entity AI.
* Account systems.
* Marketplace or mod portal.
* Native desktop/mobile application builds.
* Runtime AI-generated levels.
* Production-quality photorealism.
* Full definitive Backrooms encyclopedia.
* Complete source-by-source lore resolution for all canon contradictions.

These may become future considerations, but they should not block MVP development.

---

## 6\. Target users

<!-- linear:table-colwidths:200,200 -->
| User type | Needs |
| -- | -- |
| Backrooms fan | Wants recognizable lore, Level 0 atmosphere, and respect for major wiki traditions. |
| Liminal horror fan | Wants unease, ambiguity, dread, and uncanny space. |
| VR player | Wants embodied presence without motion sickness. |
| Desktop web player | Wants easy access without installing anything. |
| Replay-focused player | Wants each run to feel meaningfully different. |
| Explorer | Wants clues, mystery, environmental storytelling, and discovery. |
| Streamer/content creator | Wants surprising, atmospheric, shareable moments. |
| Procedural generation enthusiast | Wants systems that feel coherent rather than random. |

---

## 7\. User stories

### 7.1 Browser and entry stories

* As a player, I want to open the game in a browser so I can try it without installing anything.
* As a first-time player, I want a clear start flow so I can enter a run quickly.
* As a returning player, I want to restart with a new seed so I can experience a different layout.
* As a player, I want the game to still work if WebXR is unavailable so I am not blocked from playing.

### 7.2 Desktop interaction stories

* As a desktop player, I want WASD movement and mouse look so I can explore naturally.
* As a desktop player, I want pointer lock so movement and looking feel game-like.
* As a player, I want a simple interaction key so I can inspect notes, clues, doors, and exits.
* As a player, I want a pause/settings option so I can adjust comfort and audio settings.

### 7.3 VR interaction stories

* As a VR player, I want to enter WebXR mode so the Backrooms feel physically present.
* As a VR player, I want comfort options so I can reduce motion sickness.
* As a VR player, I want snap turning and/or teleport options so I can choose a comfortable movement style.
* As a VR player, I want spatial audio to make the environment feel surrounding and threatening.

### 7.4 Procedural generation stories

* As a replaying player, I want each seed to generate a different layout so the experience cannot be fully memorized.
* As a player, I want the same seed to reproduce the same layout so seeds can eventually be shared and debugged.
* As a Backrooms fan, I want generated Level 0 spaces to remain recognizable so procedural variation does not break lore identity.
* As a designer/developer, I want level generation to be data-driven so future levels can be added without rewriting the engine.

### 7.5 Lore and atmosphere stories

* As a Backrooms fan, I want Level 0 to include recognizable motifs such as yellow wallpaper, damp carpet, fluorescent lighting, and repetitive office-like space.
* As an explorer, I want notes or environmental clues so I can infer what happened before and where an exit might be.
* As a player, I want anomalies to make the environment feel unstable without feeling unfair.
* As a player, I want audio cues and ambience to create dread before any overt entity appears.

### 7.6 Escape loop stories

* As a player, I want a reason to explore so the experience is more than a walking demo.
* As a player, I want to find or trigger an exit from the current generated level instance.
* As a player, I want the exit to be rare but discoverable through clues or observation.
* As a player, I want reaching the exit to complete the run, transition to a placeholder, or allow a new seed.

---

## 8\. Escape loop definition

For this project, the **escape loop** means the repeatable gameplay cycle around finding a way out of a generated Backrooms run.

For the MVP, it does not mean escaping the entire Backrooms. It means escaping the current generated Level 0-style instance.

The MVP escape loop is:

1. Spawn in a generated Level 0-style environment.
2. Explore rooms and corridors.
3. Notice clues, anomalies, audio cues, lighting changes, or lore artifacts.
4. Interpret those clues to locate or trigger an exit condition.
5. Reach or interact with the exit.
6. End the run, transition to a placeholder, or restart with a new seed.

A simple MVP version could be:

> Spawn in Level 0 → explore → notice clues/anomalies → locate or trigger an exit → escape/end the run → restart with a new seed.

Possible MVP exit forms:

* A no-clip wall/floor zone.
* An anomalous door.
* A stairwell.
* An elevator.
* A flickering threshold.
* A wall/floor instability zone.

The escape loop exists to provide purpose and closure while preserving the infinite nature of the Backrooms.

The correct MVP interpretation is:

> Escape from Level 0, not escape from the entire Backrooms.

---

## 9\. Functional requirements

### 9.1 Web app requirements

<!-- linear:table-colwidths:200,200,200 -->
| ID | Requirement | Priority |
| -- | -- | -- |
| WEB-001 | The app must load in a modern desktop browser. | P0 |
| WEB-002 | The app must provide a start/new run flow. | P0 |
| WEB-003 | The app must support desktop mode even if WebXR is unavailable. | P0 |
| WEB-004 | The app should expose the current run seed in debug or UI form. | P1 |
| WEB-005 | The app should allow restarting with a new seed. | P0 |
| WEB-006 | The app should include a minimal settings/pause interface. | P1 |
| WEB-007 | The app may later support seed sharing. | P2 |

### 9.2 Desktop control requirements

<!-- linear:table-colwidths:200,200,200 -->
| ID | Requirement | Priority |
| -- | -- | -- |
| CTRL-001 | Desktop mode must support WASD movement. | P0 |
| CTRL-002 | Desktop mode must support mouse look. | P0 |
| CTRL-003 | Desktop mode must support pointer lock. | P0 |
| CTRL-004 | Desktop mode must include a basic interact action. | P0 |
| CTRL-005 | Desktop mode should support mouse sensitivity adjustment. | P1 |
| CTRL-006 | Desktop mode should support a clear restart/exit-to-menu action. | P1 |
| CTRL-007 | Gamepad support may be added later. | P2 |

### 9.3 WebXR/VR requirements

<!-- linear:table-colwidths:200,200,200 -->
| ID | Requirement | Priority |
| -- | -- | -- |
| VR-001 | The app should support entering WebXR mode on compatible devices. | P0/P1 |
| VR-002 | VR mode must not be required for desktop play. | P0 |
| VR-003 | VR mode should support head tracking. | P0 |
| VR-004 | VR mode should support at least one locomotion option. | P1 |
| VR-005 | VR mode should include snap turning. | P1 |
| VR-006 | VR mode may include smooth locomotion for users who prefer it. | P1 |
| VR-007 | VR mode should avoid forced camera movement. | P0 |
| VR-008 | VR mode should include comfort settings such as turn mode, speed, and optional vignette if feasible. | P1 |

Note: Final priority of WebXR may be adjusted after technical feasibility review. The product vision treats WebXR as core, but implementation may prototype desktop first if needed.

### 9.4 Procedural generation requirements

<!-- linear:table-colwidths:200,200,200 -->
| ID | Requirement | Priority |
| -- | -- | -- |
| PROC-001 | The MVP must generate a Level 0-style layout from a seed. | P0 |
| PROC-002 | The same seed should reproduce the same generated layout. | P0 |
| PROC-003 | Different seeds should produce meaningfully different layouts. | P0 |
| PROC-004 | Generated layouts must include rooms and corridors. | P0 |
| PROC-005 | Generated layouts should include dead ends, turns, and loops. | P1 |
| PROC-006 | Generated layouts should include rare landmarks or distinguishing features. | P1 |
| PROC-007 | Generated layouts must avoid forbidden Level 0 elements, such as open sky or normal exterior streets. | P0 |
| PROC-008 | Generation should be separated from rendering so it can be tested independently. | P1 |
| PROC-009 | Future levels should be addable through level definitions. | P1 |
| PROC-010 | Generation should eventually support validation/linting against lore rules. | P2 |

### 9.5 Lore alignment requirements

<!-- linear:table-colwidths:200,200,200 -->
| ID | Requirement | Priority |
| -- | -- | -- |
| LORE-001 | MVP generation must use a Level 0-style level definition. | P0 |
| LORE-002 | The Level 0 definition must include visual, audio, layout, lighting, anomaly, and exit constraints. | P0 |
| LORE-003 | The project should treat the four selected wikis as the initial primary canon/source pool. | P0 |
| LORE-004 | Lore-derived content should be labeled as source-aligned, original, inspired, experimental, placeholder, or procedural. | P1 |
| LORE-005 | The MVP should avoid direct copied wiki text unless licensing and attribution are reviewed. | P0 |
| LORE-006 | Source contradictions should be tracked as future contradiction records. | P2 |
| LORE-007 | Named entities, factions, and exact source descriptions should be deferred until source review. | P1 |

Primary wiki/source pool referenced by DOC 03:

* Backrooms Wiki (Wikidot)
* Forgotten Places
* Backrooms MGHC
* Backrooms Wiki (Fandom)

### 9.6 Visual atmosphere requirements

<!-- linear:table-colwidths:200,200,200 -->
| ID | Requirement | Priority |
| -- | -- | -- |
| VIS-001 | Level 0-style spaces must use a sickly yellow/beige visual palette. | P0 |
| VIS-002 | Level 0-style spaces must include wallpaper-like wall surfaces. | P0 |
| VIS-003 | Level 0-style spaces must include damp or worn carpet-like floors. | P0 |
| VIS-004 | Level 0-style spaces must include low ceiling or office-like ceiling treatment. | P0 |
| VIS-005 | Spaces should include subtle decay such as stains, peeling, or discoloration. | P1 |
| VIS-006 | Spaces should avoid overdecorating; emptiness is part of the horror. | P1 |
| VIS-007 | Visual style should prioritize browser performance over photorealistic complexity. | P0 |

### 9.7 Audio requirements

<!-- linear:table-colwidths:200,200,200 -->
| ID | Requirement | Priority |
| -- | -- | -- |
| AUD-001 | MVP must include persistent fluorescent/electrical ambience. | P0 |
| AUD-002 | MVP should include spatialized or directionally meaningful audio events. | P1 |
| AUD-003 | MVP should include footstep or movement-related audio if feasible. | P1 |
| AUD-004 | MVP should include occasional distant unsettling sounds. | P1 |
| AUD-005 | MVP should include volume controls. | P1 |
| AUD-006 | Audio should support tension through silence or ambience changes. | P2 |

### 9.8 Lighting requirements

<!-- linear:table-colwidths:200,200,200 -->
| ID | Requirement | Priority |
| -- | -- | -- |
| LIGHT-001 | Level 0-style spaces must include fluorescent-style lighting. | P0 |
| LIGHT-002 | Lighting should create unease without making the MVP impossible to navigate. | P0 |
| LIGHT-003 | Flickering light events should be supported as anomalies or atmosphere. | P1 |
| LIGHT-004 | Lighting should be performant enough for browser and WebXR testing. | P0 |
| LIGHT-005 | Brightness/gamma accessibility settings may be added later. | P2 |

### 9.9 Anomaly requirements

<!-- linear:table-colwidths:200,200,200 -->
| ID | Requirement | Priority |
| -- | -- | -- |
| ANOM-001 | MVP should include at least two simple anomaly types. | P1 |
| ANOM-002 | Anomalies should be subtle and level-appropriate. | P1 |
| ANOM-003 | Anomalies should not soft-lock or unfairly trap the player. | P0 |
| ANOM-004 | Anomalies may include light flickers, distant sounds, repeated rooms, disappearing doors, or loop illusions. | P1 |
| ANOM-005 | Anomaly triggers should be controllable by level rules. | P2 |

### 9.10 Lore artifact requirements

<!-- linear:table-colwidths:200,200,200 -->
| ID | Requirement | Priority |
| -- | -- | -- |
| ART-001 | MVP should include short notes, warnings, signs, or environmental clues. | P1 |
| ART-002 | Lore artifacts should be brief and atmospheric rather than long exposition dumps. | P1 |
| ART-003 | Lore artifacts may hint at exits, anomalies, or prior explorers. | P1 |
| ART-004 | Lore artifacts must not make unsupported canon claims. | P0 |
| ART-005 | Lore artifact placement should be controlled by generation rules. | P1 |

### 9.11 Exit/escape requirements

<!-- linear:table-colwidths:200,200,200 -->
| ID | Requirement | Priority |
| -- | -- | -- |
| EXIT-001 | MVP must include at least one way to complete or escape a run. | P0 |
| EXIT-002 | The exit should represent escape from the current Level 0-style instance, not escape from the entire Backrooms. | P0 |
| EXIT-003 | Exit placement or activation should vary by seed. | P1 |
| EXIT-004 | Exit discovery should be hinted through environmental clues, anomalies, or visual/audio cues. | P1 |
| EXIT-005 | Reaching the exit should end the run, trigger a completion screen, or transition to a placeholder. | P0 |
| EXIT-006 | Exits should be rare enough to motivate exploration. | P1 |
| EXIT-007 | Exit mechanics should be simple for MVP. | P0 |

### 9.12 Performance requirements

<!-- linear:table-colwidths:200,200,200 -->
| ID | Requirement | Priority |
| -- | -- | -- |
| PERF-001 | Desktop mode should run smoothly on modern hardware. | P0 |
| PERF-002 | WebXR mode should be performant enough for early headset testing. | P1 |
| PERF-003 | Procedural generation should not cause long blocking freezes during play. | P1 |
| PERF-004 | Asset size should be kept modest for browser loading. | P1 |
| PERF-005 | Lighting and materials should be optimized for browser rendering. | P1 |
| PERF-006 | Performance budgets should be formalized in the Technical Feasibility document. | P1 |

### 9.13 Settings and accessibility requirements

<!-- linear:table-colwidths:200,200,200 -->
| ID | Requirement | Priority |
| -- | -- | -- |
| ACC-001 | The app should include volume control. | P1 |
| ACC-002 | The app should include mouse sensitivity control. | P1 |
| ACC-003 | The app should include VR comfort options when VR is supported. | P1 |
| ACC-004 | The player should have a clear way to exit/restart. | P0 |
| ACC-005 | The MVP should avoid forced camera movement. | P0 |
| ACC-006 | Brightness or visual comfort settings may be added later. | P2 |

---

## 10\. Non-functional requirements

<!-- linear:table-colwidths:200,200 -->
| Category | Requirement |
| -- | -- |
| Performance | The MVP must be smooth enough for browser play and early VR testing. |
| Maintainability | Generation logic should be testable separately from rendering. |
| Extensibility | Future levels should be addable through structured definitions. |
| Lore integrity | Generated content should be constrained by lore rules. |
| Replayability | Different seeds should create meaningfully different runs. |
| Usability | Players should understand how to start, move, interact, and restart. |
| Comfort | VR should avoid forced motion and include comfort options. |
| Accessibility | Basic settings should allow audio and control adjustments. |
| Modularity | Rendering, input, generation, audio, and lore data should be separated where practical. |
| Legal caution | Direct source text reuse should be avoided until licensing is reviewed. |

---

## 11\. MVP scope

## MVP-1: Procedural Level 0 WebXR Prototype

### Included in MVP

* Browser-playable 3D scene.
* Desktop controls.
* Basic WebXR entry or early VR compatibility path.
* Seeded Level 0-style procedural layout.
* Recognizable Level 0 visual identity.
* Fluorescent/electrical audio ambience.
* Basic lighting and flicker behavior.
* Basic anomaly events.
* Short lore artifacts or environmental clues.
* Simple exit/escape loop.
* Restart/new seed flow.
* Basic settings.

### Excluded from MVP

* Multi-level progression.
* Full entity ecosystem.
* Combat.
* Complex inventory.
* Multiplayer.
* Accounts.
* Server persistence.
* Runtime AI-generated level design.
* Full lore linter implementation.
* Full source-reviewed canon database.
* Advanced procedural narrative.

---

## 12\. Priority definitions

<!-- linear:table-colwidths:200,200 -->
| Priority | Meaning |
| -- | -- |
| P0 | Required for MVP to exist. Without this, the prototype fails its core purpose. |
| P1 | Strongly desired for MVP quality and should be included if feasible. |
| P2 | Useful after MVP or as an enhancement if time allows. |
| P3 | Future expansion only. Not relevant to MVP delivery. |

---

## 13\. MVP requirement priority summary

<!-- linear:table-colwidths:200,200 -->
| Requirement group | Priority summary |
| -- | -- |
| Browser-playable scene | P0 |
| Desktop controls | P0 |
| Seeded Level 0 generation | P0 |
| Basic Level 0 visual identity | P0 |
| Basic fluorescent audio atmosphere | P0 |
| Escape/run completion loop | P0 |
| WebXR support | P0/P1 depending on feasibility |
| Basic anomalies | P1 |
| Lore artifacts/clues | P1 |
| Settings | P1 |
| Lore linter | P2 |
| Entities | P2 |
| Multiple levels | P2/P3 |
| Multiplayer | P3 |
| Runtime AI generation | P3 |

---

## 14\. Acceptance criteria

### 14.1 Browser entry

* Given a user opens the app in a modern browser, when the page loads, then the user should see a way to start a run.
* Given WebXR is unavailable, when the user opens the app, then desktop mode should still be playable.
* Given the user starts a new run, when generation completes, then the player should spawn into a Level 0-style environment.

### 14.2 Desktop controls

* Given the player is in desktop mode, when they use WASD, then the player should move through the environment.
* Given the player is in desktop mode, when they move the mouse, then the camera should rotate.
* Given pointer lock is active, when the user moves the mouse, then camera movement should feel game-like.
* Given an interactable item is in range, when the player uses the interaction action, then the item should respond.

### 14.3 Procedural generation

* Given the same seed is used twice, when generation runs, then the resulting layout should be reproducible.
* Given two different seeds are used, when generation runs, then the resulting layouts should differ meaningfully.
* Given Level 0 generation runs, then the resulting space should include Level 0-style visual/audio/layout motifs.
* Given Level 0 generation runs, then forbidden elements such as open sky, normal exterior streets, and lush natural environments should not appear.

### 14.4 Atmosphere

* Given the player enters the generated level, then the environment should include a persistent fluorescent/electrical ambience.
* Given the player explores for a short period, then the environment should produce at least occasional unsettling atmosphere events.
* Given the player observes the space, then the visual design should clearly evoke Level 0-style liminal office-like repetition.

### 14.5 Anomalies

* Given the player explores the level, then at least one subtle anomaly type should be able to occur.
* Given an anomaly occurs, then it should be understandable as atmospheric or unsettling rather than a game-breaking bug.
* Given an anomaly occurs, then it should not permanently trap or soft-lock the player.

### 14.6 Lore artifacts

* Given the player explores the level, then they should be able to encounter at least one lore artifact or environmental clue.
* Given a lore artifact appears, then it should be short, atmospheric, and appropriate to the level.
* Given a lore artifact references lore, then it should avoid unsupported source claims.

### 14.7 Escape loop

* Given the player explores the level, then a valid exit/run-completion condition should exist.
* Given the player finds or triggers the exit condition, then the run should end, complete, or transition to a placeholder state.
* Given the run completes, then the player should be able to restart or begin another seed.

### 14.8 VR comfort

* Given the player enters VR mode on a compatible device, then the experience should avoid forced camera movement.
* Given the player uses VR mode, then comfort options should be available if implemented in the MVP.
* Given VR is not stable enough for full MVP certification, then desktop play must still satisfy the core MVP loop.

---

## 15\. Product success metrics

### 15.1 Quantitative metrics

Potential metrics for later testing:

* Time to first playable interaction.
* Average session length.
* Number of runs per tester.
* Replay rate after first escape/failure.
* Average time to find exit.
* Number of seeds tested.
* Frame rate stability.
* Load time.
* Number of generation failures.
* Number of lore validation warnings/errors once linter exists.

### 15.2 Qualitative metrics

Key tester feedback targets:

* “This feels like the Backrooms.”
* “It was different when I replayed it.”
* “The space felt coherent, not random.”
* “The sound made me uneasy.”
* “I had a reason to explore.”
* “The exit felt discoverable but not obvious.”
* “VR made the space feel more real.”
* “I want to try another seed.”

---

## 16\. Risk table

<!-- linear:table-colwidths:200,200,200 -->
| Risk | Severity | Mitigation |
| -- | -- | -- |
| Procedural layouts feel random or boring | High | Use lore-constrained generation, landmarks, layout rules, and testable seeds. |
| Level 0 does not feel recognizable | High | Define strict visual/audio/layout requirements. |
| Scope creep overwhelms MVP | Very High | Lock MVP to Level 0, basic anomalies, and simple escape loop. |
| VR causes motion sickness | High | Avoid forced camera motion and add comfort options early. |
| Browser performance is poor | High | Keep assets modest, optimize lighting, and establish performance budgets. |
| Lore usage creates licensing issues | Medium/High | Avoid copied wiki text and track source/attribution requirements. |
| Too many enemies weaken liminal dread | Medium | Defer entities or keep them subtle until environment horror works. |
| Exit is too hard or too obvious | Medium | Use environmental clues and playtest exit placement/rules. |
| Generated spaces are too confusing | Medium | Include rare landmarks and avoid overly chaotic generation. |
| Generated spaces are too readable | Medium | Use loops, repetition, and subtle anomalies to preserve disorientation. |

---

## 17\. Dependencies

The PRD depends on or points toward:

* DOC 03 — Lore Alignment Spec for source/canon strategy.
* DOC 04 — Vision Document for emotional/product direction.
* Future GDD for detailed gameplay mechanics.
* Future Procedural Generation Design Spec for algorithms and generation architecture.
* Future Technical Feasibility Notes for engine choice and WebXR constraints.
* Future ADRs for major technical decisions.
* Future source review for exact lore/canon usage.
* Future licensing review for public use of source-derived content.

---

## 18\. Open questions

 1. Is WebXR a strict P0 for the first MVP, or can desktop prototype come first with WebXR as P1?
 2. What is the minimum acceptable generated layout size for MVP testing?
 3. Should the first prototype include any overt entity, or should it rely only on environmental dread and anomalies?
 4. Should the MVP exit end the run, show a completion screen, or transition to a placeholder “Level ???” state?
 5. Should players be able to manually enter a seed in the MVP?
 6. Should seeds be visible by default, hidden in debug mode, or shown only after run completion?
 7. Should the player have a flashlight in MVP, or is Level 0 lighting sufficient without one?
 8. How many anomaly types are required for the first satisfying test build?
 9. Should lore artifacts be handcrafted, template-driven, or generated from structured pools?
10. What exact performance targets should be set for desktop and headset browsers?
11. Which engine should be selected: Babylon.js, Three.js, React Three Fiber, PlayCanvas, or another stack?
12. What asset style best balances atmosphere and browser performance?
13. Should Level 0 generation be grid-based, graph-based, chunk-based, wave-function-collapse-like, or hybrid?
14. How strict should lore validation be during MVP if the full linter is not yet implemented?
15. Should the public title remain Backrooms VR Web Simulation or eventually become an original title?

---

## 19\. PRD conclusion

The MVP should be a focused procedural Level 0 WebXR/desktop prototype with a simple but meaningful escape loop.

The core required experience is:

> The player opens the game in a browser, enters a generated Level 0-style space, explores an eerie and lore-aligned environment, notices clues and anomalies, finds or triggers an exit from the current generated instance, and can replay with a different seed.

This PRD intentionally keeps the MVP narrow while preserving the long-term architecture direction.

The next document should be **DOC 06 — Game Design Document (GDD)**, which will turn these product requirements into detailed gameplay systems, player mechanics, progression rules, interaction design, anomaly behavior, level experience, and moment-to-moment play.
