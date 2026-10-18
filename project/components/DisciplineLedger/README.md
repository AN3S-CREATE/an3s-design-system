# DisciplineLedger

A price list for the eight disciplines: one `Panel` per discipline, with a "starts at" entry price in the header and the offers set as a ledger of hairline rows inside. It replaces grids of priced cards wherever the full catalogue is shown (on an3s.info: `/services`). Built only from existing tokens and components; no new colours, type, shadows or motion. Pattern approved by Andries on 2026-10-18.

## Anatomy

**Panel header** (a `<button aria-expanded aria-controls>` or `<summary>`, at least 44px tall, `focus-ring`):
- Number `01`–`08` in `eyebrow` style, `ink-muted`, then the discipline name in `label` style, `ink`. Disciplines always in the brand order.
- `STARTS AT` in `eyebrow` style, `pink-glow`, then the entry price in `name-bold` (800), `ink`, about 48px desktop and 36px mobile, tabular numerals.
- Caption in `ink-muted`: "excl. VAT if applicable · N offers".
- Price band (decorative, `aria-hidden="true"`): a `line` hairline with one small `pink` dot per numeric offer on a log scale (R400 to R12,000) across the left ~82%, and a small `cyan` outlined `SCOPED` chip at the right end if the discipline has any quote-only or on-request offer.
- A `cyan` chevron that rotates on open (transform only).

**Panel body**: a `<ul>`, one row per offer, `line` hairlines between rows, never boxes within boxes.
- Left: offer name (`ink`, 600) and a one-line description (`ink-muted`, `caption`).
- Right, right-aligned: numeric price (`ink`, 700) with "excl. VAT if applicable" beneath in `caption`, `ink-muted`.
- Quote-only and on-request rows: a `cyan` outlined chip "SCOPED WITH YOU" and the price text in sentence case ("Quote only", "On request"). No VAT note on that text. Where the work starts with a paid first step, add it in `pink-glow` caption with its price and VAT note (for example "First step: Discovery Sprint R2,500").
- An `ASK` text link per row in `action` style, `cyan-glow`, at least 44px tall, with an accessible label naming the offer.
- Any discipline note (for example who delivers full productions) sits at the foot of its panel in `ink-muted` with a 2px `blue` left rule.

## Rules

- Entry price = the lowest numeric once-off price in that discipline, computed from the data, never hard-coded. Monthly and non-numeric lines are ignored.
- Prices come only from an approved price sheet. Never show competitor prices, invented prices or "from" figures that aren't on the sheet.
- "excl. VAT if applicable" appears next to numeric prices only.
- Layout: single column on mobile; from 900px, two columns of panels aligned to the top. On mobile, quote-only rows stack with the chip under the name. The first two panels open by default.
- Above the ledger: an `Eyebrow`, a two-line `Statement` (Light 300 over ExtraBold 800), one intro sentence, and a legend (pink dot "Published starting price", cyan ring "Scoped with you"). Foot line: "Prices in ZAR. Numeric prices are excl. VAT if applicable."
- Text on `panel` uses `ink`, `ink-soft`, `ink-muted`, `pink-glow`, `cyan` and `cyan-glow` only. `violet` is never text.

## Motion (see Motion in the brand book)

Edge first: the panel's neon edge fades in, then the entry price resolves once from 25% opacity and 3px blur to full `ink` (`motion-slow`, `ease-enter`), then rows follow 40ms apart with a 6px rise. Open and close animate grid-template-rows 0fr to 1fr over `motion-slow`, `ease-in-out`; close runs the reverse. Hover: `glow-cyan` edge with at most a 2px lift. No counting tickers. Everything is still under `prefers-reduced-motion`.

## Reference

Mockups: `pricing_concept.html` and its desktop and mobile renders, in the AN3S marketing workspace (not vendored here).
