const path = require("path");
const fs = require("fs");
const htmlWebpackPlugin = require("html-webpack-plugin");
const entryFilePath = path.resolve(__dirname, "../src/entry");
const entryFilesName = getFileName(entryFilePath);

function getFileName(dirPath) {
  let files = fs.readdirSync(dirPath);
  console.log("fiels,,", files);
  let fileNames = [];
  let length = files.length;
  for (let i = 0; i < length; i++) {
    let fileItem = files[i];
    let state = fs.statSync(`${dirPath}/${fileItem}`);
    if (state.isFile()) {
      fileNames.push(path.basename(fileItem, path.extname(fileItem)));
    }
  }
  console.log("fileNames::", fileNames);
  return fileNames;
}
function getHtmlTempContent(title) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>${title}</title>
    </head>
    <body>
      <div id="app"></div>
    </body>
  </html>  
  `;
}
exports.getEntrys = () => {
  let entrys = {};
  entryFilesName.forEach(v => {
    entrys[v] = path.resolve(entryFilePath, v + ".js");
  });
  return entrys;
};
exports.getHtmlWebpackPlugin = () => {
  let htmlArr = [];
  entryFilesName.forEach(v => {
    let item = new htmlWebpackPlugin({
      templateContent: getHtmlTempContent("webpack"),
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        removeTagWhitespace: true
      },
      chunks: [v],
      filename: `./html/${v}.html`
    });
    htmlArr.push(item);
  });
  return htmlArr;
};
