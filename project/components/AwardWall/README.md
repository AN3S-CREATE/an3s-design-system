# AwardWall

The recognition grid: award marks in single-colour white, centred in columns, with a last lone mark centred on its own row.

**You provide** `items` as `{name, detail?, logo?}`. With `logo` (the awarding body's official artwork, in any colour) the mark is forced to white. Without it, `name` is set uppercase in the `service` style at 700 in `ink`, with the `detail` line (a year or category) in `caption`, `ink-muted`. It asks for four columns and steps down when a cell would fall under 140px.

Do use the official logo files whenever you have them, never a redrawn mark, and order the list by weight or date, not alphabetically. Don't tint marks with neon or give them glow: recognition stays white. It belongs in a pink `Panel` labelled "Awards".
