import type { Linter } from 'eslint'

import parserYml from 'yaml-eslint-parser'
import pluginYml from 'eslint-plugin-yml'

import type { Config } from '../types'

import { GLOB_YAML } from '../globs'

export const yml = (): Config[] => [
  {
    rules: {
      ...(pluginYml.configs.standard.rules as Linter.RulesRecord),
      ...(pluginYml.configs.prettier.rules as Linter.RulesRecord),
      'yml/no-empty-mapping-value': 'off',
    },
    languageOptions: { parser: parserYml },
    plugins: { yml: pluginYml as any },
    files: [GLOB_YAML],
  },
]
