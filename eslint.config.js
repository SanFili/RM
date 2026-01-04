import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import importsPugin from 'eslint-plugin-simple-import-sort';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      tseslint.configs.strict,
      tseslint.configs.stylistic,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: reactPlugin,
      'simple-import-sort': importsPugin,
    },
    rules: {
      'no-console': ['error', { allow: ['error'] }],
      'react/jsx-key': ['error', { checkFragmentShorthand: true }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^react$', '^react/', '^@?\\w'], // React и сторонние библиотеки
            ['^src/assets'], // Ассеты
            ['^src/shared/'], // Shared
            ['^src/widgets/'], // Widgets
            ['^src/pages/'], // Pages
            ['^src/'], // Остальное из src
            ['^\\.'], // Относительные
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
    },
  },
]);
