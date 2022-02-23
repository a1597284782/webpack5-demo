/*
 * @Author: 卢嘉乐
 * @Date: 2022-02-14 09:09:30
 * @LastEditors: 卢嘉乐
 * @LastEditTime: 2022-02-15 11:02:44
 * @Description: file content
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',

  entry: './src/app.ts',

  output: {
    clean: true,
  },

  // 解析
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },

    extensions: ['.ts', '.js', '.vue'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        include: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  // 开发环境推荐使用这个
  devtool: 'cheap-module-source-map',

  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 3000,
    // host: '0.0.0.0',
    // 模块热更替
    hot: true,
    headers: {
      'X-Access-Token': '123',
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      // template: './index.html',
    }),
    new ESLintPlugin(),
  ],

  // 定义外部 js https://webpack.docschina.org/configuration/externals/
  externals: {
    jquery: ['https://code.jquery.com/jquery-3.1.0.js', 'jQuery'],
  },
  // https://webpack.docschina.org/configuration/externals/#example
  externalsType: 'script',
};
