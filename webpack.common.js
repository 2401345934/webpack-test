

const path = require('path')
// build html 文件
const htmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader'); // vue加载器

// 增加进度条 start
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");
// 增加进度条 end
module.exports = {
  entry: {
    react: path.join(__dirname, 'src', 'react.js'),
    main: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash:8].js",
    clean: true, //每次构建清除dist包
  },
  // 配置别名
  resolve: {
    extensions: [".js", ".jsx", ".json", ".vue"], //省略文件后缀
    alias: { //配置别名
      "@": path.resolve(__dirname, "./src"),
    },
  },
  module: {
    rules: [
      // 解析vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [path.resolve(__dirname, 'src')]
      },
      // 解析 js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          plugins: ["@babel/plugin-transform-runtime"]
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      // 解析 css scss sass
      {
        test: /\.(css|scss|sass)$/,
        use: ["style-loader", "css-loader", { loader: "postcss-loader", options: { postcssOptions: { plugins: ["autoprefixer"], }, }, }, 'sass-loader'],
      },


    ]
  },
  plugins: [
    // build html 文件
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    // 增加进度条 start
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
    }),
    // 解析vue loader
    new VueLoaderPlugin(),

  ],
  // cdn 引入 排除build
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter'
  }
}