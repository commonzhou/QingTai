var datas=new Array();
var jsondata1="http://114.115.221.206:8088/qtserver/admin/accusation/getInfoList";
$.ajax({
  url: jsondata1,type:"get", 

  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    alert(stringdata);
   // datas[0]=newjson.result[3]; datas[1]=newjson.result[2]; datas[2]=newjson.result[1]; datas[3]=newjson.result[0];
   // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
    //$("#month").trigger("click");              //模拟点击来保证打开时主页有数值
}
}); 
var data = [
        {
            senderId: 'http://v1.qzone.cc/avatar/201408/03/23/44/53de58e5da74c247.jpg%21200x200.jpg',
            receiverId: 'http://b.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=f0c5c08030d3d539c16807c70fb7c566/8ad4b31c8701a18bbef9f231982f07082838feba.jpg',
            type: '帖子',
            reason: '小广告',
            reportContent: '点击查看',
            time: '2017.03.02'
        },
        {
            senderId: 'http://scimg.jb51.net/touxiang/201704/2017042116075371.jpg',
            receiverId: 'http://www.qqxoo.com/uploads/allimg/170421/2336104414-24.jpg',
            type: '帖子',
            reason: '虚假信息',
            reportContent: '点击查看',
            time: '2017.03.09'
        },
        {
            senderId: 'http://img1.skqkw.cn:888/2014/12/07/19/0iw253scvpt-78742.jpg',
            receiverId: 'http://scimg.jb51.net/touxiang/201704/2017042116075683.jpg',
            type: '评论',
            reason: '色情',
            reportContent: '点击查看',
            time: '2017.04.05'
        },
        {
            senderId: 'http://scimg.jb51.net/touxiang/201704/2017042116075371.jpg',
            receiverId: 'http://scimg.jb51.net/touxiang/201704/2017042116075373.jpg',
            type: '评论',
            reason: '欺骗',
            reportContent: '点击查看',
            time: '2017.04.09'
        },
        {
            senderId: 'http://scimg.jb51.net/touxiang/201704/2017042116075683.jpg',
            receiverId: 'http://img1.skqkw.cn:888/2014/12/07/19/0iw253scvpt-78742.jpg',
            type: '帖子',
            reason: '小广告',
            reportContent: '点击查看',
            time: '2017.04.12'
        },
        {
            senderId: 'http://img.qq1234.org/uploads/allimg/141111/3_11111011322592.jpg',
            receiverId: 'http://scimg.jb51.net/touxiang/201704/2017042116075687.jpg',
            type: '评论',
            reason: '虚假信息',
            reportContent: '点击查看',
            time:  '2017.04.15'
        },
        {
            senderId: 'http://scimg.jb51.net/touxiang/201704/2017042116075687.jpg',
            receiverId: 'http://www.feizl.com/upload2007/2012_08/120819144112657.jpg',
            type: '帖子',
            reason: '色情',
            reportContent: '点击查看',
            time:  '2017.04.16'
        },
        {
            senderId: 'http://www.feizl.com/upload2007/2012_08/120819144112657.jpg',
            receiverId: 'http://img.qq1234.org/uploads/allimg/141111/3_11111011322592.jpg',
            type: '评论',
            reason: '欺骗',
            reportContent: '点击查看',
            time:  '2017.04.19'
        }
    ];

var domList = '';
var dom;
for(var i = 0; i < data.length;i++){
        dom = '<li class="new_li">' +
        '<div class="div_01"><img class="sender" src="' + data[i].senderId + '"/><div class="intro"></div></div>' +
        '<div class="div_02"><img class="receiver" src="' + data[i].receiverId + '"/><div class="intro"></div></div>' +
        '<div class="div_03">' + data[i].type + '</div>' +
        '<div class="div_04">' + data[i].reason + '</div>' +
        '<div class="div_05"><a class="point" href="#">' + data[i].reportContent + '</a><div class="mess"></div></div>' +
        '<div class="div_06">' + data[i].time + '</div>' +
        '<div class="div_07"><select>' +
        '<option selected="selected">不处理</option>' +
        '<option>不处理</option>' +
        '<option>警告</option>' +
        '<option>禁言一天</option>' +
        '<option>禁言一周</option>' +
        '<option>禁言一天</option>' +
        '<option>封号</option>' +
        '</select></div>' +
        '<div class="div_08"><button class="btn">确定</button></div>' +
        '</li>';
        domList += dom;
}
var ul = document.getElementById('content_new');
ul.innerHTML = domList;

var btn = document.getElementsByClassName('btn');

for(var i = 0;i < btn.length;i++){
        btn[i].onclick = (function(index){
                return function(){
                        btn[index].innerHTML = '已处理';
                        btn[index].style.backgroundColor = '#a1a1a1';
                };
        })(i);
}
