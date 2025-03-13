import { execSync, exec } from 'node:child_process'
import util from 'node:util'

import pkgJson from '../package.json'

export function getEslintConfigContent() {
  return `import { defineConfig } from '@xystack/style-guide/eslint'

export default defineConfig()
`
}

export function isGitClean() {
  try {
    execSync('git diff-index --quiet HEAD --')
    return true
  } catch {
    return false
  }
}

export const execPromise = util.promisify(exec)

export { pkgJson }
