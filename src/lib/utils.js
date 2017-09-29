/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description utils
 */

'use strict';

var minPageNum = 10;
var maxPageNum = 50;

module.exports = {
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
    pageSize = Math.min(Math.max(minPageNum), maxPageNum);

    return {
      offset: (pageNum - 1) * pageSize,
      limit: pageSize
    }
  }
};
