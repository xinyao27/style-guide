import process from 'node:process'
import { detect, parseNi } from '@antfu/ni'
import * as p from '@clack/prompts'
import * as c from 'yoctocolors'
import { execPromise } from '../utils.js'
import { packageManagers } from '../constants.js'

export async function updateTheDependencies() {
  const cwd = process.cwd()
  const detectedAgent = await detect({
    programmatic: true,
    cwd,
  })
  const agent = await p.select({
    message: 'Please select your package manager.',
    options: packageManagers.map((packageManager) => ({
      value: packageManager.name,
      label: packageManager.label,
      hint: `Be sure you have ${c.bold(packageManager.label)} installed.`,
    })),
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
