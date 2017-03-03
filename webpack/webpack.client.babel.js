import path from 'path';
import AssetsPlugin from 'assets-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import webpack from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import common from './common';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  name: 'client',
  entry: {
    client: [
      ...!isProduction && ['webpack-hot-middleware/client', 'react-hot-loader/patch'],
      './client',
    ],
  },
  output: {
    filename: `js/[name]${isProduction ? '.[chunkhash:8]' : ''}.js`,
    path: common.output.path,
    publicPath: common.output.publicPath,
  },
  module: {
    rules: [
      ...common.module.rules,
      {
        enforce: 'pre',
        test: /\.jsx$|\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader'
          }
        ],
      },
      {
        test: /\.(eot|gif|jpe?g|otf|png|svg|webp|woff|woff2?|ttf)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: `media/[name]${isProduction ? '.[hash:8]' : ''}.[ext]`,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss', '.css'],
    modules: [
      'node_modules',
      'client',
      'assets',
    ],
  },
  plugins: [
    ...common.plugins,
    ...isProduction ? [
      new webpack.IgnorePlugin(/(redux-logger|react-hot-loader)/),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        minRatio: 0.8
      })
    ] : [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),
    new WebpackMd5Hash(),
  ],
  bail: isProduction,
};
