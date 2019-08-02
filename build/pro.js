const webpackMerge = require("webpack-merge");
const commonJs = require("./common.js");
module.exports = webpackMerge(commonJs, {
  output: {
    publicPath: "/"
  }
});
