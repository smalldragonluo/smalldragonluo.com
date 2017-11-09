/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description list
 */

'use strict';

const listService = require('../services/list');

module.exports = {
  list: function(req, resp) {
    listService.getListCache(req.query).then(function(data) {
      resp.json({
        success: true,
        data: data
      });
    }, function(err) {
      resp.json({
        success: false,
        message: err.stack
      });
    });
  },
  addContent: function(req, resp) {
    if (!req.query.content) {
      throw new Error('内容不能为空');
    }

    listService.addContent(req.query).then(function(data) {
      resp.json({
        success: true,
        data: data
      });
    }, function(err) {
      resp.json({
        success: false,
        message: err.stack
      });
    });
  }
};
