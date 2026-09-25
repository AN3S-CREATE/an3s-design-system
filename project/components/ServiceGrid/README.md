# ServiceGrid

Icon-over-label tiles divided by hairlines: the CORE WORK grid, with the eight AN3S disciplines built in.

With no props it renders the eight disciplines in brand order (`ServiceGrid.defaultItems`): AI Systems & Automation, Business Growth, Web & App Development, Experimental Marketing, Brand Strategy, 3D Virtualization & Events, Sales Leadership, Innovation & Mentorship.

**You provide** `items` (`{icon, label}`) to show a subset or new services. Write labels in Title Case with "&"; they render uppercase in the `service` style in `ink-soft`, under a 48px `Icon`.

It asks for four columns and steps down to a count that divides the tiles evenly (4, then 2, then 1) whenever a tile would fall under `minTileWidth` (150px), so give it about 640px for four across. Vertical `line` hairlines stop `space-4` short of each tile's top and bottom; the row divider runs the full width.

Do place it in a blue `Panel` labelled "Core Work", and keep every label to two lines. Don't mix tiles with and without icons in one grid.
