var data = [
        {
            nickName: 'http://v1.qzone.cc/avatar/201408/03/23/44/53de58e5da74c247.jpg%21200x200.jpg',
            gender: '男',
            callbackContent: '点击查看',
            contact: '13309808976',
            time: '2016.03.06',
            callbackRea: ''
        },
        {
            nickName: 'http://www.qqxoo.com/uploads/allimg/170421/2336104414-24.jpg',
            gender: '女',
            callbackContent: '点击查看',
            contact: '15582343456',
            time: '2016.05.09',
            callbackRea: ''
        },
        {
            nickName: 'http://scimg.jb51.net/touxiang/201704/2017042116075371.jpg',
            gender: '男',
            callbackContent: '点击查看',
            contact: '13768989589',
            time: '2016.03.06',
            callbackRea: ''
        },
        {
            nickName: 'http://www.qqxoo.com/uploads/allimg/170421/2336104414-24.jpg',
            gender: '女',
            callbackContent: '点击查看',
            contact: '15877889890',
            time: '2016.05.09',
            callbackRea: ''
        },
        {
            nickName: 'http://v1.qzone.cc/avatar/201408/03/23/44/53de58e5da74c247.jpg%21200x200.jpg',
            gender: '男',
            callbackContent: '点击查看',
            contact: '13356789065',
            time: '2016.03.06',
            callbackRea: ''
        },
        {
            nickName: 'http://www.qqxoo.com/uploads/allimg/170421/2336104414-24.jpg',
            gender: '女',
            callbackContent: '点击查看',
            contact: '14533678422',
            time: '2016.05.09',
            callbackRea: ''
        },
        {
            nickName: 'http://v1.qzone.cc/avatar/201408/03/23/44/53de58e5da74c247.jpg%21200x200.jpg',
            gender: '男',
            callbackContent: '点击查看',
            contact: '13345356321',
            time: '2016.03.06',
            callbackRea: ''
        },
        {
            nickName: 'http://www.qqxoo.com/uploads/allimg/170421/2336104414-24.jpg',
            gender: '女',
            callbackContent: '点击查看',
            contact: '15582343456',
            time: '2016.05.09',
            callbackRea: ''
        }
    ];

var domList = '';
var dom;
for(var i = 0; i < data.length;i++){
        dom = '<li>' +
        '<div class="div_01"><img class="nickName" src="' + data[i].nickName + '"/><div class="intro"></div></div>' +
        '<div class="div_02">' + data[i].gender + '</div>' +
        '<div class="div_03" id="div_03"><a class="contentAll" href="#">' + data[i].callbackContent + '</a><div class="box" id="box"></div></div>' +
        '<div class="div_04">' + data[i].contact + ' </div>' +
        '<div class="div_05">' + data[i].time + '</div>' +
        '<div class="div_06">' + data[i].callbackRea + '</div>' +
        '<div class="div_07"><button class="btn">确定</button></div>' +
        '</li>';
        domList += dom;
}
var ul = document.getElementById('content_new');
ul.innerHTML = domList;

var btn = document.getElementsByClassName('btn');
var div_06 = document.getElementsByClassName('div_06');
for(j = 0; j < btn.length;j++){
        btn[j].onclick = (function(index){
                return function(){
                        div_06[index].style.backgroundColor = '#a1a1a1';
                        btn[index].style.backgroundColor = "#a1a1a1";
                        btn[index].innerHTML = "已查看";
                };
        })(j);
}



