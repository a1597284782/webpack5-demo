
/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',

  output: {
    filename: 'scripts/[name].js'
  },

  // 使用 source map 仅用于开发环境
  devtool: 'inline-source-map',

  devServer: {
    static: './dist'
  },
}
