# AN3S Design System

Source files for the AN3S brand design system, built from the AN3S key visual and published as a Claude Design System artifact: https://claude.ai/artifact/Bcdfzi1Y1A6GTaU24meE9b (private: it opens for accounts it has been shared with).

## Layout

- `project/`: the system's own files, one-to-one with the artifact's `project/` folder
  - `README.md`: the brand book (start here)
  - `tokens.json`: colours, type, spacing, radii, glows and gradients
  - `components/`: `bundle.js` (React 18 components on `window.AN3S`), `bundle.css`, `index.d.ts`, and a `README.md` and `preview.html` per component, plus the cover
  - `assets/`: the wordmark, icons and key visual
- `.index/`: the project map for people and agents working in this repo

## Updating the published system

Edit files under `project/`, then publish the changed paths to the artifact. Images and SVGs under `project/assets/` live in the artifact's asset store and are referenced by id in `project/design-system.json`, so a changed image is uploaded again and its record updated there.
