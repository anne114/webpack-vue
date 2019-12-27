const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const BuildCommon = require("./build.common.js");
module.exports = webpackMerge(BuildCommon, {
  mode: "development",
  output: {
    publicPath: "/",
    filename: "js/[name].js"
  },
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    // host:'',
    port: "8888",
    // https: true,
    open: true,
    openPage: "html/main.html"
  },
  plugins: [
    new webpack.DefinePlugin({
      ...require("../Config/config.dev.js")
    })
  ]
});
