/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description fcoin
 */

'use strict';

const utils = require('../lib/utils');
const WebSocket = require('ws');
const EventEmitter = require('events');

class Stock extends EventEmitter {
  constructor(options) {
    super();
    this.options = options;
    this.ws = new WebSocket(options.wsURL);
    this.ws.on('open', () => {
      utils.logger.info(`${options.name} socket opened`);
      this.emit('ready');
      // ready status
      this.status = 1;
    });
    this.ws.on('message', this._handleMessage.bind(this));
    this.ws.on('close', () => {
      utils.logger.error(`${options.name} socket closed`);
      this.emit('error', 'socket closed');
    });
  }

  ready() {
    return new Promise((resolve) => {
      if (this.status === 1) {
        resolve();
      } else {
        this.on('ready', resolve);
      }
    });
  }

  _handleMessage(data) {
    try {
      data = JSON.parse(data);
    } catch (e) {
      utils.logger.warn('fcoin socket data parse failed', data);
    }

    this.emit('data', data);
  }

  /**
   * send json string message to ws
   * @param data
   */
  sendMessage(data) {
    if (typeof data === 'object') {
      this.ws.send(JSON.stringify(data));
    } else {
      this.ws.send(data);
    }
  }
}

class FCoin extends Stock {
  constructor(options) {
    super({...options, name: 'fcoin', wsURL: 'wss://api.fcoin.com/v2/ws'});
    this.on('data', this._routeMessage.bind(this));
  }

  /**
   * 订阅行情
   * @param callback
   */
  subscribeStockQuotation(callback) {
    if (!this.subTicker) {
      this.sendMessage({cmd: 'sub', args: ['ticker.btcusdt'], id: '1'});
      this.subTicker = true;
    }

    if (this.lastStockQuotation) {
      callback(this.lastStockQuotation);
    }

    this.on('stockQuotation', callback);
  }

  _routeMessage(data) {
    if (data.ticker) {
      this.emit('stockQuotation', data);
      this.lastStockQuotation = data;
    }
  }
}

module.exports = {
  FCoin
};
