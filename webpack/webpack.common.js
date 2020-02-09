const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function generateHtmlPlugins (templateDir) {
  // Read files in template directory
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]
    // Create new HTMLWebpackPlugin with options
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
    })
  })
}

const htmlPlugins = generateHtmlPlugins('../src/pages')

module.exports = {
  entry: {
    main: './src/index.js',
    template: './src/template.js'
  },
  module: {
    rules: [{
      test: /\.(css|scss)$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ],
    }, {
      // include images, manifest is json
      test: /\.(png|jpe?g|gif|svg|ico|json)$/i,
      loader: 'file-loader',
      options: {
        name: 'assets/images/[name].[ext]',
      },
    }, {
      test: /\.(woff|ttf)$/i,
      loader: 'file-loader',
      options: {
        name: 'assets/fonts/[name].[ext]',
      },
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: 'assets/css/[name].css'
      // filename option breaks down images
      // @TODO solve this to serve css inside assets/css folder
    })
  ]
  // We join our htmlPlugin array to the end
  // of our webpack plugins array.
  .concat(htmlPlugins)
};