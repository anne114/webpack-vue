const webpackMerge = require("webpack-merge");
const path = require("path");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const commonJs = require("./common.js");
module.exports = webpackMerge(commonJs, {
  mode: "development",
  output: {
    filename: "js/[name].js"
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    // host:'',
    port: '8888',
    https: true,
    open: true,
    openPage: 'html/index.html'
  }
});