AN3S is Andries Liebenberg's strategic development and growth practice, established 2003: *"Fueling growth at the intersection of Strategy, Chaos, and Experimental Tech."* The identity is neon light in deep space. Neon Pink (strategy, the human side) and Neon Cyan (technology) are the two poles, Violet and Electric Blue carry the light between them, and everything sits on `deep-space`. Build every surface dark and let white type and a little light do the work.

## The key visual, as components

The master poster (`assets/Imagery/an3s-key-visual.webp`) is the reference composition. Rebuild it, and every hero, title slide and social tile, from the parts:

1. `Starfield` as the ground.
2. `GradientText` at the top: "Fueling growth at the intersection of".
3. `Halo` around the portrait on one side, the portrait lit pink from the left and blue from the right.
4. On the other side, stacked `space-6` apart: `Eyebrow` ("Est. 2003"), `NameLockup` ("Andries" / "Liebenberg"), the wordmark, then a `Statement` with `Highlight`s.
5. Below, two `Panel`s side by side: a pink one labelled "Awards" holding an `AwardWall`, a blue one labelled "Core Work" holding a `ServiceGrid`.
6. `GradientText` at the foot: "Strategy, Chaos, and Experimental Tech".

## Voice and copy

- Lines to use verbatim:
  - Tagline: "Fueling growth at the intersection of Strategy, Chaos, and Experimental Tech." Split it across the top and foot of a composition at "…intersection of".
  - Descriptor: "Strategic Development & Growth Advisor for Intelligent Businesses."
  - Marker: "Est. 2003."
- Write the name **AN3S**: capitals with the numeral 3, never "ANES", "An3s" or "A.N.3.S". The person is **Andries Liebenberg**.
- Display lines are UPPERCASE with wide tracking (the `tagline`, `statement`, `label`, `eyebrow`, `service` and `action` styles); keep them under about eight words. Anything longer is sentence case in `heading` and `body`.
- Service names are Title Case with "&". Use "&" in names and titles, "and" in running sentences. Keep the Oxford comma in "Strategy, Chaos, and Experimental Tech".
- The tone is confident and compressed: short declaratives, nouns that name the work. The source copy uses no emoji and no exclamation marks; keep it that way.
- The eight disciplines, in this order and spelling: AI Systems & Automation · Business Growth · Web & App Development · Experimental Marketing · Brand Strategy · 3D Virtualization & Events · Sales Leadership · Innovation & Mentorship.
- Recognition shown on the key visual: Africa CEO Forum Awards · Young Entrepreneur of the Year (YE Awards 2019) · South African Small Business Awards · National Presidential Small & Cooperatives Awards 2016 · EY Entrepreneur Of The Year · The South African Future Trust Awards 2025 · a BusinessDay award (confirm its title before quoting it) · Absa Supplier Development Award · BCX Digital Innovation Awards.

## Colour

- Ground: `deep-space` for every page, slide and tile; `void` only at the outer edges (poster bleeds, the far end of `gradient-space`); `nebula` only as haze. There is no light theme: don't put the brand on white.
- Surfaces: `panel` for anything raised. A panel is defined by its neon edge, not its fill.
- Type: `ink` for names, headlines and labels; `ink-soft` for body copy and service labels; `ink-muted` for secondary lines and captions.
- Light: `pink` leads and `cyan` answers, in the wordmark's own order (AN · 3 · S). When two hues share a composition, pink sits left or top and cyan or blue sits right or bottom.
- `violet` lives only between pink and blue: gradient midpoints, the halo, nebula light. Never text.
- `blue` is for panel edges, smoke and the right-hand side of the halo.
- Coloured words use the glow tints (`pink-glow`, `violet-glow`, `cyan-glow`), which read as emitted light. The saturated `pink` and `cyan` are for strokes, edges and icons.
- Gradients: `gradient-glow` for type, `gradient-neon` for edges and rules, `gradient-space` for full-bleed backgrounds. Always left to right, pink first.
- Keep neon scarce. It is light, not paint: an edge, an icon, a few words. Large areas stay `deep-space`.
- Status: `danger` for errors and destructive actions, `success` for confirmations, as text and icons on `deep-space` or `panel`, or as fills under `on-danger` and `on-success` labels. A status colour always comes with a word or an icon, and never decorates: `danger` sits close to `pink` in lightness.
- In interfaces, pink leads as the primary colour and cyan follows as the secondary one, both in their glow tints: words in `pink-glow` and `cyan-glow`, fills under `on-glow` labels. Edges, focus rings, blooms and charts keep the saturated `pink`, `cyan`, `blue` and `violet`. Menus and hovers lift onto `nebula`.

## Type

- One family: **Montserrat** (Google Fonts; weights 300, 400, 500, 600, 700, 800), plus the `mono` stack for code.
- The brand's move is contrast: `name-light` (300) over `name-bold` (800), as in "ANDRIES / LIEBENBERG". Don't reach for the middle weights in display type.
- Tracking widens as text gets smaller: taglines 0.32em, eyebrows 0.24em, labels 0.22em, buttons 0.16em, statements 0.14em, names 0.02–0.04em, body 0.
- `heading`, `body` and `caption` are sentence case; body runs in `ink-soft`, no wider than `measure`.

## Panels, lines and corners

- Group related content in a `Panel` (for price lists, the `DisciplineLedger` pattern): a 2px edge in the neon gradient, `radius-lg` corners, `panel` fill, a tab label in the `label` style (`radius-md`) notched into the top edge, `space-5` padding.
- Two panels side by side sit `space-3` apart at equal height: pink for recognition and people, blue for services and systems.
- Inside panels, divide tiles with `line` hairlines, never boxes within boxes.
- Form controls (inputs, selects, checkboxes) take a `line-strong` edge, so the edge alone marks the control.
- Corners: `radius-lg` for panels and image frames, `radius-md` for tabs and buttons, `radius-sm` for code and chips, `radius-full` only for the halo, nodes and round portraits. No square-cornered surfaces.

## Light and depth

- Depth comes from light, not shadow: `glow-pink` and `glow-blue` bloom around panel edges; `glow-cyan` answers hover. No drop shadows.
- Glow edges and marks, never blocks of text. Headlines stay crisp white; only the wordmark, icons, rules, panel edges and the halo bloom.
- One `Halo` per composition, behind its main subject.

## Backgrounds and imagery

- Start from `Starfield` (flat fallback: `gradient-space`): pink smoke low on the left, blue smoke on the right, pinpoint stars, streaks from the upper right, circuit traces in the upper left.
- Portraits are cut out, lit with a pink rim from the left and blue from the right, set in a `Halo` in front of a neon night skyline.
- Imagery is night-time, cool and high-contrast: skylines, light trails, circuitry, smoke. No daylight stock, no flat illustration.
- Link previews (og:image, twitter:image) use `assets/Imagery/an3s-share.png`, 1200 × 630: the name, wordmark and descriptor on a `Starfield`.

## Logo

- The wordmark is AN in white, 3 in pink, S in cyan, with its own glow. The master is `assets/Logos/an3s-wordmark.svg`, redrawn as vectors from the key visual: use it on `deep-space`, `void`, `panel` or a `Starfield`, at 120px wide or more.
- Below 120px wide use `an3s-wordmark-flat.svg`, the same letters without glow (glow turns to blur at small sizes). Never show the wordmark below 72px wide: use the mark instead.
- `an3s-wordmark.png` and `an3s-wordmark-on-space.png` (366 × 124 px) are the original raster lifts, only for places that can't take SVG (email signatures, some social tools): show them 366px wide or less (183px or less on 2× screens) and never below 96px. Use the on-space version where transparency isn't possible.
- The mark, `an3s-mark.svg`, is the pink 3 of the wordmark on a `deep-space` tile: favicons, app icons and avatars, never beside the wordmark. Ready-made exports: `an3s-mark-180.png` (apple-touch-icon) and `an3s-mark-512.png` (app manifests, structured-data logos); the SVG itself is the favicon.
- Loading screens use `an3s-loader.svg`: the glowing wordmark whose bloom breathes (see Motion) and holds still under `prefers-reduced-motion`.
- Never re-set the wordmark in a font, recolour it, outline it, stretch it or put it on a light ground.
- Keep clear space around it equal to the height of the "3".

## Iconography

- Eight line icons, one per discipline, in `assets/Icons/` and as `Icon`: 2px round strokes on a 48-unit grid, primary form in `pink`, detail in `cyan`, soft glow. 48px (`icon-tile`) in tiles; 20px (`icon-inline`) without glow beside text.
- New icons follow the same rules: line only, two tones, no fills, no emoji.
- These eight were drawn for this system to match the key visual's icons; replace them with the original artwork if it exists.

## Motion

Light first, travel last (Motion v1, approved by Andries 2026-10-18). Light still does most of the work: glows swell, edges light, prices resolve. Movement is small, short and always in service of reading order. Anything not listed here is not part of the system.

- Tokens: `motion-fast` 120ms (hover colour, press), `motion-base` 240ms (edge glow, row fade, header hairline), `motion-slow` 420ms (reveals, panel open and close, nav indicator glide), `motion-breath` 4000ms (halo and loader breathing), `motion-stagger` 60ms per child. Two curves only: `ease-enter` cubic-bezier(.2,.7,.2,1) for entrances, `ease-in-out` cubic-bezier(.65,0,.35,1) for exits, open and close, and breathing. No bounce, spring or overshoot.
- Breathing: a glow may swell by about a third over `motion-breath`, `ease-in-out`; stars may twinkle and drift slowly.
- Page changes ("house lights"): the content dims and settles 1% smaller over 180ms, then the new page lights up headline first over 320ms after a 60ms delay. The header, wordmark and starfield never move or re-render. Prefer the View Transitions API; fall back to a keyed fade with the same values. Focus moves to the new page's H1.
- Reveals: one time per element, opacity plus a 10px rise over `motion-slow`, children in reading order `motion-stagger` apart (at most 8 children, 6 on mobile). Reveal states hide with opacity, never `display`, so nothing shifts.
- Panels light edge first: the neon edge fades in, then the entry price resolves from 25% opacity and 3px blur to full ink once, then rows follow 40ms apart with a 6px rise. Open and close ease over `motion-slow`; closing runs the reverse. No counting tickers.
- Navigation: one `gradient-neon` hairline glides under the active link (transform only, `motion-slow`). It is the only element that travels sideways.
- Hover and press: the `glow-cyan` edge answers hover with at most a 2px lift; buttons press to 0.98 scale for 60ms.
- Header: fixed, `deep-space` at 82% with a 12px backdrop blur; a `line` hairline appears once the page scrolls past 4px. Set `scroll-padding-top` to the header height plus `space-3` (16px) and pad page content by the header height, so nothing sits under it.
- Parallax: the starfield layer only, moving at 0.04x scroll (translateY), on desktop only (min-width 1024px and a fine pointer). Never on hero media (image, video, poster), portraits, panels, content or text. No other parallax.
- Hero media: a muted video loop with a poster image is allowed; it holds on the poster under reduced motion.
- Performance: animate transform and opacity only (exceptions: a panel's grid-template-rows on user click, one blur per entry price, once). One-shot IntersectionObserver; the only scroll listeners are the header hairline and the starfield parallax, both passive and frame-throttled. `will-change` on the starfield only.
- Under `prefers-reduced-motion`, everything is still: no reveals, transitions, breathing or parallax, content is visible at once, and page changes are an instant swap with focus still moved to the H1.

## Accessibility

- On `deep-space`: `ink` 20:1, `ink-soft` 16:1, `ink-muted` 9.5:1, `pink` 6.5:1, `blue` 4.7:1, `cyan` 13:1, `danger` 6:1, `success` 15:1, every glow tint 8.9:1 or better. `line-strong` (3.4:1) is the weakest edge a control may have; `violet` (3.1:1) is for marks only; `line` (2.1:1) is decorative.
- Every interactive element shows `focus-ring`: a 2px `deep-space` gap, then 2px of `cyan`.
- Colour is never the only signal: highlighted words are also ExtraBold, and icons always sit beside a label.

## Intentional additions

The key visual shows no interface, so these were added for web, app and document work: `Button`; the `heading`, `body`, `caption`, `action` and `code` styles; the `panel` fill (a step above `deep-space`); the `link` and `focus` tokens; the `size` tokens; and, for the website's forms and messages, `line-strong` and the `danger` and `success` status colours.
