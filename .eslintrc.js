module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    quotes: [1, 'single'], // 引号
    'space-before-function-paren': 0, // 函数前空格
    'comma-dangle': ['error', 'only-multiline'], // 拖尾逗号
    'max-len': ['error', { code: 200 }], // 强制最大行长度
    '@typescript-eslint/no-unused-vars': [2],
    'vue/multi-word-component-names': 0,
  },
}
