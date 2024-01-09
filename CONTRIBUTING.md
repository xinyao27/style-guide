# Contributing to Xinyao's Style Guide

## Installing

This project uses pnpm.

To get started, run:

```sh
corepack enable
```

Then, run:

```sh
pnpm i
```

## Before creating a pull request

Before creating a pull request, please raise an issue.

After an issue is created, we generally wait 2-4 weeks before implementing
any changes. This provides ample time for engineers to share feedback on
proposed changes.

## Commits

Commit standards are based on [`@commitlint/config-conventional`](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional).

### Creating a commit

Commit messages should be in the format:

```
type(scope?): message

Resolves #1
```

The scope should be included most of the time, and all allowed types and scopes
are documented here:

- https://github.com/xinyao27/style-guide/blob/main/.commitlintrc.js

### How commits affect versions

By default, commits with the `feat` type will cause a minor version bump, and
commits with the `fix` or `perf` type will cause a patch version bump.

If your commit is a breaking change, which will create new major release, you
should add a footer with `BREAKING CHANGE: [message]`

```
feat(eslint): migrate to ESLint 8

Resolves #1

BREAKING CHANGE: see the ESLint 8 release notes for all breaking changes
```

In this example, the release notes would look like this:

> # 1.0.0 (2021-01-01)
>
> ### Features
>
> - eslint: migrate to ESLint 8 ([commit-hash])
>
> ### BREAKING CHANGES
>
> - eslint: see the ESLint 8 release notes for all breaking changes
