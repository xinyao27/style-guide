import type { Linter } from 'eslint'

import pluginYml from 'eslint-plugin-yml'
import parserYml from 'yaml-eslint-parser'

import type { Config } from '../types'

import { GLOB_YAML } from '../globs'

export const yml = (): Config[] => [
  {
    files: [GLOB_YAML],
    languageOptions: { parser: parserYml },
    plugins: { yml: pluginYml as any },
    rules: {
      ...(pluginYml.configs.standard.rules as Linter.RulesRecord),
      ...(pluginYml.configs.prettier.rules as Linter.RulesRecord),
      'yml/no-empty-mapping-value': 'off',
    },
  },
]
