module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "no-shdow": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
