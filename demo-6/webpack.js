const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'sample-app', 'index.js'),
  output: {
    path: 'static',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      {
        test: /\.css?$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          allChunks: true
        })
      }
    ]
  },
  plugins: [
    new SWPrecacheWebpackPlugin({
      stripPrefix: 'static'
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
};
