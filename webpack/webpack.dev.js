const path = require('path');
const common = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'assets/js/[name].bundle.js',
    path: path.resolve(__dirname, "../build")
  }
})
