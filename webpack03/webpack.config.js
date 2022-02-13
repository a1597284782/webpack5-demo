const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',

  entry: './app.js',

  output: {
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  // 开发环境推荐使用这个
  devtool: 'cheap-module-source-map',

  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    headers: {
      'X-Access-Token': '123'
    }
  },

  plugins: [
    new HtmlWebpackPlugin()
  ]
}