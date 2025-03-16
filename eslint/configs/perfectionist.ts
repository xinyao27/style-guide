import pluginPerfectionist from 'eslint-plugin-perfectionist'

import type { Config } from '../types'

/**
 * ☂️ ESLint plugin for sorting various data such as objects, imports, types, enums, JSX props, etc.
 *
 * @see https://github.com/azat-io/eslint-plugin-perfectionist
 */
export const perfectionist = (): Config[] => [pluginPerfectionist.configs['recommended-natural']]
