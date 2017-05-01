/**
 * Created by Administrator on 2017/3/24.
 */
/**
 * Created by Administrator on 2017/3/24.
 */
require(["components/open_card1"],function(card){
    card.add.init();
})


//屏幕宽度监听事件
window.onresize=function(){
    console.log("dfhjdh");
    //动态获取屏幕宽度
    (function (doc, win, undefined) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (clientWidth === undefined) return;
                docEl.style.fontSize = 20 * (clientWidth / 1440) + 'px';//1440是初始设计参考值。
            };
        if (doc.addEventListener === undefined) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false)
    })(document, window);
}