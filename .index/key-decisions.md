# Key decisions

## 2026-10-19 — Chaos Gap system (approved by Andries)
Andries approved the Brand Forge v1 recommendation: Chaos Gap as the recurring layout pattern (gap = 2 × height of the wordmark's "3"; only the decision sits in the gap), Strata as a new quiet proof component (one hairline per year since 2000; cyan Est. 2003 tick; current year pink), Pink asks / cyan answers as the voice turn-order for Ask / Answer surfaces, Light Cue 3 as a named Motion v1 choreography (pink 240ms → dark 120ms → cyan 420ms), and 1080×1350 as the default social size. Documented in `project/components/ChaosGap`, `Strata`, `AskAnswer`, the Motion and Voice sections of `project/README.md`, and size tokens in `project/tokens.json`. Hero, colours, type, wordmark and Discipline Ledger unchanged. Refusal Register and Signed Hour were not approved with this decision.

## 2026-10-18 — New homepage hero approved by Andries
Andries confirmed that the current an3s.info homepage hero (Lovable commit `feb33a6`) is the approved hero. The wordmark is the H1 with one breathing Halo, followed by the tagline in `GradientText`, the descriptor, a supporting line, and the actions WhatsApp Andries and See services. Behind it plays a full-bleed muted arrival film with a poster and a 45% `deep-space` overlay. It holds on the poster under reduced motion. It sits below the fixed 64px header through the shared page-content padding, so the hero is 64px lower than before. Documented in `project/components/Hero/README.md`.

## 2026-10-18 — Motion v1: light first, travel last (approved by Andries)
The original rule ("Light breathes, nothing travels ... no slides, bounces or parallax") left an3s.info with hard page cuts and flat reveals. Andries approved a governed motion set: four durations (120/240/420/4000ms), a 60ms stagger, two curves, "house lights" page changes, staggered one-time reveals, edge-first panel reveals, one gliding nav hairline, a 0.98 press, and starfield-only parallax at 0.04x scroll on desktop. Parallax was recommended against and approved explicitly, so it is fenced: starfield layer only, never hero media or content, off on touch and under reduced motion. Recorded as `motion` tokens in `project/tokens.json`; `dist/web/` needs a re-export through `tools/export.mjs` to carry them.

## 2026-10-18 — Fixed, solid header (approved by Andries)
A transparent sticky header let page titles scroll under the nav. The header is now fixed on `deep-space` at 82% with a 12px blur and a `line` hairline after 4px of scroll, with `scroll-padding-top` and content padding equal to its height.

## 2026-10-18 — Discipline Ledger as the price-list pattern
Prices are shown as one `Panel` per discipline with a "starts at" entry price and a hairline ledger of offers, not as a grid of cards. Quote-only work shows a cyan "Scoped with you" chip and, where it applies, a priced first step, so it reads as deliberate rather than blank. Documented in `project/components/DisciplineLedger/README.md`; built from existing tokens only.

## 2026-09-25 — Colours measured from the key visual
Neon values sampled from the poster's most saturated pixels per hue band (pink #fb49b6, violet #9020ca, blue #2476f0, cyan #48e1fd); grounds from its dark pixels (deep-space #03041d, void #000000, nebula #250533); glow text tints averaged from the tagline and descriptor type. `panel` (#080a24) is a derived step above `deep-space` so panels read on flat grounds.

## 2026-09-25 — One dark theme only ("Neon Night")
The source is entirely dark. A light theme would be invention and, because the viewer picks the non-dark theme for light-mode viewers, would become many people's first impression. Offered as a follow-up for print/long documents.

## 2026-09-25 — Montserrat as the single family
The poster's display type reads as a wide geometric sans set Light/ExtraBold with heavy tracking. Montserrat matches and is in the viewer's hosted-font catalogue (no font files needed). System mono stack for code.

## 2026-09-25 — Wordmark lifted from the raster, not redrawn
`an3s-wordmark.png` is matted from the poster pixels (unscreen alpha + component clean-up); `an3s-wordmark-on-space.png` is the raw crop. Only 366×124 px: a vector master is the top missing asset. (Superseded 2026-10-14: vector master redrawn; the PNGs remain as fallbacks.)

## 2026-10-14 — Vector wordmark redrawn by fitting the raster
`tools/brand/geometry.mjs` holds the wordmark as four outlines in the raster's own pixel units, fitted to the PNG's anti-aliased contours (lines for the A legs, N diagonal, 3 diagonal and terminal cuts; concentric circles for the 3 and S bowls). Fitted values are kept rather than idealised (left A leg leans 0.455, right 0.429; the A's right foot tucks into the N stem), so the SVG traces the artwork it replaces. Colours come from tokens (`ink`, `pink`, `cyan`), so the 3's red-to-magenta raster gradient became flat `pink`. Glow = blur 2.5 halo + blur 9 bloom at 80% in each letter's colour; the PNGs stay as raster fallbacks.

## 2026-10-14 — The mark is the pink 3
For favicons and app icons the wordmark is illegible below ~72px, so the mark is the 3 alone (the brand's lead pole, pink) on a `deep-space` tile with `radius-lg` proportions (rx 28 of 128). Legible at 16px. Proposed to the user; alternatives (3S, AN/3S stacked) were not drawn.

## 2026-10-14 — Brand graphics are built, not hand-edited
`tools/brand/build.mjs` writes the SVGs from geometry + tokens and renders the PNGs and share image with headless Chrome or Edge (no npm dependencies). No favicon.ico: the asset store accepts no .ico and current browsers (Safari 26 included) read SVG favicons. The share image is composed from the system's own components (Starfield, NameLockup, Statement) so it changes with them. Renders need a browser and, for the share image, the network (Google Fonts, jsDelivr React).

## 2026-09-25 — Icons drawn for the system
The poster's icons are small raster renders; eight new two-tone line icons (pink form, cyan detail, 2px round, 48 grid) were drawn to match and are flagged in the README's Iconography section.

## 2026-09-25 — Component set follows the poster
Panel, ServiceGrid, Icon, AwardWall, GradientText, Eyebrow, NameLockup, Statement, Highlight, Halo, Starfield come from elements on the key visual. Button is the one intentional addition (listed in the README).

## 2026-10-07 — The design system is the only source of truth for an3s.info
The user chose the design system as written for the website, so pink leads and cyan answers there too (the site's earlier Lovable "Brand Lock" made cyan primary). `tools/export.mjs` turns `project/tokens.json` into `dist/web/`; the website vendors that folder and verifies it against `manifest.json`. The shadcn role mapping lives in the exporter because it is a design decision: primary = pink-glow and secondary = cyan-glow (words and fills take the glow tints, as the brand book asks; labels on them use on-glow), accent (hovers, menus) = nebula, input = line-strong, destructive = danger, ring = focus (cyan), charts pink/cyan/blue/violet/ink in saturated hues.

## 2026-10-07 — Status colours and a control edge, added for the website
`danger` #f2564a (6:1 on deep-space; 4.6:1 on its own 20% tint), `success` #8af5b6 (15:1), each with a deep-space `on-` label colour, and `line-strong` (ink-muted at 55%, 3.4:1) for form-control edges. Danger sits close to pink in lightness and only 2.5:1 from success, so the brand book requires a word or icon with every status colour. No warning colour: nothing uses one yet.

## 2026-09-25 — Third-party award marks not reproduced
`AwardWall` renders official logos passed in by the consumer (forced to white) or a type-only fallback; no award logos were copied or redrawn.
