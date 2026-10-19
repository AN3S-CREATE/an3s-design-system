# Chaos Gap

A three-part layout pattern: pink ask · deep-space gap · cyan answer. The gap is Chaos — the middle word of the tagline — and it is the only place the reader's decision may sit. Pattern approved by Andries on 2026-10-19. Built from existing tokens and `Panel`; no new colours.

## Anatomy

Desktop (min-width ~900px): three columns, `grid-template-columns: 1fr var(--chaos-gap) 1fr`, equal row height.

1. **Ask field** (`Panel` tone="pink", or equivalent pink-edged surface). Tab label: "You ask" / "You asked". Holds the client question in `pink-glow`, ExtraBold, sentence or display case as fits length. Caption optional.
2. **Gap** (deep-space, no fill, no edge). Width = `2 ×` the height of the wordmark's "3" at the composition's wordmark size (`--chaos-gap`). Contents, centred, top to bottom or left to right:
   - Optional eyebrow "Chaos" (`ink-muted`, `eyebrow` style)
   - Recommended offer name (`ink`, uppercase, tracked)
   - List price (`ink`, ExtraBold, tabular numerals) plus "excl. VAT if applicable" in `caption`, `ink-muted`, when the price is numeric
   - One next-step control: "Reply YES" (cyan-outlined chip or button) or "WhatsApp Andries"
3. **Answer field** (`Panel` tone="blue"). Tab label: "I answer" / "My answer". Holds the answer in `ink-soft`; priced offer names and figures in `cyan-glow` ExtraBold. Secondary actions (WhatsApp, See prices) sit here, never in the gap.

Mobile: stack Ask → Gap → Answer. Gap becomes a horizontal band at least as tall as `--chaos-gap` computed against a ~160–200px reference wordmark, with the decision items in a wrapping row.

## Rules

- Gap width is measured from the wordmark in *this* composition, not a global pixel. If the wordmark is 200px wide, use the "3" height at that size × 2.
- Nothing but the decision sits in the gap. Filling the gap with logos, awards, body copy or a second CTA makes the artefact off-brand.
- Prices come only from the approved price sheet. Never invent or "from" a figure that isn't on it.
- AN3S does not speak first: the Ask field is always present and always first.
- One `Halo` maximum per whole composition (usually none on Chaos Gap sections). No drop shadows.
- Under `prefers-reduced-motion`, the layout is static; Light Cue 3 (see Motion) does not run.

## Motion

When the section reveals, play **Light Cue 3** (Motion in the brand book): pink Ask edge up (`motion-base` 240ms) → dark gap holds (`motion-fast` 120ms) → cyan Answer edge up (`motion-slow` 420ms). Nothing else animates before this cue.

## Reference

Marketing mockups (not vendored): `brand_forge/mockups/site_section_*.png`, `post1_ask_answer_1080x1350.png`, `email_signature_600w@2x.png`, `proposal_cover_A4@2x.png`.
