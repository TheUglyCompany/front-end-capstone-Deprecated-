const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
 entry: path.join(__dirname, 'client/src/index.jsx'),
 output: {
   path: path.join(__dirname, 'client/dist'),
   filename: 'bundle.js'
 },
  // webpack 5 comes with devServer which loads in development mode
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     }
   ]
 },
 resolve: {
  extensions: ['', '.js', '.jsx']
 },
 plugins: [new HtmlWebpackPlugin({ template: './client/dist/index.html' })]
}