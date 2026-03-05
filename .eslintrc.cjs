/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"], // or per-package configs if needed
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // turns Prettier violations into ESLint errors
  ],
  rules: {
    // your custom rules here
    "prettier/prettier": "error",
  },
  ignorePatterns: ["dist", "build", "node_modules"],
};
