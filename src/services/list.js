/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description list
 */

'use strict';

const utils = require('../lib/utils');
const user = require('../services/models/user');
const content = require('../services/models/content');
// const Sequelize = require('sequelize');

// 创建关联关系
require('../db/index');

module.exports = {
  getList: function(queries) {
    return content.findAll(Object.assign({
      order: [
        ['createdAt', 'DESC']
      ],
      include: [user]
    }, utils.pagination(queries.pageNum, queries.pageSize)));
  },
  addContent: function(queries) {
    queries.createdAt = new Date();
    return content.create(queries);
  }
};
