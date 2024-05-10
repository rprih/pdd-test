module.exports = {
  root: true,
  extends: [
    "expo",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: true,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
