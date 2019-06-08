process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: 8008,
    disableHostCheck: true
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  }
}
