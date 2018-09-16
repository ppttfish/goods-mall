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
      .set('components', reslove('src/components'))
  },
  // 代理端口，解决跨域问题
  devServer: {
    proxy: {
      '/item': {
        target: 'http://localhost:3000/item'
      }
    }
  }
}
