const HtmlWebpackPlugin = require("html-webpack-plugin");
const BuildDonePlugin = require("./plugins/build-done-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {
      main: './src/index.js',
      admin: './src/admin.js'
    },
    output: {
      filename: '[name]-[contenthash:8].js',
      path: path.resolve(__dirname, 'dist')
      // library: 'my-app-[name]',
      // libraryTarget: 'umd',
      // chunkLoadingGlobal: 'webpackJsonp_my_app',
    },
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
    },
    mode: 'development',
    // devtool: false, // 或 'source-map'
    cache: {
      type: 'filesystem',
      cacheDirectory: path.resolve(__dirname, 'node_modules/.cache/webpack'),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
          ]
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: { cacheDirectory: true },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
              ],
            },
          },
        },
        // {
        //   test: /\.js$/,
        //   use: path.resolve(__dirname, 'loaders/console-warn-loader.js')
        // }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './public/index.html' }),
      new BuildDonePlugin(),
      // new BundleAnalyzerPlugin()
    ],
    // externals: { lodash: '_'},
    optimization: { 
      usedExports: true,
      minimize: true, //压缩代码
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true
            }
          }
        }),
        new CssMinimizerPlugin()
      ],
      splitChunks: {  //打包时那些单独生成一个js。大多是共用的文件
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
          },
          commons: {
            minChunks: 2,
            priority: 5
          }
        }
      } 
    }
}