import pluginUnicorn from 'eslint-plugin-unicorn'

import type { Config } from '../types'

/**
 * ESLint plugin for Unicorn.
 *
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn
 */
export const unicorn = (): Config[] => [
  {
    rules: {
      // disabled for better bundle size
      // 'unicorn/explicit-length-check': 'error',
      'unicorn/filename-case': [
        'error',
        {
          cases: { pascalCase: true, kebabCase: true },
          ignore: [/^[A-Z]+\..*$/, /import_map\.json/],
        },
      ],
      'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
      'unicorn/no-single-promise-in-promise-methods': 'error',
      'unicorn/consistent-existence-index-check': 'error',
      'unicorn/no-invalid-remove-event-listener': 'error',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/consistent-empty-array-spread': 'error',
      // disabled for better bundle size
      // 'unicorn/no-array-callback-reference': 'error',
      'unicorn/no-array-method-this-argument': 'error',
      'unicorn/no-negation-in-equality-check': 'error',
      'unicorn/prefer-optional-catch-binding': 'error',
      'unicorn/prefer-dom-node-text-content': 'error',
      'unicorn/prefer-string-trim-start-end': 'error',
      'unicorn/no-await-in-promise-methods': 'error',
      'unicorn/prefer-blob-reading-methods': 'error',
      'unicorn/prefer-add-event-listener': 'error',
      'unicorn/prefer-keyboard-event-key': 'error',
      'unicorn/prefer-string-replace-all': 'error',
      'unicorn/prefer-number-properties': 'error',
      'unicorn/prefer-prototype-methods': 'error',
      'unicorn/custom-error-definition': 'error',
      'unicorn/prefer-dom-node-dataset': 'error',
      'unicorn/prefer-modern-math-apis': 'error',
      'unicorn/prefer-dom-node-append': 'error',
      'unicorn/prefer-dom-node-remove': 'error',
      'unicorn/prefer-modern-dom-apis': 'error',
      'unicorn/prefer-array-flat-map': 'error',
      'unicorn/prefer-array-index-of': 'error',
      'unicorn/prefer-negative-index': 'error',
      'unicorn/prefer-query-selector': 'error',
      'unicorn/no-static-only-class': 'error',
      'unicorn/no-unnecessary-await': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-reflect-apply': 'error',
      'unicorn/no-instanceof-array': 'error',
      'unicorn/prefer-math-min-max': 'error',
      'unicorn/prefer-string-slice': 'error',
      'unicorn/no-array-push-push': 'error',
      'unicorn/prefer-regexp-test': 'error',
      'unicorn/no-console-spaces': 'error',
      'unicorn/no-zero-fractions': 'error',
      'unicorn/prefer-array-find': 'error',
      'unicorn/prefer-array-some': 'error',
      'unicorn/prefer-math-trunc': 'error',
      'unicorn/prefer-string-raw': 'error',
      // top level await is not supported in all environments
      // 'unicorn/prefer-top-level-await': 'error',
      'unicorn/prefer-type-error': 'error',
      'unicorn/catch-error-name': 'error',
      'unicorn/new-for-builtins': 'error',
      'unicorn/prefer-date-now': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/throw-new-error': 'error',
      'unicorn/error-message': 'error',
      'unicorn/no-hex-escape': 'error',
      'unicorn/no-new-buffer': 'error',
      'unicorn/no-lonely-if': 'error',
      'unicorn/no-new-array': 'error',
      'unicorn/escape-case': 'error',
      'unicorn/no-for-loop': 'error',
      'unicorn/prefer-at': 'error',
    },
    plugins: { unicorn: pluginUnicorn },
  },
]
