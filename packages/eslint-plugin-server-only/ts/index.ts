import * as placeImportServerOnlyTop from "./rules.place-import-server-only-top.js";
import type { ESLint, Linter } from "eslint";

const plugin = {
  rules: {
    [placeImportServerOnlyTop.name]: placeImportServerOnlyTop.rule,
  },
} as const satisfies ESLint.Plugin;

// eslint-disable-next-line import/no-default-export
export default plugin;

export type Rules = Record<
  `server-only/${keyof typeof plugin.rules}`,
  Linter.RuleLevel
>;
