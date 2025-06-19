import { exec, execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import util from 'node:util'

const pkgJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))

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
