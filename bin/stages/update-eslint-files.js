import * as p from '@clack/prompts'
import fs from 'fs-extra'
import path from 'node:path'
import process from 'node:process'
import parse from 'parse-gitignore'
import * as c from 'xycolors'

import { getEslintConfigContent } from '../utils.js'

export async function updateEslintFiles() {
  const cwd = process.cwd()
  const pathESLintIgnore = path.join(cwd, '.eslintignore')
  const pathPackageJSON = path.join(cwd, 'package.json')

  const pkgContent = await fs.readFile(pathPackageJSON, 'utf-8')
  const pkg = JSON.parse(pkgContent)

  const configFileName = pkg.type === 'module' ? 'eslint.config.js' : 'eslint.config.mjs'
  const pathFlatConfig = path.join(cwd, configFileName)

  const eslintIgnores = []
  if (fs.existsSync(pathESLintIgnore)) {
    p.log.step(c.cyanStylize(`Migrating existing .eslintignore`))
    const content = await fs.readFile(pathESLintIgnore, 'utf-8')
    const parsed = parse(content)
    const globs = parsed.globs()

    for (const glob of globs) {
      if (glob.type === 'ignore') eslintIgnores.push(...glob.patterns)
      else if (glob.type === 'unignore') eslintIgnores.push(...glob.patterns.map((pattern) => `!${pattern}`))
    }
  }

  const configLines = []

  if (eslintIgnores.length > 0) configLines.push(`ignores: ${JSON.stringify(eslintIgnores)},`)

  const eslintConfigContent = getEslintConfigContent()

  await fs.writeFile(pathFlatConfig, eslintConfigContent)
  p.log.success(c.greenStylize(`Created ${configFileName}`))

  const files = fs.readdirSync(cwd)
  const legacyConfig = []
  files.forEach((file) => {
    if (/eslint|prettier/.test(file) && !/eslint\.config\./.test(file)) legacyConfig.push(file)
  })

  if (legacyConfig.length > 0) {
    const needDelete = await p.confirm({
      initialValue: true,
      message: `Do you want to delete the legacy config files? [${c.dim(legacyConfig.join(', '))}]`,
    })
    if (needDelete) {
      for (const file of legacyConfig) {
        await fs.remove(path.join(cwd, file))
      }
    } else {
      p.note(`${c.dim(legacyConfig.join(', '))}`, 'You can remove those files manually')
    }
  }
}
