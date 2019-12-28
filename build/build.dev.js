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
    // https: true,
    port: "8888",
    open: true,
    openPage: "html/main.html",
    proxy: {
      '/api': {
        target: 'http://www.xiongmaozhanggui.com',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      ...require("../Config/config.dev.js")
    })
  ]
});