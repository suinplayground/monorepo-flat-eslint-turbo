/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access */
import pluginImport from "eslint-plugin-i";
import { defineConfig } from "./define-config.js";

export const imports = defineConfig([
  {
    plugins: {
      import: pluginImport,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    settings: {
      "import/parsers": {
        espree: [".js", ".cjs", ".mjs", ".jsx"],
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      ...pluginImport.configs.recommended.rules,
      "import/no-anonymous-default-export": "error",
      "import/no-default-export": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "{react,react-dom/**,react-router-dom}",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "parent",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
          },
          warnOnUnassignedImports: false,
          "newlines-between": "never",
        },
      ],
    },
  },
]);
