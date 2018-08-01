/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description PollingRequest
 */

'use strict';

const request = require('request');
const {logger, no_op} = require('./utils');
const defaultOptions = {
  interval: 5000
};

module.exports = class PollingRequest {
  /**
   * 构造函数
   * @param {Object} params for request
   * @param {Object} options
   * @param {String} options.interval 轮询间隔
   * @param {Boolean} options.stopOnError 是否错误取消
   * @param callback
   */
  constructor(params, options, callback) {
    this.params = params;
    this.options = Object.assign(defaultOptions, options);
    this.callback = callback || no_op;
    this.polling();
  }

  /**
   * 间隔发起请求，无论成功或失败
   */
  polling() {
    request(this.params, (error, response, body) => {
      if (error) {
        logger.error(error.stack);
        this.callback(error);
        // 如果错误停止轮询
        if (this.options.stopOnError) {
          return;
        }
      } else {
        this.callback(body);
      }

      setTimeout(() => {
        if (this.status !== -1) {
          this.polling();
        }
      }, this.options.interval);
    });
  }

  /**
   * 取消轮询
   */
  cancelpolling() {
    this.status = -1;
  }
};
