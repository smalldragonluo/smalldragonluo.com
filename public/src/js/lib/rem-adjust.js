/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description ren
 */

'use strict';

// rem 适配
$(function() {
  // // PC 端固定尺寸
  // var fontSize = 37.5;
  //
  // if (navigator.userAgent.match(/pad|mobile/i)) {
  //   $('meta[name="viewport"]').attr('content', `width=${window.innerWidth * 4}, initial-scale=0.25, maximum-scale=1, user-scalable=no`);
  //   fontSize = document.documentElement.clientWidth / 10;
  //   $('html').addClass('mobile');
  // }
  //
  // $('html').css('font-size', fontSize + 'px');

  var fontSize = 37.5;
  if (navigator.userAgent.match(/pad|mobile/i)) {
    $('meta[name="viewport"]').attr('content', 'width=' + (window.innerWidth * devicePixelRatio) + ', initial-scale=' + (1 / devicePixelRatio) + ', maximum-scale=1, user-scalable=no');
    fontSize = document.documentElement.clientWidth / 10;
    $('html').addClass('mobile');
  }
  $('html').css('font-size', fontSize + 'px');
});
