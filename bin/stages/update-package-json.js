import * as p from '@clack/prompts'
import process from 'node:process'
import * as c from 'xycolors'
import path from 'node:path'
import fs from 'fs-extra'

import { pkgJson } from '../utils.js'

export async function updatePackageJson() {
  const cwd = process.cwd()

  const pathPackageJSON = path.join(cwd, 'package.json')

  p.log.step(c.cyanStylize(`Bumping ${pkgJson.name} to v${pkgJson.version}`))

  const pkgContent = await fs.readFile(pathPackageJSON, 'utf-8')
  const pkg = JSON.parse(pkgContent)

  pkg.devDependencies ??= {}
  pkg.devDependencies[pkgJson.name] = `^${pkgJson.version}`
  pkg.devDependencies.eslint ??= pkgJson.devDependencies.eslint
    ?.replace('npm:eslint-ts-patch@', '')
    ?.replace(/-\d+$/, '')
  pkg.devDependencies.prettier ??= pkgJson.devDependencies.prettier?.replace(/-\d+$/, '')
  pkg.devDependencies.typescript ??= pkgJson.devDependencies.typescript?.replace(/-\d+$/, '')
  pkg.prettier = `${pkgJson.name}/prettier`

  const addedPackages = []

  if (addedPackages.length > 0) p.note(`${c.dim(addedPackages.join(', '))}`, 'Added packages')

  await fs.writeFile(pathPackageJSON, JSON.stringify(pkg, null, 2))
  p.log.success(c.greenStylize(`Changes wrote to package.json`))
}
