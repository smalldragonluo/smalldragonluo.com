/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description configRoutes
 */

'use strict';

const listService = require('./services/list');
const wxService = require('./services/wx');
const clipboardService = require('./services/kvPair');
const {logger} = require('./lib/utils');

module.exports = function(app) {
  // page routes
  app.get('/', async function(req, res) {
    // let wx;
    //
    // try {
    //   wx = await wxService.getJSAPIConfig(req.protocol + '://' + req.get('host') + req.originalUrl);
    // } catch (e) {
    //   logger.error(e.stack);
    // }

    req.query.pageSize = 100;

    res.render('index', {
      title: '笑话大王',
      // list: await listService.getListCache(req.query),
      // wx: wx
    });
  });

  app.get('/test', function(req, res) {
    res.render('test', {});
  });

  app.get('/koala', function(req, res) {
    res.render('koala', {});
  });

  app.get('/about', function(req, res) {
    res.json({
      message: '敬请期待',
      data: new Date()
    });
  });

  app.get('/clipboard', async function(req, res) {
    res.render('clipboard', {
      title: '剪贴板',
      data: await clipboardService.getById(4),
    });
  });
};
