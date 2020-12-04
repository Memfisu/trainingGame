const path = require('path');

const webpackConfigPath = './webpack.config.js';

module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  globals: {
    __DEV__: true
  },
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    'prettier/prettier': ['warn', { singleQuote: true }],
    'react/no-unused-state': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'import/no-cycle': 0,
    'global-require': 0,
    'no-confusing-arrow': 0,
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-multi-comp': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'import/order': 'off',
    'react/jsx-fragments': 'warn',
    'react/state-in-constructor': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-curly-newline': 'off',
    'no-restricted-imports': [
      1,
      {
        name: '@platf/core/config',
        message:
          "DEPRECATED: You need to use '@platf/core/config/useConfig' instead of '@platf/core/config/createConfig'"
      }
    ]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, webpackConfigPath)
      }
    }
  },
  plugins: ['react', 'jest', 'prettier', 'react-hooks']
};
