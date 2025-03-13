#!/usr/bin/env node

import * as p from '@clack/prompts'
import * as c from 'xycolors'

import { updateTheDependencies } from './stages/update-the-dependencies.js'
import { updatePackageJson } from './stages/update-package-json.js'
import { updateEslintFiles } from './stages/update-eslint-files.js'
import { updateVSCode } from './stages/update-vscode.js'
import { isGitClean, pkgJson } from './utils.js'

/* eslint-disable no-console */
async function main() {
  console.log()
  p.intro(`✨ ${c.magentaStylize(`${pkgJson.name} `)}${c.dim(`v${pkgJson.version}`)}`)

  await p.group(
    {
      uncommittedConfirmed: () => {
        if (isGitClean()) {
          return Promise.resolve(true)
        }

        return p.confirm({
          message: 'There are uncommitted changes in the current repository, are you sure to continue?',
          initialValue: false,
        })
      },
      updateTheDependencies: async ({ results }) => {
        if (!results.uncommittedConfirmed) {
          return process.exit(1)
        }

        return await updateTheDependencies()
      },
      updatePackageJson: async ({ results }) => {
        if (!results.uncommittedConfirmed) {
          return process.exit(1)
        }

        return await updatePackageJson()
      },
      updateEslintFiles: async ({ results }) => {
        if (!results.uncommittedConfirmed) {
          return process.exit(1)
        }

        return await updateEslintFiles()
      },
      updateVSCode: async ({ results }) => {
        if (!results.uncommittedConfirmed) {
          return process.exit(1)
        }

        return await updateVSCode()
      },
    },
    {
      onCancel: () => {
        p.cancel('Operation cancelled.')
        process.exit(0)
      },
    },
  )

  p.log.success(c.greenStylize('Setup completed'))
  p.outro(`Now you can run ${c.blueStylize('eslint . --fix')}\n`)
}

main().catch((error) => {
  p.log.error(c.inverse(c.redStylize(' Failed to migrate ')))
  console.error(error)
  process.exit(1)
})
/* eslint-enable no-console */
