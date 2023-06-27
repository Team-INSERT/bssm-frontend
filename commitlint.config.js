module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 72],
    "body-leading-blank": [2, "always"],
    "body-max-length": [2, "always", 400],
    "footer-leading-blank": [2, "always"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "style",
        "chore",
        "ci",
        "refactor",
        "revert",
        "test",
        "remove",
        "move",
        "docs",
        "perf",
      ],
    ],
  },
};
