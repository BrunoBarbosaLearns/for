import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    parser: require.resolve('babel-eslint'),
    plugins: ['babel'],
    rules: {
      // Add any custom ESLint rules here
    },
  },
];
