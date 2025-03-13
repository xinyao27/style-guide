import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: ['eslint/index.ts'],
    outDir: 'dist/eslint',
    target: 'node18.18',
    format: ['esm'],
    clean: true,
    dts: true,
  },
  {
    entry: ['prettier/index.ts'],
    outDir: 'dist/prettier',
    target: 'node18.18',
    format: ['esm'],
    clean: true,
    dts: true,
  },
])
