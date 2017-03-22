const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

module.exports = {
  devtool: 'source-map',
  devServer: {
    inline: true,
    hot: true
  },
  entry: [
    'webpack-hot-middleware/client',
    './client/src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'bundle.js'
  },
  watch: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'client/src')
    }
    ]
  }
};