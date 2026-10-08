const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig, {
  mode: 'development',

  devtool: 'eval-cheap-module-source-map',

  optimization: {
    minimize: false,
  },

  devServer: {
    port: 9000,
    open: true,
    hot: true,
  },
})