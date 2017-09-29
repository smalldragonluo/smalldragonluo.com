/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description global
 */

'use strict';

// 弹出样式
function Popup() {
  this.LAST_TIME = 2000;
  this.MINIMUM_LAST_TIME = 1000;
  this._msgQueue = [];
}

Popup.prototype = {
  popup: function(type, title, msg, lastTime) {
    // 消息不能为空
    if (!msg) {
      return;
    }

    // 添加缺省配置（持续时间）
    if (!lastTime) {
      lastTime = this.LAST_TIME;
    }
    if (lastTime < this.MINIMUM_LAST_TIME) {
      lastTime = this.MINIMUM_LAST_TIME;
    }

    // push到消息队列
    this._msgQueue.push({
      type: type,
      title: title,
      msg: msg,
      lastTime: lastTime
    });

    // 触发消息显示
    this._trigger();
  },

  // 每次触发都会依次回调显示所有消息，并取消上一次设置的回调
  _trigger: function() {
    var self = this;

    if (self._msgQueue.length) {
      var msgConf = self._msgQueue[0];

      // 清除上次设置的回调，重新设置
      if (msgConf.running) {
        if (!msgConf.destroying) {
          clearTimeout(self._hideTimeoutId);

          var timeRemain = self.MINIMUM_LAST_TIME - (new Date().getTime() - msgConf.startTime);

          self._hideTimeoutId = setTimeout(function() {
            self._destroyMsg(msgConf.$popup);
          }, timeRemain > 0 ? timeRemain : 0);
        }
      } else {
        msgConf.running = true;
        msgConf.startTime = new Date().getTime();

        self._render(msgConf.type, msgConf.title, msgConf.msg, function($popup) {
          msgConf.$popup = $popup;

          self._hideTimeoutId = setTimeout(function() {
            self._destroyMsg($popup);

            // 消息堆积时，前面的消息快速推进（只持续 MINIMUM_LAST_TIME 时间）
          }, self._msgQueue.length > 1 ? self.MINIMUM_LAST_TIME : msgConf.lastTime);
        });
      }
    }
  },

  _destroyMsg: function($popup) {
    var self = this;

    self._msgQueue[0].destroying = true;
    this._hide($popup, function() {
      self._msgQueue.splice(0, 1);
      self._trigger();
    });
  },

  _render: function(type, title, msg, callback) {

    var $popup =
      $(
        '<div class="c-alert alert alert-' + type + '">\
           <h4>' + title + '</h4>\
           <p>' + msg + '</p>\
         </div>'
      );

    $(document.body).append($popup);

    setTimeout(function() {
      $popup.addClass('c-show');
    }, 17);

    callback.call(null, $popup);
  },

  _hide: function($popup, callback) {
    $popup.addClass('c-hide');
    setTimeout(function() {
      $popup.remove();
      callback.call(null);
    }, 300);
  }
};

