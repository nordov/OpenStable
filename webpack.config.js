const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // Tom - Added this to avoid fs module error, taken from: https://github.com/webpack-contrib/css-loader/issues/447
  node: {
    fs: 'empty'
  },
  mode: "development",
  entry: "./client/index.js",
  output: {
    path: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/index.html"
    })
  ]
};
