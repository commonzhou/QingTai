var datas=new Array();
var jsondata1="http://114.115.221.206:8088/qtserver/admin/accusation/getUserInfo";
$.ajax({
  url: jsondata1,type:"post", 

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
var data = [
        [{
            avator: 'http://v1.qzone.cc/avatar/201408/03/23/44/53de58e5da74c247.jpg%21200x200.jpg',
            nickName: '你好明天',
            label: 'java',
            introduction: '你好',
            School: '西安电子科技大学',
            education: '本科',
            location: '陕西 西安'
        },
        {
            avator: 'http://b.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=f0c5c08030d3d539c16807c70fb7c566/8ad4b31c8701a18bbef9f231982f07082838feba.jpg',
            nickName: '白茂文',
            label: 'c++',
            introduction: ' 江南可采莲。',
            School: '长安大学',
            education: '研究生',
            location: '陕西 汉中'
        }],
        [
        {
            avator: 'http://scimg.jb51.net/touxiang/201704/2017042116075371.jpg',
            nickName: '奥斯卡就是',
            label: 'c++',
            introduction: '曲项向天歌。白毛浮绿水',
            School: '长安大学',
            education: '研究生',
            location: '陕西 渭南'
        },
        {
            avator: 'http://www.qqxoo.com/uploads/allimg/170421/2336104414-24.jpg',
            nickName: '昵称',
            label: 'c',
            introduction: ' 江南可采莲，',
            School: '西安电子科技大学',
            education: '本科',
            location: '陕西 西安'
        }],
        [{
            avator: 'http://img1.skqkw.cn:888/2014/12/07/19/0iw253scvpt-78742.jpg',
            nickName: '江南之交',
            label: 'java',
            introduction: '你曲项向天歌。',
            School: '西安电子科技大学',
            education: '本科',
            location: '陕西 西安'
        },
        {
            avator: 'http://scimg.jb51.net/touxiang/201704/2017042116075683.jpg',
            nickName: '昵称昵称昵称',
            label: 'c++',
            introduction: '曲项向天歌波',
            School: '长安大学',
            education: '研究生',
            location: '陕西 西安'
        }],
        [
        {
            avator: ' http://scimg.jb51.net/touxiang/201704/2017042116075371.jpg',
            nickName: '昵称昵',
            label: 'c++',
            introduction: '曲项向天波',
            School: '长安大学',
            education: '研究生',
            location: '陕西 西安'
        },
        {
            avator: 'http://scimg.jb51.net/touxiang/201704/2017042116075373.jpg',
            nickName: '鹅，鹅，鹅，',
            label: 'c++',
            introduction: '黄河远上白云间',
            School: '西安电子科技大学',
            education: '本科',
            location: '陕西 西安'
        }],
        [{
            avator: 'http://scimg.jb51.net/touxiang/201704/2017042116075683.jpg',
            nickName: '鹅，鹅，鹅，',
            label: 'java',
            introduction: '你好',
            School: '西安电子科技大学',
            education: '本科',
            location: '陕西 西安'
        },
        {
            avator: 'http://img1.skqkw.cn:888/2014/12/07/19/0iw253scvpt-78742.jpg',
            nickName: '昵称昵称昵称',
            label: 'c++',
            introduction: '黄河远上白云间',
            School: '长安大学',
            education: '研究生',
            location: '陕西 西安'
        }],
        [
        {
            avator: 'http://img.qq1234.org/uploads/allimg/141111/3_11111011322592.jpg',
            nickName: '昵称昵称昵称',
            label: 'c++',
            introduction: '黄河远上白云间，一片孤城万仞山',
            School: '长安大学',
            education: '研究生',
            location: '陕西 西安'
        },
        {
            avator: 'http://scimg.jb51.net/touxiang/201704/2017042116075687.jpg',
            nickName: '昵称',
            label: 'c++',
            introduction: '黄河远上白云间，一片孤城万仞山。',
            School: '西安电子科技大学',
            education: '本科',
            location: '陕西 西安'
        }],
        [{
            avator: 'http://scimg.jb51.net/touxiang/201704/2017042116075687.jpg',
            nickName: '昵称昵称昵称',
            label: 'java',
            introduction: '你好',
            School: '西安电子科技大学',
            education: '本科',
            location: '陕西 西安'
        },
        {
            avator: 'http://www.feizl.com/upload2007/2012_08/120819144112657.jpg',
            nickName: '昵称昵称昵称',
            label: 'c++',
            introduction: '你好',
            School: '长安大学',
            education: '研究生',
            location: '陕西 西安'
        }],
        [
        {
            avator: ' http://www.feizl.com/upload2007/2012_08/120819144112657.jpg',
            nickName: '昵称昵称昵称',
            label: 'c++',
            introduction: '你好',
            School: '长安大学',
            education: '研究生',
            location: '陕西 西安'
        },
        {
            avator: 'http://img.qq1234.org/uploads/allimg/141111/3_11111011322592.jpg',
            nickName: '昵称',
            label: 'java',
            introduction: '你好',
            School: '西安电子科技大学',
            education: '本科',
            location: '陕西 西安'
        }]
    ];

var domList1 = [];
var domList2 = [];
var dom;
var dom2;
var intro = document.getElementsByClassName('intro');
for(var i = 0; i < data.length;i++){
    dom1 =
    '<div class="top">'
    + '<div class="logo"><img class="avator" src="' + data[i][0].avator +'"/></div>'
    + '<div class="name">' + data[i][0].nickName + '</div>'
    + '<div class="icon">' + data[i][0].label + '</div>'
    + '</div><div class="bottom"><ul><li>介绍：' + data[i][0].introduction + '</li>'
    + '<li>学校：' + data[i][0].School + '</li>'
    + '<li>学历：' + data[i][0].education + '</li>'
    + '<li>所在地：' + data[i][0].location + '</li>'
    + '</ul></div></div>';
    dom2 =
    '<div class="top">'
    + '<div class="logo"><img class="avator" src="' + data[i][1].avator +'"/></div>'
    + '<div class="name">' + data[i][1].nickName + '</div>'
    + '<div class="icon">' + data[i][1].label + '</div>'
    + '</div><div class="bottom"><ul><li>介绍：' + data[i][1].introduction + '</li>'
    + '<li>学校：' + data[i][1].School + '</li>'
    + '<li>学历：' + data[i][1].education + '</li>'
    + '<li>所在地：' + data[i][1].location + '</li>'
    + '</ul></div></div>';
    domList1.push(dom1);
    domList2.push(dom2);
}
for (var j = 0;j < data.length*2; j++) {
    if (j % 2 < 1) {
        intro[j].innerHTML = domList1[j / 2];
    } else {
        intro[j].innerHTML = domList2[(j - 1)/ 2];
    }
}

// 举报用户
// var click_div = document.getElementsByClassName('div_01');
// for(var j=0; j<click_div.length; j++){
//     click_div[j].onmousemove = (function(index){
//         return function(){
//             intro[index].style.left = 7 + "rem";
//             intro[index].style.top = -3 + "rem";
//         };
//     })(j);  
//     click_div[j].onmouseout = (function(index){
//         return function(){
//             intro[index].style.left = -999 + "rem";
//             intro[index].style.top = -3 + "rem";
//         }
//     })(j);  
// }

//被举报用户
// var click_div2 = document.getElementsByClassName('div_02');
// for(var j=0; j<click_div2.length; j++){
//     click_div2[j].onmousemove = (function(index){
//         return function(){
//             intro[index].style.left = 19 + "rem";
//             intro[index].style.top = -3 + "rem";
//         };
//     })(j);  
//     click_div2[j].onmouseout = (function(index){
//         return function(){
//             intro[index].style.left = -999 + "rem";
//             intro[index].style.top = 7 + "rem";
//         }
//     })(j);  
// }

