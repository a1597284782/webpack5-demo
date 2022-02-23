/*
 * @Author: 卢嘉乐
 * @Date: 2022-02-15 11:04:22
 * @LastEditors: 卢嘉乐
 * @LastEditTime: 2022-02-15 11:53:26
 * @Description: file content
 */
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: './src/app.js',
  // devtool: 'inline-source-map',
  plugins: [new htmlWebpackPlugin()],
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
