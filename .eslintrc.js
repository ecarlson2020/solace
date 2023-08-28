module.exports = {
  extends: [
    "next",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": [1, { allow: ["warn", "error"] }],
    "no-unused-vars": 1,
    "prettier/prettier": 1,
    "react/jsx-filename-extension": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-array-index-key": 0,
    "no-param-reassign": 0, // for redux
    "no-shadow": 0,
    "arrow-body-style": ["error", "as-needed"],
    // for next.js
    "react/react-in-jsx-scope": 0,
    "@next/next/no-img-element": 0,
    // ts
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"]
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
};
