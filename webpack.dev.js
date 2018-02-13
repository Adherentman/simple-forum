const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

//开发环境
const devConfig = merge(common, {
  devtool: 'inline-source-map',
  //开发中Server
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "./dist"),
  },
});

module.exports = devConfig;