import { join, resolve } from 'node:path'
import fs from 'fs-extra'
import { beforeAll, expect, test } from 'bun:test'
import { $, Glob } from 'bun'

beforeAll(async () => {
  await fs.rm('_fixtures', { recursive: true, force: true })
})

test('fixtures', async () => {
  const input = resolve('fixtures/input')
  const output = resolve('fixtures/output')
  const target = resolve('_fixtures')

  await fs.copy(input, target, {
    filter: (src) => {
      return !src.includes('node_modules')
    },
  })
  await fs.writeFile(
    join(target, 'eslint.config.js'),
    `import { all } from '../eslint/index.js'

export default all
`,
  )

  await $`npx eslint . --fix`.cwd(target)

  const glob = new Glob('**/*')

  for await (const file of glob.scan(target)) {
    if (file === 'eslint.config.js') continue

    const targetContent = await fs.readFile(join(target, file), 'utf-8')
    const outputContent = await fs.readFile(join(output, file), 'utf-8')

    await expect(targetContent).toMatch(outputContent)
  }
})
