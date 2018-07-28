/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description kv.test
 */

'use strict';

require('mocha');

const expect = require('chai').expect;
const kvPairService = require('../src/services/kvPair');

describe('KV Service', function() {
  describe('#getDevelopVersion()', function() {
    it('should return development branch version', async function() {
      let kv = await kvPairService.getKVById(1);
      expect(kv).to.be.an('object');
    });
  });
});
