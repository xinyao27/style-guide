import { detect, parseNi } from '@antfu/ni'
import * as p from '@clack/prompts'
import process from 'node:process'
import * as c from 'xycolors'

import { packageManagers } from '../constants.js'
import { execPromise } from '../utils.js'

export async function updateTheDependencies() {
  const cwd = process.cwd()
  const detectedAgent = await detect({
    cwd,
    programmatic: true,
  })
  const agent = await p.select({
    initialValue: detectedAgent || undefined,
    message: 'Please select your package manager.',
    options: packageManagers.map((packageManager) => ({
      hint: `Be sure you have ${c.bold(packageManager.label)} installed.`,
      label: packageManager.label,
      value: packageManager.name,
    })),
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
