# DOC 03 — Lore Alignment Spec: Backrooms VR Web Simulation

## Document status

**Document type:** Lore Alignment Spec<br>**Project:** Backrooms VR Web Simulation<br>**Phase:** Concept / Initiation / Pre-Requirements<br>**Follows:** [BACVR-2](https://linear.app/dna-pest-control-router/issue/BACVR-2/doc-02-problem-statement-backrooms-vr-web-simulation) — DOC 02: Problem Statement<br>**Precedes:** DOC 04 — Vision Document<br>**Purpose:** Define how Backrooms lore should be interpreted, structured, constrained, validated, and transformed into game-ready procedural generation rules.

---

## 1\. Executive summary

Backrooms VR Web Simulation should not treat lore as decorative flavor. Lore must become a core design and technical input. The project’s procedural generation, level definitions, entity eligibility, item placement, exits, anomalies, audio profiles, environmental storytelling, and future validation tooling should all be shaped by a structured lore model.

The project will use a **Source-Aligned Internal Canon** approach:

> Respect major Backrooms lore sources and community expectations, but convert them into structured, game-ready internal rules that support procedural generation, resolve contradictions, and protect the project from careless lore drift.

This document defines the initial strategy for that internal canon.

Because live source verification has not yet been performed inside this workflow, this document does not claim final authority over specific wiki facts. Instead, it defines the process, schemas, rules, and validation structure that will allow exact wiki/canon details to be added later with proper source review.

---

## 2\. Why lore alignment matters

Backrooms experiences succeed or fail partly based on whether they feel like the Backrooms rather than generic horror mazes.

The Backrooms are not only a visual style. They are a collection of concepts:

* Liminal spaces.
* No-clipping or reality displacement.
* Unstable levels.
* Environmental danger.
* Strange exits and transitions.
* Entities with level-specific presence.
* Scarce resources.
* Exploration logs and warnings.
* Factions, outposts, and survivor traces.
* Conflicting reports and unreliable information.
* A sense of massive, unknowable structure.

A procedural generator that ignores lore might create random hallways, doors, props, or monsters that visually resemble the Backrooms but break the feeling of the setting.

Lore alignment matters because it helps ensure that generated content is:

* Recognizable.
* Coherent.
* Thematically consistent.
* Respectful of major fan expectations.
* Expandable across many levels.
* Usable by procedural systems.
* Validatable through automated checks.

---

## 3\. Core lore strategy

The project should use **Source-Aligned Internal Canon**.

This means:

1. The project should study and respect major Backrooms lore traditions.
2. The project should not blindly copy all wiki text or treat every source as equally authoritative.
3. The project should build an internal canon model that converts lore into structured game data.
4. Contradictions should be resolved explicitly rather than ignored.
5. Original game content should be clearly marked as original.
6. Procedural variation should be constrained by level identity.
7. The game should prioritize the feeling and logic of Backrooms lore over literal text reproduction.

The guiding rule is:

> Lore should constrain generation without freezing the project into an unplayable encyclopedia.

---

## 4\. Canon modes

The project may eventually support or document several canon modes, but the default development mode should be **Source-Aligned Internal Canon**.

<!-- linear:table-colwidths:200,200,200 -->
| Canon mode | Description | Recommended use |
| -- | -- | -- |
| Strict wiki canon | Attempts to follow selected wiki entries closely. | Useful for reference, but risky due to contradictions and licensing concerns. |
| Inspired canon | Uses Backrooms-like ideas without direct adherence to specific source entries. | Useful if legal/branding strategy changes. |
| Source-aligned internal canon | Respects major lore sources, then converts them into game-ready rules. | Recommended default. |
| Original game canon | Fully original additions created for gameplay and clearly marked as original. | Useful for expansion once foundations are stable. |
| Procedural variation canon | Runtime-generated variations that fit source-aligned constraints without claiming source authority. | Required for replayability. |

Default for this project:

> Source-aligned internal canon, with clear boundaries around original game canon and procedural variation.

---

## 5\. Source tiers

Backrooms lore is fragmented. The project needs source tiers to decide how content should be interpreted.

### Tier 1 — Primary lore references

Primary sources are the main lore references selected by the project after research.

These will likely include major Backrooms wiki traditions and widely recognized level/entity descriptions, but final source selection must be verified later.

Tier 1 sources should be used for:

* Level identity.
* Core environmental motifs.
* Known exits/entrances.
* Common danger profiles.
* Major entities.
* Major resources.
* Major factions.
* Highly recognizable rules.

### Tier 2 — Supplemental community lore

Supplemental sources include common community interpretations, recurring tropes, videos, forum interpretations, and common game conventions.

Tier 2 sources can influence:

* Ambience.
* Optional anomalies.
* Environmental storytelling.
* Minor props.
* Secondary interpretations.
* Non-critical generated variation.

### Tier 3 — Original project canon

Original project canon includes anything invented specifically for Backrooms VR Web Simulation.

Examples:

* Original notes.
* Original survivor traces.
* Original anomaly names.
* Original progression mechanics.
* Original level variants.
* Original entity behavior adaptations.

Original canon must not pretend to be directly sourced from external lore.

### Tier 4 — Procedural variation

Procedural variation includes runtime-generated or seed-generated content that stays inside valid constraints.

Examples:

* Specific corridor layout.
* Exact note placement.
* Exact room sequence.
* Flicker timing.
* Exit location.
* Minor stains, sounds, and prop variations.

Procedural variation should support replayability while staying constrained by the active level definition.

---

## 6\. Source review requirements

Before shipping any specific level/entity/item/faction as source-aligned, the project should complete a source review.

Each source-reviewed lore element should include:

* Canonical or common name.
* Source URL or reference.
* Source tier.
* Summary of relevant lore.
* Gameplay interpretation.
* Licensing notes.
* Contradictions or ambiguities.
* Internal canon decision.
* Allowed procedural variation.
* Forbidden contradictions.

Example source review record:

```json
{
  "id": "level_0",
  "display_name": "Level 0",
  "source_tier": "tier_1",
  "source_refs": [
    {
      "name": "Primary wiki page pending verification",
      "url": "pending",
      "review_status": "not_verified"
    }
  ],
  "source_summary": "Pending exact source review.",
  "internal_canon_decision": "Use Level 0-style liminal office maze identity for MVP.",
  "license_notes": "Pending review before public content reuse."
}
```

---

## 7\. Licensing and originality caution

The project should be careful with direct reuse of wiki text, level descriptions, entity descriptions, faction names, images, and other content.

Guidelines:

1. Do not copy wiki text directly into game content unless the license allows it and attribution requirements are followed.
2. Prefer internal summaries and structured constraints over copied prose.
3. Distinguish source-aligned concepts from original game content.
4. Track attribution requirements for any directly reused names, text, art, or concepts.
5. Consider whether the public product should use the word “Backrooms” or an original title with Backrooms-inspired positioning.
6. Keep code licensing separate from content/lore licensing if needed.

Potential licensing strategy later:

* Code may be open source.
* Original game lore/assets may be all-rights-reserved.
* Source-derived lore may require attribution or avoidance depending on source license.
* Exact wiki text should be avoided unless explicitly permitted and attributed.

---

## 8\. Internal canon principles

The internal canon should follow these principles:

### Principle 1 — The Backrooms are a system, not a backdrop

Every level should have rules. Those rules should affect generation, sound, exits, resources, hazards, and encounters.

### Principle 2 — Level identity comes before randomization

Procedural generation must begin from level identity. The generator should ask:

> What kind of place is this level supposed to be?

Only then should it generate layout, props, lights, sounds, hazards, and exits.

### Principle 3 — Generated content must preserve recognizability

A generated Level 0-style run should still be recognizable as Level 0-style even if the layout changes.

### Principle 4 — Contradictions must be resolved intentionally

If sources disagree, the internal canon should explicitly decide how the game interprets the disagreement.

### Principle 5 — Original additions should be labeled

Original game content should be allowed, but it should be tracked so it does not become confused with source-derived lore.

### Principle 6 — Lore should serve gameplay without becoming arbitrary

Gameplay adaptations are allowed, but they should be justified and documented.

---

## 9\. Major lore categories

The lore model should support these major categories:

<!-- linear:table-colwidths:200,200 -->
| Category | Purpose |
| -- | -- |
| Levels | Distinct Backrooms spaces with unique motifs, rules, dangers, exits, and generation constraints. |
| Entities | Creatures, beings, presences, or hostile/neutral anomalies that may appear in specific contexts. |
| Items/resources | Useful or meaningful objects such as supplies, keys, tools, documents, light sources, or consumables. |
| Factions/groups | Organizations, survivor groups, researchers, communities, cults, or hostile groups. |
| Exits/transitions | Ways of entering, leaving, or moving between levels. |
| Anomalies | Reality-breaking events, environmental distortions, impossible geometry, or perception effects. |
| Environmental motifs | Visual, architectural, audio, and material features that define a level. |
| Hazards | Non-entity dangers such as darkness, flooding, electrical faults, toxic air, unstable floors, or sanity/perception effects. |
| Lore artifacts | Notes, signs, logs, recordings, maps, warnings, symbols, and traces of prior explorers. |

---

## 10\. Level definition schema

Every supported level should have a structured definition.

Example TypeScript-style schema:

```ts
type BackroomsLevelDefinition = {
  id: string;
  displayName: string;
  canonStatus: "source_aligned" | "original" | "inspired" | "experimental";
  sourceTier: "tier_1" | "tier_2" | "tier_3" | "tier_4";
  sourceRefs: LoreSourceRef[];

  summary: string;
  playerFacingDescription?: string;
  internalDesignNotes: string[];

  coreIdentity: string[];
  emotionalTargets: string[];
  forbiddenThemes: string[];

  visualRules: VisualRuleSet;
  architectureRules: ArchitectureRuleSet;
  audioRules: AudioRuleSet;
  lightingRules: LightingRuleSet;

  safetyProfile: SafetyProfile;
  entityRules: EntitySpawnRule[];
  itemRules: ItemSpawnRule[];
  hazardRules: HazardRule[];
  anomalyRules: AnomalyRule[];

  entryRules: TransitionRule[];
  exitRules: TransitionRule[];

  proceduralConstraints: ProceduralConstraint[];
  validationRules: LoreValidationRule[];
  forbiddenElements: string[];
};
```

The purpose of this schema is to ensure levels are not just visual themes. They are full simulation definitions.

---

## 11\. Level identity fields

Every level should define identity before mechanics.

Required identity fields:

<!-- linear:table-colwidths:200,200 -->
| Field | Meaning |
| -- | -- |
| `id` | Stable machine-readable identifier, such as `level_0`. |
| `displayName` | Human-readable level name. |
| `canonStatus` | Whether the level is source-aligned, original, inspired, or experimental. |
| `sourceRefs` | References used to construct the internal definition. |
| `summary` | Short internal description. |
| `coreIdentity` | The non-negotiable concepts that make the level recognizable. |
| `emotionalTargets` | Feelings the level should create. |
| `forbiddenThemes` | Themes or elements that would break the level identity. |

Example:

```json
{
  "id": "level_0",
  "displayName": "Level 0",
  "canonStatus": "source_aligned",
  "coreIdentity": [
    "liminal office-like maze",
    "yellow wallpaper",
    "damp carpet",
    "fluorescent hum",
    "isolation",
    "spatial repetition"
  ],
  "emotionalTargets": [
    "unease",
    "loneliness",
    "disorientation",
    "quiet dread"
  ],
  "forbiddenThemes": [
    "open natural wilderness",
    "busy human crowds",
    "bright cheerful social space",
    "combat arena"
  ]
}
```

---

## 12\. Visual rules

Visual rules define what the level should look like.

Example schema:

```ts
type VisualRuleSet = {
  colorPalette: string[];
  wallMaterials: string[];
  floorMaterials: string[];
  ceilingTypes: string[];
  propFamilies: string[];
  landmarkTypes: string[];
  decayPatterns: string[];
  forbiddenVisuals: string[];
};
```

Example Level 0-style visual rules:

```json
{
  "colorPalette": ["sickly yellow", "beige", "brown stains", "dim white fluorescent light"],
  "wallMaterials": ["yellow wallpaper", "aged wallpaper", "stained wall panels"],
  "floorMaterials": ["damp carpet", "worn carpet"],
  "ceilingTypes": ["drop ceiling", "fluorescent fixtures"],
  "propFamilies": ["rare office debris", "stains", "wall irregularities", "damaged ceiling tiles"],
  "landmarkTypes": ["unusual stain", "broken light", "misaligned wall", "rare anomalous door"],
  "decayPatterns": ["water damage", "peeling wallpaper", "carpet discoloration"],
  "forbiddenVisuals": ["open sky", "normal exterior windows", "lush vegetation", "busy streets"]
}
```

---

## 13\. Architecture/layout rules

Architecture rules define how spaces are organized.

Example schema:

```ts
type ArchitectureRuleSet = {
  layoutStyle: "maze" | "hub" | "linear" | "open" | "network" | "hybrid";
  roomTypes: string[];
  corridorTypes: string[];
  connectivityRules: string[];
  loopProbability: number;
  deadEndProbability: number;
  landmarkFrequency: "none" | "rare" | "occasional" | "common";
  verticality: "none" | "low" | "medium" | "high";
  geometryAnomalyAllowance: "none" | "subtle" | "moderate" | "extreme";
};
```

Example Level 0-style layout rules:

```json
{
  "layoutStyle": "maze",
  "roomTypes": ["small office-like room", "empty partitioned space", "narrow corridor", "large repetitive room"],
  "corridorTypes": ["short connector", "long repetitive hall", "turning hallway", "dead-end corridor"],
  "connectivityRules": ["maze-like", "repetitive", "rare landmarks", "limited obvious exits"],
  "loopProbability": 0.15,
  "deadEndProbability": 0.25,
  "landmarkFrequency": "rare",
  "verticality": "none",
  "geometryAnomalyAllowance": "subtle"
}
```

---

## 14\. Audio rules

Audio is central to Backrooms atmosphere. Each level should define its ambient and event-driven sound profile.

Example schema:

```ts
type AudioRuleSet = {
  constantAmbience: string[];
  randomEvents: string[];
  spatialEvents: string[];
  silenceRules: string[];
  forbiddenAudio: string[];
};
```

Example Level 0-style audio rules:

```json
{
  "constantAmbience": ["fluorescent hum", "low electrical buzz", "subtle room tone"],
  "randomEvents": ["distant thud", "muffled movement", "light flicker", "untraceable creak"],
  "spatialEvents": ["sound behind player", "sound around corner", "sound from impossible direction"],
  "silenceRules": ["rare sudden drop in ambience for tension"],
  "forbiddenAudio": ["birds", "traffic", "normal human crowd", "cheerful music"]
}
```

---

## 15\. Lighting rules

Lighting rules define level mood, visibility, threat, and comfort.

Example schema:

```ts
type LightingRuleSet = {
  primaryLightSources: string[];
  brightnessRange: "dark" | "dim" | "medium" | "bright" | "variable";
  flickerAllowed: boolean;
  flickerFrequency: "none" | "rare" | "occasional" | "common";
  colorTemperature: string[];
  darknessHazards: boolean;
  forbiddenLighting: string[];
};
```

Example Level 0-style lighting rules:

```json
{
  "primaryLightSources": ["fluorescent ceiling fixtures"],
  "brightnessRange": "medium",
  "flickerAllowed": true,
  "flickerFrequency": "occasional",
  "colorTemperature": ["cold white", "sickly yellow spill"],
  "darknessHazards": false,
  "forbiddenLighting": ["sunlight", "campfire glow", "neon city lighting"]
}
```

---

## 16\. Safety profile

Each level should have a safety profile to guide entity/hazard/resource generation.

Example schema:

```ts
type SafetyProfile = {
  dangerRating: "safe" | "low" | "medium" | "high" | "extreme" | "unknown";
  entityDensity: "none" | "low" | "medium" | "high";
  resourceAvailability: "none" | "scarce" | "moderate" | "abundant";
  navigationDifficulty: "low" | "medium" | "high" | "extreme";
  psychologicalRisk: "low" | "medium" | "high" | "extreme";
};
```

Example Level 0-style safety profile:

```json
{
  "dangerRating": "low",
  "entityDensity": "none",
  "resourceAvailability": "scarce",
  "navigationDifficulty": "high",
  "psychologicalRisk": "medium"
}
```

This is provisional and should be refined after exact source review.

---

## 17\. Entity schema

Entities should be defined separately from levels, then made eligible or ineligible per level.

Example schema:

```ts
type BackroomsEntityDefinition = {
  id: string;
  displayName: string;
  canonStatus: "source_aligned" | "original" | "inspired" | "experimental";
  sourceRefs: LoreSourceRef[];

  summary: string;
  appearanceRules: string[];
  behaviorRules: string[];
  detectionRules: string[];
  avoidanceRules: string[];
  dangerProfile: EntityDangerProfile;

  eligibleLevels: string[];
  forbiddenLevels: string[];
  spawnConstraints: EntitySpawnConstraint[];
  proceduralVariation: string[];
};
```

Entity rules should determine:

* Where the entity can appear.
* How often it can appear.
* What triggers it.
* Whether it stalks, patrols, reacts to sound, reacts to light, or appears only as implication.
* Whether it should appear in the MVP.

Important MVP note:

> The first Level 0 prototype may intentionally avoid overt entities and rely on environmental dread/anomalies first.

---

## 18\. Item/resource schema

Items and resources should be level-aware.

Example schema:

```ts
type BackroomsItemDefinition = {
  id: string;
  displayName: string;
  canonStatus: "source_aligned" | "original" | "inspired" | "experimental";
  sourceRefs: LoreSourceRef[];

  itemType: "resource" | "tool" | "key" | "lore" | "navigation" | "consumable" | "anomaly";
  summary: string;
  gameplayUse: string[];
  eligibleLevels: string[];
  rarityByLevel: Record<string, "none" | "rare" | "occasional" | "common">;
  placementRules: string[];
  forbiddenContexts: string[];
};
```

Possible item categories:

* Notes.
* Maps or unreliable maps.
* Flashlight/batteries.
* Keys/access cards.
* Strange objects.
* Survivor supplies.
* Food/water-like resources.
* Recordings.
* Tools.
* Exit clues.

The MVP should focus on notes, warnings, and exit clues rather than complex inventory.

---

## 19\. Faction/group schema

Faction references can add depth, but they must be handled carefully because faction lore may be source-specific and licensing-sensitive.

Example schema:

```ts
type BackroomsFactionDefinition = {
  id: string;
  displayName: string;
  canonStatus: "source_aligned" | "original" | "inspired" | "experimental";
  sourceRefs: LoreSourceRef[];

  summary: string;
  roleInWorld: string[];
  associatedLevels: string[];
  allowedArtifacts: string[];
  forbiddenUses: string[];
  attributionRequirements: string[];
};
```

Faction usage should be optional and controlled by canon mode.

For the MVP, faction references should be minimal or absent unless source review confirms that they are appropriate, legally safe, and useful.

---

## 20\. Exit and transition schema

Exits and transitions are central to Backrooms design. They should not be arbitrary doors unless the active level permits them.

Example schema:

```ts
type TransitionRule = {
  id: string;
  transitionType: "door" | "noclip" | "elevator" | "stairwell" | "threshold" | "sleep" | "environmental_condition" | "anomaly";
  sourceLevel: string;
  destinationLevel: string | "random" | "unknown";
  rarity: "common" | "occasional" | "rare" | "very_rare";
  discoveryStyle: "obvious" | "clued" | "accidental" | "conditional" | "hidden";
  requirements: string[];
  forbiddenContexts: string[];
};
```

For the MVP, exits should be:

* Rare.
* Environmentally hinted.
* Not always in the same place.
* Consistent with Level 0-style identity.
* Simple enough to implement.

Possible MVP exit types:

* Anomalous door.
* No-clip threshold.
* Unusual stairwell.
* Elevator-like transition.
* Wall/floor instability zone.

---

## 21\. Anomaly schema

Anomalies are non-entity events that make the environment feel unstable.

Example schema:

```ts
type AnomalyRule = {
  id: string;
  displayName: string;
  canonStatus: "source_aligned" | "original" | "inspired" | "experimental";
  eligibleLevels: string[];
  triggerRules: string[];
  probability: number;
  cooldownSeconds: number;
  intensity: "subtle" | "moderate" | "severe";
  playerFacingEffect: string;
  mechanicalEffect: string[];
  forbiddenContexts: string[];
};
```

Possible Level 0 MVP anomalies:

* Light flicker cluster.
* Distant sound from impossible direction.
* Repeated room with one changed detail.
* Door disappearing behind the player.
* Corridor seeming longer than expected.
* Loop illusion through controlled layout connection.
* Ambience suddenly dropping out for a few seconds.

The anomaly system should prefer subtle dread before obvious supernatural effects.

---

## 22\. Lore artifact schema

Lore artifacts include notes, warnings, logs, signs, recordings, graffiti, maps, and environmental traces.

Example schema:

```ts
type LoreArtifactDefinition = {
  id: string;
  artifactType: "note" | "sign" | "recording" | "map" | "symbol" | "trace" | "terminal";
  canonStatus: "source_aligned" | "original" | "inspired" | "experimental";
  eligibleLevels: string[];
  tone: string[];
  contentRules: string[];
  placementRules: string[];
  forbiddenClaims: string[];
  gameplayPurpose: "atmosphere" | "warning" | "navigation" | "exit_clue" | "lore" | "misdirection";
};
```

Lore artifacts should be short, atmospheric, and useful.

Avoid long lore dumps in the MVP.

Good artifact goals:

* Suggest prior human presence.
* Warn about level behavior.
* Hint at exits.
* Create uncertainty.
* Provide small pieces of worldbuilding.
* Reinforce that information in the Backrooms is unreliable.

---

## 23\. Procedural constraint model

Procedural constraints are the bridge between lore and generation.

Example schema:

```ts
type ProceduralConstraint = {
  id: string;
  levelId: string;
  constraintType: "required" | "weighted" | "forbidden" | "range" | "ratio" | "sequence";
  targetSystem: "layout" | "visual" | "audio" | "lighting" | "entity" | "item" | "hazard" | "anomaly" | "exit";
  rule: string;
  severity: "info" | "warning" | "error";
};
```

Example constraints:

```json
[
  {
    "id": "level0_no_open_sky",
    "levelId": "level_0",
    "constraintType": "forbidden",
    "targetSystem": "visual",
    "rule": "Level 0-style generation must not include open skyboxes or normal exterior spaces.",
    "severity": "error"
  },
  {
    "id": "level0_required_fluorescent_hum",
    "levelId": "level_0",
    "constraintType": "required",
    "targetSystem": "audio",
    "rule": "Level 0-style generation must include persistent fluorescent/electrical ambience.",
    "severity": "error"
  },
  {
    "id": "level0_rare_landmarks",
    "levelId": "level_0",
    "constraintType": "range",
    "targetSystem": "layout",
    "rule": "Landmarks should be rare enough to preserve disorientation but present enough to support navigation memory.",
    "severity": "warning"
  }
]
```

---

## 24\. Lore linter requirements

The future Lore Linter should validate generated content against level definitions.

It should detect:

* Forbidden visual elements.
* Invalid entities.
* Invalid items.
* Invalid faction references.
* Inappropriate audio.
* Inappropriate lighting.
* Exit rules that contradict level constraints.
* Excessive landmark density.
* Insufficient core motifs.
* Procedural layouts that are too random or too readable.
* Lore artifacts that claim unsupported canon facts.

Example linter output:

```text
PASS: level_0 includes required fluorescent ambience.
PASS: level_0 visual palette matches required motif set.
WARNING: landmark density above target range; disorientation may be reduced.
ERROR: outdoor skybox generated in level_0; forbidden by visual rules.
ERROR: faction reference generated while faction canon mode is disabled.
```

The linter is not required for the first visual prototype, but the schemas should be designed so it can be added later.

---

## 25\. Level 0 provisional lore profile

The MVP should begin with a Level 0-style profile.

This profile is provisional until exact source review is completed.

```json
{
  "id": "level_0",
  "displayName": "Level 0",
  "canonStatus": "source_aligned",
  "reviewStatus": "provisional_pending_source_review",
  "coreIdentity": [
    "liminal office-like maze",
    "yellow wallpaper",
    "damp carpet",
    "fluorescent lighting",
    "constant electrical hum",
    "isolation",
    "spatial repetition",
    "rare exits"
  ],
  "emotionalTargets": [
    "loneliness",
    "disorientation",
    "unease",
    "quiet dread",
    "curiosity"
  ],
  "visualRules": {
    "colorPalette": ["sickly yellow", "beige", "brown stains", "dim white"],
    "wallMaterials": ["yellow wallpaper", "aged wallpaper", "stained panels"],
    "floorMaterials": ["damp carpet", "worn carpet"],
    "ceilingTypes": ["drop ceiling", "fluorescent fixtures"],
    "forbiddenVisuals": ["open sky", "normal exterior windows", "lush vegetation", "busy streets"]
  },
  "audioRules": {
    "constantAmbience": ["fluorescent hum", "low electrical buzz"],
    "randomEvents": ["distant thud", "muffled movement", "light flicker", "untraceable creak"],
    "forbiddenAudio": ["birds", "traffic", "normal human crowd"]
  },
  "architectureRules": {
    "layoutStyle": "maze",
    "roomTypes": ["small office-like room", "empty partitioned space", "narrow corridor", "large repetitive room"],
    "loopProbability": 0.15,
    "deadEndProbability": 0.25,
    "landmarkFrequency": "rare",
    "geometryAnomalyAllowance": "subtle"
  },
  "safetyProfile": {
    "dangerRating": "low",
    "entityDensity": "none",
    "resourceAvailability": "scarce",
    "navigationDifficulty": "high",
    "psychologicalRisk": "medium"
  },
  "mvpNotes": [
    "Use environment and anomaly horror before overt entity encounters.",
    "Prioritize mood and replayable layout over complex inventory.",
    "Keep exits rare but discoverable through environmental clues."
  ]
}
```

---

## 26\. Future level candidates

Future levels should only be added after Level 0-style generation proves the architecture.

Potential future level categories:

<!-- linear:table-colwidths:200,200 -->
| Category | Purpose |
| -- | -- |
| Industrial/utility level | Introduces pipes, tunnels, machinery, steam, and physical hazards. |
| Habitable/safe-ish level | Introduces supplies, survivor traces, communities, and faction references. |
| Dark level | Introduces flashlight/resource pressure and stronger sound-based fear. |
| Water/pool level | Introduces reflective surfaces, water audio, and navigation/safety uncertainty. |
| Outdoor uncanny level | Tests procedural generation beyond indoor corridors. |
| Entity-heavy level | Introduces stronger AI systems after environmental horror works. |
| Hub/transition level | Supports multi-level progression and exit routing. |

Do not build these first. Use them to ensure schemas are general enough.

---

## 27\. Lore-to-generation pipeline

The intended pipeline is:

```text
Select level definition
        ↓
Load source-aligned internal canon rules
        ↓
Generate layout skeleton
        ↓
Apply architecture constraints
        ↓
Apply visual motif rules
        ↓
Apply lighting and audio profiles
        ↓
Place anomalies, hazards, items, and lore artifacts
        ↓
Place exit conditions
        ↓
Validate with lore constraints
        ↓
Start playable session
```

This pipeline ensures that generation is guided by lore at every stage.

---

## 28\. Handling contradictions

When sources disagree, the project should create a contradiction record.

Example schema:

```ts
type LoreContradictionRecord = {
  id: string;
  subjectId: string;
  conflictingClaims: {
    sourceRef: LoreSourceRef;
    claim: string;
  }[];
  internalDecision: string;
  gameplayRationale: string;
  reviewStatus: "open" | "resolved" | "deferred";
};
```

Contradiction resolution should prioritize:

1. Player experience.
2. Level recognizability.
3. Major source consensus.
4. Gameplay feasibility.
5. Legal/licensing safety.
6. Future extensibility.

---

## 29\. Content labeling rules

All lore-derived or lore-adjacent content should have one of the following labels:

<!-- linear:table-colwidths:200,200 -->
| Label | Meaning |
| -- | -- |
| `source_aligned` | Based on reviewed external lore and adapted into internal rules. |
| `original` | Created for this game. |
| `inspired` | Inspired by Backrooms conventions but not tied to a specific source. |
| `experimental` | Prototype content used for testing and not canon. |
| `placeholder` | Temporary content awaiting review. |
| `procedural` | Runtime/generated variation constrained by rules. |

This helps prevent accidental canon confusion.

---

## 30\. MVP lore requirements

For MVP-1, the lore requirements are:

 1. Support one Level 0-style level definition.
 2. Use seeded generation constrained by that definition.
 3. Include a recognizable visual/audio identity.
 4. Include subtle anomalies.
 5. Include short lore artifacts or environmental clues.
 6. Include at least one valid exit/transition style.
 7. Avoid unsupported faction/entity complexity.
 8. Avoid direct copied wiki text unless licensing is reviewed.
 9. Mark all lore details as provisional until source review is completed.
10. Preserve extensibility for future source-verified levels.

---

## 31\. Open questions

 1. Which Backrooms wiki/source tradition should be treated as the primary reference set?
 2. Should the public project use the word “Backrooms” in the final title, or should it use an original title and describe itself as Backrooms-inspired?
 3. What licensing requirements apply to the major intended source wikis?
 4. Should named factions be included, avoided, or replaced with original analogs?
 5. Should named entities be included directly, adapted, or replaced with original analogs?
 6. How much direct lore should appear in the game versus being implied by environment?
 7. Should the game support multiple canon modes later?
 8. Should lore validation be built as a development-only tool or also exposed as a debug mode?
 9. Should procedural notes be generated from templates or authored manually?
10. Should Level 0 have any entity possibility in the MVP, or should it remain environment/anomaly-only?

---

## 32\. Initial conclusion

The Lore Alignment Spec establishes that Backrooms VR Web Simulation should be built around structured, source-aligned internal canon rather than ad hoc references or random horror generation.

The key conclusion is:

> Lore must become data.

Levels, entities, items, exits, anomalies, hazards, audio, visuals, and environmental storytelling should all be modeled as structured definitions that procedural systems can interpret and validators can check.

This approach allows the game to feel infinite and replayable while still remaining recognizable, coherent, and respectful of major Backrooms lore expectations.

The next document should be the **Vision Document**, which will define the long-term emotional, experiential, and product direction built on top of this lore foundation.
