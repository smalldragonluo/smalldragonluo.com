/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description kvPair
 */

'use strict';

// const utils = require('../lib/utils');
const kvPair = require('../services/models/kvPair');

// 创建关联关系
require('../db/index');

module.exports = {
  getKVById: function(id) {
    return kvPair.findById(id);
  }
};
