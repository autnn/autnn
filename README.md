# autnn

`autnn` is a TypeScript monorepo (powered by Turborepo and pnpm) for building reusable libraries, templates, and tooling around the Autnn platform.  
It includes shared configuration, utilities, and app/template packages that can be reused across projects.

## Getting Started

### Prerequisites

- Node.js `>= 18`
- [pnpm](https://pnpm.io/) (this repo uses `pnpm@9`)

### Install dependencies

```sh
pnpm install
```

### Run in development

Start all apps/packages in dev mode:

```sh
pnpm dev
```

### Build

Build all apps and packages:

```sh
pnpm build
```

### Lint and format

Run lint across the monorepo:

```sh
pnpm lint
```

Format code with Prettier:

```sh
pnpm format
```

## Project Structure

At a high level, this repository contains:

- **Apps** – Example/demo applications for the Autnn platform.
- **Packages** – Shared libraries, utilities, and configuration used by the apps and by external projects.
- **Tooling** – Centralized ESLint/Prettier/TypeScript configuration, Husky hooks, and release tooling (Changesets, Turbo).

Within `packages/` you will find libraries that can be published and consumed by other projects (for example, UI components or Tailwind-like utility helpers).

## Using the Libraries

Typical usage pattern from a consuming app or template:

```ts
// Example only: adjust import paths/names to match the actual package.
import { someHelper } from "@autnn/some-package";

const result = someHelper();
```

Refer to each package’s own README (under `packages/<name>/README.md`) for detailed APIs and examples.

## Contributing

Contributions are welcome!

1. **Fork** the repository and create a new branch:
   ```sh
   git checkout -b feat/my-feature
   ```
2. **Install dependencies**:
   ```sh
   pnpm install
   ```
3. **Make your changes**, add or update tests where relevant.
4. **Run checks** before opening a PR:
   ```sh
   pnpm lint
   pnpm build
   ```
5. **Commit** using conventional commit messages (enforced by commitlint).
6. **Open a Pull Request** with a clear description of the change and any relevant context.

## Releases

This repo uses [Changesets](https://github.com/changesets/changesets) and Turborepo for versioning and releases:

- Use `pnpm release:add` to create a new changeset.
- Use `pnpm release:version` and `pnpm release:publish` as part of the release process.

See the internal docs or CI configuration for the exact release flow.

## License

The license for this project is defined in the `LICENSE` file in the repository root (or will be added there).  
Please review that file for the full license text before using this code in production.
