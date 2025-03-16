/**
 * Package managers
 */
export const yarn = {
  dlxCommand: 'npx',
  installCommand: 'yarn add',
  label: 'yarn',
  lockFile: 'yarn.lock',
  name: 'yarn',
}
export const pnpm = {
  dlxCommand: 'pnpx',
  installCommand: 'pnpm install',
  label: 'pnpm',
  lockFile: 'pnpm-lock.yaml',
  name: 'pnpm',
}
export const npm = {
  dlxCommand: 'npx',
  installCommand: 'npm install',
  label: 'npm',
  lockFile: 'package-lock.json',
  name: 'npm',
}
export const bun = {
  dlxCommand: 'bunx',
  installCommand: 'bun add',
  label: 'bun',
  lockFile: 'bun.lockb',
  name: 'bun',
}
export const packageManagers = [bun, pnpm, yarn, npm]
