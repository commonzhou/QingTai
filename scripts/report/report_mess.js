var data = [
        {
            userLogo: 'http://img.qq1234.org/uploads/allimg/141111/3_11111011322592.jpg',
            userName: '你哈安全',
            messTime: '2017.03.23',
            message: '目前，中国和美国、加拿大、澳大利亚分别建立了不同层次的司法执法合作机制，与新西兰在重点个案上开展良好合作。中央纪委监察部网站统计，2016年从美、加、澳、新等西方发达国家追回来的外逃人员数量有较大提升。'
        },
        {
            userLogo: 'http://scimg.jb51.net/touxiang/201704/2017042116075687.jpg',
            userName: '华盛顿',
            messTime: '2017.03.23',
            message: '目前，中国和美国、加拿大、澳大利亚分别建立了不同层次的司法执法合作机制，与新西兰在重点个案上开展良好合作。中央纪委监察部网站统计，2016年从美、加、澳、新等西方发达国家追回来的外逃人员数量有较大提升。'
        },
        {
            userLogo: 'http://img.qq1234.org/uploads/allimg/141111/3_11111011322592.jpg',
            userName: '建设大街和',
            messTime: '2017.03.23',
            message: '至若春和景明， 波澜不惊， 上下天光， 一碧万顷； 沙鸥翔集， 锦鳞游泳； 岸芷汀兰， 郁郁青青。 而或长烟一空， 皓月千里， 浮光跃金， 静影沉璧， 渔歌互答， 此乐何极！ 登斯楼也， 则有心旷神怡， 宠辱偕忘， 把酒临风， 其喜洋洋者矣。'
        },
        {
            userLogo: ' http://www.feizl.com/upload2007/2012_08/120819144112657.jpg',
            userName: '安静会带来',
            messTime: '2017.03.23',
            message: '至若春和景明， 波澜不惊， 上下天光， 一碧万顷； 沙鸥翔集， 锦鳞游泳； 岸芷汀兰， 郁郁青青。 而或长烟一空， 皓月千里， 浮光跃金， 静影沉璧， 渔歌互答， 此乐何极！ 登斯楼也， 则有心旷神怡， 宠辱偕忘， 把酒临风， 其喜洋洋者矣。'
        },
        {
            userLogo: 'http://scimg.jb51.net/touxiang/201704/2017042116075687.jpg',
            userName: '家得很快',
            messTime: '2017.03.23',
            message: '至若春和景明， 波澜不惊， 上下天光， 一碧万顷； 沙鸥翔集， 锦鳞游泳； 岸芷汀兰， 郁郁青青。 而或长烟一空， 皓月千里， 浮光跃金， 静影沉璧， 渔歌互答， 此乐何极！ 登斯楼也， 则有心旷神怡， 宠辱偕忘， 把酒临风， 其喜洋洋者矣。'
        },
        {
            userLogo: 'http://img.qq1234.org/uploads/allimg/141111/3_11111011322592.jpg',
            userName: '三大地区',
            messTime: '2017.03.23',
            message: '至若春和景明， 波澜不惊， 上下天光， 一碧万顷； 沙鸥翔集， 锦鳞游泳； 岸芷汀兰， 郁郁青青。 而或长烟一空， 皓月千里， 浮光跃金， 静影沉璧， 渔歌互答， 此乐何极！ 登斯楼也， 则有心旷神怡， 宠辱偕忘， 把酒临风， 其喜洋洋者矣。'
        },
        {
            userLogo: ' http://www.feizl.com/upload2007/2012_08/120819144112657.jpg',
            userName: '法国电影',
            messTime: '2017.03.23',
            message: '你好西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学西安电子科技大学'
        },
        {
            userLogo: 'http://img.qq1234.org/uploads/allimg/141111/3_11111011322592.jpg',
            userName: '蝴蝶结过好几天',
            messTime: '2017.03.23',
            message: '至若春和景明， 波澜不惊， 上下天光， 一碧万顷； 沙鸥翔集， 锦鳞游泳； 岸芷汀兰， 郁郁青青。 而或长烟一空， 皓月千里， 浮光跃金， 静影沉璧， 渔歌互答， 此乐何极！ 登斯楼也， 则有心旷神怡， 宠辱偕忘， 把酒临风， 其喜洋洋者矣。'
        },
    ];

var domList = [];
var dom;
for(var i = 0; i < data.length;i++){
    dom =
    '<div class="topPart"><div class="text">回复详情</div><div class="close"></div></div>'
    + '<div class="midPart"><div class="logo"><img class="userLogo" src="' + data[i].userLogo + '"/></div>'
    + '<div class="name">' + data[i].userName + '</div>'
    + '<div class="time">' + data[i].messTime + '</div>'
    + '</div><div class="botPart">介绍：' + data[i].message + '</div>';
    domList.push(dom);
}

var mess = document.getElementsByClassName('mess');
for (var j = 0;j < data.length; j++){
    mess[j].innerHTML = domList[j];
}

var click_div = document.getElementsByClassName('div_05');
for(var i = 0;i<click_div.length;i++){
    click_div[i].onclick = (function(index){
        return function(e){
            e.stopPropagation();
            mess[index].style.left = 5.7 + "rem";
            mess[index].style.top = .45 + "rem";
            mess[index].style.display = 'block';
    };
})(i);
    // click_div[i].onmouseover = (function(index){
    //     return function(){
            
    //     }
    // })
}

var close = document.getElementsByClassName('close');
for (var i = 0;i<close.length;i++){
    close[i].onclick = (function(index){
        return function(e){
                e.stopPropagation();
                mess[index].style.display = 'none';
        };
    })(i);
}
