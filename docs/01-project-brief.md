# 01 — Project Brief: Backrooms VR Web Simulation

## Document status

**Document type:** Project Brief  
**Project:** Backrooms VR Web Simulation  
**Phase:** Concept / Initiation  
**Created for:** Initial product framing and planning  
**Primary purpose:** Define the basic identity, goals, constraints, and initial MVP direction for the project before moving into problem statement, lore specification, product requirements, game design, and architecture.

---

## 1. Working title

**Backrooms VR Web Simulation**

This is a temporary functional name. It clearly communicates the concept while leaving room for a more evocative title later.

Possible future title directions include:

- **Liminal Drift**
- **No-Clip**
- **Threshold**
- **Level 0**
- **Driftspace**
- **Out of Bounds**
- **The Yellow Rooms**
- **Static Below**
- **Infinite Fluorescence**

The current working title should remain in use until the vision, lore position, and brand tone are clarified.

---

## 2. One-sentence concept

A browser-based WebXR liminal horror simulation where players explore procedurally generated, lore-aligned Backrooms levels that feel infinite, unstable, replayable, and psychologically unsettling.

---

## 3. Short pitch

**Backrooms VR Web Simulation** is a browser-accessible WebXR horror/exploration simulation that lets players enter an infinite-feeling Backrooms environment directly from a web browser. The experience combines liminal exploration, procedural world generation, environmental storytelling, spatial audio, subtle anomaly systems, and lore-constrained level design.

The project is not intended to be a static Backrooms map or a simple monster-chase horror game. Its core idea is to build a **Backrooms simulation engine**: a system that generates playable spaces according to structured level rules, canon-inspired constraints, entity rules, hazards, audio profiles, and exit conditions.

The first version should focus on a highly atmospheric, procedurally generated Level 0-style experience with desktop browser play and WebXR/VR support. Over time, the system should expand to support additional levels, deeper lore modeling, procedural anomalies, entity systems, and possible AI-assisted world/lore generation.

---

## 4. Core product identity

The project combines three overlapping identities:

| Identity | Meaning |
|---|---|
| **Liminal exploration simulator** | The primary experience is wandering through uncanny, lonely, impossible-feeling spaces. |
| **Procedural sandbox** | The world is generated from rules and seeds, supporting infinite replayability. |
| **Browser/WebXR app** | The experience should be accessible from a link, with VR support where available. |

The project should feel less like a traditional level-based horror game and more like an eerie simulation of a place that should not exist.

The core product identity is:

> A lore-aligned procedural Backrooms simulation that can be entered instantly through the browser and optionally experienced in VR.

---

## 5. Product direction decision

The project will **not** primarily be Option A: a structured monster-chase horror game.

Instead, the selected direction is a mix of:

### Option B — Liminal exploration simulator

Focus areas:

- Atmosphere
- Loneliness
- Psychological dread
- Spatial repetition
- Uncanny familiarity
- Environmental storytelling
- The feeling of being lost in impossible architecture

### Option C — Systems-driven procedural sandbox

Focus areas:

- Seeded generation
- Infinite replayability
- Procedural layout rules
- Level-specific generation constraints
- Dynamic anomalies
- Lore-driven item/entity/hazard rules
- Expandable simulation systems

The project should be a **hybrid of B and C**:

> A systems-driven liminal exploration simulator that uses procedural generation to reflect the infinite nature of the Backrooms.

---

## 6. Core player fantasy

The player fantasy is:

> I have accidentally entered a place outside normal reality, and I need to understand its rules before it understands me.

The experience should make the player feel:

- Lost
- Watched
- Small
- Curious
- Unsafe
- Disoriented
- Isolated
- Tempted to explore deeper
- Relieved by anything familiar
- Suspicious when things seem too normal

The strongest moments should come from uncertainty, pattern recognition, and spatial unease rather than constant combat or scripted jump scares.

Example emotional beats:

- “I think I have already been down this hallway.”
- “That door was not there before.”
- “The lights are flickering in a pattern.”
- “The sound came from behind me, but there was no hallway there.”
- “The room repeated, but one detail changed.”
- “This exit feels too convenient.”

---

## 7. Core experience promise

The product should promise players:

> Every run drops you into a recognizable but newly generated Backrooms-like space, where the rules are partially knowable, the layout is unstable, and the way out is never guaranteed.

The experience should be immediately understandable, replayable, atmospheric, lore-aware, unsettling, accessible from the browser, and enhanced by VR but not dependent on VR.

---

## 8. Target audience

### Primary audience

- Backrooms fans
- Liminal space fans
- Analog horror fans
- Indie horror players
- VR horror players
- Exploration game players
- Streamers and content creators
- Players interested in procedural horror

### Secondary audience

- Web game players
- Experimental simulation fans
- Procedural generation enthusiasts
- AI-generated content/lore enthusiasts if AI systems are later added
- Players interested in surreal walking simulators

---

## 9. Differentiation

Many Backrooms-inspired projects focus on static levels, chase sequences, simple horror mazes, visual resemblance to Level 0, jump scares, and linear objectives.

This project should differentiate itself through:

1. **Browser accessibility** — players can open a URL and enter without a native installer.
2. **WebXR support** — the Backrooms can be experienced through VR headsets where supported.
3. **Lore-constrained procedural generation** — generated spaces are not random mazes; they are produced from lore-aware level definitions.
4. **Infinite-feeling replayability** — each run can differ through layout seeds, anomaly events, item placement, exit conditions, and audio/visual variation.
5. **Simulation-first design** — the Backrooms are treated as a system with rules, not just a setting.
6. **Expandable canon model** — multiple levels, entities, factions, hazards, resources, and transitions can eventually be modeled through structured data.

---

## 10. Platform goals

### Primary platform

Modern web browsers with hardware-accelerated 3D support.

The project should eventually support:

- Desktop browsers
- WebGL/WebGPU-compatible devices
- Pointer lock desktop play
- WebXR entry where supported
- VR headset browsers where feasible

### VR target

Initial VR support should prioritize WebXR-compatible devices, likely including standalone headset browsers such as Meta Quest Browser where practical.

VR support should be treated as a major design feature, not merely an afterthought. However, desktop mode must remain fully playable for development, testing, accessibility, and broader reach.

### Fallback mode

Desktop browser play should support:

- WASD movement
- Mouse look
- Pointer lock
- Basic interaction key
- Settings menu
- Optional gamepad support later

Mobile browser support is not part of the first MVP unless discovered to be easy and worthwhile.

---

## 11. Genre and tone

### Genre

- Liminal horror
- Exploration simulator
- Procedural horror sandbox
- WebXR immersive experience
- Environmental storytelling game

### Tone

The tone should be uncanny, lonely, mysterious, oppressive, quietly terrifying, ambiguous, weirdly mundane, and occasionally surreal.

The horror should usually be slow-burn and environmental, not loud and arcade-like.

---

## 12. Design pillars

### Pillar 1 — Liminal dread over cheap jump scares

The primary horror should come from empty spaces, repetition, sound, scale, uncertainty, spatial confusion, unreliable navigation, and environmental implication.

Jump scares may exist, but they should be rare and earned.

### Pillar 2 — The environment is the main character

The Backrooms should feel like an active system.

Examples:

- Hallways subtly change.
- Familiar spaces return with one wrong detail.
- Doors appear or disappear.
- Sounds imply movement outside visible space.
- Lighting seems to guide or mislead the player.
- The geometry may loop in ways the player cannot immediately prove.

### Pillar 3 — Procedural generation must be lore-constrained

The generator should not merely place random walls and props.

It should generate environments from level-specific rules:

- Visual motifs
- Architecture patterns
- Hazard rules
- Entity rules
- Audio profiles
- Exit rules
- Forbidden elements
- Anomaly rules

### Pillar 4 — Browser-first accessibility

The experience should be easy to access:

- Open a link
- Start in desktop mode
- Enter VR if available
- Restart with a new seed

This browser-first approach is a key differentiator.

### Pillar 5 — VR should deepen presence

VR should increase scale, claustrophobia, vulnerability, spatial audio impact, fear of turning around, and awareness of distance and darkness.

VR movement must include comfort options to avoid motion sickness.

### Pillar 6 — Systems should support future expansion

Even if the MVP is small, the architecture should anticipate more levels, more entities, more anomalies, more exit types, lore pickups, generated events, seed sharing, possible multiplayer, and possible AI-assisted content generation.

---

## 13. Core gameplay loop

The foundational loop is:

1. Enter a generated Backrooms level.
2. Explore rooms, corridors, and liminal spaces.
3. Observe environmental clues and anomalies.
4. Collect notes, supplies, or navigational hints.
5. Avoid hazards, entities, or destabilizing conditions.
6. Discover or trigger an exit condition.
7. Escape, transition, fail, or descend deeper.
8. Replay with a new seed or continue into another generated level.

Condensed loop:

> Explore → Notice → Interpret → Survive → Escape → Descend

The experience should reward patient observation and curiosity.

---

## 14. Procedural replayability model

Replayability should come from multiple layers of variation:

| Layer | Description |
|---|---|
| **Layout variation** | Corridors, rooms, loops, landmarks, dead ends, and transitions change by seed. |
| **Anomaly variation** | Flickers, audio events, disappearing objects, repeated spaces, and geometry tricks vary. |
| **Exit variation** | Exit types and locations can differ between runs. |
| **Lore pickup variation** | Notes, warnings, logs, symbols, and environmental traces appear in different combinations. |
| **Threat variation** | Hazards and entities may vary by level rules and seed. |
| **Resource variation** | Useful items may appear inconsistently or in different risk contexts. |
| **Level transition variation** | Escaping one level may not always lead to the same destination in later versions. |

Important distinction:

> The game should feel unpredictable, not arbitrary.

Procedural generation must produce coherent spaces that feel intentionally Backrooms-like.

---

## 15. Lore alignment requirement

Lore alignment is a first-class requirement.

The project should eventually align with major Backrooms wiki traditions and community lore, while converting them into a practical internal canon model suitable for gameplay and procedural generation.

This means the system should track level identity, level visual rules, level architectural rules, level danger profile, entity eligibility, item/resource eligibility, exit/entry rules, faction references, environmental anomalies, forbidden elements, and original-vs-source-aligned content distinctions.

The project should use a **Source-Aligned Internal Canon** approach:

> Respect major Backrooms lore sources, but convert them into structured game-ready rules that can resolve contradictions and support procedural systems.

This avoids the two extremes of either copying lore rigidly or ignoring lore entirely.

---

## 16. Initial MVP direction

### MVP name

**MVP-1: Procedural Level 0 WebXR Prototype**

### MVP goal

Create a browser-playable and VR-compatible procedural Level 0-style experience that demonstrates Backrooms atmosphere, seeded layout generation, lore-constrained design, basic exploration, environmental anomalies, simple exit mechanics, and desktop/WebXR play modes.

### MVP player flow

1. Player opens the web app.
2. Player starts a new run.
3. The app generates a Level 0-style environment from a seed.
4. Player explores using desktop controls or VR controls.
5. The environment produces subtle audio/lighting/anomaly events.
6. Player discovers clues or environmental hints.
7. Player finds or triggers an exit condition.
8. Player escapes, fails, or restarts with a new seed.

---

## 17. MVP must-have features

| Feature | Requirement |
|---|---|
| Browser-playable 3D scene | The experience runs in a modern browser. |
| Desktop movement | WASD and mouse-look controls are available. |
| Basic WebXR support | Supported devices can enter VR mode. |
| Seeded procedural Level 0 layout | A new run can generate a different but recognizable Level 0-style space. |
| Liminal visual style | Yellow wallpaper, damp carpet, fluorescent lighting, low-ceiling office-like repetition. |
| Spatial audio | Fluorescent hum, distant sounds, footsteps, and positional unease. |
| Simple objective | Find an exit, no-clip threshold, anomalous door, or similar escape condition. |
| Basic anomalies | At least a few systemic unsettling events, such as flickers, loops, repeated rooms, or disappearing doors. |
| Lore pickups | Notes, warnings, or traces placed according to level rules. |
| Restart/new seed | The player can replay with a different generated environment. |

---

## 18. MVP should-not-have features yet

The first MVP should avoid full multiplayer, many Backrooms levels, complex inventory, large-scale combat, advanced entity AI, account systems, marketplace/mod systems, expensive photorealism, overly broad procedural generation, and AI-generated levels in the runtime path before deterministic generation works.

The MVP should prove the core feel and generation model first.

---

## 19. Initial Level 0 MVP identity

The first playable environment should be Level 0-inspired and should emphasize yellowish wallpaper, damp carpet, fluorescent hum, repeating office-like corridors, low ceilings, rare landmarks, mild spatial impossibility, isolation, scarce clues, rare exits, and minimal or no overt entity presence at first.

The player should be able to recognize the space quickly, but each generated run should have unique layout structure and event timing.

---

## 20. Initial technical direction

The exact stack is not decided in this brief, but likely candidates include Babylon.js, Three.js, React Three Fiber, WebXR, Vite, React, TypeScript, Web Audio API, custom TypeScript generation using seeded RNG, local storage, and an optional backend later.

The first technical evaluation should compare **Babylon.js** and **Three.js**.

Babylon.js may be attractive because it has strong game-engine-like features and WebXR support. Three.js may be attractive because of ecosystem flexibility and low-level control.

This decision should be formalized later in an ADR.

---

## 21. Key system concepts

The project should eventually be organized around these systems:

| System | Purpose |
|---|---|
| Level Definition System | Stores structured lore/gameplay rules for each Backrooms level. |
| Procedural Layout System | Generates rooms, corridors, loops, and landmarks. |
| Visual Motif System | Applies level-specific surfaces, colors, props, lighting, and materials. |
| Audio Atmosphere System | Controls hums, echoes, distant sounds, and positional audio events. |
| Anomaly System | Produces reality-breaking events and unstable spatial behavior. |
| Entity System | Spawns and controls level-valid threats and encounters. |
| Exit/Transition System | Controls escape routes and movement between levels. |
| Lore Pickup System | Places notes, logs, symbols, traces, and environmental narrative objects. |
| Lore Linter | Validates generated spaces against internal lore constraints. |
| WebXR Input System | Handles VR session entry, controllers, movement, and comfort options. |

---

## 22. Lore linter concept

A future development tool called the **Lore Linter** should validate generated content.

Example checks:

- A Level 0 layout should not generate an open skybox.
- A Level 0 layout should not spawn entities forbidden by its lore profile.
- Exit placement should match rarity and discovery rules.
- Visual motifs should match the level identity.
- Audio events should be appropriate for the level.
- Generated notes should not reference disabled factions or unsupported canon elements.
- Layout repetition should fall within target bounds.

The linter is not required for the very first prototype, but the architecture should leave room for it.

---

## 23. Major risks

| Risk | Severity | Notes |
|---|---:|---|
| Browser VR performance | High | VR requires stable high frame rates. Poor optimization will ruin comfort and immersion. |
| Motion sickness | High | Movement design and comfort options are critical. |
| Procedural incoherence | High | Random generation can easily feel meaningless or ugly. |
| Lore inconsistency | High | Backrooms fans may reject content that contradicts expected lore. |
| Scope creep | Very high | The Backrooms concept can expand infinitely; MVP discipline is essential. |
| Asset quality | Medium | Atmosphere depends heavily on lighting, texture, and sound design. |
| WebXR compatibility | Medium | Device/browser compatibility may vary. |
| Legal/IP/licensing ambiguity | Medium | Backrooms lore sources and wiki content may have licensing considerations. |
| Overemphasis on entities | Medium | Too many monsters could undermine liminal dread. |

---

## 24. Prototype success criteria

The first prototype succeeds if a tester can honestly say:

> This feels like the Backrooms, but I can tell it is not the same map every time.

More specific criteria include immediate Level 0 recognizability, meaningfully different generated runs, coherent generated spaces, dread within the first minute, reliable desktop controls, testable WebXR mode, basic objective clarity, and extensibility toward additional level definitions.

---

## 25. Near-term documentation roadmap

This brief should be followed by the following documents, created one at a time:

1. **Problem Statement** — defines the player/product/development problem this project solves.
2. **Lore Alignment Spec** — defines canon strategy, source tiers, level/entity/item schemas, and lore constraints.
3. **Vision Document** — defines the long-term product vision, emotional target, and end-state experience.
4. **Product Requirements Document** — converts the concept into concrete product requirements and acceptance criteria.
5. **Game Design Document** — defines gameplay systems, player mechanics, objectives, progression, level experience, and interaction rules.
6. **Procedural Generation Design Spec** — defines generation algorithms, seeds, layout graphs, chunk systems, validation, and replayability layers.
7. **Technical Feasibility Notes** — evaluates engines, WebXR constraints, performance constraints, browser limitations, and risks.
8. **Architecture Spec** — defines system modules, data flow, runtime architecture, and package organization.
9. **ADRs** — captures major technical decisions such as engine choice, generation strategy, and persistence approach.
10. **Implementation Plan** — breaks the work into ordered engineering phases.

---

## 26. Open questions

1. Which Backrooms wiki sources will be treated as primary references?
2. How strictly should the project adhere to wiki canon versus internal game canon?
3. What licensing restrictions apply to using names, concepts, entities, and faction references?
4. Should the game use the term “Backrooms” publicly, or should it eventually use an original title and describe itself as Backrooms-inspired?
5. Should Level 0 include entities in the MVP, or should the first version rely on environment/anomaly horror only?
6. Which engine should be selected: Babylon.js, Three.js, React Three Fiber, PlayCanvas, or another option?
7. What VR movement style should be default: smooth locomotion, teleport, snap turn, or configurable modes?
8. Should the first prototype include win/loss states, or only exploration and exit discovery?
9. Should procedural generation be room-graph-based, grid-based, chunk-based, wave-function-collapse-like, or hybrid?
10. How much lore text should appear in-world versus being implied environmentally?

---

## 27. Initial conclusion

The project should begin as a focused procedural Level 0 WebXR prototype, but it should be designed as the foundation for a larger lore-aligned Backrooms simulation platform.

The core challenge is to make procedural generation feel like canon-aware liminal space rather than random maze generation.

The first development milestone should therefore prove browser-based 3D exploration, VR feasibility, Level 0 atmosphere, seeded replayability, lore-constrained generation, and a basic escape loop.
