const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rulesForStyles = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
}

const rulesForImages = {
  test: /\.(svg|png|jpg|gif)$/,
  type: 'asset/resource',
  generator: {
    filename: 'assets/img/[name][ext]'
  }
}

const rules = [rulesForStyles, rulesForImages] 

module.exports = {
  entry: './src/index.js', 
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  module: { rules },
  devtool: 'source-map',
  devServer: {
     open: true
  }
};
