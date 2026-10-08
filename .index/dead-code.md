# Dead code and tech debt

Light tech-debt register. Finding ids (e.g. `components-1`) refer to the 2026-10-07 inspection recorded in `.agents/REPO_ANALYSIS_MEMORY.md` (local, git-ignored).

## Dead or unused

| Path | Issue | Evidence | Risk | Recommended action | Priority |
| --- | --- | --- | --- | --- | --- |
| `project/components/bundle.css` (Halo block, ~l.234) | Redundant Halo rule repeating declarations already set | styles-9 | None at runtime; noise | Delete the duplicate rule | Low |
| `project/tokens.json` | Tokens with no reference in bundle.css, bundle.js or any preview: `void`, `nebula`, `link`, `focus`, `radius-sm`, `icon-tile`, `icon-inline`, `measure` (plus generated `--font-mono`) | tokens-4 | Page edits to these change nothing on screen. `void`, `nebula`, `link`, `radius-sm`, `measure` are consumer-facing (keep). `focus`, `icon-tile`, `icon-inline` are copied as literals (see debt) | Wire `focus` and the icon sizes through CSS; document the consumer-facing ones | Low |

## Tech debt

| Path | Issue | Evidence | Risk | Recommended action | Priority |
| --- | --- | --- | --- | --- | --- |
| `project/components/bundle.js:40` | `useColumns` searches for an even divisor on every fit, so ServiceGrid with 5, 7 or 11 items renders 1 column at any width; first paint is unmeasured | components-1, components-5 | Single stacked column in the main composite | Search for a divisor only when width limits columns; `useLayoutEffect` | High |
| `project/components/bundle.css:4-10` | Unscoped `body` rule (margin, background, colour, font) | styles-4, dx-7 | Restyles any host page that loads bundle.css | Move into each preview's own body rule, or scope to an opt-in class | Medium |
| `project/components/bundle.js:358-365`, `bundle.css:313` | Button link mode forwards `disabled` to `<a>` (still live); `aria-disabled` hides the focus ring; Icons in glow Buttons keep pink/cyan strokes at 1.2-2.5:1 | components-2, tokens-2, critic-3 | WCAG 2.4.7 / 1.4.11 failures | aria-disabled + drop href; restore ring; `on-glow` strokes inside `.an3s-btn--glow` | Medium |
| `project/components/bundle.js` (9 components) | Only Panel, GradientText and Button forward id/aria-*/data-*/events | components-3, components-12 | Landmarks and anchors can't be labelled or targeted | Apply the `without()` pattern everywhere; d.ts extends HTMLAttributes | Medium |
| `project/components/bundle.js:212`, `bundle.css:185` | NameLockup default (56px "LIEBENBERG" ≈ 393px) overflows phones; taglines (~710px) can't stay one line below ~750px | critic-4 | WCAG 1.4.10 reflow | Fluid `size` (clamp), narrow-width rule in the brand book | Medium |
| `README.md:16`, `.index/README.md:24`, `.index/architecture.md:27` | Publish instructions disagree with each other and with the type's revise flow (no pull-live-first, lastChange only sometimes, relative file_path) | dx-1, dx-3 | A republish can overwrite edits made on the page | One runbook in the root README; link to it from `.index` | Medium |
| repo root | No automated guards (grammar, contrast, d.ts drift, preview markers, `</script`, SVG/record consistency), no tests, no CI, no branch protection | dx-6 | Hard-rule regressions reach the live page unnoticed | `tools/check.mjs` + `node --test` + GitHub Actions | Medium |
| repo root | Artifact-only: no portable tokens, package, versions, tags or changelog | dx-7 | Other surfaces copy values by hand | `tools/export.mjs` → `dist/`, semver tags, CHANGELOG | Medium |
| `project/assets/Logos/*.png` | Raster-only wordmark (366×124), no vector master or derived exports; Starfield preview shows it at 240px, above the 183px 2× cap | dx-8, styles-10 | Soft or pixelated when shown large | Replace with a vector (SVG) master; keep the PNG as fallback | High |
| `project/assets/Icons/*.svg` | Icons drawn to match, not original artwork; all eight share filter id `glow` | styles-6 | Minor mismatch with any original set; id collisions when inlined together | Swap in original masters if they exist; unique filter ids | Low |
| `.gitattributes` (absent) | `core.autocrlf=true` on this machine with no attributes file | dx-5 | A fresh Windows clone checks out CRLF | `* text=auto eol=lf` plus binary markers, then renormalize | Low |
