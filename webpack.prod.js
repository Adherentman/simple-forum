const merge = require('webpack-merge');
const common = require('./webpack.common.js');

//生产环境
module.exports = merge(common, {
  //生产模式下为'source-map'
  devtool: 'source-map',
  mode: 'production',
});