// /**
//  * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
//  * @description stock
//  */
//
// 'use strict';
//
// const utils = require('./lib/utils');
// const {FCoin, BitForex} = require('./services/stock');
// const kvService = require('./services/kvPair');
//
// module.exports = function(app, io) {
//   (async function() {
//     // // key & secret config
//     // let fcoinConfig = await kvService.getById(1);
//     //
//     // try {
//     //   fcoinConfig = JSON.parse(fcoinConfig.value);
//     // } catch (e) {
//     //   utils.logger.error(e.stack);
//     //   return;
//     // }
//     //
//     // const coin = new BitForex({
//     //   key: fcoinConfig.key,
//     //   secret: fcoinConfig.secret
//     // });
//     //
//     // // await coin.ready();
//     //
//     // // set route
//     // app.get('/fcoin', function(req, res) {
//     //   res.render('fcoin', {});
//     // });
//     // app.get('/bitforex', function(req, res) {
//     //   res.render('bitforex', {});
//     // });
//     //
//     // io.on('connection', function(socket) {
//     //   // clientSockets.push(socket);
//     //   socket.emit('connect', {message: 'connected'});
//     //
//     //   coin.subscribeStockQuotation(stockQuotationCallback);
//     //
//     //   socket.on('buy', function(options) {
//     //     coin.buy(options);
//     //   });
//     //   socket.on('disconnect', function() {
//     //     utils.logger.warn('client user disconnected');
//     //
//     //     coin.removeListener('stockQuotation', stockQuotationCallback);
//     //   });
//     //
//     //   function stockQuotationCallback(data) {
//     //     if (socket.connected) {
//     //       socket.emit('quotation', data);
//     //     }
//     //   }
//     // });
//
//
//
//     // key & secret config
//     let bitforexConfig = await kvService.getById(2);
//
//     try {
//       bitforexConfig = JSON.parse(bitforexConfig.value);
//     } catch (e) {
//       utils.logger.error(e.stack);
//       return;
//     }
//
//     const coin = new BitForex({
//       key: bitforexConfig.key,
//       secret: bitforexConfig.secret
//     });
//
//     coin.on('error', function(err) {
//       utils.logger.error('stock service error:', err.stack);
//     });
//
//     // await coin.ready();
//
//     // set route
//     app.get('/bitforex', function(req, res) {
//       res.render('bitforex', {});
//     });
//
//     io.on('connection', function(socket) {
//       socket.emit('connect', {message: 'connected'});
//
//       // subscribe quotation
//       coin.subscribeStockQuotation(function(data) {
//         if (socket.connected) {
//           socket.emit('quotation', data);
//         }
//       });
//
//       // listen symbol action
//       socket.on('symbol', function(options) {
//         coin.symbol(options, (result) => {
//           socket.emit('symbolResult', result);
//         });
//       });
//
//       // listen buy action
//       socket.on('buy', function(options) {
//         coin.buy(options, (result) => {
//           socket.emit('buyResult', result);
//         });
//       });
//
//       // listen fund1 action
//       socket.on('fund1', function(options) {
//         coin.fund1(options, (result) => {
//           socket.emit('fund1Result', result);
//         });
//       });
//
//       // listen fund action
//       socket.on('fund', function(options) {
//         coin.fund(options, (result) => {
//           socket.emit('fundResult', result);
//         });
//       });
//
//       // listen history action
//       socket.on('history', function(options) {
//         coin.history(options, (result) => {
//           socket.emit('historyResult', result);
//         });
//       });
//
//       // disconnected
//       socket.on('disconnect', function() {
//         utils.logger.warn('client user disconnected');
//       });
//     });
//   })().catch(function(err) {
//     utils.logger.error('stock service error:', err.stack);
//   });
// };
