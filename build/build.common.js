const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const {
  getEntrys,
  getHtmlWebpackPlugin
} = require("./build.utils.js");
module.exports = {
  entry: getEntrys(),
  output: {
    path: path.resolve(__dirname, "../dist")
  },
  resolve: {
    extensions: [".js", ".vue", ".scss"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      utilsJs: "@/common/js/utils.js"
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      {
        test: /\.(png|jpg|jif)$/,
        use: [{
            loader: "url-loader",
            options: {
              esModule: false,
              limit: 10240,
              name: "images/[name].[contenthash:8].[ext]"
            }
          },
          {
            loader: "image-webpack-loader", // 压缩图片
            options: {
              bypassOnDebug: true
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 10240,
            name: "fonts/[name].[contenthash:8].[ext]"
          }
        }]
      },
      {
        test: /\.(js|vue)$/,
        use: {
          loader: "eslint-loader"
        }
      }
    ]
  },
  plugins: [
    ...getHtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css"
    })
  ],
  optimization: {
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       chunks: "all", // initial表示提取入口文件的公共部分
    //       minChunks: 2, // 表示提取公共部分最少的文件数
    //       minSize: 0, // 表示提取公共部分最小的大小
    //       name: "commons" // 提取出来的文件命名
    //     }
    //   }
    // }
    splitChunks: {
      chunks: "all",
      minSize: 0,
      name: "commons"
    }
  }
};