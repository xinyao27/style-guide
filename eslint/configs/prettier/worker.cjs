// @ts-check

const { runAsWorker } = require('synckit')

let prettier

runAsWorker(async (code, options) => {
  if (!prettier) prettier = await import('prettier')
  if (options.filepath) {
    const config = await prettier.resolveConfig(options.filepath)
    options = { ...config, ...options }
  }
  return prettier.format(code, options)
})
