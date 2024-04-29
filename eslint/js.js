import globals from 'globals'
import jsConfig from '@eslint/js'
import importPlugin from 'eslint-plugin-import-x'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import unicornPlugin from 'eslint-plugin-unicorn'
import antfuPlugin from 'eslint-plugin-antfu'
import { GLOB_MARKDOWN, GLOB_SRC, GLOB_SRC_EXT } from './shared.js'
import standardRules from './standard-rules.js'

const isInEditor = (process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI

export { importPlugin, unicornPlugin, antfuPlugin }

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const js = [
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
      antfu: antfuPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      ...standardRules,
      // Common
      semi: ['error', 'never'],
      // 'curly': ['error', 'multi-or-nest', 'consistent'],
      quotes: ['error', 'single'],
      'quote-props': ['error', 'consistent-as-needed'],
      // 'no-param-reassign': 'off',
      'array-bracket-spacing': ['error', 'never'],
      'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
      'block-spacing': ['error', 'always'],
      camelcase: 'off',
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-constant-condition': 'warn',
      'no-debugger': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-cond-assign': ['error', 'always'],
      'func-call-spacing': 'off',
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
      'no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
      'object-curly-spacing': ['error', 'always'],
      'no-return-await': 'off',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'no-restricted-globals': [
        'error',
        { name: 'global', message: 'Use `globalThis` instead.' },
        { name: 'self', message: 'Use `globalThis` instead.' },
      ],
      'no-restricted-properties': [
        'error',
        {
          property: '__proto__',
          message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
        },
        {
          property: '__defineGetter__',
          message: 'Use `Object.defineProperty` instead.',
        },
        {
          property: '__defineSetter__',
          message: 'Use `Object.defineProperty` instead.',
        },
        {
          property: '__lookupGetter__',
          message: 'Use `Object.getOwnPropertyDescriptor` instead.',
        },
        {
          property: '__lookupSetter__',
          message: 'Use `Object.getOwnPropertyDescriptor` instead.',
        },
      ],
      'array-bracket-newline': ['error', { multiline: true }],
      'object-curly-newline': ['error', { multiline: true }],
      'function-paren-newline': ['error', 'multiline'],
      'function-call-argument-newline': ['error', 'consistent'],

      // es6
      'no-var': 'error',
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: true,
        },
      ],
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: false,
          allowUnboundThis: true,
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
      'prefer-exponentiation-operator': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'template-curly-spacing': 'error',
      'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
      'generator-star-spacing': 'off',
      'spaced-comment': [
        'error',
        'always',
        {
          line: {
            markers: ['/'],
            exceptions: ['/', '#'],
          },
          block: {
            markers: ['!'],
            exceptions: ['*'],
            balanced: true,
          },
        },
      ],

      // best-practice
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'consistent-return': 'off',
      complexity: 'off',
      eqeqeq: ['error', 'smart'],
      'no-alert': 'warn',
      'no-case-declarations': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-with': 'error',
      'no-void': 'error',
      'no-useless-escape': 'off',
      'no-invalid-this': 'error',
      'vars-on-top': 'error',
      'require-await': 'off',
      'no-return-assign': 'off',
      'operator-linebreak': ['error', 'before'],
      'max-statements-per-line': ['error', { max: 1 }],
      'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
      'eslint-comments/disable-enable-pair': 'off',

      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': isInEditor ? 'off' : 'error',
      [isInEditor ? 'no-unused-vars' : 'unused-imports/no-unused-vars']: isInEditor
        ? ['warn', { args: 'after-used', ignoreRestSiblings: true }]
        : [
            'warn',
            {
              vars: 'all',
              varsIgnorePattern: '^_',
              args: 'after-used',
              argsIgnorePattern: '^_',
            },
          ],
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

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const jsx = [
  {
    files: ['**/*.jsx'],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
  },
]

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const imports = [
  {
    plugins: {
      import: importPlugin,
      antfu: antfuPlugin,
    },
    rules: {
      'import/first': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: [{ pattern: '@/**', group: 'internal' }],
          pathGroupsExcludedImportTypes: ['type'],
        },
      ],
      'import/no-default-export': 'off',
      'import/newline-after-import': ['error', { count: 1, considerComments: true }],
      'import/no-self-import': 'error',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'import/namespace': 'off',
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false,
        },
      ],

      'antfu/import-dedupe': 'error',
    },
  },
  {
    files: [
      `**/*config*.${GLOB_SRC_EXT}`,
      `**/{views,pages,routes,middleware,plugins,api}/${GLOB_SRC}`,
      `**/{index,vite,esbuild,rollup,rolldown,webpack,rspack}.ts`,
      '**/*.d.ts',
      `${GLOB_MARKDOWN}/**`,
      '**/.prettierrc*',
    ],
    plugins: { import: importPlugin },
    rules: { 'import/no-default-export': 'off' },
  },
]

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const unicorn = [
  {
    plugins: { unicorn: unicornPlugin },
    rules: {
      'unicorn/better-regex': 'error',
      'unicorn/catch-error-name': 'error',
      'unicorn/custom-error-definition': 'error',
      'unicorn/error-message': 'error',
      'unicorn/escape-case': 'error',
      'unicorn/explicit-length-check': 'error',
      'unicorn/filename-case': [
        'error',
        {
          cases: { kebabCase: true, pascalCase: true },
          ignore: [/^[A-Z]+\..*$/],
        },
      ],
      'unicorn/new-for-builtins': 'error',
      'unicorn/no-array-callback-reference': 'error',
      'unicorn/no-array-method-this-argument': 'error',
      'unicorn/no-array-push-push': 'error',
      'unicorn/no-console-spaces': 'error',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-hex-escape': 'error',
      'unicorn/no-instanceof-array': 'error',
      'unicorn/no-invalid-remove-event-listener': 'error',
      'unicorn/no-lonely-if': 'error',
      'unicorn/no-new-array': 'error',
      'unicorn/no-new-buffer': 'error',
      'unicorn/no-static-only-class': 'error',
      'unicorn/no-unnecessary-await': 'error',
      'unicorn/no-zero-fractions': 'error',
      'unicorn/prefer-add-event-listener': 'error',
      'unicorn/prefer-array-find': 'error',
      'unicorn/prefer-array-flat-map': 'error',
      'unicorn/prefer-array-index-of': 'error',
      'unicorn/prefer-array-some': 'error',
      'unicorn/prefer-at': 'error',
      'unicorn/prefer-blob-reading-methods': 'error',
      'unicorn/prefer-date-now': 'error',
      'unicorn/prefer-dom-node-append': 'error',
      'unicorn/prefer-dom-node-dataset': 'error',
      'unicorn/prefer-dom-node-remove': 'error',
      'unicorn/prefer-dom-node-text-content': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-keyboard-event-key': 'error',
      'unicorn/prefer-math-trunc': 'error',
      'unicorn/prefer-modern-dom-apis': 'error',
      'unicorn/prefer-modern-math-apis': 'error',
      'unicorn/prefer-negative-index': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-number-properties': 'error',
      'unicorn/prefer-optional-catch-binding': 'error',
      'unicorn/prefer-prototype-methods': 'error',
      'unicorn/prefer-query-selector': 'error',
      'unicorn/prefer-reflect-apply': 'error',
      'unicorn/prefer-regexp-test': 'error',
      'unicorn/prefer-string-replace-all': 'error',
      'unicorn/prefer-string-slice': 'error',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/prefer-string-trim-start-end': 'error',
      'unicorn/prefer-top-level-await': 'error',
      'unicorn/prefer-type-error': 'error',
      'unicorn/throw-new-error': 'error',
    },
  },
]
