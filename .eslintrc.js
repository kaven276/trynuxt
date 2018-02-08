module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'airbnb-base',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'max-len': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'prefer-promise-reject-errors': 0,
    'import/no-unresolved': 0,
    'global-require': 0,
  },
};
