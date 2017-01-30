'use strict';

require('babel-polyfill');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CompressionPlugin = require('compression-webpack-plugin');

var PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.join(__dirname, '../app'),
  entry: {
    babel: ['babel-polyfill'],
    app: './index.jsx',
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'react-router-redux', 'axios']
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(PRODUCTION),
      SERVER_URL: JSON.stringify('http://api.thecargosite.com')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // names: ['vendor2', 'vendor1'],
      names: 'vendor',
      filename: '[name].js'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  module: {
    // webpack can only handle JavaScript natively, so we need the loader to process different types
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        exclude: /bundle\.js$/
      }
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test   : /\.woff/,
        loader : 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
      },
      {
        test   : /\.ttf/,
        loader : 'file?prefix=font/'
      },
      {
        test   : /\.eot/,
        loader : 'file?prefix=font/'
      },
      {
        test   : /\.svg/,
        loader : 'file?prefix=font/'
      },
      {
        test   : /\.otf/,
        loader : 'file?prefix=font/'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192&name=images/[hash:12].[ext]'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname, '../app'),
      path.resolve(__dirname, '../assets'),
      path.resolve(__dirname, '../client'),
      path.resolve(__dirname, '../node_modules')
    ],
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  },
  devServer: {
    progress: true,
    colors: true
  }
};
