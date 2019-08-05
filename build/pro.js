const webpackMerge = require("webpack-merge");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonJs = require("./common.js");
module.exports = webpackMerge(commonJs, {
  mode: "production",

  output: {
    publicPath: "/",
    filename: "js/[name].[chunkhash:8].js"
  },
  plugins: [

  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});