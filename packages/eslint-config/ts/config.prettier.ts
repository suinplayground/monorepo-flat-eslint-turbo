import configPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "./define-config.js";

/**
 * Prettier 関連の設定。
 *
 * この設定には次の2つの機能があります。
 *
 * 1. Prettierと競合するESLintルールを無効化します。この設定は様々なルールを無効化するもののため、他の設定と組み合わせるときは全設定の最後に置かなければなりません。
 * 2. Prettierでフォーマットできているかどうかをチェックし、できていなければ指摘します。
 */
export const prettierThisMustBePutLast = defineConfig([
  configPrettier,
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": "error",
    },
  },
]);
