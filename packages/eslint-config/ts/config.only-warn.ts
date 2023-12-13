/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import pluginOnlyWarn from "eslint-plugin-only-warn";
import { defineConfig } from "./define-config.js";

/**
 * ESLint のルールの重大度をすべて `warn` にする設定。
 *
 * Why only warnings?
 *
 * - Don't waste time thinking or discussing if it should be an error or a warning, focus on enabling of disabling a rule
 * - Warnings look different in editors, this allows you to quickly see that some tweaking is required, but your code still runs (eslint rules generally don't block the code from executing and fatal errors are still reported as error)
 * - Prevents noise, disallowing warnings to be committed in a codebase prevents clutter in the output of eslint (use special eslint comments for the instances when you need an exception to the rules)
 */
export const onlyWarn = defineConfig([
  {
    plugins: { "only-warn": pluginOnlyWarn },
  },
]);
