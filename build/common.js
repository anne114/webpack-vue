const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { getEntrys, getHtmlWebpackPlugin } = require("./utils");
module.exports = {
  entry: getEntrys(),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[chunkhash:8].js",
    chunkFilename: "js/[name].[chunkhash:8].js"
  },
  resolve: {
    extensions: [".js", ".vue", ".scss"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      {
        test: /\.(png|jpg|jif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              name: "images/[name].[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: ["css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              name: "fonts/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [...getHtmlWebpackPlugin(), new VueLoaderPlugin()]
};
