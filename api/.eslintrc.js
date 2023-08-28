module.exports = {
  root: true,
  extends: [
    'airbnb',
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-console": [1, { allow: ["warn", "error"] }],
    "no-unused-vars": 1,
    "prettier/prettier": 1,
    "no-shadow": 0,
    "arrow-body-style": ["error", "as-needed"],
  },
};
