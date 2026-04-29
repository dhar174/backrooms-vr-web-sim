# AGENTS.md

This repository contains the planning and future implementation for **Backrooms VR Web Simulation**.

## Project identity

The project is a browser-based WebXR liminal horror simulation with lore-aligned procedural generation.

Primary design direction:

- Liminal exploration simulator
- Systems-driven procedural sandbox
- Browser/WebXR app

The project should not be reduced to a generic horror maze. It should treat the Backrooms as a structured simulation with level-specific lore rules.

## Documentation-first workflow

Before implementation, keep documentation organized under `docs/`.

Current document sequence:

1. Project Brief
2. Problem Statement
3. Lore Alignment Spec
4. Vision Document
5. Product Requirements Document
6. Game Design Document
7. Procedural Generation Design Spec
8. Technical Feasibility Notes
9. System Architecture Spec
10. ADRs
11. Implementation Plan
12. Milestone/Ticket Breakdown
13. Test Plan
14. Release Plan

When adding new docs, preserve the numbering convention:

```text
01-project-brief.md
02-problem-statement.md
03-lore-alignment-spec.md
```

## Technical direction guardrails

No engine/framework has been selected yet.

Likely candidates:

- Babylon.js
- Three.js
- React Three Fiber
- Vite
- TypeScript
- WebXR
- Web Audio API

Do not introduce a major stack until a technical feasibility document or ADR selects it.

## Lore alignment guardrails

Backrooms lore should be treated carefully.

Avoid blindly copying wiki text into the repo. Instead:

- Track source references separately.
- Convert lore into structured, game-ready constraints.
- Distinguish source-aligned canon from original game canon.
- Avoid assuming all Backrooms sources are mutually consistent.
- Consider licensing before shipping wiki-derived content or exact names/descriptions.

## Procedural generation guardrails

The generator should eventually be lore-constrained.

Generated levels should be:

- Recognizable
- Coherent
- Replayable
- Atmospherically consistent
- Validated against level rules

Generated levels should not feel like arbitrary random mazes.

## Coding style once implementation begins

Prefer:

- TypeScript
- Clear module boundaries
- Small focused systems
- Deterministic seeded generation where possible
- Data-driven level definitions
- Testable pure functions for generation logic
- Separate rendering concerns from simulation/generation logic

## Commit hygiene

Use clear commit messages.

Examples:

- `Add problem statement document`
- `Add lore alignment schema draft`
- `Initialize Vite TypeScript app`
- `Add seeded RNG utility`
- `Add Level 0 generation prototype`
