const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin()
  ],
  output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
  }
}
