# Strata

A quiet proof device: one hairline per calendar year since 2000. It makes "since 2000" and "Est. 2003." visible without a statistic or a claim. Component approved by Andries on 2026-10-19. Built from existing `line` / `pink` / `cyan` tokens only.

## Anatomy

- A horizontal band of vertical hairlines, one per year from **2000** through the **current calendar year** (27 lines in 2026; 28 in 2027, and so on).
- Default years: `ink-muted` / `line` hairlines. Years divisible by 5 may raise slightly taller.
- **2003:** a small cyan filled tick (dot or 6px rounded square in `cyan`) at the top of its hairline, with the caption "Est. 2003" in `cyan-glow` when labels are shown.
- **Current year:** the only pink line (`pink`, ~2.5px), with a soft pink bloom allowed. Caption "YYYY" in `pink-glow` when labels are shown.
- Optional end labels: "2000" left, current year right, in `caption` / `eyebrow` style, `ink-muted`.

## Rules

- Each January, append exactly one hairline for the new year. No other edit to Strata is permitted while it remains in the system (that is the point of the mark).
- Strata does not carry invented metrics, counts of clients, or "years of experience" copy beyond the years it draws.
- Place it in section footers, social footers, email signatures and proposal covers — never inside the Chaos Gap itself.
- Prefer SVG (vector hairlines). Raster fallbacks are acceptable for email.
- Under `prefers-reduced-motion`, Strata is still; it never animates.

## Accessibility

Expose as an image with alt text, for example: "One line a year since 2000. Est. 2003. Current year highlighted." Decorative uses may be `aria-hidden` when a visible caption repeats the same fact.
