const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')

const config = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },

  devtool: 'cheap-module-source-map',
  target: 'web',
  context: __dirname,
  bail: true, // Abort immediately

  performance: {
    hints: 'error' // It is an error if you have performance issues
  },

  entry: {
    app: [
      // 'babel-polyfill',
      './app/index.jsx'
    ]
    // vendor: [
    //   'react',
    //   'react-dom'
    // ]
  },

  output: {
    filename: 'js/[name]-[chunkhash:8].js',
    chunkFilename: 'js/[name]-[chunkhash:8].js',
    path: path.join(__dirname, 'server/public'),
    publicPath: '/',
    pathinfo: false // Don't need comment for production mode
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
    // Make deterministic build by using names instead of module id
    // but can be a security risk as it reveal paths
    new webpack.NamedModulesPlugin(),

    // New for Webpack 2
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production') // Dead-code elimination
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false,
        drop_console: true,
        drop_debugger: true
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity // Ensure no other module goes into the chunk (??)
    }),
    new HtmlWebpackPlugin({
      template: './server/template/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new InlineManifestWebpackPlugin()
  ],

  // Required in order for vendor chunkhash to stay consistent
  recordsPath: path.join(__dirname, '.webpack-records/recordsPath.json')
  // recordsPath: `${process.cwd()}/.webpack-records/records.json`
}

module.exports = config
