/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description 所有页面 base
 */

'use strict';

$(window).scroll(function(e) {});

// 微信 SDK 配置
const wxConfig = $('body').data('wx');

if (wxConfig) {
  wx.config({
    debug: false,                    // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: wxConfig.appId,          // 必填，公众号的唯一标识
    timestamp: wxConfig.timestamp,  // 必填，生成签名的时间戳
    nonceStr: wxConfig.nonceStr,    // 必填，生成签名的随机串
    signature: wxConfig.signature,  // 必填，签名
    jsApiList: [                    // 必填，需要使用的JS接口列表
      'uploadImage',
      'chooseImage'
    ]
  });
  wx.error(function(res){
    console.error(res);
  });
}
