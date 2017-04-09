var userdata = {
    data: [
        [{
            userLogo: '1111 ',
            userName: '昵称昵称昵称',
            userIcon: 'java',
            userItro: '你好',
            userSchool: '西安电子科技大学',
            userStu: '本科',
            userLoc: '陕西 西安'
        },
        {
            userLogo: '2222 ',
            userName: '昵称昵称昵称',
            userIcon: 'c++',
            userItro: '你好',
            userSchool: '长安大学',
            userStu: '研究生',
            userLoc: '陕西 西安'
        }],
        [
        {
            userLogo: ' 3333',
            userName: '昵称昵称昵称',
            userIcon: 'c++',
            userItro: '你好',
            userSchool: '长安大学',
            userStu: '研究生',
            userLoc: '陕西 西安'
        },
        {
            userLogo: '44444',
            userName: '昵称',
            userIcon: '44444',
            userItro: '你好',
            userSchool: '西安电子科技大学',
            userStu: '本科',
            userLoc: '陕西 西安'
        }]
    ],
    serverTime: 123456
};
var data = userdata.data;
var domList1 = [];
var domList2 = [];
var dom;
var dom2;
var intro = document.getElementsByClassName('intro');
for(var i = 0; i < data.length;i++){
    dom1 =
    '<div class="top">'
    + '<div class="logo">' + data[i][0].userLogo + '</div>'
    + '<div class="name">' + data[i][0].userName + '</div>'
    + '<div class="icon">' + data[i][0].userIcon + '</div>'
    + '</div><div class="bottom"><ul><li>介绍：' + data[i][0].userItro + '</li>'
    + '<li>学校：' + data[i][0].userSchool + '</li>'
    + '<li>学历：' + data[i][0].userStu + '</li>'
    + '<li>所在地：' + data[i][0].userLoc + '</li>'
    + '</ul></div></div>';
    dom2 =
    '<div class="top">'
    + '<div class="logo">' + data[i][1].userLogo + '</div>'
    + '<div class="name">' + data[i][1].userName + '</div>'
    + '<div class="icon">' + data[i][1].userIcon + '</div>'
    + '</div><div class="bottom"><ul><li>介绍：' + data[i][1].userItro + '</li>'
    + '<li>学校：' + data[i][1].userSchool + '</li>'
    + '<li>学历：' + data[i][1].userStu + '</li>'
    + '<li>所在地：' + data[i][1].userLoc + '</li>'
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

