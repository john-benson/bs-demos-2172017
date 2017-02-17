const webpack = require('webpack');

const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'sample-app', 'index.js'),
  output: {
    path: 'static',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ "style-loader", "css-loader" ] }
    ]
  }
};
