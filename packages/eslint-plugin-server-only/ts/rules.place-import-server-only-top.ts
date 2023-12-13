/* eslint-disable unicorn/no-array-callback-reference */
import type { Rule } from "eslint";
import type { Node, ImportDeclaration } from "estree";

export const name = "place-import-server-only-top";

export const rule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
      description: `enforce 'import "server-only";' to be placed first`,
    },
    messages: {
      placeTop:
        'The statement `import "server-only";` should be placed before `{{ firstCode }}`.',
    },
  },
  create: (context) => ({
    Program: (program) => {
      const first = program.body.find(isImportDeclaration);
      const serverOnly = program.body.find(isServerOnlyImport);
      if (!first || !serverOnly) {
        return;
      }
      if (first !== serverOnly) {
        const firstCode = context.sourceCode.getText(first);
        context.report({
          node: serverOnly,
          messageId: "placeTop",
          data: { firstCode },
        });
      }
    },
  }),
} satisfies Rule.RuleModule;

const isImportDeclaration = (node: Node): node is ImportDeclaration =>
  node.type === "ImportDeclaration";

const isServerOnlyImport = (node: Node): node is ImportDeclaration =>
  isImportDeclaration(node) && node.source.value === "server-only";
