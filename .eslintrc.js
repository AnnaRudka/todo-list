// https://dev.to/devdammak/setting-up-eslint-in-your-javascript-project-with-vs-code-2amf
// https://eslint.org/docs/user-guide/getting-started

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
