/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description session
 */

'use strict';

const utils = require('../lib/utils');

module.exports = function(req, resp, next) {
  utils.logger.verbose('GET', req.originalUrl);
  next();
};