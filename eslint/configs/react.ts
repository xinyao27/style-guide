// @ts-expect-error no types
import pluginNext from '@next/eslint-plugin-next'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

import type { Config } from '../types'

export const react = (): Config[] => [
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    plugins: {
      next: pluginNext,
      react: pluginReact,
      reactHooks: pluginReactHooks,
    },
    rules: {
      'jsx-quotes': ['error', 'prefer-double'],
      // jsx
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

      'react/jsx-closing-tag-location': ['error'],
      'react/jsx-curly-brace-presence': ['error', { children: 'never', propElementValues: 'always', props: 'never' }],
      'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
      'react/jsx-curly-spacing': ['error', { children: true, when: 'never' }],
      'react/jsx-equals-spacing': ['error'],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: false }],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-max-props-per-line': ['error'],
      'react/jsx-no-leaked-render': ['error'],
      'react/jsx-props-no-multi-spaces': ['error'],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-sort-props': 'off',
      'react/jsx-wrap-multilines': [
        'error',
        {
          arrow: 'parens-new-line',
          assignment: 'parens-new-line',
          condition: 'parens-new-line',
          declaration: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
          return: 'parens-new-line',
        },
      ],
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/self-closing-comp': ['error', { component: true, html: true }],
    },
  },
]
