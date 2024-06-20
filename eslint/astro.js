import astroPlugin from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import { GLOB_ASTRO } from './shared.js'

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const astro = [
  {
    files: [GLOB_ASTRO],
    plugins: {
      astro: astroPlugin,
    },
    languageOptions: {
      globals: astroPlugin.environments.astro.globals,
      parser: astroParser,
      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: tsParser,
      },
      sourceType: 'module',
    },
    processor: 'astro/client-side-ts',
    rules: {
      'astro/missing-client-only-directive-value': 'error',
      'astro/no-conflict-set-directives': 'error',
      'astro/no-deprecated-astro-canonicalurl': 'error',
      'astro/no-deprecated-astro-fetchcontent': 'error',
      'astro/no-deprecated-astro-resolve': 'error',
      'astro/no-deprecated-getentrybyslug': 'error',
      'astro/no-set-html-directive': 'off',
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/semi': 'off',
      'astro/valid-compile': 'error',
    },
  },
]
