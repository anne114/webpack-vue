const webpackMerge = require("webpack-merge");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const commonJs = require("./common.js");
module.exports = webpackMerge(commonJs, {
  output: {
    publicPath: "/"
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});