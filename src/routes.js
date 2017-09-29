/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description configAPIRoutes
 */

'use strict';

const listController = require('./controllers/list');

module.exports = function(app, router) {
  router.get('/list', listController.list);
};
