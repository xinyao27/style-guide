import type { Config } from 'prettier'

const config: Config = {
  overrides: [
    {
      files: [
        '**/node_modules/**',
        '**/dist/**',
        '**/coverage/**',
        '**/temp/**',
        '**/.vitepress/cache/**',
        '**/.nuxt/**',
        '**/.vercel/**',
        '**/.changeset/**',
        '**/.idea/**',
        '**/.output/**',
        '**/.vite-inspect/**',

        '**/CHANGELOG*.md',
        '**/*.min.*',
        '**/LICENSE*',
        '**/__snapshots__',
        '**/auto-import?(s).d.ts',
        '**/components.d.ts',
        '**/pnpm-lock.yaml',
      ],
      options: { requirePragma: true },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
  // https://prettier.io/docs/options.html#single-attribute-per-line
  singleAttributePerLine: true,
  // https://prettier.io/docs/options.html#bracket-line
  bracketSameLine: false,
  trailingComma: 'all',
  singleQuote: true,
  endOfLine: 'lf',
  printWidth: 120,
  useTabs: false,
  semi: false,
  tabWidth: 2,
}

export default config
