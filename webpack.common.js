const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BuildDonePlugin = require('./plugins/build-done-plugin.js')
const BuildProgressPlugin = require('./plugins/build-process-plugin.js')

module.exports = {
  entry: {
    main: './src/index.js',
    // admin: './src/admin.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].js',
  },

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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: path.resolve(__dirname, 'loaders/file-header-loader.js') },
          { loader: path.resolve(__dirname, 'loaders/console-warn-loader.js') }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new BuildDonePlugin(),
    new BuildProgressPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
