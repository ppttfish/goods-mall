const path = require('path')
function reslove (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets', reslove('src/assets'))
      .set('style', reslove('src/assets/styles'))
  }
}
