import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import jsonPlugin from "eslint-plugin-json";
import eslintPluginImport from "eslint-plugin-import";
import {
  configs as tsPluginConfigs,
  plugin as tsPluginPlugin,
  parser as tsPluginParser,
} from "typescript-eslint";

export default [
  ...tsPluginConfigs.recommendedTypeChecked,
  ...tsPluginConfigs.stylisticTypeChecked,
  ...pluginVue.configs["flat/recommended"],
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginImport.flatConfigs.typescript,
  {
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
  {
    ignores: ["dist"],
  },
  {
    files: ["*.js", "**/*.json", "*.code-workspace"],
    ...tsPluginConfigs.disableTypeChecked,
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
    files: ["*.json", "**/*.json", "**/*.code-workspace"],
    ...jsonPlugin.configs.recommended,
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".code-workspace"],
      },
    },
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
      "typescript-eslint": tsPluginPlugin,
    },
    languageOptions: {
      parserOptions: {
        parser: tsPluginParser,
        projectService: true,
        extraFileExtensions: [".vue"],
        allowDefaultProject: ["*.js"],
        sourceType: "module",
      },
    },
  },
];
