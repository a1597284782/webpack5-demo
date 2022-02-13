const path = require('path')
// 该插件将为你生成一个 HTML5 文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 本插件会将 CSS 提取到单独的文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 这个插件使用 cssnano 优化和压缩 CSS。
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// 该插件使用 terser 来压缩 JavaScript。webpack v5 开箱即带
const TerserPlugin = require('terser-webpack-plugin')

const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')

/** @type {import('webpack').Configuration} */
module.exports = {

  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    // 清理之前的文件
    clean: true,
    // 资源文件的路径和名称
    // [contenthash][ext]: webpack提供自动生成名称
    assetModuleFilename: 'images/[contenthash][ext]',
  },

  module: {
    rules: [
      {
        test: /\.png$/i,
        type: 'asset/resource',
        // 资源文件的路径和名称
        // [contenthash][ext]: webpack提供自动生成名称
        // 优先级高于 output 中的 assetModuleFilename
        generator: {
          filename: 'images/[contenthash][ext]'
        }
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline'
      },
      {
        test: /\.txt$/i,
        type: 'asset/source'
      },
      {
        test: /\.jpg$/i,
        type: 'asset',
        // 在导出一个 data URI 和发送一个单独的文件之间自动选择
        parser: {
          // 默认 4k 大小使用 data URI, 大于则使用本地文件
          // 通过该属性可以自定义
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024
          }
        }
      },
      {
        test: /\.(css|less)$/i,
        use: [
          // compiles Less to CSS
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },

      // 加载数据 https://webpack.docschina.org/guides/asset-management/#loading-data
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader']
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse
        }
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse
        }
      },

      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },

  plugins: [
    // 生成 html 模板
    new HtmlWebpackPlugin({
      // 模板
      template: './index.html',
      // 生产的名字
      filename: 'app.html',
      // script 标签在 body 里面
      inject: 'body'
    }),
    // 合并 css
    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash].css'
    })
  ],

  // 优化
  optimization: {
    /**
     * 将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，
     * 是比较推荐的做法，这是因为，它们很少像本地的源代码那样频繁修改。
     * 因此通过实现以上步骤，利用 client 的长效缓存机制，命中缓存来消除请求，
     * 并减少向 server 获取资源，同时还能保证 client 代码和 server 代码版本一致。
     */
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
