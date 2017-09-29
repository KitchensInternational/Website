module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  globals: {
    "ga": true,
    "google": true,
    "addthis": true,
    "Email": true
  },
  rules: {
      "no-console": 0
  }
};
