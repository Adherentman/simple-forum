const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

//开发环境
module.exports = merge(common, {
  devtool: 'inline-source-map',
  //开发中Server
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "./dist"),
  },
});