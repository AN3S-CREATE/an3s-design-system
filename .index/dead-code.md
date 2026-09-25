# Dead code and tech debt

| Path | Issue | Evidence | Risk | Recommended action | Priority |
| --- | --- | --- | --- | --- | --- |
| `project/assets/Logos/*.png` | Raster-only wordmark (366×124) | Lifted from a 1000px poster | Soft or pixelated when shown large | Replace with a vector (SVG) master when available; keep the PNG as fallback | High |
| `project/assets/Icons/*.svg` | Icons drawn to match, not original artwork | Poster icons exist only as small raster renders | Minor mismatch with any original set | Swap in original icon masters if they exist | Low |

No dead code found as of 2026-09-25.
