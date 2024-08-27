"use strict";
const globals = require("globals");
const pluginJs = require("@eslint/js");
const tseslint = require("typescript-eslint");
const pluginReact = require("eslint-plugin-react");
const myRulesPlugin = require("./plugins/myrules");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      myrules: myRulesPlugin,
    },
    rules: {
      "consistent-return": "error",
      "myrules/ends-with-s": "error",
    },
    ignores: ["rules/*"],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
