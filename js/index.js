/**
 * Created by lql on 2017/6/5 0005.
 */

//固定头部
// var autoFixed = function (boxID, ulID, childTag, fixedTop) {};
var searchObj = $("#logoSearch"); //得到搜索栏对象
var win = $(window); //得到窗口对象
var doc = $(document);//得到document文档对象
win.scroll(function () {
    if (doc.scrollTop() >= 60) {
        searchObj.addClass("fixedTop");
    } else {
        searchObj.removeClass("fixedTop");
    }
});

//自动轮播
//boxID 外层容器, ulID 图片列表父级, childTag 图片列表标签名称, olID 序列号
var autoPlay = function (boxID, ulID, childTag, olID) {
    var wrap = document.getElementById('wrap'),
        pic = document.getElementById('pic'),
        list = document.getElementById('list').getElementsByTagName('li'),
        index = 0,
        timer = null;
    // 定义并调用自动播放函数
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    //每隔2000毫秒自动轮播
    timer = setInterval(autoPlay, 2000);
    // 定义图片切换函数
    function autoPlay() {
        index++;
        if (index >= list.length) {
            index = 0;
        }
        changeOptions(index);
    }

    // 鼠标划过整个容器时停止自动播放
    wrap.onmouseover = function () {
        clearInterval(timer);
    };
    // 鼠标离开整个容器时继续播放至下一张
    wrap.onmouseout = function () {
        timer = setInterval(autoPlay, 500);
    };
    // 遍历所有数字导航实现划过切换至对应的图片
    for (var i = 0; i < list.length; i++) {
        list[i].id = i;
        list[i].onmouseover = function () {
            clearInterval(timer);
            changeOptions(this.id);
        }
    }
    function changeOptions(curIndex) {
        for (var j = 0; j < list.length; j++) {
            list[j].className = '';
            pic.style.top = 0;
        }
        list[curIndex].className = 'active';
        pic.style.top = -curIndex * 330 + 'px';
        index = curIndex;
    }
};

//左侧商品分类导航
//鼠标移入显示
$('.f1_style_item').hover(function () {
    $(".f1_float_layer").css('display', 'block');
    console.log($(this).find('a').text());
    $('.f1_float_layer_c>h2').text($(this).find('a').text());
}, function () {
    $(".f1_float_layer").css('display', 'none');
});
