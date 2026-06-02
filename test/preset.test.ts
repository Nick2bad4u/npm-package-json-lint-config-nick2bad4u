import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";

import config from "../src/preset";

const require = createRequire(import.meta.url);

describe("npm-package-json-lint-config-nick2bad4u", () => {
    it("exports the native CommonJS config expected by npm-package-json-lint", () => {
        expect.assertions(8);

        const cjsConfig = require("../index.cjs") as typeof config;

        expect(cjsConfig).toStrictEqual(config);
        expect(config.extends).toBe("");
        expect(cjsConfig.rules["require-name"]).toBe("error");
        expect(cjsConfig.rules["require-name"]).not.toBe("off");
        expect(cjsConfig.rules["no-restricted-dependencies"]).toStrictEqual([
            "error",
            ["gulping-npm-package-json-lint"],
        ]);
        expect(cjsConfig.rules["require-files"]).toBe("off");
        expect(cjsConfig.rules["valid-values-author"]).toStrictEqual([
            "error",
            [
                "Nick2bad4u",
                "nick2bad4u",
                "Typpi",
                "Nick",
                "Nick2bad4u <20943337+Nick2bad4u@users.noreply.github.com>",
                "Nick2bad4u <20943337+Nick2bad4u@users.noreply.github.com> (https://github.com/Nick2bad4u)",
                "Nick2bad4u <20943337+Nick2bad4u@users.noreply.github.com> (https://nick2bad4u.github.io/eslint-plugin-immutable-2)",
                "Nick2bad4u <20943337+Nick2bad4u@users.noreply.github.com> (https://nick2bad4u.github.io/eslint-plugin-SDL-2)",
                "Nick2bad4u <20943337+Nick2bad4u@users.noreply.github.com> (https://nick2bad4u.github.io/eslint-plugin-tsdoc-require-2)",
                "Nick2bad4u <20943337+Nick2bad4u@users.noreply.github.com> (https://nick2bad4u.github.io/eslint-plugin-typefest)",
                "Nick2bad4u <20943337+Nick2bad4u@users.noreply.github.com> (https://nick2bad4u.github.io/eslint-plugin-write-good-comments-2)",
                "Nick2bad4u <20943337+Nick2bad4u@users.noreply.github.com> (https://nick2bad4u.github.io/FitFileViewer)",
                "Nick2bad4u <20943337+Nick2bad4u@users.noreply.github.com> (https://nick2bad4u.github.io/Uptime-Watcher/)",
            ],
        ]);
        expect(cjsConfig.rules["valid-values-private"]).toStrictEqual([
            "error",
            [false, true],
        ]);
    });
});
