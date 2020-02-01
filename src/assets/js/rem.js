// 自适应代码
(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;
    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        // 最大宽度
        // if (width > 750) { 
        //     width = 750;
        // }
        var rem = width / 6.4;
        //将屏幕宽度分成6.4份 1份为1rem
        docEl.style.fontSize = rem + 'px';
    }
    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);
    refreshRem();
})(window);