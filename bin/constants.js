/**
 * Package managers
 */
export const yarn = {
  name: 'yarn',
  label: 'yarn',
  lockFile: 'yarn.lock',
  installCommand: 'yarn add',
  dlxCommand: 'npx',
}
export const pnpm = {
  name: 'pnpm',
  label: 'pnpm',
  lockFile: 'pnpm-lock.yaml',
  installCommand: 'pnpm install',
  dlxCommand: 'pnpx',
}
export const npm = {
  name: 'npm',
  label: 'npm',
  lockFile: 'package-lock.json',
  installCommand: 'npm install',
  dlxCommand: 'npx',
}
export const bun = {
  name: 'bun',
  label: 'bun',
  lockFile: 'bun.lockb',
  installCommand: 'bun add',
  dlxCommand: 'bunx',
}
export const packageManagers = [pnpm, yarn, bun, npm]
