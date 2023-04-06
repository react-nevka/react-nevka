module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
    'promise',
    'optimize-regex',
    'sonarjs',
    '@typescript-eslint',
    'unused-imports',
  ],
  rules: {
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    curly: 'warn',
    eqeqeq: 'error',
    'no-debugger': 'warn',
    'no-irregular-whitespace': 0,
    'optimize-regex/optimize-regex': 'warn',
    'promise/prefer-await-to-then': 'warn',
    'no-new-object': 'warn',
    'object-curly-spacing': ['warn', 'always'],

    // IMPORTS
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['sibling', 'parent', 'index'],
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'desc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-default-export': 'warn',
    'import/named': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/namespace': 'warn',
    'import/default': 'warn',
    'import/no-useless-path-segments': 'warn',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],

    // TYPESCRIPT
    '@typescript-eslint/explicit-function-return-type': ['warn', { "allowExpressions": true}],
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['strictCamelCase'],
        trailingUnderscore: 'forbid',
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        format: ['strictCamelCase'],
      },
      {
        selector: 'variable',
        modifiers: ['const', 'exported'],
        format: ['strictCamelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'classProperty',
        modifiers: ['static'],
        format: ['strictCamelCase', 'UPPER_CASE'],
      },
      {
        selector: 'memberLike',
        format: ['strictCamelCase'],
      },
      {
        selector: 'objectLiteralProperty',
        modifiers: ['requiresQuotes'],
        format: null,
      },
      {
        selector: 'objectLiteralProperty',
        filter: {
          regex: '([mM]ui)|(([pP])rops)|(Authorization)|(baseURL)',
          match: true,
        },
        format: null,
      },
      {
        selector: 'method',
        format: ['strictCamelCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        prefix: ['I', 'A'],
        format: ['PascalCase'],
      },
      {
        selector: 'typeAlias',
        prefix: ['T'],
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        prefix: ['E'],
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/unbound-method': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreNumericLiteralTypes: true,
        ignoreEnums: true,
        enforceConst: true,
        ignoreReadonlyClassProperties: true,
        ignore: [0, 1, 2],
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-imports': ['error'],
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',

    // REACT
    'react/no-access-state-in-setstate': 'error',
    'react/no-danger': 'error',
    'react/no-multi-comp': 'error',
    'react/no-this-in-sfc': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-no-bind': 0,
    'react/jsx-no-literals': 0,
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-pascal-case': 'error',
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,

    // SONAR JS
    'sonarjs/prefer-immediate-return': 'warn',
    'sonarjs/no-duplicate-string': ['warn', 4],
    'sonarjs/no-small-switch': 0,
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/no-collapsible-if': 'warn',
  },
};
