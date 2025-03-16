import fs from 'fs-extra'
import path from 'node:path'
import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    clean: true,
    dts: true,
    entry: ['eslint/index.ts'],
    format: ['esm'],
    onSuccess: () => {
      const worker = path.join(__dirname, 'eslint/configs/prettier/worker.cjs')
      fs.copyFileSync(worker, 'dist/eslint/worker.cjs')
    },
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
