// ==UserScript==
// @name         优酷播放器修改logo为TVB台标
// @namespace    https://mecyz.tech/
// @version      0.1
// @description  优酷播放器修改logo为TVB台标，使用Wikipedia上TVB词条的logo文件
// @author       M_E
// @match        http://*/*
// @grant        none
// @include *://v.youku.com/*
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function(){
        var logo = $('.spv-logo');
        logo.css('background-image','url("https://upload.wikimedia.org/wikipedia/zh/0/0d/TVB_logo.png")');
        logo.css('height','79px');
        logo.css('width','110px');
        logo.css('background-size','auto 100%');
        logo.css('margin-top','44px');
        logo.css('margin-right','44px');
        //console.log('change');
    }, 100);
})();
