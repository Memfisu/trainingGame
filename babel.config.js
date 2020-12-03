const envDevelopment = [
  '@babel/env',
  {
    targets: {
      browsers: [
        'Chrome >= 52',
        'FireFox >= 44',
        'Safari >= 8',
        'Explorer 11',
        'last 4 Edge versions'
      ]
    },
    modules: false,
    useBuiltIns: 'usage'
  },
  'react-hot-loader/babel'
];

const envProduction = ['@babel/env', { useBuiltIns: 'usage' }];

module.exports = ({ env }) => {
  const isDev = env() === 'development';

  const presets = [
    isDev ? envDevelopment : envProduction,
    '@babel/preset-react'
  ];

  const plugins = [
    '@babel/plugin-transform-runtime',
    ['lodash', { id: ['recompose'] }],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator'
  ];

  return {
    presets,
    plugins
  };
};
