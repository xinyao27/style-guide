import pluginReactHooks from 'eslint-plugin-react-hooks'
// @ts-expect-error no types
import pluginNext from '@next/eslint-plugin-next'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'

import type { Config } from '../types'

export const react = (): Config[] => [
  {
    rules: {
      'react/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          prop: 'parens-new-line',
        },
      ],
      'react/jsx-sort-props': [
        'error',
        {
          shorthandFirst: true,
          callbacksLast: true,
          reservedFirst: true,
          ignoreCase: false,
          multiline: 'last',
        },
      ],

      'react/jsx-curly-brace-presence': ['error', { propElementValues: 'always', children: 'never', props: 'never' }],
      'react/jsx-indent': ['error', 2, { indentLogicalExpressions: false, checkAttributes: true }],
      'react/jsx-curly-newline': ['error', { singleline: 'consistent', multiline: 'consistent' }],
      'react/jsx-curly-spacing': ['error', { children: true, when: 'never' }],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      // jsx
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-props-no-multi-spaces': ['error'],
      'react/jsx-closing-tag-location': ['error'],
      'react/jsx-max-props-per-line': ['error'],
      'jsx-quotes': ['error', 'prefer-double'],
      'react/jsx-no-leaked-render': ['error'],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-equals-spacing': ['error'],
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'react/prop-types': 'off',
    },
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    plugins: {
      reactHooks: pluginReactHooks,
      react: pluginReact,
      next: pluginNext,
    },
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  },
]
