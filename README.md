# Backrooms VR Web Simulation

A browser-based WebXR liminal horror simulation focused on lore-aligned procedural generation, infinite replayability, and immersive Backrooms exploration.

## Project identity

This project is a hybrid of:

- **Liminal exploration simulator** — atmosphere, dread, loneliness, uncanny spaces, environmental storytelling, and psychological disorientation.
- **Systems-driven procedural sandbox** — seeded generation, level rules, anomalies, lore validation, entity rules, exits, hazards, and replayable world construction.
- **Browser/WebXR app** — accessible from a URL, playable on desktop, and enhanced through supported VR devices.

The goal is not simply to build a static Backrooms map. The goal is to build a **Backrooms simulation engine** that generates spaces from structured lore rules.

## Initial MVP

**MVP-1: Procedural Level 0 WebXR Prototype**

The first prototype should prove:

- Browser-based 3D exploration
- WebXR feasibility
- Level 0 atmosphere
- Seeded replayability
- Lore-constrained generation
- Basic anomalies, clues, and exit mechanics
- Desktop fallback controls

## Documentation

The project documentation is being developed in chronological software-development order.

Start here:

- [Documentation index](docs/README.md)
- [01 — Project Brief](docs/01-project-brief.md)
- [Documentation roadmap](docs/documentation-roadmap.md)

## Current planning status

The project has been created in Linear under the **Backrooms VR Web Sim** team.

Current Linear document placeholder:

- `BACVR-1 — DOC 01: Project Brief: Backrooms VR Web Simulation`

## High-level system ideas

Future architecture should support:

- Level definition files
- Lore-constrained procedural generation
- Seeded replayability
- Anomaly systems
- Entity/hazard rules
- Exit/transition rules
- Lore pickups and environmental storytelling
- WebXR controls and comfort modes
- A future lore linter for validating generated content

## Engine comparison baseline

BACVR-27 defines the [frozen Level 0 runtime comparison](spikes/shared/README.md)
for Babylon.js, raw Three.js, and Meta IWSDK. All three lanes must start from
the same merged baseline SHA published on their Linear issues and consume the
shared scenario, parameters, metrics, and report template. This is a controlled
integration fixture, not the final generator or runtime architecture.

The root npm package provides shared verification only: `npm ci` then
`npm run check`. Candidate packages and lockfiles belong in their own spike
directories; no runtime is selected or implemented by this baseline.

## License

License is not finalized yet. Until a license is selected, assume all rights are reserved.
