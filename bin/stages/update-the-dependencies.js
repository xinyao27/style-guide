import { parseNi, detect } from '@antfu/ni'
import * as p from '@clack/prompts'
import process from 'node:process'
import * as c from 'xycolors'

import { packageManagers } from '../constants.js'
import { execPromise } from '../utils.js'

export async function updateTheDependencies() {
  const cwd = process.cwd()
  const detectedAgent = await detect({
    programmatic: true,
    cwd,
  })
  const agent = await p.select({
    options: packageManagers.map((packageManager) => ({
      hint: `Be sure you have ${c.bold(packageManager.label)} installed.`,
      label: packageManager.label,
      value: packageManager.name,
    })),
    message: 'Please select your package manager.',
    initialValue: detectedAgent || undefined,
  })
  const ni = await parseNi(agent, [])

  const s = p.spinner()
  try {
    s.start('Updating the dependencies...')
    await execPromise(ni)
    s.stop('Dependencies updated')
  } catch {
    s.stop('Failed to update the dependencies')
  }
}
