var messdata = {
    data: [
        {
            userLogo: ' ',
            userName: '昵称昵称昵称',
            messTime: '2017.03.23',
            message: '你好西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学'
        },
        {
            userLogo: ' ',
            userName: '昵称昵称昵称',
            messTime: '2017.03.23',
            message: '你好niaajafsjdhfahglajdhfkjadhf;安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学'
        },
    ],
    serverTime: 123456
};
var data = messdata.data;
var domList = [];
var dom;
for(var i = 0; i < data.length;i++){
    dom =
    '<div class="topPart"><div class="text">回复详情</div><div class="close"></div></div>'
    + '<div class="midPart"><div class="logo">' + data[i].userLogo + '</div>'
    + '<div class="name">' + data[i].userName + '</div>'
    + '<div class="time">' + data[i].messTime + '</div>'
    + '</div><div class="botPart">介绍：' + data[i].message + '</div>';
    domList.push(dom);
}

var mess = document.getElementsByClassName('mess');
for (var j = 0;j < data.length; j++){
    mess[j].innerHTML = domList[j];
}

var click_div = document.getElementById('div_05');
click_div.onclick = function(e){
    var mess = document.getElementById('mess');
    e.stopPropagation();
    mess.style.left = 5.7 + "rem";
    mess.style.top = .45 + "rem";
    mess.style.display = 'block';
}

var close = document.getElementsByClassName('close');
close[0].onclick = function(e){
    var mess = document.getElementById('mess');
    e.stopPropagation();
    mess.style.display = 'none';
}