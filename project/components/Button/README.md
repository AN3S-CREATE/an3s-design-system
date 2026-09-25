# Button

The action button, uppercase in the `action` style. It is an intentional addition: the key visual has no controls.

**You provide** the label as children and a `variant`. `glow` (the default) fills with `gradient-glow` and sets the label in `on-glow`; use it once per view, for the main action ("Book a strategy session"). `outline` draws a `gradient-neon` edge around `deep-space` with an `ink` label, for everything else. Pass `href` to render a link. Hover adds `glow-cyan`; keyboard focus shows `focus-ring`.

Start labels with a verb and keep them to four words. Don't place two glow buttons side by side.
