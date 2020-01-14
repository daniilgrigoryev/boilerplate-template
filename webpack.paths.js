const path = require('path')

module.exports = {
  root: path.resolve(__dirname, './'),
  entryPath: path.resolve(__dirname, './', 'src/index.js'),
  outputPath: path.resolve(__dirname, './', 'build'),
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  // favicon: path.resolve(__dirname, '../', 'src/assets/images/favicon.ico'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
}
