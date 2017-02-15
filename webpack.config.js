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
      // 'babel-polyfill',
      // 'webpack-dev-server/client?http://localhost:9000',
      // 'webpack/hot/only-dev-server',
      './app/index.jsx'
    ]
    // vendor: [
    //   'react',
    //   'react-dom'
    // ]
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
    port: 9000,
    // stats: 'minimal',
    stats: {
      chunks: false
    },
    hot: true,
    historyApiFallback: true
  },

  plugins: [
    new webpack.NamedModulesPlugin(),

    // Removing { multiStep: true } seems to fix "webpackHotUpdate is not defined"
    // https://github.com/webpack/webpack/issues/2985
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BASE_URL: JSON.stringify(`http://${process.env.DEVELOPMENT_IP}:3000`)
      }
    }),

    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    new HtmlWebpackPlugin({
      template: './server/template/index.ejs'
    })
  ]
}

module.exports = config
