# Minimal TypeScript Library Starter

A small Node 24+ ESM starter for TypeScript libraries.

## What Is Included

- TypeScript configured for Node ESM with `module` and `moduleResolution` set to `NodeNext`
- TypeScript 6+ with strict type checking
- ESBuild for fast Node ESM bundling
- ESLint 10 flat config with type-aware `typescript-eslint` rules
- Vitest for colocated tests
- Prettier for formatting
- Husky hooks for local lint, typecheck, test, and build checks
- GitHub Actions CI for push and pull request verification
- A single `src/index.ts` library entrypoint
- Package `exports`, `types`, and `files` configured for publishing ESBuild and TypeScript generated `lib` output

## Scripts

```zsh
npm run verify
npm run build
npm test
npm run lint
npm run typecheck
npm run format:check
npm run format
```

## Local Hooks

Husky is installed by `npm install` through the `prepare` script.

- `pre-commit`: checks formatting, linting, and TypeScript
- `pre-push`: runs tests and verifies the build

## CI

`.github/workflows/ci.yml` runs `npm ci` and `npm run verify` on every push and pull request.

## Publishing

The package publishes only `lib`. `npm run build` bundles `src/index.ts` with ESBuild and emits declarations with TypeScript. Run it before publishing, or rely on `prepublishOnly` to clean, test, and build.

## License

MIT. See [LICENSE.md](./LICENSE.md).
