const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();

const CLT_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [`${SRC_DIR}/index.js`],
  devServer: {
    historyApiFallback: true,
    // host: '0.0.0.0',
    compress: true,
    port: 8000,
    contentBase: './build',
  },
  output: {
    path: `${CLT_DIR}/app`,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};

