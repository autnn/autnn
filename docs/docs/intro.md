---
id: intro
slug: /
title: Welcome to autonbd
sidebar_label: Introduction
---

autonbd is a **template‑driven UI toolkit for Expo and React Native**, inspired by shadcn/ui but **not tied to TailwindCSS**.

Instead of installing components into `components/ui`, autonbd installs into a dedicated `autonbd/` folder with **templates** and **themes** kept separate:

- `autonbd/templates/<templateName>/components` – structure and behavior
- `autonbd/templates/<templateName>/themes` – design tokens and styling

This separation lets you **mix and match** templates (for example, `nightowl`, `grayman`, `base`) with different theme token sets, without coupling your app to a specific styling library.

## Packages

- `@autonbd/core` – config schema, template source abstraction, and file operations.
- `@autonbd/cli` – command‑line tool to init config and install templates into your project.
- `@autonbd/expo-plugin` – Expo config plugin that keeps your Expo app in sync with the active autonbd config.
- `@autonbd/templates-base` – built‑in templates like `base`, `nightowl`, and `grayman`.

## Quick start

From a project that uses pnpm workspaces and includes autonbd:

```bash
pnpm --filter @autonbd/cli exec autonbd init base
```

This will:

1. Create an `autonbd.config.json` file at the project root.
2. Install the selected template (default: `base`) into `autonbd/templates/base`.

List available templates:

```bash
pnpm --filter @autonbd/cli exec autonbd templates list
```

Switch theme in your existing config:

```bash
pnpm --filter @autonbd/cli exec autonbd theme switch nightowl-dark
```

## Next steps

- Explore the templates installed under `autonbd/`.
- Wire autonbd into your Expo app using `@autonbd/expo-plugin`.
- Customize or create your own templates following the same folder structure.

