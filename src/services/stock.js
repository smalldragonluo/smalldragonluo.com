/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description fcoin
 */

'use strict';

const {logger} = require('../lib/utils');
const pollingRequest = require('../lib/pollingRequest');
const WebSocket = require('ws');
const EventEmitter = require('events');
const request = require('request');
const crypto = require('crypto');

class Stock extends EventEmitter {
  constructor(options) {
    super();
    this.options = options;
    this.ws = new WebSocket(options.wsURL);
    this.ws.on('open', () => {
      logger.info(`${options.name} socket opened`);
      this.emit('ready');
      // ready status
      this.status = 1;
    });
    this.ws.on('message', this._handleMessage.bind(this));
    this.ws.on('close', () => {
      logger.error(`${options.name} socket closed`);
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
      logger.warn('fcoin socket data parse failed', data);
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

class BitForex extends EventEmitter {
  constructor(options) {
    super();
    // this.apiURLPrefix = 'https://www.bitforex.com/api/v1';
    this.apiURLPrefix = 'https://cn.bitforex.com/api/v1';
    this.options = options;
    this._launchTicker();
  }

  /**
   * 订阅行情
   * @param callback
   */
  subscribeStockQuotation(callback) {
    if (this.lastStockQuotation) {
      callback(this.lastStockQuotation);
    }

    this.on('stockQuotation', callback);
  }

  symbol(options, callback) {
    logger.info('buy stock', options);
    request(this._generateParamsByAction('symbol', options), (error, response, body) => {
      logger.info('symbol result', body);
      try {
        callback(JSON.parse(body));
      } catch (e) {
        callback(e);
      }
    });
  }

  buy(options, callback) {
    logger.info('buy stock', options);
    request(this._generateParamsByAction('buy', options), (error, response, body) => {
      logger.info('buy stock result', body);
      try {
        callback(JSON.parse(body));
      } catch (e) {
        callback(e);
      }
    });
  }

  fund1(options, callback) {
    logger.info('fund1 info', options);
    request(this._generateParamsByAction('fund1', options), (error, response, body) => {
      logger.info('fund1 result', body);
      try {
        callback(JSON.parse(body));
      } catch (e) {
        callback(e);
      }
    });
  }

  fund(options, callback) {
    logger.info('fund info', options);
    request(this._generateParamsByAction('fund', options), (error, response, body) => {
      logger.info('fund result', body);
      try {
        callback(JSON.parse(body));
      } catch (e) {
        callback(e);
      }
    });
  }

  history(options, callback) {
    logger.info('history info', options);
    request(this._generateParamsByAction('history', options), (error, response, body) => {
      logger.info('history result', body);
      try {
        callback(JSON.parse(body));
      } catch (e) {
        callback(e);
      }
    });
  }

  /**
   * 启动行情监控
   * @private
   */
  _launchTicker() {
    new pollingRequest(this._generateParamsByAction('ticker'), {
      // 10s
      interval: 15000
    }, (result) => {
      if (result instanceof Error) {
        this.emit('error', result);
      } else {
        try {
          this.lastStockQuotation = JSON.parse(result);
        } catch (e) {
          this.emit('error', result);
        }
        this.emit('stockQuotation', this.lastStockQuotation);
      }
    });
  }

  /**
   * 根据 action 生成请求参数
   * @param action
   * @param options
   * @return {{uri: string}}
   * @private
   */
  _generateParamsByAction(action, options) {
    const requestParams = {
      uri: this.apiURLPrefix
    };
    const params = Object.assign({
      nonce: Date.now(),
      accessKey: this.options.key
    }, options);
    let apiName, content, signature;

    if (action === 'ticker') {
      apiName = '/market/ticker';
      requestParams.method = 'GET';
      requestParams.qs = {
        symbol: 'coin-usdt-btc'
      };
    } else if (action === 'fund1') {
      apiName = 'fund/mainAccount';
      requestParams.method = 'POST';
      requestParams.form = params;
    } else if (action === 'fund') {
      apiName = '/fund/allAccount';
      requestParams.method = 'POST';
      requestParams.form = params;
    } else if (action === 'symbol') {
      apiName = '/market/symbols';
      requestParams.method = 'GET';
    } else if (action === 'buy') {
      apiName = '/trade/placeOrder';
      requestParams.method = 'POST';
      requestParams.form = params;
    } else if (action === 'history') {
      apiName = '/market/trades';
      requestParams.method = 'GET';
    } else {
      throw new Error('can not find appropriate action type');
    }

    content = apiName + '?' + Object.getOwnPropertyNames(params).sort().map(function(key) {
      return `${key}=${params[key]}`;
    }).join('&');
    signature = crypto.createHmac('sha256', this.options.secret).update(content).digest('hex');

    // requestParams.uri = requestParams.uri + content + '&signData=' + signature;

    if (requestParams.method === 'GET') {
      requestParams.uri = requestParams.uri + content + '&signData=' + signature;
    } else {
      requestParams.uri = requestParams.uri + apiName;
    }

    params.signData = signature;

    logger.info('requestParams result', requestParams);

    return requestParams;
  }
}

module.exports = {
  FCoin,
  BitForex
};
