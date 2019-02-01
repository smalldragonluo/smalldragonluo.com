/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description 配置中间件
 */

'use strict';

const session = require('express-session');

module.exports = function(app) {
  // 分端渲染
  app.use(require('./multiEnd'));

  // CORS（API and local assets, online assets we use nginx）
  app.use(function(req, res, next) {
    if (req.headers.origin && req.headers.origin.match(/^https:\/\/blog.smalldragonluo.com/)) {
      res.header('Access-Control-Allow-Origin', 'https://blog.smalldragonluo.com/');
      res.header('Access-Control-Expose-Headers', 'Content-Length');
      res.header('Access-Control-Allow-Headers', 'range');
    }
    next();
  });

  // session
  // app.use(require('./wxSession'));
  // https://expressjs.com/en/resources/middleware/session.html
  app.use(session({
    name: 'sid',
    secret: 'now you see my secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      path: '/',
      httpOnly: true,
      secure: app.get('env') === 'production',
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: 'lax'
    }
  }));

  // access log
  app.use(require('./accessLog'));
};
