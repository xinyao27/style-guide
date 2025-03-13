import type { Linter } from 'eslint'

import pluginJsonc from 'eslint-plugin-jsonc'
import parserJsonc from 'jsonc-eslint-parser'

import type { Config } from '../types'

import { GLOB_JSON5, GLOB_JSONC, GLOB_JSON } from '../globs'

/**
 * ESLint plugin for JSON and JSON5 files.
 *
 * @see https://github.com/ota-meshi/eslint-plugin-jsonc
 */
export const jsonc = (): Config[] => [
  {
    rules: {
      ...(pluginJsonc.configs['recommended-with-jsonc'].rules as Linter.RulesRecord),
      'jsonc/quote-props': 'off',
      'jsonc/quotes': 'off',
    },
    files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
    languageOptions: { parser: parserJsonc },
    plugins: { jsonc: pluginJsonc as any },
  },
]

export const sortPackageJson = (): Config[] => [
  {
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          order: [
            'name',
            'version',
            'private',
            'packageManager',
            'description',
            'type',
            'keywords',
            'license',
            'homepage',
            'bugs',
            'repository',
            'author',
            'contributors',
            'funding',
            'files',
            'main',
            'module',
            'types',
            'exports',
            'typesVersions',
            'sideEffects',
            'unpkg',
            'jsdelivr',
            'browser',
            'bin',
            'man',
            'directories',
            'publishConfig',
            'scripts',
            'peerDependencies',
            'peerDependenciesMeta',
            'optionalDependencies',
            'dependencies',
            'devDependencies',
            'engines',
            'config',
            'overrides',
            'pnpm',
            'husky',
            'lint-staged',
            'eslintConfig',
            'prettier',
          ],
          pathPattern: '^$',
        },
        {
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$',
          order: { type: 'asc' },
        },
        {
          order: ['types', 'require', 'import', 'default'],
          pathPattern: '^exports.*$',
        },
        {
          pathPattern: '^(?:resolutions|overrides|pnpm.overrides)$',
          order: { type: 'asc' },
        },
      ],
      'jsonc/sort-array-values': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '^files$',
        },
      ],
    },
    files: ['**/package.json'],
  },
]

export const sortTsconfig = (): Config[] => [
  {
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          order: ['extends', 'compilerOptions', 'references', 'files', 'include', 'exclude'],
          pathPattern: '^$',
        },
        {
          order: [
            /* Projects */
            'incremental',
            'composite',
            'tsBuildInfoFile',
            'disableSourceOfProjectReferenceRedirect',
            'disableSolutionSearching',
            'disableReferencedProjectLoad',
            /* Language and Environment */
            'target',
            'jsx',
            'jsxFactory',
            'jsxFragmentFactory',
            'jsxImportSource',
            'lib',
            'moduleDetection',
            'noLib',
            'reactNamespace',
            'useDefineForClassFields',
            'emitDecoratorMetadata',
            'experimentalDecorators',
            /* Modules */
            'baseUrl',
            'rootDir',
            'rootDirs',
            'customConditions',
            'module',
            'moduleResolution',
            'moduleSuffixes',
            'noResolve',
            'paths',
            'resolveJsonModule',
            'resolvePackageJsonExports',
            'resolvePackageJsonImports',
            'typeRoots',
            'types',
            'allowArbitraryExtensions',
            'allowImportingTsExtensions',
            'allowUmdGlobalAccess',
            /* JavaScript Support */
            'allowJs',
            'checkJs',
            'maxNodeModuleJsDepth',
            /* Type Checking */
            'strict',
            'strictBindCallApply',
            'strictFunctionTypes',
            'strictNullChecks',
            'strictPropertyInitialization',
            'allowUnreachableCode',
            'allowUnusedLabels',
            'alwaysStrict',
            'exactOptionalPropertyTypes',
            'noFallthroughCasesInSwitch',
            'noImplicitAny',
            'noImplicitOverride',
            'noImplicitReturns',
            'noImplicitThis',
            'noPropertyAccessFromIndexSignature',
            'noUncheckedIndexedAccess',
            'noUnusedLocals',
            'noUnusedParameters',
            'useUnknownInCatchVariables',
            /* Emit */
            'declaration',
            'declarationDir',
            'declarationMap',
            'downlevelIteration',
            'emitBOM',
            'emitDeclarationOnly',
            'importHelpers',
            'importsNotUsedAsValues',
            'inlineSourceMap',
            'inlineSources',
            'isolatedDeclarations',
            'mapRoot',
            'newLine',
            'noEmit',
            'noEmitHelpers',
            'noEmitOnError',
            'outDir',
            'outFile',
            'preserveConstEnums',
            'preserveValueImports',
            'removeComments',
            'sourceMap',
            'sourceRoot',
            'stripInternal',
            /* Interop Constraints */
            'allowSyntheticDefaultImports',
            'esModuleInterop',
            'forceConsistentCasingInFileNames',
            'isolatedModules',
            'preserveSymlinks',
            'verbatimModuleSyntax',
            /* Completeness */
            'skipDefaultLibCheck',
            'skipLibCheck',
          ],
          pathPattern: '^compilerOptions$',
        },
      ],
    },
    files: ['**/tsconfig.json', '**/tsconfig.*.json'],
  },
]
