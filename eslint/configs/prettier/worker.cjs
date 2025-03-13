// @ts-check

const { runAsWorker } = require('synckit')

let prettier

runAsWorker(async (code, options) => {
  if (!prettier) prettier = await import('prettier')
  const prettierRcOptions = await prettier.resolveConfig(options.onDiskFilepath, { editorconfig: true })

  return prettier.format(code, { ...prettierRcOptions, ...options })
})
