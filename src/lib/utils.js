/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description utils
 */

'use strict';

const minPageNum = 10;
const maxPageNum = 200;
const path = require('path');
const winston = require('winston');

winston.add(winston.transports.File, {filename: path.join(__dirname, '../../server.log')});
// https://github.com/winstonjs/winston#logging-levels
if (process.env.NODE_ENV === 'local') {
  winston.level = 'verbose';
} else {
  winston.level = 'warn';
}

module.exports = {
  /**
   * MySQL 分页参数生成器
   * @param pageNum
   * @param pageSize
   * @return {{offset: number, limit: number | *}}
   */
  pagination: function(pageNum, pageSize) {
    if (typeof pageNum !== 'number' || typeof pageSize !== 'number') {
      pageNum = +pageNum;
      pageSize = +pageSize;

      // 转型失败或者数值为 0
      if (!pageNum) {
        pageNum = 1;
      }
      if (!pageSize) {
        pageSize = 20;
      }
    }

    pageNum = Math.max(pageNum, 1);
    pageSize = Math.min(Math.max(minPageNum, pageSize), maxPageNum);

    return {
      offset: (pageNum - 1) * pageSize,
      limit: pageSize
    }
  },
  logger: winston,
  /**
   * a function that do nothing
   */
  no_op() {}
};
