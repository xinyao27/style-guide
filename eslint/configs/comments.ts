// @ts-expect-error no types
import pluginComments from '@eslint-community/eslint-plugin-eslint-comments/configs'

import type { Config } from '../types'

import { GLOB_CSS } from '../globs'

export const comments = (): Config[] => [
  {
    ...pluginComments.recommended,
    ignores: [GLOB_CSS],
  },
]
