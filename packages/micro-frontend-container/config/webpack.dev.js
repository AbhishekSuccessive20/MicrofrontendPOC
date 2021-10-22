const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        login: 'login@http://localhost:8081/remoteEntry.js',
        crud: 'crud@http://localhost:8082/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
