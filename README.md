# npm-package-json-lint-config-nick2bad4u

[![CI](https://github.com/Nick2bad4u/npm-package-json-lint-config-nick2bad4u/actions/workflows/ci.yml/badge.svg)](https://github.com/Nick2bad4u/npm-package-json-lint-config-nick2bad4u/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/npm-package-json-lint-config-nick2bad4u.svg)](https://www.npmjs.com/package/npm-package-json-lint-config-nick2bad4u)
[![npm downloads](https://flat.badgen.net/npm/dt/npm-package-json-lint-config-nick2bad4u?color=blue)](https://www.npmjs.com/package/npm-package-json-lint-config-nick2bad4u)
[![Codecov](https://flat.badgen.net/codecov/c/github/Nick2bad4u/npm-package-json-lint-config-nick2bad4u?color=green)](https://codecov.io/gh/Nick2bad4u/npm-package-json-lint-config-nick2bad4u)
[![License](https://flat.badgen.net/npm/license/npm-package-json-lint-config-nick2bad4u?color=purple)](LICENSE)

Shared [`npm-package-json-lint`](https://npmpackagejsonlint.org/) configuration for Nick2bad4u packages.

This package exports a native `npm-package-json-lint` shared config with no wrapper CLI or custom runtime layer.

## Install

Install the config and its peer linter:

```sh
npm install --save-dev npm-package-json-lint npm-package-json-lint-config-nick2bad4u
```

## Usage

Create `.npmpackagejsonlintrc.json` in the consuming package:

```json
{
 "extends": "npm-package-json-lint-config-nick2bad4u"
}
```

Add a package script if the project does not already have one:

```json
{
 "scripts": {
  "lint:package-json": "npmPkgJsonLint . --config .npmpackagejsonlintrc.json"
 }
}
```

Then run:

```sh
npm run lint:package-json
```

## Policy

The config is intentionally strict for publishable npm packages. It enforces:

- Required package metadata, including name, version, privacy, description, homepage, bugs, repository, license, author, contributors, engines, files, scripts, type, and types.
- Consistent package layout through `prefer-property-order`, alphabetical dependencies, alphabetical peer dependencies, and alphabetical optional dependencies.
- Safer dependency declarations by rejecting exact dependency pins, tilde ranges, archive URLs, local file URLs, git URLs, duplicate dependency entries, pre-release restricted packages, and repeated dependency/devDependency entries.
- Public package hygiene through `publishConfig.provenance: true` unless the package is private.
- Expected project identity through exact author allowlist values, accepted license values, and explicit `private` values.

`valid-values-author` uses exact string matching in `npm-package-json-lint`. Wildcards are not supported, so new author URL forms must be added explicitly.

## Exports

The package keeps the consumer-facing config native:

- `index.cjs` is the CommonJS config consumed by `npm-package-json-lint`.
- `dist/preset.js` and `dist/preset.d.ts` provide the typed ESM helper for programmatic use.
- `.npmpackagejsonlintrc.json` mirrors the exported config for this repository's own package-json linting.

## Local Verification

Run the full release gate before publishing or claiming readiness:

```sh
npm run release:verify
```

Useful narrower checks:

```sh
npm run test
npm run test:coverage
npm run typecheck
npm run lint:package-json
```
