/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description 微信相关服务
 */

'use strict';

const {logger} = require('../lib/utils');
const request = require('request');
const crypto = require('crypto');
const kvService = require('./kvPair');
// accessToken 凭证相关
let clientCredential, credentialLastUpdateTime;
// jsTicket 相关
let jsTicket, ticketLastUpdateTime;
// const wxConfig = kvService.getObjectByKey('wxConfig');

module.exports = {
  /**
   * 获取 access_token
   * @return {Promise<*>}
   */
  async getAccessToken() {
    // 第一次请求或者过期了
    if (!clientCredential || Date.now() - credentialLastUpdateTime >= clientCredential.expires_in * 1000) {
      logger.info('access_token expired or not exist');
      const config = await wxConfig;

      credentialLastUpdateTime = Date.now();
      clientCredential = await new Promise((resolve, reject) => {
        request({
          method: 'GET',
          uri: 'https://api.weixin.qq.com/cgi-bin/token',
          qs: {
            grant_type: 'client_credential',
            appid: config.appId,
            secret: config.secret
          }
        }, (err, resp, body) => {
          logger.info('get access_token response', body);

          if (err) {
            reject(new Error(`get access_token failed: ${err.stack}`));
          } else {
            try {
              body = JSON.parse(body);
            } catch (e) {
              reject(new Error(`get access_token failed, invalid body format: ${body}`));
            }

            if (body.errcode) {
              reject(new Error(`get access_token failed: ${body.errmsg}`));
            } else {
              resolve(body);
            }
          }
        });
      });
    }

    return clientCredential.access_token;
  },
  /**
   * 获取 jsapi ticket
   * @return {Promise<*>}
   */
  async getJSAPITicket() {
    if (!jsTicket || Date.now() - ticketLastUpdateTime >= jsTicket.expires_in * 1000) {
      logger.info('jsapi expired or not exist');
      const accessToken = await this.getAccessToken();

      ticketLastUpdateTime = Date.now();
      jsTicket = await new Promise((resolve, reject) => {
        request({
          method: 'GET',
          uri: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
          qs: {
            access_token: accessToken,
            type: 'jsapi'
          }
        }, (err, resp, body) => {
          logger.info('get jsapi response', body);

          if (err) {
            reject(new Error(`get jsapi ticket failed: ${err.stack}`));
          } else {
            try {
              body = JSON.parse(body);
            } catch (e) {
              reject(new Error(`get jsapi ticket failed, invalid body format: ${body}`));
            }

            if (body.errcode) {
              reject(new Error(`get jsapi ticket failed: ${body.errmsg}`));
            } else {
              resolve(body);
            }
          }
        });
      });
    }

    return jsTicket.ticket;
  },
  /**
   * 获取 jsapi 配置
   * @param url
   * @return {Promise<{appId, timestamp: number, nonceStr: number, signature: *|PromiseLike<ArrayBuffer>}>}
   */
  async getJSAPIConfig(url) {
    const config = await wxConfig;
    const jsAPITicket = await this.getJSAPITicket();
    const timestamp = Math.round(Date.now() / 1000);
    const noncestr = Math.random().toString(36).substr(2);
    const sign = crypto.createHash('sha1').update(
      `jsapi_ticket=${jsAPITicket}&` +
      `noncestr=${noncestr}&` +
      `timestamp=${timestamp}&` +
      `url=${url}`
    ).digest('hex');

    logger.info(
      'string1',
      `jsapi_ticket=${jsAPITicket}&` +
      `noncestr=${noncestr}&` +
      `timestamp=${timestamp}&` +
      `url=${url}`
    );
    logger.info(
      'sign',
      crypto.createHash('sha1').update(
        `jsapi_ticket=${jsAPITicket}&` +
        `noncestr=${noncestr}&` +
        `timestamp=${timestamp}&` +
        `url=${url}`
      ).digest('hex')
    );

    return {
      appId: config.appId,  // 必填，公众号的唯一标识
      timestamp: timestamp, // 必填，生成签名的时间戳
      nonceStr: noncestr,  // 必填，生成签名的随机串
      signature: sign       // 必填，签名
    };
  }
};
