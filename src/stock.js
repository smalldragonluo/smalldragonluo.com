/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description app
 */

'use strict';

const utils = require('./lib/utils');
const {FCoin} = require('./services/stock');
const kvService = require('./services/kvPair');
// const clientSockets = [];

module.exports = function(app, io) {
  (async function() {
    // key & secret config
    let fcoinConfig = await kvService.getKVById(1);

    try {
      fcoinConfig = JSON.parse(fcoinConfig.value);
    } catch (e) {
      utils.logger.error(e.stack);
      return;
    }

    const fc = new FCoin({
      key: fcoinConfig.key,
      secret: fcoinConfig.secret
    });

    await fc.ready();

    // set route
    app.get('/fcoin', function(req, res) {
      res.render('fcoin', {});
    });

    io.on('connection', function(socket) {
      // clientSockets.push(socket);
      socket.emit('connect', {message: 'connected'});

      fc.subscribeStockQuotation(stockQuotationCallback);

      socket.on('data', function(data) {
        console.log('received data:', data);
      });
      socket.on('disconnect', function() {
        utils.logger.warn('client user disconnected');

        fc.removeListener('stockQuotation', stockQuotationCallback);
      });

      function stockQuotationCallback(data) {
        if (socket.connected) {
          socket.emit('quotation', data);
        }
      }
    });
  })().catch(function(err) {
    utils.logger.error('stock service error:', err.stack);
  });
};
