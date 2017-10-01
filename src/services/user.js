/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description list
 */

'use strict';

// const utils = require('../lib/utils');
const user = require('../services/models/user');
// const Sequelize = require('sequelize');

// 创建关联关系
require('../db/index');

module.exports = {
  getUser: function(queries) {
    return user.findOne(queries);
  },
  addUser: function(queries) {
    queries.createdAt = new Date();
    return user.create(queries);
  },
  updateUser: function(queries, option) {
    queries.updatedAt = new Date();
    return user.update(queries, option);
  }
};
