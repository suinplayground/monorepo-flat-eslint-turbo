import { browser } from "./config.browser.js";
import { eslint } from "./config.eslint.js";
import { imports } from "./config.import.js";
import { next } from "./config.next.js";
import { comment } from "./config.no-commented-code.js";
import { node } from "./config.node.js";
import { onlyWarn } from "./config.only-warn.js";
import { prettierThisMustBePutLast } from "./config.prettier.js";
import { typescript } from "./config.typescript.js";
import { unicorn } from "./config.unicorn.js";
import { inferPackageTypes } from "./infer-package-type.js";
import { unignore } from "./unignores.js";
import type { Linter } from "eslint";

const rootFiles = ["*.js", "*.cjs", "*.mjs"];
const { browserPackages, nodePackages } = await inferPackageTypes([
  "apps",
  "packages",
]);
const browserFiles = browserPackages.map((dir) => `${dir}/**/*.{ts,tsx}`);
const nodeFiles = nodePackages.map((dir) => `${dir}/**/*.ts`);
const allFiles = [...rootFiles, ...browserFiles, ...nodeFiles];

// eslint-disable-next-line import/no-default-export
export default [
  {
    ignores: [
      // TypeScriptでの開発を基本とするプロジェクトでは、生成物であるJavaScriptファイルを検査
      // する必要がありません。そのため、生成物はあらかじめ検査対象からは除外しておきます。
      "**/*.{js,cjs,mjs,jsx}",
      "**/*.d.ts",
      // Yarnが生成するファイルを検査対象から除外します。
      ".yarn/**",
      // Next.jsが生成するファイルを検査対象から除外します。
      "apps/*/.next",
      // プロジェクトルート直下のJavaScriptファイルは検査対象に含めます。
      // これにはeslint.config.js自身も含まれます。
      ...unignore(rootFiles),
    ],
  },
  ...browser({ files: [...browserFiles] }),
  ...node({ files: [...rootFiles, ...nodeFiles] }),
  ...eslint({ files: allFiles }),
  ...typescript({ files: allFiles }),
  ...imports({ files: allFiles }),
  ...unicorn({ files: allFiles }),
  ...comment({ files: allFiles }),
  ...next({ files: browserFiles }),
  ...onlyWarn(),
  ...prettierThisMustBePutLast(),
] satisfies Linter.FlatConfig[];
