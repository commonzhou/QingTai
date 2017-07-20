var dom = document.getElementById("graph4");
var myChart = echarts.init(dom);
var option = null;
function randomData() {
    return Math.round(Math.random()*1000);
}

var datas=new Array();
//var newjson;
var jsondata1="http://114.115.221.206:8088/qtserver/admin/analysis/getProvince";
 $.ajax({
  url: jsondata1,type:"get", 
  async:false,             //interesting，false为同步，true异步，异步时有奇怪的bug
  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    
     //datas[0]=newjson.result[0];

option = {
    title: {
        text: '地理位置',
        left: '22',
        top:"15",
        textStyle:{
        fontFamily: "PingFangSC-Regular",
        fontSize:"16",
        color: "#384146"
      }       
    },
   
    tooltip: {                                 //提示框
        trigger: 'item'                       // 数据项图形触发
        
    },
    toolbox: {              //工具栏
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {           //显示i这三个
            dataView: {readOnly: false},          //数据视图
            restore: {},                          //数据复原
            saveAsImage: {}                       //存为图片
        }
    },
    visualMap: {                      //数据的映射
        min: 0,
        max: 100,                    //标尺人数上线修改此处
        left: 20,
        bottom: 40,
        itemHeight:100,
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true,
        textStyle:{
            fontSize:12
        },
        inRange:{
            color:['#00D7E1','#00AAE1','#0082D2']
        }
    },
    series: [
        {
            name:"使用人数",             //与legend相对应
            type: 'map',
            mapType: 'china',
            roam: false,                    //是否开启鼠标缩放和平移漫游。默认不开启。
            label: {                        //图形上的文本标签
                normal: {
                    show: false
                },
                emphasis: {                 //高亮
                    show: false
                }
            },
            left:"35",
            top:"48",
            symbol:"pin",
            data:[
                {name: '北京',value: newjson.result[0],itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '天津',value: newjson.result[13],itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '上海',value: newjson.result[5],itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '重庆',value: newjson.result[11],itemStyle:{normal:{areaColor:"##00D7E1" }} },
                {name: '河北',value: newjson.result[6],itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '河南',value: newjson.result[4],itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '云南',value: newjson.result[14],itemStyle:{normal:{areaColor:"#00D7E1" }} },
                {name: '辽宁',value: newjson.result[22],itemStyle:{normal:{areaColor:"#00D7E1" }} },
                {name: '黑龙江',value: newjson.result[24],itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '湖南',value: newjson.result[10],itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '安徽',value: newjson.result[17],itemStyle:{normal:{areaColor:"#00D7E1" }}},
                {name: '山东',value: newjson.result[2],itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '新疆',value: newjson.result[30],itemStyle:{normal:{areaColor:"#0082D2" }}},
                {name: '江苏',value: newjson.result[3],itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '浙江',value: newjson.result[7],itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '江西',value: newjson.result[19],itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '湖北',value: newjson.result[20],itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '广西',value: newjson.result[16],itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '甘肃',value: newjson.result[28],itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '山西',value: newjson.result[21],itemStyle:{normal:{areaColor:"#00D7E1" }} },
                {name: '内蒙古',value: newjson.result[25],itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '陕西',value: newjson.result[9],itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '吉林',value: newjson.result[32],itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '福建',value: newjson.result[12],itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '贵州',value: newjson.result[27],itemStyle:{normal:{areaColor:"#00D2AA" }}},
                {name: '广东',value: newjson.result[1],itemStyle:{normal:{areaColor:"#00D7E1" }} },
                {name: '青海',value: newjson.result[29],itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '西藏',value: newjson.result[31],itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '四川',value: newjson.result[15],itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '宁夏',value: newjson.result[33],itemStyle:{normal:{areaColor:"#00D7E1" }} },
                {name: '海南',value: newjson.result[18],itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '台湾',value: newjson.result[23],itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '香港',value: newjson.result[8],itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '澳门',value: newjson.result[26],itemStyle:{normal:{areaColor:"#0082D2" }} }
            ]
        }
        
    ]
};
////////对于数据进行大小排序，以便在数据视图里面显示时按照顺序
var temp=[];
var t;
for(var k=0;k<34;k++){
    temp.push(option.series[0].data[k]);
}
for(var i=0;i<34;i++){
    for (var j = i+1; j < 34; j++) {
        if(temp[i].value<temp[j].value){
           t=temp[i];
           temp[i]=temp[j];
           temp[j]=t;
        }
    }
}
for(var k=0;k<34;k++){
    option.series[0].data[k]=temp[k];
}
if(window.navigator.userAgent.indexOf("Chrome")== -1){ 
   option.visualMap.itemHeight=60;
   option.visualMap.bottom=20;
}
if (option && typeof option === "object") {
   
    myChart.setOption(option, false);                 //是否不跟之前设置的option进行合并，默认为false，即合并。
}
}
}); 
