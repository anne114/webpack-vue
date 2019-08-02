const env = process.env.NODE_ENV;
if (env === "production") {
  module.exports = require("./build/pro");
} else if (env === "test") {
  module.exports = require("./build/test");
} else {
  module.exports = require("./build/dev");
}
// const path = require("path");
// module.exports = {
//   entry: "./src/entry/index.js",
//   output: {
//     path: path.resolve(__dirname, "../dist"),
//     // publicPath: '/omc/',
//     filename: "js/[name].[chunkhash].js",
//     chunkFilename: "js/[name].[chunkhash].js"
//   },
//   module: {}
// };
