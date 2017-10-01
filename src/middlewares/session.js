/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description session
 */

'use strict';

// {
//   "session_key": "xxx",
//   "expires_in": 7200,
//   "openid": "xxx"
// }
const session = {};
const request = require('request');
const utils = require('../lib/utils');
const userService = require('../services/user');

/**
 * 去重冗余项，同一用户多次登录会产生多个 _code（这里作为 session id）
 * @param openid
 */
function removeSessionRedundancies(openid) {
  Object.keys(session).forEach(function(key) {
    if (session[key].openid === openid) {
      delete session[key];
    }
  });
}

module.exports = function(req, resp, next) {
  // prevent null point exception
  req.session = {};

  if (!req.query._code) {
    return next();
  }

  // _code 为 session id
  if (session[req.query._code]) {
    req.session = session[req.query._code];
    if (req.query._nickName !== req.session.userName || req.query._avatarUrl !== req.session.avatar) {
      // no op whether it succeeds or flops
      userService.updateUser({
        userName: req.query._nickName,
        avatar: req.query._avatarUrl
      }, {
        where: {
          openId: req.session.openId
        }
      });
    }
    next();
  } else {
    request({
      uri: 'https://api.weixin.qq.com/sns/jscode2session',
      method: 'GET',
      qs: {
        appid: 'wxccf8e04b4b75a451',
        secret: '7e0fe4fe31919b7fb4656817afbc2d68',
        js_code: req.query._code,
        grant_type: 'authorization_code'
      }
    }, function(err, response, body) {
      //正常返回的JSON数据包
      // {
      //   "openid": "OPENID",
      //   "session_key": "SESSIONKEY",
      //   "unionid": "UNIONID"
      // }
      //错误时返回JSON数据包(示例为Code无效)
      // {
      //   "errcode": 40029,
      //   "errmsg": "invalid code"
      // }
      if (err) {
        utils.logger.error('ERR!', err.stack);
        return next();
      }

      let loginInfo;

      try {
        loginInfo = JSON.parse(body);
      } catch (e) {
        utils.logger.error('ERR!', '解析微信登录信息失败：', body);
        return next();
      }

      if (loginInfo.errcode) {
        utils.logger.error('ERR!', loginInfo.errmsg);
        next();
      } else {
        userService.getUser({
          openId: loginInfo.openid
        }).then(function(user) {
          if (user) {
            removeSessionRedundancies(loginInfo.openid);
            req.session = session[req.query._code] = Object.assign(loginInfo, user.toJSON());
            next();
          } else {
            const userInfo = {
              openId: loginInfo.openid,
              userName: req.query._nickName,
              avatar: req.query._avatarUrl
            };

            userService.addUser(userInfo).then(() => {
              removeSessionRedundancies(loginInfo.openid);
              req.session = session[req.query._code] = Object.assign(loginInfo, userInfo);
              next();
            }, (err) => {
              utils.logger.error('ERR!', '添加用户失败：', err && err.stack);
              next();
            });
          }
        });
      }
    });
  }
};
