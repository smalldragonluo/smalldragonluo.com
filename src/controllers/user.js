/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description user
 */

'use strict';

const userService = require('../services/user');

module.exports = {
  login: function(req, resp) {
    const { userName, email } = req.body;

    if (!userName || !email) {
      resp.status(500).json({success: false});
    } else {
      userService.addUser({ userName, email }).then(() => {
        req.session.userInfo = { userName, email };
        req.session.save();
        resp.json({
          success: true,
          data: { userName, email }
        });
      }, (err) => {
        console.log(err);
      });
    }
  },
  logout: function(req, resp) {
    req.session.destroy();
    resp.json({
      success: true,
      data: null
    });
  },
  user: function(req, resp) {
    if (req.session.userInfo) {
      resp.json({
        success: true,
        data: req.session.userInfo
      });
    } else {
      resp.json({
        success: true,
        data: null
      });
    }
  },
};
