/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
import pluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig } from "./define-config.js";

/**
 * sindresorhus 氏提供の ESLint ルール。
 */
export const unicorn = defineConfig([
  {
    plugins: { unicorn: pluginUnicorn },
    rules: {
      ...pluginUnicorn.configs.recommended.rules,
      "unicorn/no-nested-ternary": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },
]);
