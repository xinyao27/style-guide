// copy from https://github.com/antfu/eslint-plugin-format/blob/main/src/rules/prettier.ts thanks to @antfu
import { fileURLToPath } from 'node:url'
import { createSyncFn } from 'synckit'
import { messages, reportDifferences } from 'eslint-formatting-reporter'

const prettier = fileURLToPath(new URL('./prettier.cjs', import.meta.url))
let format

export default {
  rules: {
    prettier: {
      meta: {
        type: 'layout',
        docs: { description: 'Use Prettier to format code' },
        fixable: 'whitespace',
        schema: [
          {
            type: 'object',
            properties: {
              parser: {
                type: 'string',
                required: true,
              },
            },
            additionalProperties: true,
          },
        ],
        messages,
      },
      create(context) {
        if (!format) format = createSyncFn(prettier)
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
            }
            catch (error_) {
              if (!(error_ instanceof SyntaxError)) {
                context.report({
                  loc: {
                    start: { line: 1, column: 0 },
                    end: { line: 1, column: 0 },
                  },
                  message: 'Failed to format the code',
                })
                return
              }

              let message = `Parsing error: ${error_.message}`

              const error = error_

              if (error.codeFrame) message = message.replace(`\n${error.codeFrame}`, '')

              if (error.loc) message = message.replace(/ \(\d+:\d+\)$/, '')

              context.report({ message, loc: error.loc })
            }
          },
        }
      },
    },
  },
}
