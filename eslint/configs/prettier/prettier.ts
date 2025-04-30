// copy from https://github.com/antfu/eslint-plugin-format/blob/main/src/rules/prettier.ts thanks to @antfu
import type { AST, ESLint, Rule } from 'eslint'

import synchronizedPrettier from '@prettier/sync'
import { messages, reportDifferences } from 'eslint-formatting-reporter'

const rule: Rule.RuleModule = {
  create(context) {
    return {
      Program() {
        const sourceCode = context.sourceCode.text
        try {
          const config = synchronizedPrettier.resolveConfig(context.filename)
          const formatted = synchronizedPrettier.format(sourceCode, {
            ...(context.options[0] || {}),
            ...config,
            filepath: context.filename,
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

          const error = error_ as SyntaxError & {
            codeFrame: string
            loc: AST.SourceLocation
          }

          if (error.codeFrame) message = message.replace(`\n${error.codeFrame}`, '')

          if (error.loc) message = message.replace(/ \(\d+:\d+\)$/, '')

          context.report({ loc: error.loc, message })
        }
      },
    }
  },
  meta: {
    docs: {
      description: 'Use Prettier to format code',
    },
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
