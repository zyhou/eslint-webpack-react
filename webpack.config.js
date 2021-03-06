var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    javascript: './app/index.js',
    html: './index.html'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './app/index.js'
  },
  module: {
    preLoaders: [
      { 
        test: /\.js?$/, 
        loader: 'eslint', 
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/ }
    ],
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc',
    failOnWarning: false,
    failOnError: true
  },
  devServer: {
    historyApiFallback: true
  }
};