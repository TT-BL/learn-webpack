const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = merge(commonConfig, {
  mode: 'production',

  devtool: false,

  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    usedExports: true,

    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          } 
        },
      }),
      new CssMinimizerPlugin(),
    ],

    splitChunks: {
      chunks: 'initial',
      maxSize: 200000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
        commons: {
          minChunks: 1,
          priority: 11,
        },
      },
    },
  },
})
