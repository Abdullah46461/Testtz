module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-debugger": "error",
    eqeqeq: "warn",
    semi: ["warn", "always"],
    quotes: ["warn", "single"],
    "comma-dangle": ["warn", "never"],

    "vue/multi-word-component-names": "off",
    "vue/html-indent": ["warn", 2],
    "vue/max-attributes-per-line": [
      "warn",
      {
        singleline: 3,
        multiline: 1,
      },
    ],
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
      },
    ],
  },
};
