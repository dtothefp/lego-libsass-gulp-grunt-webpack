var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var loadersByExtension = require('./config/loaders-by-extension');
var config = require('./config').dev.options.variables;
var src = config.src;
var dest = config.dist;

var entry = {
  bundle: path.join(__dirname, src, 'index.js')
};

var stylesheetLoaders = {
  'scss': [
    'style-loader',
    'css-loader',
    'sass-loader?imagePath=~stylesheets/blocks&includePaths[]=' + require('lego').includePath
  ]
};

module.exports =  {
  entry: entry,
  output: {
    path: path.join(__dirname, dest),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: path.join(__dirname, src)
  },
  module: {
    loaders: loadersByExtension(stylesheetLoaders)
  },
  devtool: 'eval',
};
