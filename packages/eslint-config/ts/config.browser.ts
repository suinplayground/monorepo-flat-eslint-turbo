/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
import globals from "globals";
import { defineConfig } from "./define-config.js";

/**
 * ブラウザー関連の設定。
 */
export const browser = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        React: true,
        JSX: true,
      },
    },
  },
]);
