import markdownPlugin from 'eslint-plugin-markdown'
import { GLOB_MARKDOWN, GLOB_SRC, GLOB_VUE } from './shared.js'

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const markdown = [
  ...markdownPlugin.configs.recommended,
  {
    files: [`${GLOB_MARKDOWN}/${GLOB_SRC}`, `${GLOB_MARKDOWN}/${GLOB_VUE}`],
    rules: {
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      'no-alert': 'off',
      'no-console': 'off',
      'no-restricted-imports': 'off',
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
    },
  },
]
