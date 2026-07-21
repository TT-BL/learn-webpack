const HtmlWebpackPlugin = require("html-webpack-plugin");
const BuildDonePlugin = require("./plugins/build-done-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
    mode: 'development',
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
      splitChunks: { 
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