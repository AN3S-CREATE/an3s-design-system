# Starfield

The deep-space background: `gradient-space` with pink smoke low on the left, blue smoke on the right, pinpoint stars, light streaks from the upper right and circuit traces in the upper left.

Wrap heroes, title slides, social tiles and poster layouts in it. **You provide** the content as children and, if it has little content, a `minHeight`. Stars are drawn on a canvas from `seed` (the same seed always draws the same sky); `density` scales the star count; `circuits`, `streaks` and `smoke` switch each layer off. Where it can't run (email, print), use the `gradient-space` token as a flat fallback.

Keep type on the calm middle of the field and the smoke at the edges. Don't set body text straight onto it; put it in a `Panel`.
