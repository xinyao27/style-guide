import * as p from '@clack/prompts'
import process from 'node:process'
import * as c from 'xycolors'
import path from 'node:path'
import fs from 'fs-extra'

const settings = {
  // Enable eslint for all supported languages
  'eslint.validate': [
    'javascript',
    'javascriptreact',
    'typescript',
    'typescriptreact',
    'html',
    'json',
    'json5',
    'jsonc',
    'yaml',
    'toml',
    'xml',
  ],
  // Auto fix
  'editor.codeActionsOnSave': {
    'source.fixAll.eslint': 'explicit',
    'source.organizeImports': 'never',
  },

  'editor.formatOnSave': false,

  // Disable the default formatter, use eslint instead
  'prettier.enable': false,

  'eslint.runtime': 'node',
}

export async function updateVSCode() {
  const cwd = process.cwd()
  const vscodeDirPath = path.join(cwd, '.vscode')
  const vscodeSettingsPath = path.join(vscodeDirPath, 'settings.json')

  if (await fs.exists(vscodeSettingsPath)) {
    const content = await fs.readFile(vscodeSettingsPath, 'utf-8')
    const oldSettings = JSON.parse(content)
    const newSettings = { ...oldSettings, ...settings }
    await fs.writeFile(vscodeSettingsPath, JSON.stringify(newSettings, null, 2))
    p.log.success(c.greenStylize(`Updated ${c.cyanStylize('settings.json')}`))
  } else {
    await fs.mkdir(vscodeDirPath, { recursive: true })
    await fs.writeFile(vscodeSettingsPath, JSON.stringify(settings, null, 2))
    p.log.success(c.greenStylize(`Created ${c.cyanStylize('settings.json')}`))
  }
}
