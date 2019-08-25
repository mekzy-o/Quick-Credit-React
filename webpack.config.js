const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    compress: true,
    port: 8081,
    contentBase: './dist',
  },
  devtool:'inline-source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js"
  },
  //For transforming our JSX and ES6 into normal JS
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  mode: "development",
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname + "/src/index.html")
    })
  ]
};
