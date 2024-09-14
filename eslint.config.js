// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = [
  ...tseslint.config(
    {
      files: ["**/*.ts"],
      extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.stylistic,
        ...angular.configs.tsRecommended,
      ],
      processor: angular.processInlineTemplates,
      rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            style: "kebab-case",
          },
        ],
      },
    },
    {
      files: ["**/*.html"],
      extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
      rules: {
        "prettier/prettier": [
          "error",
          {
            parser: "angular",
          },
        ],
        "@angular-eslint/template/prefer-self-closing-tags": "error",
        "@angular-eslint/template/prefer-control-flow": "error",
      },
    }
  ),
  eslintPluginPrettierRecommended,
];
