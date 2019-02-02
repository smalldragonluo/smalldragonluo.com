/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description MicroEvent
 */

'use strict';

class MicroEvent {
  handlerMap = {};

  on(eventType, handler) {
    if (!this.handlerMap[eventType]) {
      this.handlerMap[eventType] = [];
    }

    this.handlerMap[eventType].push(handler);
  }

  fire(eventType, data) {
    if (!this.handlerMap[eventType]) {
      throw new Error('event type doesn\'t exist');
    }

    this.handlerMap[eventType].forEach(function(handler) {
      handler.call(null, data);
    });
  }

  off(eventType, handler) {
    if (!this.handlerMap[eventType]) {
      throw new Error('event type doesn\'t exist');
    }

    const index = this.handlerMap[eventType].indexOf(handler);

    // 重复 handler 需要多次调用
    if (index !== -1) {
      return this.handlerMap[eventType].splice(index, 1);
    }
  }
}

export default MicroEvent;
