/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description utils
 */

'use strict';

const minPageSize = 10;
const maxPageSize = 200;
const path = require('path');
const winston = require('winston');

winston.add(winston.transports.File, {filename: path.join(__dirname, '../../server.log')});
// https://github.com/winstonjs/winston#logging-levels
if (process.env.NODE_ENV === 'development') {
  winston.level = 'verbose';
} else {
  winston.level = 'info';
}

module.exports = {
  /**
   * MySQL 分页参数生成器
   * @param startPage
   * @param pageSize
   * @return {{offset: number, limit: number | *}}
   */
  pagination: function(startPage, pageSize) {
    if (typeof startPage !== 'number' || typeof pageSize !== 'number') {
      startPage = +startPage;
      pageSize = +pageSize;

      // 转型失败或者数值为 0
      if (!startPage) {
        startPage = 1;
      }
      if (!pageSize) {
        pageSize = 20;
      }
    }

    startPage = Math.max(startPage, 1);
    pageSize = Math.min(Math.max(minPageSize, pageSize), maxPageSize);

    return {
      offset: (startPage - 1) * pageSize,
      limit: pageSize
    }
  },
  logger: winston,
  /**
   * a function that do nothing
   */
  no_op() {}
};
