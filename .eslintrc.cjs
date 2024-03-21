/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "import/no-default-export": "off",
    "vue/multi-word-component-names": "off", //关闭组件命名规则
    "vue/no-multiple-template-root": "off",
    "no-console": "off",
    // ignore配置vite配置的别名，临时办法
    // "import/no-unresolved": [2, {"ignore": ["@/"]}],
    // add specific rules configurations here
  },
}
