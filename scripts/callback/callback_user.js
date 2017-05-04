var data = [
        {
            avator: 'http://v1.qzone.cc/avatar/201408/03/23/44/53de58e5da74c247.jpg%21200x200.jpg',
            nickName: '东海大道',
            label: 'java',
            introduction: '你好',
            school: '西安电子科技大学',
            education: '本科',
            location: '陕西 西安'
        },
        {
            avator: 'http://www.qqxoo.com/uploads/allimg/170421/2336104414-24.jpg',
            nickName: '尽快返回',
            label: 'c++',
            userItro: '你好',
            school: '长安大学',
            education: '研究生',
            location: '陕西 西安'
        },
        {
            avator: 'http://scimg.jb51.net/touxiang/201704/2017042116075371.jpg',
            nickName: '计算机课',
            label: 'java',
            introduction: '你好',
            school: '西安电子科技大学',
            education: '本科',
            location: '陕西 西安'
        },
        {
            avator: 'http://www.qqxoo.com/uploads/allimg/170421/2336104414-24.jpg',
            nickName: '科技支付',
            label: 'c++',
            userItro: '你好',
            school: '长安大学',
            education: '研究生',
            location: '陕西 西安'
        },
        {
            avator: 'http://v1.qzone.cc/avatar/201408/03/23/44/53de58e5da74c247.jpg%21200x200.jpg',
            nickName: '电饭锅',
            label: 'java',
            introduction: '你好',
            school: '西安电子科技大学',
            education: '本科',
            location: '陕西 西安'
        },
        {
            avator: 'http://www.qqxoo.com/uploads/allimg/170421/2336104414-24.jpg',
            nickName: '阿大使馆',
            label: 'c++',
            userItro: '你好',
            school: '长安大学',
            education: '研究生',
            location: '陕西 西安'
        },
        {
            avator: 'http://v1.qzone.cc/avatar/201408/03/23/44/53de58e5da74c247.jpg%21200x200.jpg',
            nickName: '反射光栅狗头',
            label: 'java',
            introduction: '你好',
            school: '西安电子科技大学',
            education: '本科',
            location: '陕西 西安'
        },
        {
            avator: 'http://www.qqxoo.com/uploads/allimg/170421/2336104414-24.jpg',
            nickName: '大师傅给',
            label: 'c++',
            userItro: '你好',
            school: '长安大学',
            education: '研究生',
            location: '陕西 西安'
        }
    ];

var domList = '';
var dom;
var intro = document.getElementsByClassName('intro');
for(var i = 0; i < data.length;i++){
    dom =
    '<div class="top">'
    + '<div class="logo"><img class="avator" src="' + data[i].avator + '"/></div>'
    + '<div class="name">' + data[i].nickName + '</div>'
    + '<div class="icon">' + data[i].label + '</div>'
    + '</div><div class="bottom"><ul><li>介绍：' + data[i].introduction + '</li>'
    + '<li>学校：' + data[i].school + '</li>'
    + '<li>学历：' + data[i].education + '</li>'
    + '<li>所在地：' + data[i].location + '</li>'
    + '</ul></div></div>';
   intro[i].innerHTML = dom;
}


// 反馈用户
// var click_div = document.getElementsByClassName('div_01');
// var intro = document.getElementsByClassName('intro');
// for(var j=0; j<click_div.length; j++){
//     click_div[j].onmousemove = (function(index){
//         return function(){
//             intro[index].style.left = 8 + "rem";
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



