import path from 'node:path'
import fsp from 'node:fs/promises'
import process from 'node:process'
import c from 'picocolors'
import * as p from '@clack/prompts'
import { pkgJson } from '../utils.js'

export async function updatePackageJson() {
  const cwd = process.cwd()

  const pathPackageJSON = path.join(cwd, 'package.json')

  p.log.step(c.cyan(`Bumping ${pkgJson.name} to v${pkgJson.version}`))

  const pkgContent = await fsp.readFile(pathPackageJSON, 'utf-8')
  const pkg = JSON.parse(pkgContent)

  pkg.devDependencies ??= {}
  pkg.devDependencies[pkgJson.name] = `^${pkgJson.version}`
  pkg.devDependencies.eslint ??= pkgJson.devDependencies.eslint.replace('npm:eslint-ts-patch@', '').replace(/-\d+$/, '')
  pkg.prettier = '@xystack/style-guide/prettier'

  const addedPackages = []

  if (addedPackages.length > 0) p.note(`${c.dim(addedPackages.join(', '))}`, 'Added packages')

  await fsp.writeFile(pathPackageJSON, JSON.stringify(pkg, null, 2))
  p.log.success(c.green(`Changes wrote to package.json`))
}
