var backdata = {
    data: [
        {
            backPic:'',
            backText:'你好电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学你好西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学'
        },
        {
            backPic:'',
            backText:'你好电子科技大dhgFHLKFLKDGKLNB科技大学你好西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学'
        },
    ],
    serverTime:123456
};
var data = backdata.data;
var domList = [];
var dom;
for(var i = 0;i<data.length;i++){
    dom = '<div class="topPart"><div class="text">反馈详情</div><div class="close"></div></div>'
    + '<div class="midPart"></div>'
    + '<div class="botPart">' + data[i].backText + '</div></div>'
    domList.push(dom);
}

var box = document.getElementsByClassName('box');
for (var j = 0;j < data.length; j++){
    box[j].innerHTML = domList[j];
}

var click_div = document.getElementById('div_03');
click_div.onclick = function(e){
    var box = document.getElementById('box');
    e.stopPropagation();
    box.style.left = 3.5 + "rem";
    box.style.top = .45 + "rem";
    box.style.display = 'block';
}

var close = document.getElementsByClassName('close');
close[0].onclick = function(e){
    var box = document.getElementById('box');
    e.stopPropagation();
    box.style.display = 'none';
}