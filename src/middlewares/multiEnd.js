/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description 自动分端渲染
 */

'use strict';

const fs = require('fs');
const path = require('path');
const {logger} = require('../lib/utils');
const cwd = process.cwd();

module.exports = function(req, resp, next) {
  const bakRenderer = resp.render;
  resp.render = function() {
    if (/pad|mobile/i.test(req.headers['user-agent'])) {
      if (fs.existsSync(path.join(cwd, this.app.settings.views, arguments[0] + '-mobile.xtpl'))) {
        arguments[0] = arguments[0] + '-mobile';
      } else {
        logger.warn('no mobile view find, use default view.');
      }
    }
    return bakRenderer.apply(this, arguments);
  };
  next();
};
