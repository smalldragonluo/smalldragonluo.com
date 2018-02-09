/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description exam
 */

'use strict';

$(function() {
  var pageData = $('.J_PageData').data('page-data');

  // format date
  pageData.list.forEach(function(item) {
    item.createdAt = getRecentTime(new Date(item.createdAt));
  });

  var renderer = new Tpl(`
    <% list.forEach(function(item) { %>
      <div class="post">
      <div class="post-user">
        <img class="post-avatar" src="<%= item.user.avatar %>"/>
        <span class="post-nickname"><%= item.user.userName %></span>
        <span class="post-date"><%= item.createdAt %></span>
      </div>
      <span class="content-text"><%= item.content %></span>
    </div>
    <% }); %>
  `);

  $('.post-list').append(renderer(pageData));

  // 瀑布流
  var ref;
  var active = true;
  var loading = false;

  $(document).on('scroll', ref = throttle(function(e) {
    var dH = $(document).height();
    var sT = $(window).scrollTop();
    var wH = $(window).height();

    var bottomLeft = dH - sT - wH;

    if (active && !loading && bottomLeft < getPxByRem(1254 / 75)) {
      loadItems();
    }
  }, 500, null, true));

  function loadItems() {
    loading = true;

    self.loadMore(function(data) {
      // 没有更多，取消绑定
      if (!data.words.length) {
        $(document).off('scroll', ref);
        self.$container.find('.list').append('<li class="no-more">亲，已经看光光啦~</li>');
        return;
      }

      if (self.rendered) {
        _renderItems(data);
      } else {
        self.render(data, function() {
          self.rendered = true;
          _renderItems(data);
        });
      }
    });
  }
});

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

/**
 * 一个简单的模板引擎
 * @param tpl
 * @returns {*}
 * @constructor
 */
function Tpl(tpl) {
  var snippet = tpl.split(/(?=<%)|(%>)/);
  var mCode = [
    'var _tplSnippet = [];',
    'with(_tplData) {'
  ];

  for (var i = 0; i < snippet.length; ++i) {
    if (typeof snippet[i] !== 'undefined' && snippet[i] !== '%>') {
      if (snippet[i].substring(0, 2) === '<%') {
        // 如果是表达式
        if (snippet[i].charAt(2) === '=') {
          mCode.push(snippet[i].replace(/<%=((\s|.)+)/g, '_tplSnippet.push($1);'));
        } else {
          // 如果是语句
          mCode.push(snippet[i].replace(/<%((\s|.)+)/g, '$1'));
        }
      } else {
        // 如果是 html
        mCode.push('_tplSnippet.push(\'' + snippet[i].replace(/\\/g, '\\\\').replace(/'/g, '\\\'').replace(/\n/g, '\\n') + '\');');
      }
    }
  }

  mCode.push('}', 'return _tplSnippet.join(\'\');');

  return new Function('_tplData', mCode.join(''));
}
