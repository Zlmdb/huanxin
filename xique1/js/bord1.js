/**
 * Created by Administrator on 2017/4/5.
 */
/**
 * Created by Administrator on 2017/3/30.
 */
require.config({


    paths:{
        'jquery': "jquery" ,
        'je':"jpage"//这个je可以谁便，因为下面的shim里的jpage才是require里面要用的。

    },
    shim: {
        'jpage': {//这个就是下面的require里面要引入的名字。
            deps: ['jquery'],
            exports:"page"
        }
        //'jpage':["jquery"]
    }
});

require(['jquery',"jpage"],function($){

    var classify={
            count:2,
            //isChange:2,
            init:function(){
                //var count=1;
                var isChange=1;
                //点击禁用按钮
                $(".section_show1_operation ul li:last").click(function(event){
                    console.log("naoidhf");
                    var $target=$(event.target);
                    console.log($target);
                    if(isChange==1){
                        $target.parent().parent().parent().next().find("td:last-child span").css("display","inline-block");
                        isChange=2;
                    }else{
                        $target.parent().parent().parent().next().find("td:last-child span").css("display","none");
                        isChange=1;
                    }
                    if(this.count===2){
                        $(this).html("编辑");
                        this.count=1;
                    } else{
                        $(this).html("完成");
                        this.count=2;
                    }
                })
                //点击添加按钮,出现弹出框
                $(".section_show1_operation ul li:first").click(function(event){
                    var $target=$(event.target);
                    $target.parent().parent().parent().prev().css("display","block");

                    document.body.style.height="100%";
                    document.body.style.overflow = "hidden";
                })
                //点击弹出框的确认按钮
                $(".section_show1_add div a:first-child").click(function(event){
                    var $target=$(event.target);
                    console.log("NIIT");
                    var uname=$target.parent().siblings().find(" input[name=uname]").val();
                    var number=$target.parent().siblings().find(" input[name=number]").val();
                    //var remarks=$target.parent().siblings().find(" textarea[name=remarks]").val();

                    console.log(uname);
                    var html="<tr>" + "<td>" +uname + "</td>" + "<td>" +number+ "</td>"+"<td><img src='../img/clock.png'/> <span>禁用</span></td>"+ "</tr>";
                    $target.parent().parent().parent().parent().siblings(".section_show1_table").find("table tbody").append(html);
                    $target.parent().parent().parent().parent().css("display","none");
                    $target.parent().siblings().find(" [name]").val("");
                    document.body.style.overflow = "auto";
                })
                //点击弹出框的取消按钮
                $(".section_show1_add>div>div a:nth-child(2)").click(function(event){
                    var $target=$(event.target);
                    $target.parent().parent().parent().parent().css("display","none");
                    $target.parent().siblings().find(" [name]").val("");
                    document.body.style.overflow = "auto";
                })
                //点击弹出框的右上角的x按钮
                $(".section_show1_add div a.section_show1_add_bunce_minus img").click(function(event){
                    var $target=$(event.target);
                    console.log($target.parent().parent().parent());
                    console.log($target);
                    $target.prev().find(" [name]").val("");
                    $target.parent().parent().parent().css("display","none");
                    document.body.style.overflow = "auto";
                })

                this.masking_out();
                this.unmasking_out();
                this.materializecss();
            },
            //禁用后
            masking_out:function(){
                $(".section_show1_table table td:last-child").click(function(event){
                    var $target = $(event.target);
                    console.log($target[0].nodeName);
                    console.log($target);
                    if($target[0].nodeName==="SPAN"){
                        console.log("你好");
                        var parent=$target.parent().parent();
                        parent.css("color","#999");
                        $target.prev("img").css("display","inline-block");
                        $target.remove();
                    }

                })
            },
        //解禁
            unmasking_out:function(){
                $(".section_show1_table table td:last-child img").dblclick(function(){
                    $(this).css("display","none");
                    var html="<span>禁用<span/>";
                    $(this).parent().append(html);
                    $(this).parent().parent().css("color","#000");
                })
            },
            materializecss:function(){
                //document.addEventListener('DOMContentLoaded',function(){

                var duration = 750;

                // 样式string拼凑
                var forStyle = function(position){
                    var cssStr = '';
                    for( var key in position){
                        if(position.hasOwnProperty(key)) cssStr += key+':'+position[key]+';';
                    };
                    return cssStr;
                }

                // 获取鼠标点击位置
                var forRect = function(target){
                    var position = {
                        top:0,
                        left:0
                    }, ele = document.documentElement;
                    'undefined' != typeof target.getBoundingClientRect && (position = target.getBoundingClientRect());
                    return {
                        top: position.top + window.pageYOffset - ele.clientTop,
                        left: position.left + window.pageXOffset - ele.clientLeft
                    }
                }

                var show = function(event){
                    var pDiv = event.target,
                        cDiv = document.createElement('div');
                    pDiv.appendChild(cDiv);
                    var rectObj = forRect(pDiv),
                        _height = event.pageY - rectObj.top,
                        _left = event.pageX - rectObj.left,
                        _scale = 'scale(' + pDiv.clientWidth / 100 * 10 + ')';
                    var position = {
                        top: _height+'px',
                        left: _left+'px'
                    };
                    cDiv.className = cDiv.className + " waves-animation",
                        cDiv.setAttribute("style", forStyle(position)),
                        position["-webkit-transform"] = _scale,
                        position["-moz-transform"] = _scale,
                        position["-ms-transform"] = _scale,
                        position["-o-transform"] = _scale,
                        position.transform = _scale,
                        position.opacity = "1",
                        position["-webkit-transition-duration"] = duration + "ms",
                        position["-moz-transition-duration"] = duration + "ms",
                        position["-o-transition-duration"] = duration + "ms",
                        position["transition-duration"] = duration + "ms",
                        position["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        position["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        position["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        position["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        cDiv.setAttribute("style", forStyle(position));
                    var finishStyle = {
                        opacity: 0,
                        "-webkit-transition-duration": duration + "ms",  // 过渡时间
                        "-moz-transition-duration": duration + "ms",
                        "-o-transition-duration": duration + "ms",
                        "transition-duration": duration + "ms",
                        "-webkit-transform" : _scale,
                        "-moz-transform" : _scale,
                        "-ms-transform" : _scale,
                        "-o-transform" : _scale,
                        top: _height + "px",
                        left: _left + "px"
                    };
                    setTimeout(function(){
                        cDiv.setAttribute("style", forStyle(finishStyle));
                        setTimeout(function(){
                            pDiv.removeChild(cDiv);
                        },duration);
                    },100)
                }
                //document.querySelector('.waves').addEventListener('click',function(e){
                //    console.log("jfdskjfkdjfk");
                //    show(e);
                //},!1);

                $(".waves").click(function(e){
                    show(e);
                })
                //},!1);
            }
        };

    classify.init();

    $(function(){
        /* initiate the plugin */
        $("div.holder").jPages({
            containerID  : "itemContainer",
            first: '首页',
            last: '尾页',
            previous: '上页',
            next: '下页',
            perPage: 3,
            startPage: 1,
            startRange: 2,
            midRange: 3,
            endRange: 2,
            animation: 'wobble',
            keyBrowse: true,
            callback    : function( pages, items){
                $("#page-panel").html("当前页面:" + pages.current);
                $("#page-pane2").html("页面总数:" + pages.count);
                $("#page-pane3").html("总数量:" + items.count);
                $("#page-pane4").html("每页数量:" + items.count/pages.count);
            }
        });
    });
    //加载公用头部和尾部
    $("#header").load("common-html/head.html");
    $(".section_nav").load("common-html/nav.html");
    $("#affix").load("common-html/logi_left.html");
});

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











