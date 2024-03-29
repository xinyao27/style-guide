import { eslintComments } from './eslint-comments.js'
import { imports, js, jsx, unicorn } from './js.js'
import { jsonc, pkgOrder } from './jsonc.js'
import { markdown } from './markdown.js'
import { GLOB_EXCLUDE } from './shared.js'
import { typescript } from './typescript.js'
import { vue } from './vue.js'
import { react } from './react.js'
import { yml } from './yml.js'
import { prettier } from './prettier.js'

/**
 * @typedef { import('eslint-define-config').FlatESLintConfigItem } FlatESLintConfigItem
 */

/** @type {FlatESLintConfigItem[]} */
export const basic = [
  // @ts-ignore
  { ignores: GLOB_EXCLUDE },
  ...js,
  ...jsx,
  ...typescript,
  ...imports,
  ...unicorn,
  ...jsonc,
  ...pkgOrder,
  ...yml,
  ...markdown,
  ...eslintComments,
  ...prettier,
]

/** @type { FlatESLintConfigItem[] } */
export const all = [...vue, ...react, ...basic]
