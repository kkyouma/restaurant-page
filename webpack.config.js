const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rulesForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const rules = [rulesForStyles]

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
  devServer: {
    open: true
  }
};
