var datas = new Array();
var jsondata1 = "http://114.115.221.206:8088/qtserver/admin/feedback/getInfoList";
var jsondata2 = "http://114.115.221.206:8088/qtserver/admin/feedback/submitResult";
var jsondata3 = "http://114.115.221.206:8088/qtserver/admin/feedback/getUserInfo";
var jsondata4 = "http://114.115.221.206:8088/qtserver/admin/feedback/getFeedBackDetail";
$.ajax({ //对反馈基本信息的请求
    url: jsondata1,
    type: "get",
    dataType: "json",
    success: function(data) {
        var stringdata = JSON.stringify(data);
        var newjson = JSON.parse(stringdata);
        var  domList = '';
        var  dom;
        for (var i = 0; i < newjson.length; i++) {
            if (newjson[i].contact == "") {
                newjson[i].contact = "无"
            }
            newjson[i].time = newjson[i].time.split(" ")[0];
            dom  =  '<li>'  +         '<div class="div_01"><img class="nickName" src="' + newjson[i].avator + '"/><div class="intro"></div></div>'  +         '<div class="div_02">'  +  newjson[i].gender  +  '</div>'  +         '<div class="div_03" id="div_03"><a class="contentAll" href="#">'  + "查看" +  '</a><div class="box" id="box"></div></div>'  +         '<div class="div_04">' + newjson[i].contact + ' </div>'  +         '<div class="div_05">' + newjson[i].time + '</div>'  +         '<div class="div_06">'  + "" + '</div>'  +         '<div class="div_07"><button class="btn">确定</button></div>'  +         '</li>';
            domList  +=  dom;
        }
        var  ul  =  document.getElementById('content_new');
        ul.innerHTML  =  domList;

        var btn = document.getElementsByClassName('btn');
        var div_06 = document.getElementsByClassName('div_06');
        var img = document.getElementsByTagName("img");
        var links = document.getElementsByClassName("contentAll");
        //for循环提交是否查看
        for (let j = 0; j < btn.length; j++) {
            btn[j].onclick = (function(index) {
                return function() {
                    div_06[index].style.backgroundColor = '#a1a1a1';
                    btn[index].style.backgroundColor = "#a1a1a1";
                    btn[index].innerHTML = "已查看";
                    // alert(newjson[index].id);
                    ////
                    var ids = newjson[index].id;
                    $.ajax({
                        url: jsondata2,
                        type: "post",
                        dataType: "json",

                        data: {
                            "id": ids
                        },
                        success: function(data) {
                            var newString = JSON.stringify(data);
                            var newData = JSON.parse(newString);
                            // alert(newString);
                            if (newData.code != 100) {
                                alert("嘿嘿嘿，提交失败了吧")
                            }
                        }
                    });
                    ////
                };
            })(j);
        }
        //for循环mouseover头像看用户信息
        for (let i = 0; i < newjson.length; i++) {
            img[i].onmouseover = function() {
                var datas = new Array();
                $.ajax({
                    url: jsondata3,
                    type: "post",
                    dataType: "json",
                    data: {
                        "userId": newjson[i].userId
                    },
                    success: function(data) {
                        var stringdata1 = JSON.stringify(data);
                        var newjson1 = JSON.parse(stringdata1);
                        var domList = '';
                        var dom;
                        var intro = document.getElementsByClassName('intro');
                        var data = [{
                            avator: 'http://v1.qzone.cc/avatar/201408/03/23/44/53de58e5da74c247.jpg%21200x200.jpg',
                            nickName: '东海大道',
                            label: 'java',
                            introduction: '你好',
                            school: '西安电子科技大学',
                            education: '本科',
                            location: '陕西 西安'
                        }]
                        dom =
                            '<div class="top">' +
                            '<div class="logo"><img class="avator" src="' + newjson1.avator + '"/></div>' +
                            '<div class="name">' + newjson1.nickName + '</div>' +
                            '<div class="icon">' + newjson1.label + '</div>' +
                            '</div><div class="bottom"><ul><li>介绍：' + newjson1.introduction + '</li>' +
                            '<li>学校：' + newjson1.school + '</li>' +
                            '<li>学历：' + newjson1.education + '</li>' +
                            '<li>所在地：' + newjson1.location + '</li>' +
                            '</ul></div></div>';
                        intro[i].innerHTML = dom;

                    }
                });

            }
        }
        //for循环mouseover查看具体信息
        for (let i = 0; i < newjson.length; i++) {
            links[i].onmouseover = function(e) {
                var datas = new Array();
                $.ajax({
                    url: jsondata4,
                    type: "post",
                    dataType: "json",
                    data: {
                        "id": newjson[i].id
                    },
                    success: function(data) {
                        var stringdata1 = JSON.stringify(data);
                        var newjson1 = JSON.parse(stringdata1);
                        // alert(stringdata1);

                        var data1 = [{
                            backPic: 'http://img1.gtimg.com/news/pics/hv1/201/254/2203/143315046.jpg',
                            backText: '目前，中国和美国、加拿大、澳大利亚分别建立了不同层次的司法执法合作机制，与新西兰在重点个案上开展良好合作。中央纪委监察部网站统计，2016年从美、加、澳、新等西方发达国家追回来的外逃人员数量有较大提升。'
                        }];

                        var domList = [];
                        var dom;
                        //for (var i = 0; i < data.length; i++) {
                        dom = '<div class="topPart"><div class="text">反馈详情</div><div class="close"></div></div>' +
                            '<div class="midPart"><img class="bPic" src="' + data1[i].backPic + '"/></div>' +
                            '<div class="botPart">' + newjson1.content + '</div></div>'
                            //domList.push(dom);
                            //}

                        var box = document.getElementsByClassName('box');
                        // for (var j = 0; j < data.length; j++) {
                        box[i].innerHTML  = dom;
                        //}

                        var click_div = $('.div_03 a');
                        e.stopPropagation();
                        box[i].style.left = 3.5 + "rem";
                        box[i].style.top = .45 + "rem";
                        box[i].style.display = 'block';
                        box[i].style.width = 2.94 + "rem";
                        box[i].style.height = 4.66 + "rem";

                        var close = box[i].getElementsByClassName("close");
                        close[0].onclick = function(e) {
                            e.stopPropagation();
                            box[i].style.display = 'none';
                        }
                    }
                });
            }
        }
    }
});