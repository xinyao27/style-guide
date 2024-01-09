import reactPlugin from 'eslint-plugin-react'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'
import globals from 'globals'

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const react = [
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      react: reactPlugin,
      reactHooks: reactHooksPlugin,
      next: nextPlugin,
    },
    ...reactRecommended,
    languageOptions: {
      ...reactRecommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      'react/no-array-index-key': ['error'],
      'react/prop-types': 'off',
      'react/require-default-props': 'off',

      // jsx
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-closing-tag-location': ['error'],
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never', propElementValues: 'always' }],
      'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
      'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
      'react/jsx-equals-spacing': ['error'],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: false }],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-max-props-per-line': ['error'],
      'react/jsx-props-no-multi-spaces': ['error'],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-sort-props': [
        'error',
        {
          ignoreCase: false,
          callbacksLast: true,
          shorthandFirst: true,
          multiline: 'last',
          reservedFirst: true,
        },
      ],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        },
      ],
      'react/jsx-no-leaked-render': ['error'],
      'jsx-quotes': ['error', 'prefer-double'],
    },
  },
]
