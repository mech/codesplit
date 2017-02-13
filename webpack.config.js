const path = require('path')
const webpack = require('webpack')

const config = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },

  devtool: 'source-map',
  target: 'web',
  context: __dirname,

  entry: {
    vendor: [
      'react',
      'react-dom'
    ]
  },

  output: {
    filename: 'js/[name]-[hash:8].js',
    path: path.join(__dirname, 'server/public'),
    publicPath: '/',
    pathinfo: true
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

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin({ multiStep: true }),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
}

module.exports = config
