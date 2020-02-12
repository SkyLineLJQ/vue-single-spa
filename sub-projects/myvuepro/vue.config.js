const webpackConfig = require('./webpack.config');

module.exports = {
  publicPath: "//127.0.0.1:9090/",
  // css在所有环境下，都不单独打包为文件。这样是为了保证最小引入（只引入js）
  css: {
    extract: false
  },
  configureWebpack: webpackConfig,
  devServer: {
    // 单独子项目的配置
    contentBase: './',
    compress: true,
    before: app => {

    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
};
