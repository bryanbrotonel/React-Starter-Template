var merge = require('webpack-merge');

// Plugins
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

// Configs
var baseConfig = require('./webpack.dev');

const prodConfiguration = (env) => {
  return merge([
    {
      optimization: {
        minimizer: [new UglifyJsPlugin()],
      },
      plugins: [
        new OptimizeCssAssetsPlugin(),
        new Visualizer({ filename: './statistics.html' }),
      ],
    },
  ]);
};

module.exports = (env) => {
  return merge(baseConfig(env), prodConfiguration(env));
};
