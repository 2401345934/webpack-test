

const { merge } = require("webpack-merge");
const path = require('path')
const common = require("./webpack.common.js");
const env = require("./dev.env");

const webpack = require("webpack")

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 9999,
    hot: true, //热更新
    open: true, //编译完自动打开浏览器
    compress: true, //开启gzip压缩
    static: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": env,
    }),
  ],
})