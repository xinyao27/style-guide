import { eslintComments } from './eslint-comments.js'
import { imports, js, jsx, unicorn } from './js.js'
import { jsonc, pkgOrder } from './jsonc.js'
import { perfectionist } from './perfectionist.js'
import { GLOB_EXCLUDE } from './shared.js'
import { typescript } from './typescript.js'
import { astro } from './astro.js'
import { vue } from './vue.js'
import { react } from './react.js'
import { yml } from './yml.js'
import { prettier } from './prettier/index.js'

/**
 * @typedef { import('eslint-define-config').FlatESLintConfigItem } FlatESLintConfigItem
 */
/** @type {FlatESLintConfigItem[]} */
export const basic = [
  { ignores: GLOB_EXCLUDE },
  ...js,
  ...jsx,
  ...typescript,
  ...astro,
  ...imports,
  ...unicorn,
  ...jsonc,
  ...pkgOrder,
  ...yml,
  ...eslintComments,
  ...perfectionist,
  ...prettier,
]

/** @type { FlatESLintConfigItem[] } */
export const all = [...vue, ...react, ...basic]
