/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
import globals from "globals";
import { defineConfig } from "./define-config.js";

/**
 * Node.js関連の設定。
 */
export const node = defineConfig([
  {
    languageOptions: {
      globals: globals.node,
    },
  },
]);
