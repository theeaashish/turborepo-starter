export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation only
        "style", // Code style (formatting, semicolons, etc)
        "refactor", // Code refactoring
        "perf", // Performance improvement
        "test", // Adding tests
        "build", // Build system or dependencies
        "ci", // CI/CD configuration
        "chore", // Other changes (e.g., updating packages)
        "revert", // Reverting a commit
      ],
    ],
    "subject-case": [2, "always", "lower-case"],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
  },
};
