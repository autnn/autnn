import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      2,
      "always",
      [
        "autnn",
        "@autnn/cli",
        "@autnn/core",
        "@autnn/expo-plugin",
        "templates",
        "release",
      ],
    ],
    "scope-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "wip",
        "hotfix",
      ],
    ],
  },
};

export default Configuration;
