import type { AST, ESLint, Rule } from 'eslint'
import type { Options } from 'prettier'

import { messages, reportDifferences } from 'eslint-formatting-reporter'
// copy from https://github.com/antfu/eslint-plugin-format/blob/main/src/rules/prettier.ts thanks to @antfu
import { fileURLToPath } from 'node:url'
import { createSyncFn } from 'synckit'

const prettier = fileURLToPath(new URL('./worker.cjs', import.meta.url))
let format: (code: string, options: Options) => string

const rule: Rule.RuleModule = {
  create(context) {
    if (!format) format = createSyncFn(prettier) as any
    const onDiskFilepath = context.physicalFilename ?? context.getPhysicalFilename()

    return {
      Program() {
        const sourceCode = context.sourceCode.text
        try {
          const formatted = format(sourceCode, {
            filepath: context.filename,
            onDiskFilepath,
            ...context.options[0],
          })

          reportDifferences(context, sourceCode, formatted)
        } catch (error_) {
          if (!(error_ instanceof SyntaxError)) {
            context.report({
              loc: {
                end: { column: 0, line: 1 },
                start: { column: 0, line: 1 },
              },
              message: 'Failed to format the code',
            })
            return
          }

          let message = `Parsing error: ${error_.message}`

          const error = error_ as SyntaxError & { codeFrame: string; loc: AST.SourceLocation }

          if (error.codeFrame) message = message.replace(`\n${error.codeFrame}`, '')

          if (error.loc) message = message.replace(/ \(\d+:\d+\)$/, '')

          context.report({ loc: error.loc, message })
        }
      },
    }
  },
  meta: {
    docs: { description: 'Use Prettier to format code' },
    fixable: 'whitespace',
    messages,
    schema: [
      {
        additionalProperties: true,
        properties: {
          parser: {
            required: true,
            type: 'string',
          },
        },
        type: 'object',
      },
    ],
    type: 'layout',
  },
}

const plugin: ESLint.Plugin = { rules: { prettier: rule } }

export default plugin
