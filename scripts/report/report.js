var reportdata = {
    data: [
        {
            reportName: '1',
            reportedName: '2',
            reportType: '帖子',
            reportReason: '色情',
            reportContent: 'abccccc',
            reportTime: 123456
        },
        {
            reportName: '6',
            reportedName: '7',
            reportType: '帖子',
            reportReason: '欺骗',
            reportContent: 'abccccc',
            reportTime: 123456
        }
    ],
    serverTime: 1111
};
var data = reportdata.data;
var domList = '';
var dom;
for(var i = 0; i < data.length;i++){
        dom = '<li class="new_li">' +
        '<div class="div_01">' + data[i].reportName + '<div class="intro"></div></div>' +
        '<div class="div_02">' + data[i].reportedName + '<div class="intro"></div></div>' +
        '<div class="div_03">' + data[i].reportType + '</div>' +
        '<div class="div_04">' + data[i].reportReason + '</div>' +
        '<div class="div_05" id="div_05">' + data[i].reportContent + '<div class="mess" id="mess"></div></div>' +
        '<div class="div_06">' + data[i].reportTime + '</div>' +
        '<div class="div_07"><select>' +
        '<option selected="selected">不处理</option>' +
        '<option>不处理</option>' +
        '<option>警告</option>' +
        '<option>禁言一天</option>' +
        '<option>禁言一周</option>' +
        '<option>禁言一天</option>' +
        '<option>封号</option>' +
        '</select></div>' +
        '<div class="div_08"><button class="btn" id="btn_sure">确定</button></div>' +
        '</li>';
        domList += dom;
}
var ul = document.getElementById('content_new');
ul.innerHTML = domList;