var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./config').dev.options.variables;
var src = config.src;
var dest = config.dist;

var entry = {
  bundle: path.join(__dirname, src, 'index.js')
};
var cssLoaders = ['style', 'css']

var styleLoaders = [
  {
    test: /\.scss$/,
    loaders: cssLoaders.concat([
      'sass?includePaths[]=' + require('lego').includePath
    ])
  },
  {
    test: /\.css$/,
    loaders: cssLoaders
  }
];

styleLoaders = styleLoaders.map(function(loaderO) {
  return {
    test: loaderO.test,
    loader: ExtractTextPlugin.extract(loaderO.loaders.slice(1).join('!'))
  }
});

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
    loaders: styleLoaders
  },
  plugins: [
    new ExtractTextPlugin('main.css', {
        allChunks: true
    })
  ],
  devtool: 'eval',
};
