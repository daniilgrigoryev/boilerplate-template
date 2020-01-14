const webpack = require('webpack')

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, argv) => {
  const isProduction = argv.mode.indexOf('production') !== -1 // npm run build -> webpack --mode=production

  console.log(isProduction, argv.mode)

  return {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: isProduction ? undefined : '/assets/',
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
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|otf|svg|svgz)(\?.+)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 64,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
      extensions: ['*', '.js', '.jsx', '.css'],
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all', // include all types of chunks
    //   },
    // },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        hash: true,
        template: require('html-webpack-template'),
        appMountId: 'app',
        title: 'React APP',
        myPageHeader: 'Hello World',
        meta: {
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },
      }),
    ],
  }
}
