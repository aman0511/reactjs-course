import path from 'path';
import webpack from 'webpack';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    srcPath: path.resolve(__dirname, '../client'),
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: !isProduction,
              plugins: isProduction && [
                'transform-react-remove-prop-types',
              ],
              presets: [
                ['es2015', { modules: false }],
                'react',
              ],
            },
          },
        ],
      },
      {
        test: /\.css?$/,
        use: [
          "style-loader/useable",
          {
            loader: "css-loader",
            options: {
              // This breaks HMR (CSS Modules change name because their hash changes)
              modules: false,
              localIdentName: '[local]_[hash:base64:7]',
              // This breaks background-image and other relative paths
              // Monitor this: https://github.com/webpack/style-loader/pull/124
              // sourceMap: DEV,
              sourceMap: false,
              import: false,
              url: false,
              // CSSNano Options
              minimize: {
                // safe: true,
                colormin: false,
                calc: false,
                zindex: false,
                discardComments: {
                  removeAll: true
                }
              },
            },
          },
        ]
      },
      {
        test: /\.scss?$/,
        use: [
          "style-loader/useable",
          {
            loader: "css-loader",
            options: {
              // This breaks HMR (CSS Modules change name because their hash changes)
              modules: false,
              localIdentName: '[local]_[hash:base64:7]',
              // This breaks background-image and other relative paths
              // Monitor this: https://github.com/webpack/style-loader/pull/124
              // sourceMap: DEV,
              sourceMap: false,
              import: false,
              url: false,
              // CSSNano Options
              minimize: {
                // safe: true,
                colormin: false,
                calc: false,
                zindex: false,
                discardComments: {
                  removeAll: true
                }
              },
            },
          },
          "postcss-loader",
          {
            loader: 'sass-loader',
            query: {
              sourceMap: false,
              sourceComments: false,
              outputStyle: 'expanded',
              precision: 6
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: isProduction,
      debug: false,
    }),
    ...isProduction && [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
        },
        comments: false,
      }),
    ],
  ],
};
