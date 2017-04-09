var userdata = {
    data: [
        {
            userLogo: ' 1111',
            userName: '昵称昵称昵称',
            userIcon: 'java',
            userItro: '你好',
            userSchool: '西安电子科技大学',
            userStu: '本科',
            userLoc: '陕西 西安'
        },
        {
            userLogo: ' 2222',
            userName: '昵称昵称昵称',
            userIcon: 'c++',
            userItro: '你好',
            userSchool: '长安大学',
            userStu: '研究生',
            userLoc: '陕西 西安'
        }
    ],
    serverTime: 123456
};
var data = userdata.data;
var domList = '';
var dom;
var intro = document.getElementsByClassName('intro');
for(var i = 0; i < data.length;i++){
    dom =
    '<div class="top">'
    + '<div class="logo">' + data[i].userLogo + '</div>'
    + '<div class="name">' + data[i].userName + '</div>'
    + '<div class="icon">' + data[i].userIcon + '</div>'
    + '</div><div class="bottom"><ul><li>介绍：' + data[i].userItro + '</li>'
    + '<li>学校：' + data[i].userSchool + '</li>'
    + '<li>学历：' + data[i].userStu + '</li>'
    + '<li>所在地：' + data[i].userLoc + '</li>'
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



