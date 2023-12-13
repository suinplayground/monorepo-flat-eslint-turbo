import eslintJs from "@eslint/js";
import { defineConfig } from "./define-config.js";

/**
 * ESLintビルトインのルール設定。
 */
export const eslint = defineConfig([
  eslintJs.configs.recommended,
  {
    rules: {
      "no-console": "error", // consoleではなくloggerを使いましょう。
      "object-shorthand": ["error", "always"],
      "prefer-destructuring": [
        "error",
        { VariableDeclarator: { object: true } },
        { enforceForRenamedProperties: false },
      ],
    },
  },
]);
