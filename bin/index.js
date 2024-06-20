#!/usr/bin/env node

/* eslint-disable no-console */
import * as p from '@clack/prompts'
import * as c from 'xycolors'
import { isGitClean, pkgJson } from './utils.js'
import { updatePackageJson } from './stages/update-package-json.js'
import { updateEslintFiles } from './stages/update-eslint-files.js'
import { updateTheDependencies } from './stages/update-the-dependencies.js'
import { updateVSCode } from './stages/update-vscode.js'

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
          initialValue: false,
          message: 'There are uncommitted changes in the current repository, are you sure to continue?',
        })
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
      updateTheDependencies: async ({ results }) => {
        if (!results.uncommittedConfirmed) {
          return process.exit(1)
        }

        return await updateTheDependencies()
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

  p.log.success(c.greenStylize(`Setup completed`))
  p.outro(`Now you can run ${c.blueStylize('eslint . --fix')}\n`)
}

// eslint-disable-next-line unicorn/prefer-top-level-await
main().catch((error) => {
  p.log.error(c.inverse(c.redStylize(' Failed to migrate ')))
  console.error(error)
  process.exit(1)
})
