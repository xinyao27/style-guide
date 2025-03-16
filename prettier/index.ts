import type { Config } from 'prettier'

const config: Config = {
  // https://prettier.io/docs/options.html#bracket-line
  bracketSameLine: false,
  endOfLine: 'lf',
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
  printWidth: 120,
  semi: false,
  // https://prettier.io/docs/options.html#single-attribute-per-line
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
}

export default config
