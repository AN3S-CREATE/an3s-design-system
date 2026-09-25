# Key decisions

## 2026-09-25 — Colours measured from the key visual
Neon values sampled from the poster's most saturated pixels per hue band (pink #fb49b6, violet #9020ca, blue #2476f0, cyan #48e1fd); grounds from its dark pixels (deep-space #03041d, void #000000, nebula #250533); glow text tints averaged from the tagline and descriptor type. `panel` (#080a24) is a derived step above `deep-space` so panels read on flat grounds.

## 2026-09-25 — One dark theme only ("Neon Night")
The source is entirely dark. A light theme would be invention and, because the viewer picks the non-dark theme for light-mode viewers, would become many people's first impression. Offered as a follow-up for print/long documents.

## 2026-09-25 — Montserrat as the single family
The poster's display type reads as a wide geometric sans set Light/ExtraBold with heavy tracking. Montserrat matches and is in the viewer's hosted-font catalogue (no font files needed). System mono stack for code.

## 2026-09-25 — Wordmark lifted from the raster, not redrawn
`an3s-wordmark.png` is matted from the poster pixels (unscreen alpha + component clean-up); `an3s-wordmark-on-space.png` is the raw crop. Only 366×124 px: a vector master is the top missing asset.

## 2026-09-25 — Icons drawn for the system
The poster's icons are small raster renders; eight new two-tone line icons (pink form, cyan detail, 2px round, 48 grid) were drawn to match and are flagged in the README's Iconography section.

## 2026-09-25 — Component set follows the poster
Panel, ServiceGrid, Icon, AwardWall, GradientText, Eyebrow, NameLockup, Statement, Highlight, Halo, Starfield come from elements on the key visual. Button is the one intentional addition (listed in the README).

## 2026-09-25 — Third-party award marks not reproduced
`AwardWall` renders official logos passed in by the consumer (forced to white) or a type-only fallback; no award logos were copied or redrawn.
