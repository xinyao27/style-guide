import tseslint from 'typescript-eslint'

import type { Config } from '../types'

import { GLOB_TSX, GLOB_JS, GLOB_TS } from '../globs'

export const typescriptCore = tseslint.config({
  rules: {
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        objectLiteralTypeAssertions: 'allow-as-parameter',
        assertionStyle: 'as',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { fixStyle: 'inline-type-imports', disallowTypeAnnotations: false },
    ],
    '@typescript-eslint/prefer-literal-enum-member': ['error', { allowBitwiseExpressions: true }],
    '@typescript-eslint/method-signature-style': ['error', 'property'], // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',

    '@typescript-eslint/ban-ts-comment': 'off',

    '@typescript-eslint/no-redeclare': 'error',
    // handled by unused-imports/no-unused-imports
    '@typescript-eslint/no-unused-vars': 'off',
  },
  extends: [...tseslint.configs.recommended],
  files: [GLOB_TS, GLOB_TSX],
}) as Config[]

export const typescript = (): Config[] => [
  ...typescriptCore,

  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'unused-imports/no-unused-vars': 'off',
      'import/no-duplicates': 'off',
      'no-restricted-syntax': 'off',
    },
    files: ['**/*.d.ts'],
  },
  {
    rules: { '@typescript-eslint/no-require-imports': 'off' },
    files: [GLOB_JS, '**/*.cjs'],
  },
]
