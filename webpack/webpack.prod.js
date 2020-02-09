const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = merge(common, {
  mode: 'production',
  output: {
    // Do we need unique name for output file?
    // filename: 'assets/js/[name].[contentHash].js',
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, '../build')
  }
})
