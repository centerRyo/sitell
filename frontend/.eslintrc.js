module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'es2021',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  // @refs: https://gist.github.com/sin-tanaka/b18bf1b5b46bd685fee93bd26fb473b3
  rules: {
    // 関数の戻り値はtsの推論に任せる (exportする関数は必要)
    '@typescript-eslint/explicit-function-return-type': 'off',
    // anyを禁止 (必要なケースは行コメントでeslint-disableする)
    '@typescript-eslint/no-explicit-any': 'error',
    // ts-ignoreを許可する
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
    },
  ],
};
