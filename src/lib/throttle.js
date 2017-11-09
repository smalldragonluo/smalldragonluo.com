/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description throttle
 */

'use strict';

/**
 * 执行数据缓存
 * @param fn 执行方法
 * @param keyGenerator 命中判断，其返回一个代表唯一缓存的 key
 * @param interval 缓存时间（针对所有的 cache 而不是对应的 key 单独计时）
 * @param context 上下文
 * @returns {Function}
 * @constructor
 */
function Throttle(fn, keyGenerator, interval, context) {
  const self = this;

  // {
  //   key: data
  // }
  this.cache = {};
  this.lastInvokedTime = null;

  return function() {
    const key = keyGenerator.apply(null, arguments);

    if (Date.now() - self.lastInvokedTime < interval && self.cache[key]) {
      return self.cache[key];
    } else {
      self.lastInvokedTime = Date.now();
      return self.cache[key] = fn.apply(context, arguments);
    }
  }
}

module.exports = Throttle;
