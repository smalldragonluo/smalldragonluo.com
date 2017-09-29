/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description list
 */

'use strict';

const utils = require('../lib/utils');
const content = require('../services/models/content');

module.exports = {
  getList: function(queries) {
    return content.findAll(Object.assign({
      order: [
        ['createdAt', 'DESC']
      ],
      plain: false
    }, utils.pagination(queries.pageNum, queries.pageSize)));
  },
  addContent: function(queries) {
    queries.createdAt = new Date();
    return content.create(queries);
  }
};
