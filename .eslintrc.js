module.exports = {
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:react-native/all", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-native", "import", "jsx-a11y", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off", // not needed with React 17+
    "react/prop-types": "off", // Since we are using TypeScript for type-checking
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-console": "warn",
    "react-native/no-inline-styles": "off", // if you want to allow inline styles
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
