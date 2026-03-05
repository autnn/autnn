### Must-have features for autnn

- **Template metadata and dependencies**
  - Each template can expose a list of **npm/pnpm packages** (runtime + dev) that the CLI will install/update using the chosen package manager.
  - Templates can declare **peer requirements** (e.g. React Native/Expo versions) so the CLI can warn on incompatibilities.
  - Support optional flags like `"optional": true` or `"onlyIf": "expo"` to conditionally install packages.

- **Expo integration**
  - Templates can expose a list of **Expo config plugins** and raw `app.json`/`app.config.*` fragments (e.g. `plugins`, `extra`, `assets`) that the CLI can merge into an Expo project.
  - The Expo plugin (`@autnn/expo-plugin`) reads the same metadata to ensure config stays in sync on `prebuild`.

- **Template source and loading**
  - Core loader can read templates from:
    - **Local repo root** (`templates/` directory, default for development).
    - **GitHub file URLs** (current remote source).
    - **GitHub releases archives** (planned: download and cache release assets).
  - Pluggable `TemplateSource` interface so the CLI can switch between `local`, `github`, and `release` via flags or config.

- **Config and project safety**
  - Strongly validated `autnn.config` (or `autnn.config.json`) with clear error messages.
  - **Dry-run mode** (`--dry-run`) that prints planned file changes and package installs without touching disk.
  - Idempotent operations: re-running `autnn init` or `autnn add` should be safe and non-destructive by default.

- **File operations and customization**
  - Templates describe **file mappings** (source → target) with support for:
    - Simple copy
    - Template variables (project name, path aliases, etc.)
    - Per-file conflict strategy (skip, overwrite, create `.bak`, show diff).
  - Support for **partial installs** (e.g. `autnn add button`), where components are grouped and discoverable.

- **Versioning and upgrades**
  - Each template has a **version** and optional changelog; CLI can show what changed between versions.
  - Command to **upgrade** an installed template with a preview of file and dependency changes.

- **Developer experience**
  - First-class **playground app** wired to use autnn templates out of the box.
  - Good **error messages** and suggestions (e.g. missing config, unknown template, missing Expo plugin).
  - Clear **uninstall/reset** flows for removing a template or cleaning the `autnn/` folder safely.
