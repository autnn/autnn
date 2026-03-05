import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";
const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [
      RuleConfigSeverity.Error,
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
    "scope-empty": [RuleConfigSeverity.Error, "never"],
    "type-enum": [
      RuleConfigSeverity.Error,
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
    "header-max-length": [RuleConfigSeverity.Error, "always", 200],
  },
};

export default Configuration;
