# Contributing

Thanks for helping improve `npm-package-json-lint-config-nick2bad4u`. This repository ships a small shared configuration package for npm-package-json-lint.

## Local Workflow

1. Install dependencies with `npm ci --force`.
2. Make the config or documentation change.
3. Run `npm run release:verify`.

## Package Surface

The public surface is intentionally small:

- packaged config files: `index.cjs`, `src/preset.ts`;
- `src/preset.ts` for typed helper exports;
- `README.md` for consumer usage.

Do not add a custom CLI when npm-package-json-lint already supports native config loading.
