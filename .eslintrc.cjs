// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: path.join(__dirname, "tsconfig.json"),
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
      "prettier",
  ],
  rules: {
    /*
     * TODO: sort imports
     * "sort-imports": ["error", {
     *  allowSeparatedGroups: true,
     * }],
    */
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        "prefer": "type-imports",
        "fixStyle": "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "arrow-body-style": ["warn", "as-needed"],
    "prettier/prettier": "error",
    "react/no-unescaped-entities": "off"
  },
};

module.exports = config;
