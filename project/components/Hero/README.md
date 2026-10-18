# Hero (homepage)

The approved homepage hero for an3s.info, approved by Andries on 2026-10-18. Documented from the live Lovable build (project `94961edf-…`, commit `feb33a6`: `src/components/hero/home-hero.tsx`, `hero-media.tsx`, `nebula-film.tsx`, `hero-media.test.tsx`, `src/index.css`). This page describes what that code does. It adds nothing new.

## Layout

- A full-width section, at least `100svh - 4rem` tall (the viewport minus the 64px header), with content centred both ways. Padding is 16px at the sides, 48px top and bottom on mobile and 80px from `md` up.
- **Offset below the header:** the header is fixed and 64px tall (`--nav-h: 64px`). Every page, the homepage included, is padded by `.page-content { padding-top: var(--nav-h) }`, so the hero starts directly below the header and nothing sits under it. This 64px drop is part of the approved hero.
- The content is one centred column, max width 6xl. The background media sits behind it (z-0) and the content sits above it (z-10).

## Copy structure (top to bottom)

1. **H1 = the wordmark**: `/media/wordmark.png` (a byte-identical copy of the design-system wordmark), with alt text = the brand name, 426×144 intrinsic size, 224px wide on mobile and 384px from `md` up, loaded with high fetch priority. One `Halo` (`.hero-halo`) sits behind it.
2. **Tagline** in `GradientText`, verbatim from site facts: 18px on mobile, 24px from `md` up, semibold.
3. **Descriptor**, verbatim, as body text in the foreground colour.
4. **Supporting line** (muted body): "Design, websites, apps and automation for South African businesses that thought these tools were out of reach."
5. **Two actions**, stacked on mobile and side by side from `sm` up, both large and pill-shaped:
   - Primary: "WhatsApp Andries", which opens WhatsApp with a pre-filled message in a new tab.
   - Secondary: "See services" → `/services`, a transparent button with a cyan edge (`glow-secondary`).

## Media

- **Home (arrival film):** `HeroMedia` with `/media/hero-intro.webm` (first source) and `/media/hero-intro.mp4`, and the poster `/media/hero-poster.jpg`.
- **Every other page:** `NebulaFilm` plays `/media/hero-loop.webm` / `.mp4` with the same poster. It is mounted outside the route tree, so it never restarts when you change pages. On `/` it pauses and fades out, leaving the arrival film on screen.
- **Treatment:** the background is full-bleed and fixed to the viewport (`fixed inset-0`), with `object-cover`, centred, and no frame or side panel. The video is `muted autoplay loop playsInline preload="auto"`, `aria-hidden`, and doesn't respond to pointer input.
- **Poster first:** the poster `<img>` (1485×768) is always rendered underneath. The video starts at opacity 0 and fades in over 500ms once its first frame plays.
- **Overlay:** one `background` (deep-space) layer at 45% opacity over the media, so the type stays readable.
- **Autoplay blocked:** if playback is rejected or pauses, one pink "Play" button appears near the bottom of the screen (fixed, 96px from the bottom). It retries with muted playback and disappears once playback starts. Playback also retries on `visibilitychange` and `pageshow`. Both behaviours are covered by `hero-media.test.tsx`.
- **Files in `public/media`:** `hero-intro.mp4`, `hero-intro.webm`, `hero-loop.mp4`, `hero-loop.webm`, `hero-poster.jpg`. There are also copies in `public/media/hero/` (`hero-loop.mp4`, `hero-loop.webm`, `hero-poster.jpg`). The hero components read in this review don't reference those copies.

## Motion

- The halo breathes: `.hero-halo` uses the `gradient-glow` with a 48px blur, and its opacity moves between .14 and .25 over 4s, `ease-in-out`, infinite.
- The media fades in over 500ms, as described above.
- Starfield parallax (Motion v1) never applies to the hero media.

## Reduced motion

Under `prefers-reduced-motion: reduce` the video element isn't rendered at all, so only the poster shows and nothing autoplays. Fades are switched off (`motion-reduce:transition-none`), and the global reduced-motion rules stop all animation, including the halo breathing. The component re-checks the setting live if the visitor changes it.

## Mobile

The structure is the same at every size. Only these values change: a smaller wordmark (224px against 384px), a smaller tagline, less vertical padding, and the actions stack in a column below `sm`. Video plays inline (`playsInline`) and muted. If a phone blocks autoplay, the Play button appears.

## Do not

- Don't move the hero up under the header, or remove the 64px offset.
- Don't apply parallax, slides or scaling to the hero media.
- Don't add a second Halo, and don't recolour or re-set the wordmark.
- Don't play the media with sound, or autoplay it under reduced motion.
