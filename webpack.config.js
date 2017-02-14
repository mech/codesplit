const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },

  devtool: 'source-map',
  target: 'web',
  context: __dirname,

  entry: {
    app: [
      'babel-polyfill',
      './app/index.jsx'
    ],
    vendor: [
      'react',
      'react-dom'
    ]
  },

  output: {
    filename: 'js/[name].js', // Don't use [hash] or [chunkhash] in dev mode
    path: path.join(__dirname, 'server/public'),
    publicPath: '/',
    pathinfo: true // Include module comment for dev use
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  devServer: {
    host: '0.0.0.0',
    // stats: 'minimal',
    stats: {
      chunks: false
    },
    hot: true,
    historyApiFallback: true
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin({ multiStep: true }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
      // minChunks: function(module) {
      //   return module.context && module.context.indexOf('node_modules') !== -1
      // }
    }),
    new HtmlWebpackPlugin({
      template: './server/template/index.html'
    })
  ],

  // recordsPath: path.resolve(__dirname, './recordsPath.json')
  recordsPath: `${process.cwd()}/.webpack-records/records.json`
}

module.exports = config
