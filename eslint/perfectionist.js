import perfectionistPlugin from 'eslint-plugin-perfectionist'

/** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
export const perfectionist = [
  {
    plugins: {
      perfectionist: perfectionistPlugin,
    },
  },
]
