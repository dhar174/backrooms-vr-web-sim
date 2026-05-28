# DOC 08 — Technical Feasibility Notes: Backrooms VR Web Simulation

## Document status

**Document type:** Technical Feasibility Notes<br>**Project:** Backrooms VR Web Simulation<br>**Phase:** Technical Discovery / Pre-Architecture<br>**Follows:** dhar174/backrooms-vr-web-sim#5 — DOC 07: Procedural Generation Design Spec<br>**Precedes:** DOC 09 — System Architecture Spec<br>**Purpose:** Evaluate the technical feasibility of building a browser-based WebXR procedural Backrooms simulation, identify major platform risks, compare likely rendering/game-engine options, define required validation spikes, and prepare for architecture and ADR decisions.

---

## 1\. Executive summary

Backrooms VR Web Simulation appears technically feasible as a browser-based 3D/WebXR project, but the MVP must be scoped carefully. The safest technical path is to begin with a desktop-browser prototype, data-driven procedural generation, and a modular rendering layer, then validate WebXR support and performance through focused spikes before committing to advanced VR features.

The strongest likely implementation direction is:

> TypeScript + Vite + a browser 3D engine, with Babylon.js or Three.js as the primary engine candidates, and deterministic procedural generation implemented as engine-agnostic TypeScript modules.

The highest feasibility risks are:

* WebXR compatibility across devices and browsers.
* VR performance and comfort.
* Procedural generation coherence.
* Rendering enough modular geometry without browser performance problems.
* Spatial audio and lighting performance.
* Avoiding overengineering before the MVP loop is playable.

The recommended technical strategy is:

1. Build generation logic as pure/data-driven TypeScript first.
2. Render a small generated Level 0 scene on desktop.
3. Validate movement, collisions, lighting, and audio.
4. Add WebXR entry and comfort controls.
5. Add local spatial continuity and stability buffer tracking.
6. Add anomalies, clue placement, and exit flow.
7. Use ADRs to lock engine/framework choices after spikes.

---

## 2\. Feasibility conclusion

The MVP is feasible if the project remains focused on:

* One Level 0-style environment.
* Desktop browser first.
* Basic WebXR support second.
* Modular low-poly/stylized-realistic assets.
* Seeded graph-based procedural generation.
* Limited anomalies.
* Simple exit loop.
* No full multiplayer.
* No full entity ecosystem.
* No runtime AI-generated levels.
* No photorealistic AAA asset target.

The MVP becomes risky if it attempts:

* True infinite geometry streaming too early.
* Multiple levels before Level 0 works.
* Advanced non-Euclidean topology before simple graph loops work.
* Complex entity AI before atmosphere is proven.
* High-fidelity lighting/materials before performance budgets exist.
* WebXR as the only playable mode.

---

## 3\. Technical feasibility assumptions

This document is based on planning assumptions and should be validated through implementation spikes.

Important caveat:

> Browser, WebXR, engine, and headset support can change over time. Before committing to engine and platform decisions, implementation should verify current official documentation and test on actual target devices.

Assumptions to validate:

* Modern desktop browsers can run the Level 0 prototype smoothly.
* A browser 3D engine can support the needed rendering, collision, audio, and WebXR features.
* WebXR can be supported on at least some target headset/browser combinations.
* Procedural generation can run quickly enough for MVP scale.
* Modular geometry can be rendered efficiently enough for desktop and early VR.
* Spatial audio is sufficient through browser/engine APIs.
* Local storage is enough for early settings/debug/run metadata.

---

## 4\. Candidate technical stack

### 4.1 Likely baseline stack

A strong baseline candidate is:

<!-- linear:table-colwidths:200,200 -->
| Layer | Candidate |
| -- | -- |
| Language | TypeScript |
| Build tool | Vite |
| Rendering/game engine | Babylon.js or Three.js |
| UI shell | Minimal TypeScript app or React if needed |
| Procedural generation | Custom TypeScript modules |
| Audio | Engine audio APIs and/or Web Audio API |
| Persistence | LocalStorage or IndexedDB for early settings/seeds |
| Deployment | Static hosting such as GitHub Pages, Netlify, Vercel, or similar |
| Testing | Vitest for pure generation logic; browser/manual tests for rendering/VR |

### 4.2 Main engine candidates

The most relevant candidates are:

1. Babylon.js.
2. Three.js.
3. React Three Fiber.
4. PlayCanvas.
5. Godot Web Export.

The MVP should not evaluate every possible engine indefinitely. It should run small spikes and then select one through an ADR.

---

## 5\. Engine candidate: Babylon.js

### Potential strengths

Babylon.js may be a strong fit because it is relatively game-engine-like for the web.

Potential advantages:

* Mature browser 3D engine.
* Strong TypeScript support.
* Built-in scene, camera, material, mesh, collision, and input systems.
* WebXR support is a major part of the engine ecosystem.
* Useful helpers for cameras, collisions, physics integrations, and scene management.
* Good fit for a code-first browser game/simulation.
* May reduce the amount of engine infrastructure the project must write manually.

### Potential weaknesses

Potential concerns:

* Engine abstraction may feel heavier than raw Three.js.
* Some patterns may require learning Babylon-specific conventions.
* Bundle size and performance must be checked.
* Visual style and asset pipeline need evaluation.
* WebXR behavior must be tested on actual target hardware.

### Feasibility rating

**High candidate for MVP.**

Babylon.js should be strongly considered if the project wants engine-like support for WebXR, cameras, collisions, and game-loop concerns.

---

## 6\. Engine candidate: Three.js

### Potential strengths

Three.js is flexible, widely used, and has a large ecosystem.

Potential advantages:

* Very popular browser 3D library.
* Flexible rendering control.
* Large community and many examples.
* WebXR support exists through the ecosystem.
* Good for custom engine architecture.
* Strong fit if the project wants lower-level control.
* Easy to pair with custom procedural systems.

### Potential weaknesses

Potential concerns:

* More systems may need to be built or integrated manually.
* Game-oriented features may require additional libraries or custom code.
* Collision, input, scene lifecycle, and VR comfort systems may require more custom design.
* Without discipline, architecture can become scattered.

### Feasibility rating

**High candidate for MVP.**

Three.js should be strongly considered if the project prioritizes flexibility and custom architecture over engine-like built-ins.

---

## 7\. Engine candidate: React Three Fiber

### Potential strengths

React Three Fiber can be attractive if the project wants React-driven UI and declarative scene composition.

Potential advantages:

* Declarative wrapper around Three.js.
* Nice integration with React UI.
* Strong ecosystem for web-app-style 3D projects.
* Useful if menus, state, and UI become React-heavy.

### Potential weaknesses

Potential concerns:

* Adds React complexity to a project that may not need it.
* Declarative rendering can be powerful but may complicate low-level game-loop control.
* VR and procedural chunk lifecycle need careful architecture.
* May make performance debugging more complex if overused.

### Feasibility rating

**Medium candidate for MVP.**

React Three Fiber is viable, but the MVP may benefit from a simpler non-React rendering loop unless UI needs become significant.

---

## 8\. Engine candidate: PlayCanvas

### Potential strengths

PlayCanvas is web-native and game-oriented.

Potential advantages:

* Designed for browser-based games.
* Provides editor/workflow options.
* Good for asset-driven web games.
* Potentially strong for collaborative scene building.

### Potential weaknesses

Potential concerns:

* The project may prefer code-first procedural generation and custom systems.
* Workflow may be more editor/platform dependent.
* Integration with source-controlled procedural data should be evaluated.
* WebXR support and current limitations must be verified.

### Feasibility rating

**Medium candidate for MVP.**

Potentially useful, but less aligned with a fully code-first procedural simulation unless its workflow proves advantageous.

---

## 9\. Engine candidate: Godot Web Export

### Potential strengths

Godot is a full game engine and may be attractive for building games quickly.

Potential advantages:

* Full engine workflow.
* Scene editor.
* Physics, input, animation, and game systems.
* Strong general-purpose game development environment.

### Potential weaknesses

Potential concerns:

* Browser/Web export constraints must be verified.
* WebXR support and browser compatibility may be less straightforward than web-native engines.
* Generated web builds may be heavier than custom TypeScript/web engine builds.
* The project’s browser-first, WebXR-first identity may fit better with web-native tooling.

### Feasibility rating

**Low-to-medium candidate for MVP.**

Godot may be useful for native or non-browser prototypes, but the current project direction favors browser-native WebXR technology.

---

## 10\. Preliminary engine recommendation

Recommended path:

1. Spike Babylon.js.
2. Spike Three.js.
3. Compare WebXR entry, movement, collisions, audio, and modular scene generation.
4. Select engine with ADR.

Initial leaning:

> Babylon.js may be the strongest first MVP candidate because the project needs WebXR, game-loop support, collisions, cameras, input, and scene management quickly.

However:

> Three.js remains a strong candidate if the project wants maximum custom control and lower-level architecture.

The engine decision should not be finalized until a minimal spike compares both.

---

## 11\. Browser and WebXR feasibility

### 11.1 Browser baseline

The MVP should target modern desktop browsers first.

Required browser capabilities:

* WebGL rendering.
* Keyboard/mouse input.
* Pointer lock.
* Audio playback.
* Local storage.
* Sufficient JavaScript performance.

Optional/future capabilities:

* WebGPU.
* Web Workers for generation.
* IndexedDB for richer persistence.
* WebXR.

### 11.2 WebXR feasibility

WebXR is central to the product vision, but it is also one of the highest-risk areas.

Risks:

* Not all browsers support WebXR consistently.
* Headset browsers differ.
* Desktop VR browser support may vary.
* Performance requirements are stricter in VR.
* Comfort requirements are stricter in VR.
* Controller input needs device testing.

Recommendation:

> Treat WebXR as a core goal, but validate through a dedicated early spike before making the MVP dependent on VR-only workflows.

### 11.3 WebXR fallback strategy

The app must remain playable in desktop mode if WebXR is unavailable.

Fallback behavior:

* Hide or disable VR entry if unsupported.
* Show desktop start option.
* Avoid blocking game start on VR availability.
* Use desktop controls as baseline.

---

## 12\. VR comfort feasibility

VR comfort is feasible if designed early.

Required comfort principles:

* No forced camera movement.
* No unexpected camera shake.
* Avoid rapid acceleration.
* Avoid forced falls.
* Use snap turning as a likely default.
* Consider teleport locomotion or slow smooth locomotion.
* Provide movement speed settings.
* Keep UI readable and stable.
* Avoid requiring fast reflexes in MVP.

Feasibility concern:

> A desktop design can become uncomfortable in VR if movement and camera behavior are not planned from the beginning.

Recommendation:

* Build locomotion as a pluggable system.
* Keep game mechanics completable in both desktop and VR.
* Avoid chase mechanics in MVP.
* Test on real hardware as early as possible.

---

## 13\. Rendering feasibility

The visual target is feasible if the project chooses stylized-realistic modular assets rather than photorealistic AAA assets.

### Feasible MVP visual target

* Modular wall panels.
* Carpet planes/materials.
* Ceiling tiles.
* Fluorescent light fixtures.
* Simple stains and decals.
* Low-to-moderate prop density.
* Repeated geometry with variation.
* Baked/simple lighting where possible.

### Risky visual targets

* Heavy real-time global illumination.
* High-poly photorealistic assets everywhere.
* Large numbers of unique props.
* Excessive dynamic lights.
* Complex real-time shadows in VR.
* Large texture sets with long browser load times.

Recommendation:

> Use material repetition, lighting, fog/distance treatment, and audio to create atmosphere rather than relying on expensive asset density.

---

## 14\. Lighting feasibility

Lighting is feasible but must be budgeted carefully.

### MVP lighting approach

Possible approach:

* Use simple fluorescent-style fixtures.
* Use baked, faked, or low-cost lighting where possible.
* Use limited dynamic lights.
* Use emissive materials for fluorescent panels.
* Use occasional flicker effects.
* Avoid expensive shadow-heavy setups.

### Lighting risks

* Too many dynamic lights can harm browser/VR performance.
* Flicker effects can become uncomfortable if too intense.
* Poor lighting can make navigation frustrating.
* Heavy shadows may be expensive.

Recommendation:

> Treat lighting as atmosphere plus readability, not pure realism.

---

## 15\. Audio feasibility

Audio is feasible and should be a major atmospheric pillar.

### MVP audio needs

* Constant fluorescent/electrical hum.
* Occasional distant sounds.
* Interaction sounds.
* Optional footsteps.
* Exit cue sounds.
* Spatial/directional events where feasible.

### Audio risks

* Browser autoplay policies may require user interaction before audio starts.
* Spatial audio behavior may differ between desktop and VR.
* Audio can become annoying if looped poorly.
* Too much audio noise can reduce dread.

Recommendation:

* Start audio after player interaction.
* Use layered ambience.
* Keep events sparse.
* Test with headphones and VR audio.
* Use audio cues as gameplay hints sparingly.

---

## 16\. Procedural generation feasibility

The proposed graph-based procedural generation is feasible for MVP.

### Feasible MVP approach

* Generate a layout graph.
* Assign rooms/corridors/landmarks/exits.
* Validate reachability.
* Instantiate modular geometry.
* Track player current node.
* Maintain a local stability buffer.
* Allow only local atmospheric events at first.
* Add distant structural mutation later.

### Procedural generation risks

* Generated layouts may feel too random.
* Generated layouts may feel too repetitive.
* Exit placement may be unfair.
* Landmarks may be too rare or too common.
* Structural mutation may feel buggy if introduced too early.
* Generation/rendering coupling may make debugging hard.

Recommendation:

> Implement pure generation and validation before advanced mutation.

Critical sequencing rule:

> Do not implement structural mutation until local spatial continuity, reachability validation, and basic layout coherence are working.

---

## 17\. Local spatial continuity feasibility

The local spatial continuity requirement is feasible if the layout is graph/chunk based.

### Required capability

The system must know:

* Current player node/chunk.
* Recently visited nodes/chunks.
* Adjacent nodes/chunks.
* Line-of-sight or visibility approximation.
* Which nodes/chunks are locked.
* Which nodes/chunks are eligible for mutation.

### Feasible MVP implementation

For MVP, this can be implemented simply:

* Track current layout node.
* Track last N visited nodes.
* Lock current node.
* Lock adjacent nodes.
* Lock recent history.
* Do not mutate any locked node.
* Delay structural mutation entirely until later if needed.

### Suggested initial values

* Current node: always locked.
* Adjacent nodes: locked.
* Recent history: last 5 nodes locked.
* Mutation eligibility: 6 or more graph edges behind player.

### Feasibility rating

**High**, if the generator uses an abstract graph/chunk representation.

**Lower**, if the project tries to procedurally mutate raw geometry without logical node tracking.

---

## 18\. Collision and navigation feasibility

Collision is feasible but must be kept simple.

### MVP collision needs

* Player cannot pass through walls.
* Player can move through doorways/open connections.
* Player does not get stuck on tiny geometry.
* Exit/interactable zones can detect proximity.
* Basic floor/wall collision is stable.

### Risks

* Complex generated geometry can create collision bugs.
* VR collision and player height can be tricky.
* Narrow spaces may feel uncomfortable in VR.
* Doorway alignment errors can trap the player.

Recommendation:

* Use simple collision volumes.
* Keep walls axis-aligned or modular for MVP.
* Avoid cluttered collision props.
* Validate generated connections.
* Provide unstuck/reset debug option during development.

---

## 19\. Asset pipeline feasibility

The MVP is feasible with a small modular asset set.

### MVP asset set

* Wall module.
* Corner module.
* Corridor module.
* Floor/carpet material.
* Ceiling tile module.
* Fluorescent fixture.
* Door/threshold frame.
* Note/sign object.
* Decals/stains.
* A few rare props.

### Asset strategy

* Use reusable modular pieces.
* Keep texture sizes reasonable.
* Use variation through materials/decals rather than unique meshes.
* Keep prop density low.
* Prefer original assets or clearly licensed assets.

### Risks

* Poor asset quality can weaken atmosphere.
* Large textures can hurt load time.
* Licensing can become messy if public assets are used carelessly.

Recommendation:

> Start with simple placeholder assets, then improve atmosphere through material passes, lighting, and audio.

---

## 20\. Data-driven lore and level definitions feasibility

A data-driven lore system is feasible and strongly recommended.

### Feasible MVP data files

Potential data files:

```text
src/data/levels/level-0.json
src/data/anomalies/level-0-anomalies.json
src/data/artifacts/level-0-artifacts.json
src/data/materials/level-0-materials.json
```

Or TypeScript definitions:

```text
src/lore/levels/level0.ts
src/lore/anomalies/level0Anomalies.ts
src/lore/artifacts/level0Artifacts.ts
```

### Recommendation

Use TypeScript types for validation during development, with possible JSON export/import later.

Benefits:

* Strong typing.
* Better editor support.
* Easier refactoring.
* Better alignment with procedural systems.

---

## 21\. Testing feasibility

Testing is feasible if generation is separated from rendering.

### Unit-testable systems

* Seeded RNG.
* Layout graph generation.
* Reachability validation.
* Spawn-to-exit distance.
* Landmark spacing.
* Exit placement.
* Local stability buffer.
* Mutation eligibility.
* Lore constraint checks.

### Harder-to-test systems

* Visual atmosphere.
* VR comfort.
* Spatial audio quality.
* Subjective dread.
* Motion sickness.
* Player interpretation of clues.

### Testing recommendation

Use two layers:

1. Automated tests for generation and validation logic.
2. Manual/playtest checklists for atmosphere, comfort, and subjective experience.

---

## 22\. Deployment feasibility

A browser-based MVP can likely be deployed as a static web app if no backend is required.

### Early deployment options

* GitHub Pages.
* Netlify.
* Vercel.
* Cloudflare Pages.
* Static hosting from any compatible provider.

### Backend not required for MVP

The MVP does not require:

* Accounts.
* Server saves.
* Multiplayer.
* Database.
* Authentication.
* Cloud functions.

### Future backend needs

A backend may be useful later for:

* Seed sharing.
* Run history.
* User accounts.
* Analytics.
* Community seeds.
* Multiplayer.
* AI-assisted content pipelines.

Recommendation:

> Keep MVP static unless a backend need becomes unavoidable.

---

## 23\. Persistence feasibility

For MVP, persistence can be local only.

### Possible local persistence

* Settings.
* Last seed.
* Completed runs.
* Debug flags.
* Graphics/audio preferences.

### Storage options

* LocalStorage for simple settings.
* IndexedDB for larger future data.

Recommendation:

> Use LocalStorage for MVP settings and defer richer persistence.

---

## 24\. Security and privacy feasibility

The MVP has low security complexity if it remains static and local-only.

### Low-risk MVP posture

* No accounts.
* No user-generated uploads.
* No server-side persistence.
* No payment data.
* No multiplayer networking.

### Security concerns to avoid

* Loading unsafe external scripts.
* Allowing arbitrary user-provided content into the scene.
* Pulling untrusted remote assets dynamically.
* Adding analytics without privacy consideration.

Recommendation:

> Keep MVP local/static and avoid unnecessary data collection.

---

## 25\. Legal/licensing feasibility

Legal/licensing is a meaningful risk due to Backrooms lore and possible asset usage.

### Lore risks

* Direct wiki text reuse may require attribution or may be restricted.
* Faction/entity names may have source-specific licensing considerations.
* Different wikis may have different license terms.
* The word “Backrooms” itself may need branding caution depending on public release strategy.

### Asset risks

* Textures, sounds, models, and fonts require proper licensing.
* Public domain/CC assets may have attribution requirements.
* Generated or third-party assets must be tracked.

### Recommendation

* Avoid copying wiki prose directly.
* Use original text for notes/artifacts unless source-reviewed.
* Track all asset sources.
* Select a repo/code license separately from game content/license.
* Consider an original final title if public/commercial release becomes a goal.

---

## 26\. Development workflow feasibility

A modern TypeScript workflow is feasible.

### Recommended early repo structure

```text
src/
  app/
  engine/
  generation/
  lore/
  rendering/
  audio/
  input/
  ui/
  vr/
  debug/
  tests/

docs/
  01-project-brief.md
  ...
```

### Development tools

Potential tools:

* Vite.
* TypeScript.
* Vitest.
* ESLint.
* Prettier.
* Playwright later for browser smoke tests.
* Engine-specific debug inspectors.

### Recommendation

Start with a minimal working app and avoid overbuilding infrastructure before the first generated room/corridor scene works.

---

## 27\. Required validation spikes

Before architecture is finalized, the project should run several technical spikes.

### Spike 1 — Engine comparison

Goal:

* Compare Babylon.js and Three.js for this project.

Test:

* Render modular Level 0 room/corridor pieces.
* Add desktop movement.
* Add collision.
* Add basic lighting.
* Add simple audio.
* Try WebXR entry.

Decision output:

* ADR selecting engine.

### Spike 2 — WebXR comfort prototype

Goal:

* Validate VR entry and comfortable movement.

Test:

* Enter WebXR.
* Head tracking.
* Snap turn.
* Teleport or smooth locomotion.
* Simple interaction.
* No forced camera motion.

Decision output:

* WebXR feasibility and comfort requirements.

### Spike 3 — Procedural layout prototype

Goal:

* Validate graph-based generation.

Test:

* Generate 50–100 nodes.
* Place spawn and exit.
* Validate reachability.
* Instantiate modular geometry.
* Track current node.

Decision output:

* Confirm or revise generation architecture.

### Spike 4 — Local stability buffer

Goal:

* Validate recent-area stability and distant mutation eligibility.

Test:

* Track player movement through graph nodes.
* Lock current/adjacent/recent nodes.
* Mark nodes 5–6 segments behind as mutation-eligible.
* Ensure backtracking works for recent nodes.

Decision output:

* Confirm stability buffer design.

### Spike 5 — Atmosphere prototype

Goal:

* Validate mood using simple assets.

Test:

* Yellow wallpaper/carpet/fluorescent style.
* Hum ambience.
* Flicker event.
* Distant sound event.
* Simple note/clue.

Decision output:

* Confirm whether atmosphere works before advanced systems.

### Spike 6 — Exit loop prototype

Goal:

* Validate the complete MVP loop.

Test:

* Spawn.
* Explore.
* Find clue.
* Trigger/locate exit.
* Complete run.
* Restart with new seed.

Decision output:

* Confirm MVP gameplay feasibility.

---

## 28\. Technical risk table

<!-- linear:table-colwidths:200,200,200,200 -->
| Risk | Severity | Likelihood | Mitigation |
| -- | -- | -- | -- |
| WebXR support inconsistent across devices | High | Medium | Desktop fallback; early WebXR spike; test target hardware. |
| VR motion sickness | High | Medium | Comfort options; avoid forced camera movement; no chase MVP. |
| Browser performance poor | High | Medium | Modular assets; low dynamic light count; performance budgets. |
| Procedural layout feels incoherent | High | Medium | Graph generation, validation, landmarks, playtesting. |
| Structural mutation feels buggy | High | Medium | Delay mutation; implement local stability buffer first. |
| Engine choice causes rework | Medium/High | Medium | Babylon/Three spikes before ADR. |
| Audio becomes annoying | Medium | Medium | Sparse events, layered ambience, volume settings. |
| Asset licensing issues | Medium/High | Medium | Use original/clearly licensed assets; track sources. |
| Scope creep | Very High | High | Keep MVP to Level 0 and simple escape loop. |
| Generator tied too tightly to renderer | Medium/High | Medium | Keep generation engine-agnostic. |
| No clear performance targets | Medium | High | Define budgets after engine spike. |

---

## 29\. Preliminary ADR candidates

The following decisions should become ADRs after feasibility spikes:

 1. Rendering/game engine selection.
 2. Frontend app shell selection.
 3. Procedural generation architecture.
 4. WebXR support strategy.
 5. Collision/physics approach.
 6. Audio implementation approach.
 7. Asset pipeline approach.
 8. Data/lore file format.
 9. Local persistence strategy.
10. Static deployment strategy.

---

## 30\. Recommended MVP technical path

Suggested order:

 1. Initialize Vite + TypeScript project.
 2. Spike Babylon.js and/or Three.js minimal scene.
 3. Choose engine through ADR.
 4. Build desktop movement and collision.
 5. Implement seeded RNG.
 6. Implement graph-based Level 0 generator.
 7. Instantiate modular rooms/corridors.
 8. Add visual materials and lighting.
 9. Add ambience and audio events.
10. Add spawn and exit placement.
11. Add clue/lore artifacts.
12. Add local stability buffer.
13. Add simple anomalies.
14. Add completion/restart loop.
15. Add WebXR entry and comfort controls.
16. Tune performance and run playtests.

Alternative if VR risk is high:

1. Build desktop MVP loop first.
2. Add WebXR as soon as scene complexity is representative.
3. Avoid making VR-only assumptions until hardware testing succeeds.

---

## 31\. Feasibility open questions

 1. Which engine performs better for modular WebXR scenes: Babylon.js or Three.js?
 2. Is WebXR reliable enough on target headset browsers for MVP priority P0?
 3. Should WebXR be required in MVP or treated as P1 if desktop prototype comes first?
 4. What desktop performance target should be used?
 5. What VR frame-rate target should be used for target hardware?
 6. How many rooms/chunks can be rendered comfortably at once?
 7. Should generation happen fully before the run or stream progressively?
 8. Should the generator use graph-only, grid-only, or graph-grid hybrid layout?
 9. Should distant structural mutation be implemented in MVP or deferred?
10. What is the minimum viable asset set for atmosphere?
11. Should audio be engine-managed or use lower-level Web Audio directly?
12. Should physics/collision use engine built-ins or a physics library?
13. How should line-of-sight locking be approximated for mutation safety?
14. Should debug visualization be included from the first prototype?
15. Should deployment target GitHub Pages, Netlify, Vercel, or another static host?

---

## 32\. Technical feasibility conclusion

The project is feasible if it proceeds as a disciplined browser-first procedural prototype rather than a full-scale Backrooms game immediately.

The recommended technical direction is:

> Use TypeScript, a web-native 3D engine, deterministic graph-based procedural generation, modular Level 0 assets, desktop-first playability, WebXR validation spikes, and strong separation between generation logic and rendering.

The most important feasibility rule is:

> Prove the MVP loop with one generated Level 0-style environment before expanding to more levels, entities, multiplayer, or advanced runtime content generation.

The next document should be **DOC 09 — System Architecture Spec**, which will define the concrete module boundaries, runtime systems, data flow, package structure, and integration points for implementing the project.
