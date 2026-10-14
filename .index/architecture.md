# Architecture

## Overview

A file-based Claude **Design System** artifact for the AN3S brand, sourced from one raster key visual (1000×1000 poster). The artifact type (`https://claude.ai/artifact/5M7UeXXcx16TP3vzVFNDzd`) supplies the viewer page; this repo supplies only the system's own files under `project/`.

```
project/
  design-system.json   index: title, namespace, libraries, asset records (blob ids)
  README.md            brand book (consuming agents read this first)
  tokens.json          tokens -> page compiles tokens.css (+ a .<style> class per type style)
  components/
    bundle.js          window.AN3S = { 12 React components }  (React 18 from jsDelivr)
    bundle.css         .an3s-* styles, token-driven
    index.d.ts         types as docs
    <Comp>/README.md   guidelines
    <Comp>/preview.html live preview (frame preloads tokens.css, bundle.css, React, bundle.js)
    Cover/preview.html  cover shown above the brand book
  assets/<Group>/      README.md published as files; images/SVG uploaded to the asset store
```

## Flows

- **Tokens → CSS**: the page compiles `tokens.json` into `tokens.css` (custom properties + type classes such as `.label`, `.tagline`). Components use `var(--token)` and the type classes; no raw hex in component CSS except mask channels and canvas fallbacks.
- **Fonts**: Montserrat is hosted by Google Fonts. The viewer auto-links it for type specimens (it is in the page's built-in catalogue); every preview links it itself because preview frames only inject `type.fonts` files.
- **Assets**: binaries are uploaded (`Artifact publish asset:true`) and recorded in `design-system.json` → `assetGroups.<Group>.files.<name>` with `blob`, `size`, `type`. Previews reference them as `/_blob/<id>`. The store re-serializes SVG uploads (expanded end tags, no trailing newline) and sanitizes them (XML comments and `<style>` elements are removed; presentation attributes, `class`, filters and `<use href>` survive), so an SVG record's `size` is the stored size: compare SVGs after that normalization, never raw local bytes, and keep anything an SVG needs at rest out of `<style>`. PNG/WebP sizes match local bytes exactly.
- **Publishing**: one publish call with `root` = repo root, `file_path` = `project/design-system.json`, `files` = changed `project/…` paths; `.d.ts` needs `contentType: text/plain`.
- **Brand graphics**: `node tools/brand/build.mjs` turns `tools/brand/geometry.mjs` (wordmark outlines in raster units) and the `ink`/`pink`/`cyan`/`deep-space` tokens into the logo SVGs, then renders the mark PNGs and the share image (a page built from `dist/web/tokens.css`, `bundle.css` and `bundle.js`) in headless Chrome/Edge. Run it before the web export when geometry or those tokens change; outputs land in `project/assets/` and are then uploaded to the asset store. Rebuild with `--svg` when only SVGs change: a full rebuild re-renders the PNGs, whose bytes then no longer match their uploaded records.
- **Web export → websites**: `node tools/export.mjs` writes `dist/web/` (tokens.css, shadcn.css, tailwind-preset.js, tokens.ts, assets, manifest.json) and refuses to finish if a shadcn role pairing misses contrast. an3s.info (`AN3S-at-CREATE/andries-liebenberg-my-eventful-pursuit`, a Lovable project) vendors `dist/web/` into `src/design-system/` with its own sync script and fails its checks if the copy or its hashes drift. Tooling stays at the repo root: the artifact type refuses toolchain files inside `project/`.

## Patterns and constraints

- Single theme `night` ("Neon Night"). The viewer treats theme names containing "dark"/"night" as dark; a light theme would become the default for light-mode viewers.
- Namespace/global: `AN3S`. Bundle must stay a classic script: no import/eval/network, no literal `</script` or `<!--`.
- `ServiceGrid` / `AwardWall` measure their width (ResizeObserver) to pick a column count; `ServiceGrid` prefers counts that divide the tiles evenly.
- `Starfield` draws on a canvas from a seed, reading token values via `getComputedStyle`.
- Cover follows the type's cover brief: one SVG, token-bound classes, derivation comment, art box x ≥ 480.
