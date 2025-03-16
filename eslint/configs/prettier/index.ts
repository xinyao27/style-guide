import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

import type { Config } from '../../types'

import pluginPretter from './prettier'

export const prettier = (): Config[] => [
  {
    plugins: { prettier: pluginPretter },
    rules: {
      ...pluginPrettierRecommended.rules,
      'prettier/prettier': 'warn',
    },
  },
]
