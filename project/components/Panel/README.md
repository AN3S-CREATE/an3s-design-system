# Panel

A neon-edged surface with its label notched into the top edge: the AWARDS and CORE WORK panels of the key visual.

Use it to group one kind of content (recognition, services, a case-study summary) on `deep-space` or over a `Starfield`. Two panels side by side sit `space-3` apart at equal height.

**You provide** `label` (one or two words, shown uppercase in the `label` style), `tone`, and the children.

- `tone="pink"` runs the edge pink → violet → blue from left to right and blooms with `glow-pink`. Use it for recognition and people.
- `tone="blue"` is the Core Work edge: blue with a pink lower-left corner and a `glow-blue` bloom. Use it for services, systems and anything technical.
- Children sit on `panel` with `space-5` padding; a tab adds `space-6` above them and needs `space-4` of clear space over the panel.

Do put a `ServiceGrid` or an `AwardWall` inside rather than hand-built grids. Don't nest panels, add an inner border, or recolour the edge outside the two tones: the gradient always starts pink.
