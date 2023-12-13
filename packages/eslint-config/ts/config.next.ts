import serverOnly from "@repo/eslint-plugin-server-only";
import { defineConfig } from "./define-config.js";
import type { Rules } from "@repo/eslint-plugin-server-only";

/**
 * Next.js関連の設定。
 */
export const next = defineConfig(({ files }) => [
  {
    files: ["**/app/**/page.tsx", "**/app/**/layout.tsx"],
    rules: {
      // Next.jsの規約に従う部分については、default exportを許可する。
      "import/no-default-export": "off",
    },
  },
  {
    files,
    plugins: {
      "server-only": serverOnly,
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    rules: {
      "server-only/place-import-server-only-top": "warn",
    } satisfies Rules,
  },
]);
