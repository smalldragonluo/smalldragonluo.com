/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description utils
 */

'use strict';

// 节流阀
function throttle(fn, interval, context, accurate) {
  var lastTime, timeout;

  if (accurate) {
    return function() {
      clearTimeout(timeout);

      var currentTime = new Date().getTime();
      var args = arguments;

      timeout = setTimeout(function() {
        fn.apply(context || null, Array.prototype.slice.call(args));
        lastTime = currentTime;
      }, interval - (currentTime - (lastTime || currentTime - interval)));
    };
  } else {
    return function() {
      var currentTime = new Date().getTime();

      if (!lastTime || currentTime - lastTime >= interval) {
        fn.apply(context, Array.prototype.slice.call(arguments));
        lastTime = currentTime;
      }
    };
  }
}

// 根据 rem 获取 px global
function getPxByRem(rem) {
  try {
    var fontSize = parseFloat(getComputedStyle(document.documentElement)['font-size']);

    return rem * fontSize;
  } catch (e) {
    return rem * 32;
  }
}

/**
 * 获取接近日期
 * @param date
 * @param level, 0 时分, 1 月日, > 1 年月日
 * @returns {*}
 */
function getRecentTime(date, level) {
  if (level === undefined) {
    level = 0;
  }

  var now = new Date();

  switch (level) {
    case 2:
      return formatDate(date, 'yyyy年M月d日');
    case 1:
      return formatDate(date, 'M月d日');
    case 0:
      if (now.getFullYear() === date.getFullYear()) {
        var isInOneDay = (now.getMonth() === date.getMonth()) && (now.getDate() === date.getDate());

        if (isInOneDay) {
          var minutes = Math.floor((now.getTime() - date.getTime()) / 1000 / 60);

          if (minutes < 1) {
            return '刚刚';
          } else if (minutes < 60) {
            return minutes + '分钟前';
          } else {
            return Math.floor(minutes / 60) + '小时前';
          }
        } else {
          return now.getDate() - date.getDate() === 1 ? '昨天' : formatDate(date, 'M月d日 hh:mm');
        }
      } else {
        return formatDate(date, 'yyyy年M月d日');
      }
  }
}

/**
 * 日期转换相关
 * @param date        Date 对象， 如果是13位数字，则需要先使用new Date()进行转换
 * @param fmt         要转换的格式 比如： yyyy-MM-dd hh:mm:ss或者yyyy-MM-dd
 * @returns {*}
 */
function formatDate(date, fmt) {
  const o = {
    "M+": date.getMonth() + 1,                   //月份
    "d+": date.getDate(),                        //日
    "h+": date.getHours(),                       //小时
    "m+": date.getMinutes(),                     //分
    "s+": date.getSeconds(),                     //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds()                  //毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

module.exports = {
  throttle,
  getPxByRem,
  formatDate,
  getRecentTime
};
