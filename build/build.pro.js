const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const buildCommon = require("./build.common.js");
module.exports = webpackMerge(buildCommon, {
  mode: "production",
  output: {
    publicPath: "https://static.xiongmaozhanggui.com/cdn/",
    filename: "js/[name].[contenthash:8].js"
  },
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new CopyWebpackPlugin(["public/**"]),
    new OptimizeCssAssetsWebpackPlugin(),
    new webpack.DefinePlugin(...require("../Config/config.pro.js"))
  ]
});
