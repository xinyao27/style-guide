/**
 * Package managers
 */
export const yarn = {
  installCommand: 'yarn add',
  lockFile: 'yarn.lock',
  dlxCommand: 'npx',
  label: 'yarn',
  name: 'yarn',
}
export const pnpm = {
  installCommand: 'pnpm install',
  lockFile: 'pnpm-lock.yaml',
  dlxCommand: 'pnpx',
  label: 'pnpm',
  name: 'pnpm',
}
export const npm = {
  lockFile: 'package-lock.json',
  installCommand: 'npm install',
  dlxCommand: 'npx',
  label: 'npm',
  name: 'npm',
}
export const bun = {
  installCommand: 'bun add',
  lockFile: 'bun.lockb',
  dlxCommand: 'bunx',
  label: 'bun',
  name: 'bun',
}
export const packageManagers = [bun, pnpm, yarn, npm]
