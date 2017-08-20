$(document).ready(function() {
    var datas = new Array();
    var jsondata1 = "http://114.115.221.206:8088/qtserver/admin/analysis/getHotArticle";
    $.ajax({
        url: jsondata1,
        type: "get",
        dataType: "json",
        success: function(data) {
            var stringdata = JSON.stringify(data);
            var newjson = JSON.parse(stringdata);

            //alert(newjson[0].articleId);
            var label1 = $("li.label1");
            var label2 = $("li.label2");
            var name = $("li.name");
            var img = $("li.image2 img");

            var nickname = $("li.nickname");
            for (let j = 0; j < label1.length; j++) {
                for (let i = 0; i < 3; i++) {
                    if ((newjson[j].label.split(",")[i] == undefined) && (i == 0)) {
                        label1[j].style.backgroundColor = "white";
                    }
                    if ((newjson[j].label.split(",")[i] != undefined) && (i == 0)) {
                        label1[j].innerText = newjson[j].label.split(",")[i];
                    }
                    if ((newjson[j].label.split(",")[i] == undefined) && (i == 1)) {
                        label2[j * 2].style.backgroundColor = "white";
                    }
                    if ((newjson[j].label.split(",")[i] != undefined) && (i == 1)) {
                        label2[j * 2].innerText = newjson[j].label.split(",")[i];
                    }
                    if ((newjson[j].label.split(",")[i] == undefined) && (i == 2)) {
                        label2[j * 2 + 1].style.backgroundColor = "white";
                    }
                    if ((newjson[j].label.split(",")[i] != undefined) && (i == 2)) {
                        label2[j * 2 + 1].innerText = newjson[j].label.split(",")[i];
                    }
                }
                if (newjson[j].avator != "") {
                    img[j].src = newjson[j].avator;
                    img[j].style.width = 4 + "rem";
                    img[j].style.height = 4 + "rem";
                }
                nickname[j].innerText = newjson[j].nickName;

                if (newjson[j].type == 0) {
                    name[j].innerText = "[求助帖]" + newjson[j].title;
                }
                if (newjson[j].type == 1) {
                    name[j].innerText = "[分享贴]" + newjson[j].title;
                }

            }
            // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
            //$("#month").trigger("click");              //模拟点击来保证打开时主页有数值
        }
    });
});