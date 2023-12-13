/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import noCommentedCode from "eslint-plugin-no-commented-code";
import { defineConfig } from "./define-config.js";

/**
 * コードのコメントアウトを放置しないための設定
 */
export const comment = defineConfig([
  {
    plugins: { "no-commented-code": noCommentedCode },
    rules: {
      "no-commented-code/no-commented-code": "warn",
    },
  },
]);
