// 这个插件使用 cssnano 优化和压缩 CSS。
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// 该插件使用 terser 来压缩 JavaScript。webpack v5 开箱即带
const TerserPlugin = require('terser-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',

  output: {
    filename: 'scripts/[name].[contenthash].js',
    // 文件路径前缀
    publicPath: 'http://localhost:8080/'
  },

  // 优化
  optimization: {
    minimizer: [
      // 这将仅在生产环境开启 CSS 优化。
      new CssMinimizerPlugin(),
      // 该插件使用 terser 来压缩 JavaScript
      new TerserPlugin()
    ]
  },

  performance: {
    hints: false
  }
}
