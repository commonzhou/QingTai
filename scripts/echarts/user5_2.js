$(document).ready(function(){
var dom = document.getElementById("graph5");
var myChart = echarts.init(dom);
var option = null;

var datas=new Array();
var jsondata1="http://114.115.221.206:8088/qtserver/admin/analysis/getEducation";
$.ajax({
  url: jsondata1,type:"get", 
  dataType: "json" ,
  async:false,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[0]=newjson.result[0]; datas[1]=newjson.result[1]; datas[2]=newjson.result[2]; datas[3]=newjson.result[3];
   // alert(datas);                           // 如果在ajax外的话，可能来不及获取，导致值为空
   // $(".graph5").trigger("hover");              //模拟点击来保证打开时主页有数值
}
}); 

option={
	title:{
		text:"学历情况",
		left: '26',
        top:"15",
        textStyle:{
        fontFamily: "PingFangSC-Regular",
        fontSize:"16",
        color: "#384146"
	    }
    },
	legend:{
		orient:"vertical",
		top:"87",
		left:"263",
		icon:"roundRect",
   	    textStyle: {
        fontFamily:"PingFangSC-Regular",
        fontSize:"14",
        color: "#6F6B6B"
    },
       data:["本科","硕士","博士","其他"]
	},
	 tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    series: [
        {
            name:'学历',
            type:'pie',
            radius: ['45.9', '76.3'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false             //去掉圆环中间高亮时的文字显示                   
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            center:[123.95,140.9],
            data:[
                {value:datas[0], name:'本科',itemStyle: {normal: {color: '#00D2AA'}}},
                {value:datas[1], name:'硕士',itemStyle: {normal: {color: '#FAE863'}}},
                {value:datas[2], name:'博士',itemStyle: {normal: {color: '#FC9029'}}},
                {value:datas[3], name:'其他',itemStyle: {normal: {color: '#DF2938'}}}           //获取数据有时延
            ]
        }
    ]
};

  myChart.setOption(option, true);                 //是否不跟之前设置的option进行合并，默认为false，即合并。

});