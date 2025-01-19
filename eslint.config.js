import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import jsonPlugin from "eslint-plugin-json";
import eslintPluginImport from "eslint-plugin-import";

export default [
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...pluginVue.configs["flat/recommended"],
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginImport.flatConfigs.typescript,
  {
    "settings": {
      "import/resolver": {
        "typescript": true,
        "node": true,
      },
    },
  },
  {
    ignores: ["dist"],
  },
  {
    files: ["*.js", "**/*.json"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    languageOptions: {
      globals: {
        // eslint-disable-next-line no-undef
        ...global.browser,
      },
    },
  },
  {
    files: ["*.json", "**/*.json"],
    ...jsonPlugin.configs.recommended,
  },
  {
    rules: {
      camelcase: "error",
      "consistent-return": "error",
      "default-case": "error",
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-notation": "error",
      eqeqeq: "error",
      "import/order": "error",
      "max-classes-per-file": ["error", { max: 1, ignoreExpressions: true }],
      "no-duplicate-imports": ["error", { includeExports: true }],
      "no-eval": "error",
      "no-invalid-this": "error",
      "no-script-url": "error",
      "no-shadow": "error",
      "no-var": "error",
      "prefer-const": "error",
      "vue/multi-word-component-names": "off",
    },
  },
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  },
  {
    plugins: {
      "typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        projectService: true,
        extraFileExtensions: [".vue"],
        allowDefaultProject: ["*.js"],
        sourceType: "module",
      },
    },
  },
];
