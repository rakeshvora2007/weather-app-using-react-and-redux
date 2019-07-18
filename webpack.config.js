// const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const htmlWebpackPlugin = 

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/build",
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [new HtmlWebpackPlugin({
    template: __dirname + "/index.html",
    filename: __dirname + '/build/index.html',
    inject: 'body'
})]
};
