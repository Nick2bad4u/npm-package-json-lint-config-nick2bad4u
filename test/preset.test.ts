import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

import config from "../src/preset";

const require = createRequire(import.meta.url);
const repositoryConfigPath = fileURLToPath(
    new URL("../.npmpackagejsonlintrc.json", import.meta.url)
);

describe("npm-package-json-lint-config-nick2bad4u", () => {
    it("exports the native CommonJS config expected by npm-package-json-lint", () => {
        expect.assertions(13);

        const cjsConfig = require("../index.cjs") as typeof config;

        expect(cjsConfig).toStrictEqual(config);
        expect(config.extends).toBe("");
        expect(cjsConfig.rules["require-name"]).toBe("error");
        expect(cjsConfig.rules["require-name"]).not.toBe("off");
        expect(cjsConfig.rules["no-file-dependencies"]).toBe("error");
        expect(cjsConfig.rules["no-git-dependencies"]).toBe("error");
        expect(cjsConfig.rules["no-archive-dependencies"]).toBe("error");
        expect(cjsConfig.rules["no-repeated-dependencies"]).toBe("error");
        expect(cjsConfig.rules["prefer-provenance"]).toBe("error");
        expect(cjsConfig.rules["require-files"]).toBe("error");
        expect(cjsConfig.rules["no-restricted-dependencies"]).toStrictEqual([
            "error",
            ["gulping-npm-package-json-lint"],
        ]);
        expect(cjsConfig.rules["valid-values-author"]).toStrictEqual([
            "error",
            [
                "Nick2bad4u",
                "nick2bad4u",
                "Typpi",
                "Nick",
                "Nick2bad4u <20943337+Nick2bad4u@users.noreply.github.com>",
                "Nick2bad4u <20943337+Nick2bad4u@users.noreply.github.com> (https://github.com/Nick2bad4u)",
            ],
        ]);
        expect(cjsConfig.rules["valid-values-private"]).toStrictEqual([
            "error",
            [false, true],
        ]);
    });

    it("keeps the repository rc file synchronized with the exported config", () => {
        expect.assertions(1);

        const repositoryConfig = JSON.parse(
            readFileSync(repositoryConfigPath, "utf8")
        ) as typeof config;

        expect(repositoryConfig).toStrictEqual(config);
    });
});
