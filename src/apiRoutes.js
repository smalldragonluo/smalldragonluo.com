/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description configAPIRoutes
 */

'use strict';

const listController = require('./controllers/list');
const userController = require('./controllers/user');

module.exports = function(app, router) {
  router.get('/list', listController.list);
  router.get('/user', userController.user);
  router.post('/login', userController.login);
  router.get('/logout', userController.logout);
};
