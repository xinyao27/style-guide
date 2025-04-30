import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    clean: true,
    dts: true,
    entry: ['eslint/index.ts'],
    format: ['esm'],
    outDir: 'dist/eslint',
    target: 'node18.18',
  },
  {
    clean: true,
    dts: true,
    entry: ['prettier/index.ts'],
    format: ['esm'],
    outDir: 'dist/prettier',
    target: 'node18.18',
  },
])
