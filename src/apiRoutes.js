/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description configAPIRoutes
 */

'use strict';

const listController = require('./controllers/list');
const userController = require('./controllers/user');
const clipboardController = require('./controllers/clipboard');

module.exports = function(app, router) {
  router.get('/list', listController.list);
  router.get('/user', userController.user);
  router.post('/login', userController.login);
  router.get('/logout', userController.logout);
  router.get('/clipboard/query', clipboardController.queryContent);
  router.post('/clipboard/update', clipboardController.updateContent);
};
