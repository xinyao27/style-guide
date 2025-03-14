import { defineConfig } from 'tsdown'
import path from 'node:path'
import fs from 'fs-extra'

export default defineConfig([
  {
    onSuccess: () => {
      const worker = path.join(__dirname, 'eslint/configs/prettier/worker.cjs')
      fs.copyFileSync(worker, 'dist/eslint/worker.cjs')
    },
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
