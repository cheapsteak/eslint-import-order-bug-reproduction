module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
      arrowFunctions: true,
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  extends: ['react-app'],
  plugins: ['react'],
  rules: {
    'import/order': [
      'warn',
      {
        'newlines-between': 'always-and-inside-groups',
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config:
          '/Users/changwang/projects/prodigy-hydra/packages/app-parent/webpack.config.js',
      },
    },
  },
};
