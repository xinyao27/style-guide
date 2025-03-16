import jsConfig from '@eslint/js'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import globals from 'globals'

import type { Config } from '../types'

import { GLOB_JSX } from '../globs'
import { standardRules } from './standard-rules'

const isInEditor = (process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI

export const javascript = (): Config[] => [
  jsConfig.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      sourceType: 'module',
    },
    plugins: {
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      ...standardRules,
      'array-bracket-newline': ['error', { multiline: true }],
      'array-bracket-spacing': ['error', 'never'],
      // best-practice
      'array-callback-return': 'error',
      'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
      'block-scoped-var': 'error',
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
      camelcase: 'off',
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', { after: true, before: false }],
      'comma-style': ['error', 'last'],
      complexity: 'off',
      'consistent-return': 'off',
      eqeqeq: ['error', 'smart'],
      'eslint-comments/disable-enable-pair': 'off',
      'func-call-spacing': 'off',
      'function-call-argument-newline': ['error', 'consistent'],
      'function-paren-newline': ['error', 'multiline'],
      'generator-star-spacing': 'off',
      indent: ['error', 2, { outerIIFEBody: 1, SwitchCase: 1, VariableDeclarator: 1 }],
      [isInEditor ? 'no-unused-vars' : 'unused-imports/no-unused-vars']: isInEditor
        ? ['warn', { args: 'after-used', ignoreRestSiblings: true }]
        : [
            'warn',
            {
              args: 'after-used',
              argsIgnorePattern: '^_',
              vars: 'all',
              varsIgnorePattern: '^_',
            },
          ],
      'key-spacing': ['error', { afterColon: true, beforeColon: false }],
      'max-statements-per-line': ['error', { max: 1 }],
      'no-alert': 'warn',
      'no-case-declarations': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-console': ['error', { allow: ['warn', 'error'] }],

      'no-constant-condition': 'warn',
      'no-debugger': 'error',
      'no-invalid-this': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-restricted-globals': [
        'error',
        { message: 'Use `globalThis` instead.', name: 'global' },
        { message: 'Use `globalThis` instead.', name: 'self' },
      ],
      'no-restricted-properties': [
        'error',
        {
          message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
          property: '__proto__',
        },
        {
          message: 'Use `Object.defineProperty` instead.',
          property: '__defineGetter__',
        },
        {
          message: 'Use `Object.defineProperty` instead.',
          property: '__defineSetter__',
        },
        {
          message: 'Use `Object.getOwnPropertyDescriptor` instead.',
          property: '__lookupGetter__',
        },
        {
          message: 'Use `Object.getOwnPropertyDescriptor` instead.',
          property: '__lookupSetter__',
        },
      ],
      'no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
      'no-return-assign': 'off',
      'no-return-await': 'off',
      'no-unused-vars': 'off',

      'no-useless-escape': 'off',
      // es6
      'no-var': 'error',
      'no-void': 'error',
      'no-with': 'error',
      'object-curly-newline': ['error', { multiline: true }],
      'object-curly-spacing': ['error', 'always'],
      'object-shorthand': [
        'error',
        'always',
        {
          avoidQuotes: true,
          ignoreConstructors: false,
        },
      ],
      'operator-linebreak': ['error', 'before'],
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: false,
          allowUnboundThis: true,
        },
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: true,
        },
      ],
      'prefer-exponentiation-operator': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'quote-props': ['error', 'consistent-as-needed'],
      quotes: ['error', 'single'],
      'require-await': 'off',
      // Common
      semi: ['error', 'never'],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          asyncArrow: 'always',
          named: 'never',
        },
      ],
      'spaced-comment': [
        'error',
        'always',
        {
          block: {
            balanced: true,
            exceptions: ['*'],
            markers: ['!'],
          },
          line: {
            exceptions: ['/', '#'],
            markers: ['/'],
          },
        },
      ],
      'template-curly-spacing': 'error',
      'unused-imports/no-unused-imports': isInEditor ? 'off' : 'error',
      'vars-on-top': 'error',
    },
  },
  {
    files: ['**/scripts/*', '**/cli.*'],
    rules: { 'no-console': 'off' },
  },
  {
    files: ['**/*.{test,spec}.js?(x)'],
    rules: { 'no-unused-expressions': 'off' },
  },
]

export const jsx = (): Config[] => [
  {
    files: [GLOB_JSX],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
  },
]
