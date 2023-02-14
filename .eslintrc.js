module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'eslint:recommended', 'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    "project": ["./tsconfig.json"],
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
    'react-hooks',
    'jsx-a11y',
    'import'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassing': 'off',
  },
  root: true,
}
