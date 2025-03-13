export const GLOB_SRC_EXT = '?([cm])[jt]s?(x)' as const
export const GLOB_SRC = '**/*.?([cm])[jt]s?(x)' as const

export const GLOB_JS = '**/*.?([cm])js' as const
export const GLOB_JSX = '**/*.?([cm])jsx' as const

export const GLOB_TS = '**/*.?([cm])ts' as const
export const GLOB_TSX = '**/*.?([cm])tsx' as const

export const GLOB_STYLE = '**/*.{c,le,sc}ss' as const
export const GLOB_CSS = '**/*.css' as const
export const GLOB_POSTCSS = '**/*.{p,post}css' as const
export const GLOB_LESS = '**/*.less' as const
export const GLOB_SCSS = '**/*.scss' as const

export const GLOB_JSON = '**/*.json' as const
export const GLOB_JSON5 = '**/*.json5' as const
export const GLOB_JSONC = '**/*.jsonc' as const

export const GLOB_MARKDOWN = '**/*.md' as const
export const GLOB_YAML = '**/*.y?(a)ml' as const
export const GLOB_TOML = '**/*.toml' as const
export const GLOB_HTML = '**/*.htm?(l)' as const

export const GLOB_ALL_SRC: readonly string[] = [
  GLOB_SRC,
  GLOB_STYLE,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_MARKDOWN,
  GLOB_YAML,
  GLOB_HTML,
]

export const GLOB_NODE_MODULES = '**/node_modules' as const
export const GLOB_DIST = '**/dist' as const
export const GLOB_LOCKFILE: readonly string[] = [
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',
]
export const GLOB_EXCLUDE: readonly string[] = [
  GLOB_NODE_MODULES,
  GLOB_DIST,
  ...GLOB_LOCKFILE,

  '**/coverage',
  '**/temp',
  '**/fixtures',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.output',
  '**/.vite-inspect',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
]
