import { execSync } from 'node:child_process'
import { exec } from 'node:child_process'
import util from 'node:util'
import pkgJson from '../package.json' assert { type: 'json' }

export function isGitClean() {
  try {
    execSync('git diff-index --quiet HEAD --')
    return true
  } catch {
    return false
  }
}

export function getEslintConfigContent() {
  return `import { all } from '@xystack/style-guide/eslint'

export default [...all]
`
}

export const execPromise = util.promisify(exec)

export { pkgJson }
