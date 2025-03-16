import pluginImport from 'eslint-plugin-import-x'

import type { Config } from '../types'

/**
 * ESLint plugin for imports.
 *
 * @see https://github.com/un-ts/eslint-plugin-import-x
 */
export const imports = (): Config[] => [
  {
    plugins: {
      import: pluginImport as any,
    },
    rules: {
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-named-default': 'error',
      'import/no-self-import': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/order': 'off',
    },
  },
]
