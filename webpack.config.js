const webpack = require('webpack')

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, argv) => {
  const dev = argv.mode === 'development' ? true : false

  return {
    node: {
      fs: 'empty',
    },
    mode: 'none',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: dev ? '[name].js' : '[name].[hash].js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      hot: true,
      inline: true,
      overlay: {
        warnings: true,
        errors: true,
      },
    },
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'url-loader?limit=1&name=images/[name].[ext]',
        },
        {
          test: /\.svg$/,
          loader: 'svg-url-loader',
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          loader: 'url-loader?limit=1000000&name=src/fonts/[name].[ext]',
        },
      ],
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
      extensions: ['*', '.js', '.jsx', '.css'],
    },
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            parallel: true,
            output: {
              comments: false,
            },
          },
        }),
      ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  }
}
