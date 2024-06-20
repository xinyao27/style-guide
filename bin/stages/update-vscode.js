import process from 'node:process'
import path from 'node:path'
import fs from 'fs-extra'
import * as p from '@clack/prompts'
import * as c from 'xycolors'

const settings = {
  'eslint.useFlatConfig': true,
  'prettier.enable': false,
  'editor.formatOnSave': true,
  'editor.codeActionsOnSave': {
    'source.fixAll.eslint': 'explicit',
    'source.organizeImports': 'never',
  },
  'eslint.validate': [
    'javascript',
    'javascriptreact',
    'typescript',
    'typescriptreact',
    'vue',
    'html',
    'markdown',
    'json',
    'jsonc',
    'astro',
    'css',
    'less',
    'scss',
    'pcss',
    'postcss',
  ],
  'html.format.enable': false,
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
    await fs.mkdir(vscodeDirPath)
    await fs.writeFile(vscodeSettingsPath, JSON.stringify(settings, null, 2))
    p.log.success(c.greenStylize(`Created ${c.cyanStylize('settings.json')}`))
  }
}
