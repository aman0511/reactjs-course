'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '../app'),
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      './index.jsx'
    ],
    vendor: ['react', 'redux', 'react-redux', 'react-router', 'react-router-redux']
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[hash].[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
          NODE_ENV: JSON.stringify(true)
      }
    }),
    new HtmlWebpackPlugin({
      template: './../server/views/index.jade'
    }),
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */"vendor",
      /* filename= */"[hash].[name].js"
    )
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
        loader: "style-loader!css-loader"
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
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader'
      }
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname, '../app'),
      path.resolve(__dirname, '../client'),
      path.resolve(__dirname, '../node_modules')
    ],
    extensions: ['', '.js', '.jsx']
  },
  node: {
    fs: "empty"
  },
  devtool: 'source-map',
  devServer: {
    colors: true,
    hot: true
  }
};