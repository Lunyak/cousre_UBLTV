module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:i18next/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react", "@typescript-eslint", "i18next", 'react-hooks'],
  rules: {
    // "react/jsx-indent": [2, {indentMode: 4, ignoreTernaryOperator: true}]
    "react/jsx-indent": [2, 2],
    indent: [2, 2],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "i18next/no-literal-string": [
      "error",
      { markupOnly: true, ignoreAttribute: ["data-testid", "to"] },
    ],
    "max-length": ["error", { ignoreComments: true, code: 100 }],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-param-reassing": "off"
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.text.{ts, tsx}'],
      rules: {
        "i18next/no-literal-string": 'off'
      }
    }
  ]
};
