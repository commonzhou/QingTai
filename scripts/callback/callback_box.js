var datas = new Array();
var jsondata4 = "http://114.115.221.206:8088/qtserver/admin/feedback/getFeedBackDetail";
$.ajax({
    url: jsondata4,
    type: "get",

    dataType: "json",
    success: function(data) {
        var stringdata = JSON.stringify(data);
        var newjson = JSON.parse(stringdata);
        alert(stringdata);
    }
});
var data = [{
    backPic: 'http://img1.gtimg.com/news/pics/hv1/201/254/2203/143315046.jpg',
    backText: '目前，中国和美国、加拿大、澳大利亚分别建立了不同层次的司法执法合作机制，与新西兰在重点个案上开展良好合作。中央纪委监察部网站统计，2016年从美、加、澳、新等西方发达国家追回来的外逃人员数量有较大提升。'
}];

var domList = [];
var dom;
for (var i = 0; i < data.length; i++) {
    dom = '<div class="topPart"><div class="text">反馈详情</div><div class="close"></div></div>' +
        '<div class="midPart"><img class="bPic" src="' + data[i].backPic + '"/></div>' +
        '<div class="botPart">' + data[i].backText + '</div></div>'
    domList.push(dom);
}

var box = document.getElementsByClassName('box');
for (var j = 0; j < data.length; j++) {
    box[j].innerHTML  =  domList[j];
}

var click_div = $('.div_03 a');
for (var i = 0; i < click_div.length; i++) {
    click_div[i].onmouseover = (function(index) {
        return function(e) {
            e.stopPropagation();
            box[index].style.left = 3.5 + "rem";
            box[index].style.top = .45 + "rem";
            box[index].style.display = 'block';
            box[index].style.width = 2.94 + "rem";
            box[index].style.height = 4.66 + "rem";
        };
    })(i);

}


var close = document.getElementsByClassName('close');
for (var i = 0; i < close.length; i++) {
    close[i].onclick = (function(index) {
        return function(e) {
            e.stopPropagation();
            box[index].style.display = 'none';
        };
    })(i);
}