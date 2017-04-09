var callbackdata = {
    data: [
        {
            callbackName: '1',
            callbackSex: '男',
            callbackContent: 'abccccc',
            callbackNum: '123456667',
            callbackTime: 123456,
            callbackRea: ''
        },
        {
            callbackName: '6',
            callbackSex: '女',
            callbackContent: 'abccccc',
            callbackNum: '123456667',
            callbackTime: 123456,
            callbackRea: ''
        }
    ],
    serverTime: 1111
};
var data = callbackdata.data;
var domList = '';
var dom;
for(var i = 0; i < data.length;i++){
        dom = '<li>' +
        '<div class="div_01">' + data[i].callbackName + '<div class="intro"></div></div>' +
        '<div class="div_02">' + data[i].callbackSex + '</div>' +
        '<div class="div_03" id="div_03">' + data[i].callbackContent + '<div class="box" id="box"></div></div>' +
        '<div class="div_04">' + data[i].callbackNum + ' </div>' +
        '<div class="div_05">' + data[i].callbackTime + '</div>' +
        '<div class="div_06">' + data[i].callbackRea + '</div>' +
        '<div class="div_07"><button class="btn">确定</button></div>' +
        '</li>';
        domList += dom;
}
var ul = document.getElementById('content_new');
ul.innerHTML = domList;

var btn = document.getElementsByClassName('btn');
var div_06 = document.getElementsByClassName('div_06');
for(j = 0; j < btn.length;j++){
        btn[j].onclick = (function(index){
                return function(){
                        div_06[index].style.backgroundColor = '#FA6F06';
                        btn[index].style.backgroundColor = "#FA6F06";
                        btn[index].innerHTML = "已查看";
                };
        })(j);
}



