module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // parser: '@typescript-eslint/parser',

  parser: 'vue-eslint-parser',

  parserOptions: {
    ecmaVersion: 'latest',

    sourceType: 'module',

    parser: '@typescript-eslint/parser',
    // parser: 'vue-eslint-parser',
  },

  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 1,
    'no-debugger': 1,
    'no-alert': 1,
    'no-undef': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'vue/multi-word-component-names': 0,
  },
};
