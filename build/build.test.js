const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const buildCommon = require("./build.common.js");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = webpackMerge(buildCommon, {
  output: {
    publicPath: "https://static.xiongmaozhanggui.com/cdn/",
    filename: "js/[name].[contenthash:8].js"
  },
  plugins: [
    new CopyWebpackPlugin(["public/**"]),
    new webpack.DefinePlugin({ ...require("../Config/config.pro.js") })
  ],
  optimization: {
    usedExports: false,
    minimize: false
  }
});
