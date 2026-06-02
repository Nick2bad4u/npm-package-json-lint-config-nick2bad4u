import nickTwoBadFourU from "eslint-config-nick2bad4u";

/** @type {import("eslint").Linter.Config[]} */
const config = [
    {
        ignores: ["index.d.cts"],
    },
    ...nickTwoBadFourU.configs.all,
    {
        files: ["index.cjs"],
        languageOptions: {
            globals: {
                module: "readonly",
            },
        },
        rules: {
            "canonical/filename-no-index": "off",
            "import-x/no-commonjs": "off",
            "import-x/unambiguous": "off",
            "module-interop/no-cjs-exports": "off",
            "unicorn/prefer-module": "off",
        },
    },
    {
        files: ["test/**/*.ts"],
        rules: {
            "import-x/extensions": "off",
        },
    },
];

export default config;
