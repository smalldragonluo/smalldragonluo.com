/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description list
 */

'use strict';

const utils = require('../lib/utils');
const Throttle = require('../lib/throttle');
const user = require('../services/models/user');
const content = require('../services/models/content');
// const Sequelize = require('sequelize');

// 创建关联关系
require('../db/index');

/**
 * 获取内容
 * @param queries
 * @returns {Promise}
 */
module.exports.getList = function getList(queries) {
  return content.findAll(Object.assign({
    order: [
      ['createdAt', 'DESC']
    ],
    include: [user]
  }, utils.pagination(queries.pageNum, queries.pageSize)));
};
/**
 * 增加了缓存
 * @type {Throttle}
 */
module.exports.getListCache = new Throttle(module.exports.getList, function(queries) {
  return `${queries.pageNum}-${queries.pageSize}`;
}, 10000);
/**
 * 增加内容
 * @param queries
 * @returns {Promise}
 */
module.exports.addContent = function(queries) {
  queries.createdAt = new Date();
  return content.create(queries);
};
