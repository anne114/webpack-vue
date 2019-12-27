const path = require("path");
const fs = require("fs");
const htmlWebpackPlugin = require("html-webpack-plugin");
const entryFilePath = path.resolve(__dirname, "../src/pages");
const entryFilesName = getFileName(entryFilePath);

function getFileName(dirPath) {
  let files = fs.readdirSync(dirPath);
  console.log("fiels,,", files);
  let fileNames = [];
  let length = files.length;
  for (let i = 0; i < length; i++) {
    let fileItem = files[i];
    let state = fs.statSync(`${dirPath}/${fileItem}`);
    if (!state.isFile()) {
      fileNames.push(fileItem);
    }
  }
  return fileNames;
}
exports.getEntrys = () => {
  let entrys = {};
  entryFilesName.forEach(v => {
    entrys[v] = path.resolve(entryFilePath, v + "/entry.js");
  });
  return entrys;
};
exports.getHtmlWebpackPlugin = () => {
  let htmlArray = [];
  entryFilesName.forEach(v => {
    let item = new htmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/template.html"),
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        removeTagWhitespace: true
      },
      chunks: [v, "commons"],
      filename: `./html/${v}.html`
    });
    htmlArray.push(item);
  });
  return htmlArray;
};
