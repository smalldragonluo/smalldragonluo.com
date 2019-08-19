/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description list
 */

'use strict';

const kvService = require('../services/kvPair');

module.exports = {
  queryContent: function(req, resp) {
    kvService.getById(4).then(function(data) {
      resp.json({
        success: true,
        data: data
      });
    }, function(err) {
      resp.json({
        success: false,
        message: err.stack
      });
    }).catch((err) => {
      console.log(err);
    });
  },
  updateContent: function(req, resp) {
    kvService.updateById(4, req.body.value).then(function(data) {
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
