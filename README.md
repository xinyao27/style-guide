# The XYStack Style Guide

<a aria-label="NPM version" href="https://www.npmjs.com/package/@xystack/style-guide">
  <img alt="" src="https://img.shields.io/npm/v/@xystack/style-guide.svg?style=flat-square&labelColor=000000">
</a>
<a aria-label="License" href="https://github.com/xinyao27/style-guide/blob/main/LICENSE.md">
  <img alt="" src="https://img.shields.io/npm/l/@xystack/style-guide.svg?style=flat-square&labelColor=000000">
</a>

## Introduction

This repository is the home of @xinyao27 style guide, which includes configs for
popular linting and styling tools.

The following configs are available, and are designed to be used together.

- [The XYStack Style Guide](#the-xystack-style-guide)
  - [Introduction](#introduction)
  - [Contributing](#contributing)
  - [Installation](#installation)
    - [Starter Wizard](#starter-wizard)
    - [Manual Installation](#manual-installation)
  - [Prettier](#prettier)
  - [ESLint](#eslint)
    - [Usage](#usage)
    - [VSCode](#vscode)
  - [TypeScript](#typescript)

## Contributing

Please read our [contributing](https://github.com/xystack/style-guide/blob/main/CONTRIBUTING.md)
guide before creating a pull request.

## Installation

### Starter Wizard

```sh
npx @xystack/style-guide@latest
```

### Manual Installation

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
import { defineConfig } from '@xystack/style-guide/eslint'

export default defineConfig()
```

### VSCode

```json
{
  "editor.formatOnSave": true,
  "prettier.enable": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## TypeScript

To use the shared TypeScript config, set the following in `tsconfig.json`.

```json
{
  "extends": "@xystack/style-guide/typescript"
}
```
