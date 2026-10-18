# Changelog

## 2026-10-18 — Motion v1, fixed header, Discipline Ledger (approved by Andries)

- Brand book (`project/README.md`): the Motion section "Light breathes, nothing travels ... No slides, bounces or parallax" is replaced by Motion v1, "light first, travel last": motion tokens, house-lights page changes, staggered one-time reveals, edge-first panel reveals, a gliding nav hairline, press feedback, a fixed solid header, and starfield-only parallax (0.04x scroll, desktop only, never on hero media or content, off under reduced motion). Everything stays still under `prefers-reduced-motion`.
- Tokens (`project/tokens.json`): new `motion` group: `motion-fast` 120ms, `motion-base` 240ms, `motion-slow` 420ms, `motion-breath` 4000ms, `motion-stagger` 60ms, `ease-enter` cubic-bezier(.2,.7,.2,1), `ease-in-out` cubic-bezier(.65,0,.35,1), `parallax-starfield` 0.04.
- New component pattern: `project/components/DisciplineLedger/README.md`, the price list for the eight disciplines.
- Decisions recorded in `.index/key-decisions.md`.
- Unchanged: colours, type, wordmarks, tagline, descriptor, marker and the eight disciplines.
- Follow-up: run `tools/export.mjs` so `dist/web/` (tokens.css, tokens.ts, tailwind preset, manifest) carries the motion tokens.
