

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
//webpack.prod.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const CompressionPlugin = require("compression-webpack-plugin");
//webpack.prod.js
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin(),
    new CompressionPlugin()
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
})