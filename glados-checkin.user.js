// ==UserScript==
// @name         GLADOS 自动签到
// @namespace    https://github.com/yourname/glados-checkin
// @version      1.0
// @description  打开 GLADOS 页面自动签到
// @match        https://glados.rocks/console/checkin
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  console.log('[GLADOS] 页面已打开，准备自动签到');

  setTimeout(async () => {
    try {
      const res = await fetch('/api/user/checkin', {
        method: 'POST',
        credentials: 'include'
      });

      const data = await res.json();
      console.log('[GLADOS] 接口返回：', data);

      if (data.code === 0) {
        console.log('[GLADOS] ✅ 签到成功');
      } else {
        console.log('[GLADOS] ❌ 签到失败', data);
      }
    } catch (err) {
      console.error('[GLADOS] ❌ 执行异常', err);
    }
  }, 2000);
})();
