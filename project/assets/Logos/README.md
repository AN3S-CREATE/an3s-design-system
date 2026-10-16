# Logos

- `an3s-wordmark.svg`: the master wordmark, vectors redrawn from the key visual, with its own glow (a tight halo and a wide bloom in each letter's colour). AN in `ink`, 3 in `pink`, S in `cyan`. For `deep-space`, `void`, `panel` and `Starfield` only, at 120px wide or more.
- `an3s-wordmark-flat.svg`: the same letters without glow, for 72–120px wide and anywhere a filter can't render.
- `an3s-loader.svg`: the glowing wordmark whose bloom swells by a third over 4s, ease-in-out; still under `prefers-reduced-motion`. For loading screens. The breathing is CSS inside the file, which this asset store strips, so the copy here holds still at its resting glow; the web export carries the breathing original.
- `an3s-mark.svg`: the pink 3 on a `deep-space` tile (rounded at `radius-lg` proportions), for favicons, app icons and avatars. The SVG is the favicon. Exports: `an3s-mark-180.png` (apple-touch-icon, opaque square), `an3s-mark-512.png` (app manifests, structured-data logos).
- `an3s-wordmark.png`: the original raster lift, transparent, 366 × 124 px; only where SVG can't go. Show it 366px wide or less (183px on 2× screens), never below 96px.
- `an3s-wordmark-on-space.png`: the raster lift with the key visual's night sky behind it, 366 × 124 px, for places that can't take transparency (email signatures, dark social avatars).
