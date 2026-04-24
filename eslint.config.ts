import path from "path"

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";
import tailwindPlugin from "eslint-plugin-tailwindcss"

// ESLint v9 flat-config typings.
const tailwindRecommended = tailwindPlugin.configs?.["flat/recommended"] as unknown as object | undefined;

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{ts,tsx}"],
    settings: {
      react: { version: "detect" },
      tailwindcss: {
        config: path.resolve(__dirname, "tailwind.config.ts"),
      },
    },
    plugins: {
      import: importPlugin,
      tailwindcss: tailwindPlugin,
    },
    extends: tailwindRecommended ? [tailwindRecommended] : [],
    rules: {
      // ===========================
      // Stylistyczne / Formatowanie
      // ===========================
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "jsx-quotes": ["error", "prefer-double"],
      "object-curly-spacing": ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }],
    
      // ===========================
      // JavaScript / React
      // ===========================
      "no-console": "error",
      "object-shorthand": ["error", "always"],
      "arrow-body-style": ["error", "as-needed"],
      "react/jsx-curly-brace-presence": [
        "error", 
        { "props": "never", "children": "never" }
      ],
    
      // ===========================
      // TypeScript
      // ===========================
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", disallowTypeAnnotations: false },
      ],
    
      // ===========================
      // TailwindCSS
      // ===========================
      "tailwindcss/no-contradicting-classname": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "error",
    
      // ===========================
      // Importy
      // ===========================
      "import/order": [
        "error",
        {
          distinctGroup: false,
          groups: ["builtin", "external", "internal", "index"],
          pathGroups: [
            { pattern: "react", group: "external", position: "before" },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    }
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "next-env.d.ts",
    "**/components/ui/",
  ]),
]);

export default eslintConfig;