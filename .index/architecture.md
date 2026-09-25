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
- **Assets**: binaries are uploaded (`Artifact publish asset:true`) and recorded in `design-system.json` → `assetGroups.<Group>.files.<name>` with `blob`, `size`, `type`. Previews reference them as `/_blob/<id>`.
- **Publishing**: one publish call with `root` = repo root, `file_path` = `project/design-system.json`, `files` = changed `project/…` paths; `.d.ts` needs `contentType: text/plain`.

## Patterns and constraints

- Single theme `night` ("Neon Night"). The viewer treats theme names containing "dark"/"night" as dark; a light theme would become the default for light-mode viewers.
- Namespace/global: `AN3S`. Bundle must stay a classic script: no import/eval/network, no literal `</script` or `<!--`.
- `ServiceGrid` / `AwardWall` measure their width (ResizeObserver) to pick a column count; `ServiceGrid` prefers counts that divide the tiles evenly.
- `Starfield` draws on a canvas from a seed, reading token values via `getComputedStyle`.
- Cover follows the type's cover brief: one SVG, token-bound classes, derivation comment, art box x ≥ 480.
