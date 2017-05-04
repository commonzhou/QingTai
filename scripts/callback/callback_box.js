var data = [
        {
            backPic:'http://img1.gtimg.com/news/pics/hv1/201/254/2203/143315046.jpg',
            backText:'目前，中国和美国、加拿大、澳大利亚分别建立了不同层次的司法执法合作机制，与新西兰在重点个案上开展良好合作。中央纪委监察部网站统计，2016年从美、加、澳、新等西方发达国家追回来的外逃人员数量有较大提升。'
        },
        {
            backPic:'http://img0.utuku.china.com/548x0/news/20170421/fb6a6eb4-2d40-4205-a994-7c8addf38b3a.jpg',
            backText:'你至若春和景明， 波澜不惊， 上下天光， 一碧万顷； 沙鸥翔集， 锦鳞游泳； 岸芷汀兰， 郁郁青青。 而或长烟一空， 皓月千里， 浮光跃金， 静影沉璧， 渔歌互答， 此乐何极！ 登斯楼也， 则有心旷神怡， 宠辱偕忘， 把酒临风， 其喜洋洋者矣。'
        },
        {
            backPic:'http://img1.gtimg.com/news/pics/hv1/201/254/2203/143315046.jpg',
            backText:'目前，中国和美国、加拿大、澳大利亚分别建立了不同层次的司法执法合作机制，与新西兰在重点个案上开展良好合作。中央纪委监察部网站统计，2016年从美、加、澳、新等西方发达国家追回来的外逃人员数量有较大提升。'
        },
        {
            backPic:'http://himg2.huanqiu.com/attachment2010/2017/0421/20170421122553152.jpg',
            backText:'你至若春和景明， 波澜不惊， 上下天光， 一碧万顷； 沙鸥翔集， 锦鳞游泳； 岸芷汀兰， 郁郁青青。 而或长烟一空， 皓月千里， 浮光跃金， 静影沉璧， 渔歌互答， 此乐何极！ 登斯楼也， 则有心旷神怡， 宠辱偕忘， 把酒临风， 其喜洋洋者矣。'
        },
        {
            backPic:'http://img1.gtimg.com/news/pics/hv1/201/254/2203/143315046.jpg',
            backText:'目前，中国和美国、加拿大、澳大利亚分别建立了不同层次的司法执法合作机制，与新西兰在重点个案上开展良好合作。中央纪委监察部网站统计，2016年从美、加、澳、新等西方发达国家追回来的外逃人员数量有较大提升。'
        },
        {
            backPic:'http://himg2.huanqiu.com/attachment2010/2017/0421/20170421122553597.jpg',
            backText:'你至若春和景明， 波澜不惊， 上下天光， 一碧万顷； 沙鸥翔集， 锦鳞游泳； 岸芷汀兰， 郁郁青青。 而或长烟一空， 皓月千里， 浮光跃金， 静影沉璧， 渔歌互答， 此乐何极！ 登斯楼也， 则有心旷神怡， 宠辱偕忘， 把酒临风， 其喜洋洋者矣。'
        },
        {
            backPic:'http://img1.gtimg.com/news/pics/hv1/201/254/2203/143315046.jpg',
            backText:'目前，中国和美国、加拿大、澳大利亚分别建立了不同层次的司法执法合作机制，与新西兰在重点个案上开展良好合作。中央纪委监察部网站统计，2016年从美、加、澳、新等西方发达国家追回来的外逃人员数量有较大提升。'
        },
        {
            backPic:'http://himg2.huanqiu.com/attachment2010/2017/0421/20170421122553597.jpg',
            backText:'你至若春和景明， 波澜不惊， 上下天光， 一碧万顷； 沙鸥翔集， 锦鳞游泳； 岸芷汀兰， 郁郁青青。 而或长烟一空， 皓月千里， 浮光跃金， 静影沉璧， 渔歌互答， 此乐何极！ 登斯楼也， 则有心旷神怡， 宠辱偕忘， 把酒临风， 其喜洋洋者矣。'
        }
    ];

var domList = [];
var dom;
for(var i = 0;i<data.length;i++){
    dom = '<div class="topPart"><div class="text">反馈详情</div><div class="close"></div></div>'
    + '<div class="midPart"><img class="bPic" src="' + data[i].backPic + '"/></div>'
    + '<div class="botPart">' + data[i].backText + '</div></div>'
    domList.push(dom);
}

var box = document.getElementsByClassName('box');
for (var j = 0;j < data.length; j++){
    box[j].innerHTML = domList[j];
}

var click_div = document.getElementsByClassName('div_03');
for(var i = 0 ; i < click_div.length;i++){
        click_div[i].onclick = (function(index){
           return function(e){
                e.stopPropagation();
                box[index].style.left = 3.5 + "rem";
                box[index].style.top = .45 + "rem";
                box[index].style.display = 'block';
            };
        })(i);

}


var close = document.getElementsByClassName('close');
for(var i=0; i<close.length; i++){
        close[i].onclick = (function(index){
        return function(e){
        e.stopPropagation();
        box[index].style.display = 'none';
    };
    })(i);
}
