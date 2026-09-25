# .index — project context map

Living map of this folder so any session (human or agent) starts from accurate context.

## What this project is

Local source of the **AN3S** design system, published as a Claude Design System artifact:
https://claude.ai/artifact/Bcdfzi1Y1A6GTaU24meE9b (private until shared from the page's Share menu).

`project/` mirrors the artifact's own files one-to-one (`project/<path>` locally = `project/<path>` in the artifact).
Binary assets under `project/assets/` are **uploads** in the artifact's asset store, referenced by blob id in `project/design-system.json`; they are not published as files.

## How to use this index

1. Read `file-inventory.md` and `architecture.md` first.
2. Read `key-decisions.md` before changing tokens, themes, fonts or the component set.
3. `dead-code.md` tracks anything unused; `context-refresh-log.md` records each refresh.

## Maintenance rules

- After creating, editing, moving or deleting a file, update `file-inventory.md` (and `architecture.md` / `key-decisions.md` if affected).
- Entries come from reading the actual files; no guesses, no secrets, no large code blocks.
- Status values: `Active`, `Deprecated`, `Dead`, `Experimental`, `Generated`.
- To change the published system: edit files here, then publish only the changed `project/` paths to the artifact URL; send `project/design-system.json` last and only when its own keys change (title, libraries, asset records), after re-reading the live copy.
