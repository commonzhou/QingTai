var datas = new Array();
var jsondata3 = "http://114.115.221.206:8088/qtserver/admin/accusation/getAccusationDetail";
$.ajax({
    url: jsondata3,
    type: "post",
    dataType: "json",
    async: false,

    success: function(data) {
        var stringdata = JSON.stringify(data);
        var newjson = JSON.parse(stringdata);
        alert(stringdata);

        var data2 = [{
                userLogo: 'http://img.qq1234.org/uploads/allimg/141111/3_11111011322592.jpg',
                userName: '你哈安全',
                messTime: '2017.03.23',
                message: '北京时间5月13日21时30分（德国当地时间15时30分），德甲倒数第2轮同时开球。拜仁客场5比4逆转莱比锡RB。莱万梅开二度，个人226场德甲打进151球，并在射手榜上超过奥巴梅扬1球。蒂亚戈和阿拉巴各下一城。罗本补时第5分钟一条龙上演绝杀。由于多特蒙德客场1比1战平，莱比锡RB提前锁定亚军席位。拜仁是本赛季德甲客场成绩最好的球队（36分），安切洛蒂更换4名首发。拉姆、阿隆索、罗本、蒂亚戈回归首发，取代拉菲尼亚、雷纳托-桑谢斯、道格拉斯-科斯塔、穆勒。身体疲劳的胡梅尔斯未进大名单。莱比锡RB此前连续7场不败，已锁定下赛季欧冠小组赛席位，成为首支首个德甲赛季就进军冠军联赛的球队。哈森许特尔沿用上轮首发　赛前，出自莱比锡RB青训营的基米希受到球迷欢迎。开场62秒，拜仁便遭当头一棒，福斯贝里左路突入禁区挑传，扎比策后点距门5米处冲顶入近角[点击观看视频]，1比0。这是莱比锡RB本赛季德甲第3次开场前2分钟内破门。主队第12分钟几乎扩大比分，波尔森策动反击，韦尔纳左路突入禁区打中远门柱内侧。'
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
        var clickList = [];
        var click;
        var dom;
        for (var i = 0; i < data2.length; i++) {
            dom =
                '<div class="topPart"><div class="text" id=' + i + '>回复详情</div><div class="close"></div></div>' +
                '<div class="midPart"><div class="logo"><img class="userLogo" src="' + data2[i].userLogo + '"/></div>' +
                '<div class="name">' + data2[i].userName + '</div>' +
                '<div class="time">' + data2[i].messTime + '</div>' +
                '</div><div class="botPart">介绍：' + data2[i].message + '</div>';
            click = '<div class="text">回复详情</div>';
            domList.push(dom);
            clickList.push(click);
        }

        var mess = document.getElementsByClassName('mess');

        for (var j = 0; j < data2.length; j++) {

            mess[j].innerHTML  =  domList[j];

        }
        var click_div = $('.div_05 a');
        for (var i = 0; i < click_div.length; i++) {
            click_div[i].onmouseover = (function(index) {
                return function(e) {
                    e.stopPropagation();
                    mess[index].style.left = 5.7 + "rem";
                    mess[index].style.top = .45 + "rem";
                    mess[index].style.display = 'block';
                    mess[index].style.width = 2.94 + "rem";
                    mess[index].style.height = 4.66 + "rem";
                };
            })(i);
        }

        var close = document.getElementsByClassName('close');
        for (var i = 0; i < close.length; i++) {
            close[i].onclick = (function(index) {
                return function(e) {
                    e.stopPropagation();
                    mess[index].style.display = 'none';
                };
            })(i);
            close[i].onclick = (index) => { //es6装逼必备
                (e) => {
                    e.stopPropagation();
                    mess[index].style.display = 'none';
                }
            }
        }
    }
});