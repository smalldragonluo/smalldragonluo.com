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
  getById(id) {
    return kvPair.findById(id);
  },
  getByKey(key) {
    return kvPair.find({
      where: {
        key: key
      }
    });
  },
  async getObjectByKey(key) {
    let kv = await this.getByKey(key);

    try {
      return JSON.parse(kv.value);
    } catch (e) {
      throw new Error(`value 解析失败， key: ${kv.key}`);
    }
  }
};
