# File inventory

All paths relative to the repository root. "Upload" = stored in the artifact's asset store (blob id in `project/design-system.json`), not published as a file.

## Repository root

| Path | Purpose | Status |
| --- | --- | --- |
| `README.md` | GitHub landing page: what the repo is, folder layout, how to republish | Active |
| `.gitignore` | Ignores OS clutter (`Thumbs.db`, `desktop.ini`, `.DS_Store`) and agent working state (`.agents/`, home of `REPO_ANALYSIS_MEMORY.md`) | Active |
| `tools/export.mjs` | Web export: reads `project/tokens.json` + brand assets, writes `dist/web/`; `--check` fails when stale or when a shadcn role pairing misses contrast. Holds the shadcn role mapping (`ROLES`), the pairings it must satisfy (`PAIRS`) and `GOOGLE_FAMILIES` | Active |
| `dist/web/tokens.css` | Every token as a CSS custom property, plus an `-hsl` channel copy of each colour and a `.type-<style>` class per type style | Generated |
| `dist/web/shadcn.css` | shadcn/ui role variables (`--background`, `--primary`…) pointing at token `-hsl` channels: pink-glow primary, cyan-glow secondary (on-glow labels), nebula accent, line-strong input, focus ring | Generated |
| `dist/web/tailwind-preset.js` | Tailwind preset: palette = tokens + roles only (`black`/`white` remapped to `void`/`ink`), fonts, radii, glow shadows (stock drop shadows render as none), gradients, type styles as font sizes, `space-*`, size tokens | Generated |
| `dist/web/tokens.ts` | Typed hex/values for charts and canvas; `googleFontsHref` | Generated |
| `dist/web/manifest.json` | `tokensSha256`, `googleFontsHref`, role map and LF-normalised sha256 of every exported file | Generated |
| `dist/web/README.md`, `dist/web/assets/**` | How a consumer uses the export; copies of the two wordmark PNGs and eight icon SVGs | Generated |

## Index and brand book

| Path | Purpose | Key contents | Status |
| --- | --- | --- | --- |
| `project/design-system.json` | Artifact index (v3, layout "files") | title/namespace `AN3S`; libraries react/react-dom 18; asset groups Logos, Icons, Imagery with blob ids; `createdOnFiles` marker; `lastChange` | Active |
| `project/README.md` | Brand book read first by consuming agents | Key visual as components; voice & copy; colour; type; panels; light; imagery; logo; iconography; motion; accessibility; intentional additions | Active |
| `project/tokens.json` | Design tokens (list-shaped, one theme `night` "Neon Night") | 23 colours (incl. `line-strong`, `danger`/`on-danger`, `success`/`on-success` added 2026-10-07); type families `sans` (Montserrat), `mono`; 12 type styles in Display/Text/Code; spacing `space-1..8`; radius `radius-sm/md/lg/full`; shadows `glow-pink/blue/cyan`, `focus-ring`; `gradient-glow/neon/space`; size `control`, `icon-tile`, `icon-inline`, `measure` | Active |

## Components

| Path | Purpose | Key symbols | Status |
| --- | --- | --- | --- |
| `project/components/bundle.js` | Classic script assigning `window.AN3S` (React 18 via `window.React`) | `Panel`, `ServiceGrid` (`defaultItems`), `Icon` (`names`, `ICONS` path data), `AwardWall`, `GradientText`, `Eyebrow`, `NameLockup`, `Statement`, `Highlight`, `Halo`, `Starfield` (`drawSky`, seeded PRNG), `Button`; helpers `cx`, `without`, `token`, `useColumns` | Active |
| `project/components/bundle.css` | Component styles, `an3s-` prefix, token-driven (raw values only for small effect metrics such as blur/drop-shadow radii, the logo max-height, and `#000` mask channels); also carries an unscoped `body` rule at l.4-10 (see dead-code.md) | `.an3s-panel*`, `.an3s-service*`, `.an3s-icon*`, `.an3s-award*`, `.an3s-gradient-*`, `.an3s-eyebrow*`, `.an3s-name*`, `.an3s-statement`, `.an3s-highlight*`, `.an3s-halo*`, `.an3s-starfield*`, `.an3s-btn*` | Active |
| `project/components/index.d.ts` | Type docs for every component (published as text/plain) | `IconName`, `*Props` interfaces, `Window.AN3S` | Active |
| `project/components/Cover/preview.html` | System cover (960×288): palette blocks + halo arcs + "AN3S" | Derivation comment atop the SVG | Active |
| `project/components/<Comp>/README.md` | Usage guidelines per component (12) | First sentence = summary | Active |
| `project/components/<Comp>/preview.html` | Live preview per component (12); line 1 `@dsCard` marker; links Montserrat from Google Fonts | Groups: Surfaces (Panel, Halo, Starfield), Content (ServiceGrid, Icon, AwardWall), Typography (GradientText, Eyebrow, NameLockup, Statement, Highlight), Actions (Button) | Active |

## Assets (local copies of uploads + group READMEs)

| Path | Purpose | Status |
| --- | --- | --- |
| `project/assets/Logos/an3s-wordmark.png` | Wordmark, transparent, 366×124, matted from the key visual (upload `82558ef4…`) | Active |
| `project/assets/Logos/an3s-wordmark-on-space.png` | Wordmark with its night-sky backdrop, 366×124 (upload `e540877a…`) | Active |
| `project/assets/Logos/README.md` | Logo usage notes (published file) | Active |
| `project/assets/Icons/*.svg` (8) | Two-tone neon line icons, one per discipline, 56-unit box with glow (uploads). Pre-upload sources: the asset store re-serialized them (self-closing tags expanded, trailing newline dropped), so `design-system.json` sizes run 59-113 bytes above the local files while the artwork is identical | Active |
| `project/assets/Icons/README.md` | Icon list and inks (published file) | Active |
| `project/assets/Imagery/an3s-key-visual.webp` | The 1000×1000 master key visual (upload `60ad7c23…`) | Active |
| `project/assets/Imagery/README.md` | Imagery notes (published file) | Active |

## Generated by the artifact page (not kept here — never write them)

`project/tokens.css`, `project/api/**`, `project/manifest.json`, and the generated tail of `project/README.md`. Status: Generated.
