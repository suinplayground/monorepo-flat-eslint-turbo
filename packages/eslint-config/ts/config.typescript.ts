import pluginTypescript from "@typescript-eslint/eslint-plugin";
// eslint-disable-next-line import/default
import typescriptEslintParser from "@typescript-eslint/parser";
import { defineConfig } from "./define-config.js";

export const typescript = defineConfig([
  {
    languageOptions: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-assignment
      parser: typescriptEslintParser as any,
      parserOptions: {
        project: true,
        sourceType: "module",
      },
    },
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-assignment
      "@typescript-eslint": pluginTypescript as any,
    },
    rules: {
      ...pluginTypescript?.configs?.["recommended"]?.rules,
      ...pluginTypescript?.configs?.["recommended-type-checked"]?.rules,
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",

        { prefer: "type-imports" },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["camelCase"],
        },
        {
          selector: "variable",
          format: [
            "camelCase",
            "PascalCase", // React.FunctionComponent =
          ],
        },
        {
          selector: "parameter",
          format: ["camelCase"],
        },
        {
          selector: "memberLike",
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "function",
          format: [
            "camelCase",
            "PascalCase", // React.FunctionComponent =
          ],
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "enum",
          format: ["PascalCase"],
        },
        {
          selector: "enumMember",
          format: ["StrictPascalCase"],
        },
        {
          selector: [
            "classProperty",
            "objectLiteralProperty",
            "typeProperty",
            "classMethod",
            "objectLiteralMethod",
            "typeMethod",
            "accessor",
            "enumMember",
          ],
          // eslint-disable-next-line unicorn/no-null
          format: null,
          modifiers: ["requiresQuotes"],
        },
        {
          selector: "import",
          format: ["camelCase", "PascalCase"],
        },
      ],
    },
  },
]);
