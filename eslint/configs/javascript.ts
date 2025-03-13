import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import jsConfig from '@eslint/js'
import globals from 'globals'

import type { Config } from '../types'

import { standardRules } from './standard-rules'
import { GLOB_JSX } from '../globs'

const isInEditor = (process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI

export const javascript = (): Config[] => [
  jsConfig.configs.recommended,
  {
    rules: {
      ...standardRules,
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
      [isInEditor ? 'no-unused-vars' : 'unused-imports/no-unused-vars']: isInEditor
        ? ['warn', { ignoreRestSiblings: true, args: 'after-used' }]
        : [
            'warn',
            {
              varsIgnorePattern: '^_',
              argsIgnorePattern: '^_',
              args: 'after-used',
              vars: 'all',
            },
          ],
      'spaced-comment': [
        'error',
        'always',
        {
          block: {
            exceptions: ['*'],
            markers: ['!'],
            balanced: true,
          },
          line: {
            exceptions: ['/', '#'],
            markers: ['/'],
          },
        },
      ],
      'no-restricted-globals': [
        'error',
        { message: 'Use `globalThis` instead.', name: 'global' },
        { message: 'Use `globalThis` instead.', name: 'self' },
      ],
      'space-before-function-paren': [
        'error',
        {
          asyncArrow: 'always',
          anonymous: 'always',
          named: 'never',
        },
      ],
      'object-shorthand': [
        'error',
        'always',
        {
          ignoreConstructors: false,
          avoidQuotes: true,
        },
      ],
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
          ignoreReadBeforeAssign: true,
          destructuring: 'all',
        },
      ],
      'no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
      'no-use-before-define': ['error', { functions: false, variables: true, classes: false }],
      indent: ['error', 2, { VariableDeclarator: 1, outerIIFEBody: 1, SwitchCase: 1 }],
      'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
      'unused-imports/no-unused-imports': isInEditor ? 'off' : 'error',
      'comma-spacing': ['error', { before: false, after: true }],
      'function-call-argument-newline': ['error', 'consistent'],
      'array-bracket-newline': ['error', { multiline: true }],
      'object-curly-newline': ['error', { multiline: true }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'quote-props': ['error', 'consistent-as-needed'],
      'function-paren-newline': ['error', 'multiline'],
      'max-statements-per-line': ['error', { max: 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'eslint-comments/disable-enable-pair': 'off',
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],

      'prefer-exponentiation-operator': 'error',
      'operator-linebreak': ['error', 'before'],
      'no-cond-assign': ['error', 'always'],
      'block-spacing': ['error', 'always'],
      'template-curly-spacing': 'error',
      'comma-style': ['error', 'last'],
      // best-practice
      'array-callback-return': 'error',
      'no-constant-condition': 'warn',
      'generator-star-spacing': 'off',
      'no-case-declarations': 'error',
      'prefer-rest-params': 'error',
      quotes: ['error', 'single'],

      'block-scoped-var': 'error',
      'func-call-spacing': 'off',
      'prefer-template': 'error',
      'consistent-return': 'off',
      eqeqeq: ['error', 'smart'],
      'no-multi-spaces': 'error',
      'no-useless-escape': 'off',
      'no-invalid-this': 'error',
      'no-return-assign': 'off',
      // Common
      semi: ['error', 'never'],
      'no-return-await': 'off',
      'prefer-spread': 'error',
      'no-multi-str': 'error',
      'no-unused-vars': 'off',
      'no-debugger': 'error',
      'vars-on-top': 'error',
      'require-await': 'off',
      'no-alert': 'warn',
      'no-with': 'error',
      'no-void': 'error',
      // es6
      'no-var': 'error',
      complexity: 'off',
      camelcase: 'off',
    },
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
  },
  {
    files: ['**/scripts/*', '**/cli.*'],
    rules: { 'no-console': 'off' },
  },
  {
    rules: { 'no-unused-expressions': 'off' },
    files: ['**/*.{test,spec}.js?(x)'],
  },
]

export const jsx = (): Config[] => [
  {
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    files: [GLOB_JSX],
  },
]
