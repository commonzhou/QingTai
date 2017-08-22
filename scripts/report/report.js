var datas = new Array();
var jsondata1 = "http://114.115.221.206:8088/qtserver/admin/accusation/getInfoList";
var jsondata2 = "http://114.115.221.206:8088/qtserver/admin/accusation/getUserInfo";
var jsondata3 = "http://114.115.221.206:8088/qtserver/admin/accusation/getAccusationDetail";
var jsondata4 = "http://114.115.221.206:8088/qtserver/admin/accusation/submitResult";
$.ajax({
    url: jsondata1,
    type: "get",
    async: false,
    dataType: "json",
    success: function(data) {
        var stringdata = JSON.stringify(data);
        var newjson = JSON.parse(stringdata);

        var  domList = '';
        var domListChuli = "";
        var  dom;
        for (var i = 0; i < newjson.length; i++) {

            switch (newjson[i].type) {
                case 0:
                    newjson[i].type = "帖子";
                    break;
                case 1:
                    newjson[i].type = "评论";
                    break;
                case 2:
                    newjson[i].type = "评论的评论";
                    break;
                case 3:
                    newjson[i].type = "用户";
                    break;
                default:
                    newjson[i].type = "未知";
            }
            switch (newjson[i].reason) {
                case 0:
                    newjson[i].reason = "小广告";
                    break;
                case 1:
                    newjson[i].reason = "淫秽色情";
                    break;
                case 2:
                    newjson[i].reason = "人身攻击";
                    break;
                case 3:
                    newjson[i].reason = "虚假信息";
                    break;
                default:
                    newjson[i].reason = "未知";
            }
            newjson[i].time = newjson[i].time.split(" ")[0];
            if (newjson[i].flag == 0) {
                dom  =  '<li class="new_li">'  +         '<div class="div_01"><img class="sender" src="' + newjson[i].savator + '"/><div class="intro"></div></div>'  +         '<div class="div_02"><img class="receiver" src="' + newjson[i].ravator + '"/><div class="intro"></div></div>'  +         '<div class="div_03">'  +  newjson[i].type  +  '</div>'  +         '<div class="div_04">'  +  newjson[i].reason  +  '</div>'  +         '<div class="div_05"><a class="point" href="#">' + "查看" + '</a><div class="mess"></div></div>'  +         '<div class="div_06">' + newjson[i].time + '</div>'  +         '<div class="div_07"><select>'  +         '<option selected="selected">不处理</option>'  +         '<option>不处理</option>'  +         '<option>警告</option>'  +         '<option>禁言一天</option>'  +         '<option>禁言一周</option>'  +         '<option>禁言一天</option>'  +         '<option>封号</option>'  +         '</select></div>'  +         '<div class="div_08"><button class="btn">确定</button></div>'  +         '</li>';
                domList  +=  dom;
            } else {
                dom  =  '<li class="new_li">'  +         '<div class="div_01"><img class="sender" src="' + newjson[i].savator + '"/><div class="intro"></div></div>'  +         '<div class="div_02"><img class="receiver" src="' + newjson[i].ravator + '"/><div class="intro"></div></div>'  +         '<div class="div_03">'  +  newjson[i].type  +  '</div>'  +         '<div class="div_04">'  +  newjson[i].reason  +  '</div>'  +         '<div class="div_05"><a class="point" href="#">' + "查看" + '</a><div class="mess"></div></div>'  +         '<div class="div_06">' + newjson[i].time + '</div>'  +         '<div class="div_07"><select>'  +         '<option selected="selected">不处理</option>'  +         '<option>不处理</option>'  +         '<option>警告</option>'  +         '<option>禁言一天</option>'  +         '<option>禁言一周</option>'  +         '<option>禁言一天</option>'  +         '<option>封号</option>'  +         '</select></div>'  +         '<div class="div_08"><button class="btn2">已处理</button></div>'  +         '</li>';
                domListChuli +=  dom;
            }
        }
        var  ul  =  document.getElementById('content_new');
        //domList = domList + domListChuli;
        ul.innerHTML  =  domList;

        var btn = document.getElementsByClassName('btn');
        var senders = document.getElementsByClassName('sender');
        var receives = document.getElementsByClassName('receiver');
        var newlinks = document.getElementsByClassName("point");
        var selects = document.getElementsByTagName("select");
        for (var i = 0; i < btn.length; i++) {
            btn[i].onclick = (function(index) {
                return function() {
                    btn[index].innerHTML = '已处理';
                    btn[index].style.backgroundColor = '#a1a1a1';
                    //alert(selects[index].value);
                    var ids = newjson[index].id;
                    var results = selects[index].value;
                    switch (results) {
                        case "不处理":
                            results = 1;
                            break;
                        case "警告":
                            results = 2;
                            break;
                        case "禁言一天":
                            results = 3;
                            break;
                        case "禁言一周":
                            results = 4;
                            break;
                        case "禁言一月":
                            results = 5;
                            break;
                        case "封号":
                            results = 6;
                            break;
                        default:
                            results = "";
                    }
                    $.ajax({
                        url: jsondata4,
                        type: "post",
                        dataType: "json",
                        data: {
                            "id": ids,
                            "result": results
                        },
                        success: function(data) {
                            var newString = JSON.stringify(data);
                            var newData = JSON.parse(newString);
                            //alert(newString);
                            if (newData.code != 300) {
                                alert("嘿嘿嘿，提交失败了吧")
                            }
                        }
                    });
                };
            })(i);
        }
        ////////////////////////////////
        var data1 = [
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
                }
            ],
            [{
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
                }
            ],
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
                }
            ],
            [{
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
                }
            ],
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
                }
            ],
            [{
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
                }
            ],
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
                }
            ],
            [{
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
                }
            ]
        ];
        for (let i = 0; i < newjson.length; i++) {
            senders[i].onmouseover = function() {
                var datas = new Array();
                $.ajax({
                    url: jsondata2,
                    type: "post",
                    dataType: "json",
                    data: {
                        'userId': newjson[i].senderId
                    },
                    success: function(data) {
                        var stringdata1 = JSON.stringify(data);
                        var newjson1 = JSON.parse(stringdata1);
                        var dom;
                        var dom2;
                        var intro = document.getElementsByClassName('intro');
                        //for (var i = 0; i < data1.length; i++) {
                        dom1 =
                            '<div class="top">' +
                            '<div class="logo"><img class="avator" src="' + newjson1.avator + '"/></div>' +
                            '<div class="name">' + newjson1.nickName + '</div>' +
                            '<div class="icon">' + newjson1.label + '</div>' +
                            '</div><div class="bottom"><ul><li>介绍：' + newjson1.introduction + '</li>' +
                            '<li>学校：' + newjson1.School + '</li>' +
                            '<li>学历：' + newjson1.education + '</li>' +
                            '<li>所在地：' + newjson1.location + '</li>' +
                            '</ul></div></div>';

                        intro[i * 2].innerHTML = dom1;
                    }
                });
            }
        }
        for (let i = 0; i < newjson.length; i++) {
            receives[i].onmouseover = function() {
                var datas = new Array();
                $.ajax({
                    url: jsondata2,
                    type: "post",
                    dataType: "json",
                    data: {
                        'userId': newjson[i].receiverId
                    },
                    success: function(data) {
                        var stringdata1 = JSON.stringify(data);
                        var newjson1 = JSON.parse(stringdata1);
                        var dom;
                        var dom2;
                        var intro = document.getElementsByClassName('intro');
                        //for (var i = 0; i < data1.length; i++) {
                        dom2 =
                            '<div class="top">' +
                            '<div class="logo"><img class="avator" src="' + newjson1.avator + '"/></div>' +
                            '<div class="name">' + newjson1.nickName + '</div>' +
                            '<div class="icon">' + newjson1.label + '</div>' +
                            '</div><div class="bottom"><ul><li>介绍：' + newjson1.introduction + '</li>' +
                            '<li>学校：' + newjson1.School + '</li>' +
                            '<li>学历：' + newjson1.education + '</li>' +
                            '<li>所在地：' + newjson1.location + '</li>' +
                            '</ul></div></div>';
                        intro[(i * 2) + 1].innerHTML = dom2;
                    }
                });
            }
        }
        ////////////////////////////////
        for (let i = 0; i < newjson.length; i++) {
            newlinks[i].onmouseover = function() {
                var datas = new Array();
                $.ajax({
                    url: jsondata3,
                    type: "post",
                    dataType: "json",
                    data: {
                        "id": newjson[i].id
                    },
                    success: function(data) {
                        var stringdata2 = JSON.stringify(data);
                        var newjson2 = JSON.parse(stringdata2);
                        //alert(stringdata2);

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
                        if (newjson2.type == 1) {
                            dom =
                                '<div class="topPart"><div class="text" id=' + i + '>一级评论</div><div class="close"></div></div>' +
                                '<div class="midPart"><div class="logo"><img class="userLogo" src="' + newjson2.object.avator + '"/></div>' +
                                '<div class="name">' + newjson2.object.nickName + '</div>' +
                                '<div class="time">' + newjson2.object.time + '</div>' +
                                '</div><div class="botPart">介绍：' + newjson2.object.content + '</div>';
                        }

                        if (newjson2.type == 0) {
                            dom =
                                '<div class="topPart"><div class="text" id=' + i + '>帖子</div><div class="close"></div></div>' +
                                '<div class="midPart"><div class="logo"><img class="userLogo" src="' + newjson2.object.avator + '"/></div>' +
                                '<div class="name">' + newjson2.object.nickName + '</div>' +
                                '<div class="time">' + newjson2.object.time + '</div>' +
                                '</div><div class="botPart">介绍：' + newjson2.object.content + '</div>';
                        }
                        if (newjson2.type == 2) {
                            dom =
                                '<div class="topPart"><div class="text" id=' + i + '>二级评论</div><div class="close"></div></div>' +
                                '<div class="midPart"><div class="logo"><img class="userLogo" src="' + newjson2.object.avator + '"/></div>' +
                                '<div class="name">' + newjson2.object.nickName + '</div>' +
                                '<div class="time">' + newjson2.object.time + '</div>' +
                                '</div><div class="botPart">介绍：' + newjson2.object.content + '</div>';
                        }
                        if (newjson2.type == 3) {
                            dom =
                                '<div class="topPart"><div class="text" id=' + i + '>用户信息</div><div class="close"></div></div>' +
                                '<div class="midPart"><div class="logo"><img class="userLogo" src="' + newjson2.object.avator + '"/></div>' +
                                '<div class="name">' + newjson2.object.nickName + '</div>' +
                                '<div class="time">' + newjson2.object.school + '</div>' +
                                '</div><div class="botPart">介绍：' + newjson2.object.label + '</div>';
                        }
                        var mess = document.getElementsByClassName('mess');
                        mess[i].innerHTML  =  dom;
                        mess[i].style.left = 5.7 + "rem";
                        mess[i].style.top = .45 + "rem";
                        mess[i].style.display = 'block';
                        mess[i].style.width = 2.94 + "rem";
                        mess[i].style.height = 4.66 + "rem";
                        var close = mess[i].getElementsByClassName("close");
                        close[0].onclick = function(e) {
                            e.stopPropagation();
                            mess[i].style.display = 'none';
                        }
                    }
                });
            }
        }

        ////////////////////////////////

    }
});