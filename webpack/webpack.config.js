'use strict';

var path = require('path');
var webpack = require('webpack');

var PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.join(__dirname, '../app'),
  entry: {
    babel: ['babel-polyfill'],
    app: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      './index.jsx'
    ],
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'react-router-redux', 'axios'],
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(PRODUCTION),
      SERVER_URL: JSON.stringify('http://api-dev.thecargosite.com')
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
        loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[local]"
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
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
  node: {
    fs: 'empty'
  },
  devtool: 'source-map',
  devServer: {
    progress: true,
    colors: true,
    hot: true
  }
};
