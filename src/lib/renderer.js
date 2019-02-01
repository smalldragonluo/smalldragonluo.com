/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description utils
 */

'use strict';

const xtemplate = require('xtemplate');

module.exports = function(app) {
  // 自定义模板命令
  xtemplate.addCommand('json', function(scope, option) {
    return JSON.stringify(option.params[0]);
  });

  app.set('views', './src/views');
  app.set('view engine', 'xtpl');
};
