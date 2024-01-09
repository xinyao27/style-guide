# The xystack Style Guide

<a aria-label="NPM version" href="https://www.npmjs.com/package/@xystack/style-guide">
  <img alt="" src="https://img.shields.io/npm/v/@xystack/style-guide.svg?style=flat-square&labelColor=000000">
</a>
<a aria-label="License" href="https://github.com/xystack/style-guide/blob/main/LICENSE.md">
  <img alt="" src="https://img.shields.io/npm/l/@xystack/style-guide.svg?style=flat-square&labelColor=000000">
</a>
<a aria-label="CI status" href="https://github.com/xystack/style-guide/actions/workflows/quality.yml?query=event%3Apush+branch%3Amain">
  <img alt="" src="https://img.shields.io/github/actions/workflow/status/xystack/style-guide/quality.yml?event=push&branch=main&style=flat-square&labelColor=000000">
</a>

## Introduction

This repository is the home of @xinyao27 style guide, which includes configs for
popular linting and styling tools.

The following configs are available, and are designed to be used together.

- [The xystack Style Guide](#the-xystack-style-guide)
  - [Introduction](#introduction)
  - [Contributing](#contributing)
  - [Installation](#installation)
  - [Prettier](#prettier)
  - [ESLint](#eslint)
    - [Usage](#usage)
    - [VSCode](#vscode)
  - [TypeScript](#typescript)

## Contributing

Please read our [contributing](https://github.com/xystack/style-guide/blob/main/CONTRIBUTING.md)
guide before creating a pull request.

## Installation

All of our configs are contained in one package, `@xystack/style-guide`. To install:

```sh
# If you use npm
npm i --save-dev @xystack/style-guide

# If you use pmpm
pnpm i --save-dev @xystack/style-guide

# If you use Yarn
yarn add --dev @xystack/style-guide
```

Some of our ESLint configs require peer dependencies. We'll note those
alongside the available configs in the [ESLint](#eslint) section.

## Prettier

> Note: Prettier is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: https://prettier.io/docs/en/install.html

To use the shared Prettier config, set the following in `package.json`.

```json
{
  "prettier": "@xystack/style-guide/prettier"
}
```

## ESLint

> Note: ESLint is a peer-dependency of this package, and should be installed
> at the root of your project.
>
> See: https://eslint.org/docs/user-guide/getting-started#installation-and-usage

### Usage

```js
// eslint.config.js
import { all } from '@xystack/style-guide/eslint'

export default all
```

### VSCode

```json
{
  "eslint.experimental.useFlatConfig": true
}
```


## TypeScript

This style guide provides multiple TypeScript configs. These configs correlate to the LTS Node.js versions, providing the appropriate `lib`, `module`, `target`, and `moduleResolution` settings for each version. The following configs are available:

| Node.js Version | TypeScript Config                       |
| --------------- | --------------------------------------- |
| v16             | `@xystack/style-guide/typescript/node16` |
| v18             | `@xystack/style-guide/typescript/node18` |
| v20             | `@xystack/style-guide/typescript/node20` |

To use the shared TypeScript config, set the following in `tsconfig.json`.

```json
{
  "extends": "@xystack/style-guide/typescript/node16"
}
```

The base TypeScript config is also available as [`@xystack/style-guide/typescript`](./typescript/tsconfig.base.json) which only specifies a set of general rules. You should inherit from this file when setting custom `lib`, `module`, `target`, and `moduleResolution` settings.
