import prettierConfig from 'eslint-config-prettier'
import * as parserPlain from 'eslint-parser-plain'
import {
  GLOB_ASTRO,
  GLOB_ASTRO_TS,
  GLOB_CSS,
  GLOB_HTML,
  GLOB_LESS,
  GLOB_MARKDOWN,
  GLOB_POSTCSS,
  GLOB_SCSS,
} from '../shared.js'
import formatPlugin from './format.js'

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const prettier = [
  {
    plugins: { format: formatPlugin },
    rules: {
      ...prettierConfig.rules,
      'format/prettier': 'warn',
    },
  },
  {
    files: [GLOB_MARKDOWN],
    plugins: { format: formatPlugin },
    languageOptions: { parser: parserPlain },
    rules: {
      'format/prettier': ['warn', { parser: 'markdown' }],
    },
  },
  {
    files: [GLOB_CSS, GLOB_POSTCSS],
    languageOptions: {
      parser: parserPlain,
    },
    rules: {
      'format/prettier': [
        'warn',
        {
          parser: 'css',
        },
      ],
    },
  },
  {
    files: [GLOB_SCSS],
    languageOptions: {
      parser: parserPlain,
    },
    rules: {
      'format/prettier': [
        'warn',
        {
          parser: 'scss',
        },
      ],
    },
  },
  {
    files: [GLOB_LESS],
    languageOptions: {
      parser: parserPlain,
    },
    rules: {
      'format/prettier': [
        'warn',
        {
          parser: 'less',
        },
      ],
    },
  },
  {
    files: [GLOB_HTML],
    languageOptions: {
      parser: parserPlain,
    },
    rules: {
      'format/prettier': [
        'warn',
        {
          parser: 'html',
        },
      ],
    },
  },
  {
    files: [GLOB_ASTRO],
    languageOptions: {
      parser: parserPlain,
    },
    rules: {
      'format/prettier': [
        'warn',
        {
          parser: 'astro',
          plugins: ['prettier-plugin-astro'],
        },
      ],
    },
  },
  {
    files: [GLOB_ASTRO, GLOB_ASTRO_TS],
    rules: {
      'style/arrow-parens': 'off',
      'style/block-spacing': 'off',
      'style/comma-dangle': 'off',
      'style/indent': 'off',
      'style/no-multi-spaces': 'off',
      'style/quotes': 'off',
      'style/semi': 'off',
    },
  },
]
