var callbackdata = {
    data: [
        {
            callbackName: '1',
            callbackSex: '男',
            callbackContent: 'abccccc',
            callbackNum: '123456667',
            callbackTime: 123456,
            callbackRea: 12
        },
        {
            callbackName: '6',
            callbackSex: '女',
            callbackContent: 'abccccc',
            callbackNum: '123456667',
            callbackTime: 123456,
            callbackRea: 12
        }
    ],
    serverTime: 1111
};
var data = callbackdata.data;
var domList = '';
var dom;
for(var i = 0; i < data.length;i++){
        dom = '<li>' +
        '<div class="div_01">' + data[i].callbackName + '</div>' +
        '<div class="div_02">' + data[i].callbackSex + '</div>' +
        '<div class="div_03">' + data[i].callbackContent + '</div>' +
        '<div class="div_04">' + data[i].callbackNum + ' </div>' +
        '<div class="div_05">' + data[i].callbackTime + '</div>' +
        '<div class="div_06">' + data[i].callbackRea + '</div>' +
        '<div class="div_07"><button class="btn" id="btn_sure">确定</button></div>' +
        '</li>';
        domList += dom;
}
var ul = document.getElementById('content_new');
ul.innerHTML = domList;