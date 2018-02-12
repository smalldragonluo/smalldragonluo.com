/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description tpl
 */

'use strict';


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

module.exports = Tpl;
