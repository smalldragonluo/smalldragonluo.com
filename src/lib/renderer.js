/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description utils
 */

'use strict';

const xtemplate = require('xtemplate');
const ENV = process.env.NODE_ENV;

module.exports = function(app) {
  // 自定义模板命令
  xtemplate.addCommand('json', function(scope, option) {
    return JSON.stringify(option.params[0]);
  });
  xtemplate.addCommand('assets', function(scope, option) {
    return ENV === 'development' ? option.params[0] : `https://cdn.smalldragonluo.com${option.params[0]}`;
  });

  app.set('views', './src/views');
  app.set('view engine', 'xtpl');
};
