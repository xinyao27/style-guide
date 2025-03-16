import type { Config } from './types'

import {
  comments,
  imports,
  javascript,
  jsonc,
  jsx,
  perfectionist,
  prettier,
  react,
  sortPackageJson,
  sortTsconfig,
  typescript,
  unicorn,
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
  config: Config | Config[] = [],
  {
    comments: enableComments = true,
    imports: enableImports = true,
    javascript: enableJavaScript = true,
    jsonc: enableJsonc = true,
    jsx: enableJsx = true,
    perfectionist: enablePerfectionist = true,
    prettier: enablePrettier = true,
    react: enableReact = true,
    sortPackageJson: enableSortPackageJson = true,
    sortTsconfig: enableSortTsconfig = true,
    typescript: enableTypescript = true,
    unicorn: enableUnicorn = true,
    yml: enableYml = true,
  }: Partial<{
    /** Comments support. Default: true */
    comments: boolean
    /** CSS support. Default: true */
    css: boolean
    /** Imports support. Default: true */
    imports: boolean
    /** JavaScript support. Default: true */
    javascript: boolean
    /** JSON(c) support. Default: true */
    jsonc: boolean
    /** JSX support. Default: true */
    jsx: boolean
    /** Perfectionist support. Default: true */
    perfectionist: boolean
    /** Prettier support. Default: true */
    prettier: boolean
    /** React support. Default: true */
    react: boolean
    /** Sort package.json keys. Default: true */
    sortPackageJson: boolean
    /** Sort tsconfig.json keys. Default: true */
    sortTsconfig: boolean
    /** TypeScript support. Default: true */
    typescript: boolean
    /** Unicorn support. Default: true */
    unicorn: boolean
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
