module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "@typescript-eslint", "react-hooks"],
  rules: {
    semi: [2, "always"],
    "react-refresh/only-export-components": [
      "off",
      { allowConstantExport: true },
    ],
  },
};
