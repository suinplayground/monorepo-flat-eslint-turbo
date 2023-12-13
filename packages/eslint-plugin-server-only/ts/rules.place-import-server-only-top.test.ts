import { RuleTester } from "@typescript-eslint/rule-tester";
import { outdent } from "outdent";
import * as vitest from "vitest";
import { name, rule } from "./rules.place-import-server-only-top.js";

RuleTester.describeSkip = vitest.describe.skip;
RuleTester.afterAll = vitest.afterAll;
RuleTester.describe = vitest.describe;
RuleTester.itOnly = vitest.it.only;
RuleTester.itSkip = vitest.it.skip;
RuleTester.it = vitest.it;

const ruleTester = new RuleTester();

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument
ruleTester.run(name, rule as any, {
  valid: [
    {
      name: 'OK if import "server-only"; is at the top',
      code: outdent`
        import "server-only";
        import React from "react";
        `.trim(),
    },
    {
      name: 'OK if there is no import "server-only";',
      code: `import React from "react";`,
    },
  ],
  invalid: [
    {
      name: 'NG if import "server-only"; is not at the top',
      code: outdent`
        import React from "react";
        import "server-only";
        `.trim(),
      errors: [
        {
          messageId: "placeTop",
          data: { firstCode: 'import React from "react";' },
        },
      ],
    },
  ],
});
