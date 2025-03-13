import type { Config } from './types'

import {
  sortPackageJson,
  perfectionist,
  sortTsconfig,
  javascript,
  typescript,
  comments,
  prettier,
  imports,
  unicorn,
  jsonc,
  react,
  jsx,
  yml,
} from './configs'

/** Ignore common files and include javascript support */
export const presetJavaScript = (): Config[] => [
  ...comments(),
  ...imports(),
  ...javascript(),
  ...unicorn(),
  ...jsx(),
  ...perfectionist(),
  ...react(),
  ...unicorn(),
]
/** Includes `presetJavaScript` and typescript support */
export const presetBasic = (): Config[] => [...presetJavaScript(), ...typescript()]
/** Includes basic json(c) file support and sorting json keys */
export const presetJsonc = (): Config[] => [...jsonc(), ...sortPackageJson(), ...sortTsconfig()]
/** Includes yaml + `presetJsonc` support */
export const presetLangsExtensions = (): Config[] => [...yml(), ...presetJsonc()]
/** Includes all configs */
export const presetAll = (): Config[] => [...presetBasic(), ...presetJsonc(), ...presetLangsExtensions(), ...prettier()]

export async function defineConfig(
  config: Config[] | Config = [],
  {
    sortPackageJson: enableSortPackageJson = true,
    perfectionist: enablePerfectionist = true,
    sortTsconfig: enableSortTsconfig = true,
    javascript: enableJavaScript = true,
    typescript: enableTypescript = true,
    comments: enableComments = true,
    prettier: enablePrettier = true,
    imports: enableImports = true,
    unicorn: enableUnicorn = true,
    jsonc: enableJsonc = true,
    react: enableReact = true,
    jsx: enableJsx = true,
    yml: enableYml = true,
  }: Partial<{
    /** Sort package.json keys. Default: true */
    sortPackageJson: boolean
    /** Perfectionist support. Default: true */
    perfectionist: boolean
    /** Sort tsconfig.json keys. Default: true */
    sortTsconfig: boolean
    /** JavaScript support. Default: true */
    javascript: boolean
    /** TypeScript support. Default: true */
    typescript: boolean
    /** Comments support. Default: true */
    comments: boolean
    /** Prettier support. Default: true */
    prettier: boolean
    /** Imports support. Default: true */
    imports: boolean
    /** Unicorn support. Default: true */
    unicorn: boolean
    /** JSON(c) support. Default: true */
    jsonc: boolean
    /** React support. Default: true */
    react: boolean
    /** CSS support. Default: true */
    css: boolean
    /** JSX support. Default: true */
    jsx: boolean
    /** YAML support. Default: true */
    yml: boolean
  }> = {},
): Promise<Config[]> {
  const configs: Config[] = [...presetBasic(), ...yml(), ...presetJsonc()]

  if (enableComments) {
    configs.push(...comments())
  }
  if (enableImports) {
    configs.push(...imports())
  }
  if (enableJavaScript) {
    configs.push(...javascript())
  }
  if (enableJsonc) {
    configs.push(...jsonc())
  }
  if (enableJsx) {
    configs.push(...jsx())
  }
  if (enablePerfectionist) {
    configs.push(...perfectionist())
  }
  if (enablePrettier) {
    configs.push(...prettier())
  }
  if (enableReact) {
    configs.push(...react())
  }
  if (enableSortPackageJson) {
    configs.push(...sortPackageJson())
  }
  if (enableSortTsconfig) {
    configs.push(...sortTsconfig())
  }
  if (enableTypescript) {
    configs.push(...typescript())
  }
  if (enableUnicorn) {
    configs.push(...unicorn())
  }
  if (enableYml) {
    configs.push(...yml())
  }

  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }

  return configs
}
