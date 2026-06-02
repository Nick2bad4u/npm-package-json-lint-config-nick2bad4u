import nickTwoBadFourU from "eslint-config-nick2bad4u";

/** @type {import("eslint").Linter.Config[]} */
const config = [
    {
        ignores: ["index.cjs", "index.d.cts"],
    },
    ...nickTwoBadFourU.configs.all,
    {
        files: ["test/**/*.ts"],
        rules: {
            "import-x/extensions": "off",
        },
    },
];

export default config;
