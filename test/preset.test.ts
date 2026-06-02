import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";

import config from "../src/preset";

const require = createRequire(import.meta.url);

describe("npm-package-json-lint-config-nick2bad4u", () => {
    it("exports the native CommonJS config expected by npm-package-json-lint", () => {
        expect.assertions(4);

        const cjsConfig = require("../index.cjs") as typeof config;

        expect(cjsConfig).toStrictEqual(config);
        expect(cjsConfig.rules["require-name"]).toBe("error");
        expect(cjsConfig.rules["require-name"]).not.toBe("off");
        expect(cjsConfig.rules["valid-values-private"]).toStrictEqual([
            "error",
            [false, true],
        ]);
    });
});
