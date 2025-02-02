/* eslint-disable no-param-reassign */
const path = require('path');
const { argv } = require('yargs');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;

const storiesPath = !argv._[0]
  ? path.resolve(__dirname, '../../src/**/*.story.@(ts|tsx)').replace(/\\/g, '/')
  : path
      .resolve(
        __dirname,
        `../../src/mantine-${argv._[0].replace('@mantine/', '')}/**/*.story.@(ts|tsx)`
      )
      .replace(/\\/g, '/');

module.exports = {
  stories: [storiesPath],
  addons: ['storybook-dark-mode'],
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js'],
          configFile: path.join(__dirname, '../../tsconfig.json'),
        }),
      ],
    };

    config.devServer = {
      headers: {
        'Access-Control-Allow-Origin': 'localhost:6006',
      },
      https: true,
    };

    // Turn off docgen plugin as it breaks bundle with displayName
    config.plugins.pop();

    return config;
  },
};
