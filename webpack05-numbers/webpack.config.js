/*
 * @Author: 卢嘉乐
 * @Date: 2022-02-15 14:24:37
 * @LastEditors: 卢嘉乐
 * @LastEditTime: 2022-02-16 08:30:46
 * @Description: file content
 */
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mylib.js',
    library: {
      name: 'mylib',
      type: 'umd',
    }
  }
}