var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: "react-hot!babel-loader"
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
};
