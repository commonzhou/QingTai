var main=document.getElementById("graph3");
var myChart=echarts.init(main);
var datas=new Array();
var datas2=new Array();
var jsondata1="http://114.115.221.206:8088/qtserver/admin/analysis/getSearchNumByMonth";
var jsondata2="http://114.115.221.206:8088/qtserver/admin/analysis/getSearchNumByWeek";
var jsondata3="http://114.115.221.206:8088/qtserver/admin/analysis/getSearchNumByDay";
$.ajax({
  url: jsondata1,type:"get", 
  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[0]=newjson.presult[3]; datas[1]=newjson.presult[2]; datas[2]=newjson.presult[1]; datas[3]=newjson.presult[0];
    datas2[0]=newjson.aresult[3]; datas2[1]=newjson.aresult[2]; datas2[2]=newjson.aresult[1]; datas2[3]=newjson.aresult[0];
   // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
    $("#month").trigger("click");              //模拟点击来保证打开时主页有数值
}
}); 
$.ajax({
  url: jsondata2,type:"get", 
  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[4]=newjson.presult[3]; datas[5]=newjson.presult[2]; datas[6]=newjson.presult[1]; datas[7]=newjson.presult[0];
    datas2[4]=newjson.aresult[3]; datas2[5]=newjson.aresult[2]; datas2[6]=newjson.aresult[1]; datas2[7]=newjson.aresult[0];
   // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
    $("#month").trigger("click");              //模拟点击来保证打开时主页有数值
}
}); 
$.ajax({
  url: jsondata3,type:"get", 
  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[8]=newjson.presult[6]; datas[9]=newjson.presult[5]; datas[10]=newjson.presult[4]; datas[11]=newjson.presult[3];
    datas[12]=newjson.presult[2]; datas[13]=newjson.presult[1]; datas[14]=newjson.presult[0]; 
    datas2[8]=newjson.aresult[6]; datas2[9]=newjson.aresult[5]; datas2[10]=newjson.aresult[4]; datas2[11]=newjson.aresult[3];
    datas2[12]=newjson.aresult[2]; datas2[13]=newjson.aresult[1]; datas2[14]=newjson.aresult[0];
   // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
    $("#month").trigger("click");              //模拟点击来保证打开时主页有数值
}
}); 

 // 指定图表的配置项和数据
 var option={
   
   tooltip:{},
   legend:{
   	width:64,
   	height:22,
   	icon: 'circle',
   	 textStyle: {
        fontFamily:"PingFangSC-Regular",
        fontSize:16
    },

    inactiveColor:"#B8B0B0",
    orient:'horizontal',
    left:764,
    top:110,
    data: [{
    name: '搜人次数',
    textStyle: {
        color: '#11C728'
    }
    },
    {
    name: '搜帖次数',
    textStyle: {
        color: '#59C8F2'
    }
    }
]    
},
   grid:{
    
    containLabel: true,               //不溢出
   	top:23,
   	left:88,
   	height:361,
   	width:614                        //此处ui为614，但是echarts溢出。所以只好改了。。。
   },
   xAxis:{
   	type:'category',
   	boundaryGap: false,
    axisLine: {onZero: true},
   	data:['1月','2月','3月','4月'],
   	 axisTick: {
                show: true,
                alignWithLabel: true             //保证刻度线和标签对齐
            },
            axisLine:{                           //坐标轴轴线相关设置。
                lineStyle:{
                    color:"#D8D8D8",
                    width:2
                }
            }
   
   },
   yAxis:{
   	type: 'value',
   	min:"0",
   	boundaryGap: [0, '20%'],
   	axisLine: {onZero: true},
   	splitNumber:"3",
   	splitLine:{
   		show:false                     //true  false不加引号。。。
   	},
   	axisTick: {
                show: true,
                alignWithLabel: true             //保证刻度线和标签对齐
            },
            axisLine:{                           //坐标轴轴线相关设置。
                lineStyle:{
                    color:"#D8D8D8",
                    width:2
                }
            },
   
    textStyle: {
        fontSize: 14,
        color: '#D8D8D8'
    
}
   },
   color:['#11C728'],
  
   series:[
   {
   	 name:"搜人次数",
   	 type:"line",
     symbol:"circle",
     symbolSize:12,
     itemStyle: {
            normal: {
                color: '#11C728'
            }
        },
   	 data:[0,100,1000,1500]
   },
   {
   	 name:"搜帖次数",
   	 type:"line",
     symbol:"circle",
     symbolSize:12,
     itemStyle: {
            normal: {
                color: '#59C8F2'
            }
        },
   	 data:[220,300,1300,1900]
   }

   ]
};

if(screen.width>1600){                                //响应式布局理念，针对1920*1080显示器的改正
  option.grid.top=55;
  option.legend.left=950;
  var distance=option.legend.left;
  distance=distance+6;

document.getElementById("choseNum").style.left=distance+"px";
document.getElementById("month").style.left=distance+"px";
document.getElementById("week").style.left=distance+36+"px";
document.getElementById("date").style.left=distance+72+"px";
}
if(window.navigator.userAgent.indexOf("Chrome") !== -1){   //针对chrome 12px最小字体的问题
    if(screen.width=1366){
      option.grid.top=60;
      option.legend.left=960;
      var distance=option.legend.left;
      distance=distance+2;

      document.getElementById("choseNum").style.left=distance+"px";
      document.getElementById("month").style.left=distance+"px";
      document.getElementById("week").style.left=distance+36+"px";
      document.getElementById("date").style.left=distance+72+"px";     
    }
}

var myDate=new Date();
var gettedMonth=myDate.getMonth()+1;          //获取月份
var gettedDate=myDate.getDate();

/////月周日切换
$("#date").click(function(){
   this.style.backgroundColor="#4EC4F1";
   this.style.color="#FFF";
   document.getElementById("week").style.backgroundColor="#FFF";
   document.getElementById("month").style.backgroundColor="#FFF";
   document.getElementById("week").style.color="#807D7D";
   document.getElementById("month").style.color="#807D7D";
   option.xAxis.data=[gettedMonth+'-'+(gettedDate-6),gettedMonth+'-'+(gettedDate-5),gettedMonth+'-'+(gettedDate-4),gettedMonth+'-'+(gettedDate-3),
   gettedMonth+'-'+(gettedDate-2),gettedMonth+'-'+(gettedDate-1),gettedMonth+'-'+gettedDate];
   option.series[0].data=[datas[8],datas[9],datas[10],datas[11],datas[12],datas[13],datas[14],datas[15]];
   option.series[1].data=[datas2[8],datas2[9],datas2[10],datas2[11],datas2[12],datas2[13],datas2[14],datas2[15]];
   
   myChart.setOption(option); 
});
$("#week").click(function(){
   this.style.backgroundColor="#4EC4F1";
   this.style.color="#FFF";
   document.getElementById("month").style.backgroundColor="#FFF";
   document.getElementById("date").style.backgroundColor="#FFF";
   document.getElementById("month").style.color="#807D7D";
   document.getElementById("date").style.color="#807D7D";
   option.xAxis.data=['4','3','2','1'];
   option.series[0].data=[datas[4],datas[5],datas[6],datas[7]];
   option.series[1].data=[datas2[4],datas2[5],datas2[6],datas2[7]];
  
   myChart.setOption(option);   
});
$("#month").click(function(){
   this.style.backgroundColor="#4EC4F1";
   this.style.color="#FFF";
   document.getElementById("date").style.backgroundColor="#FFF";
   document.getElementById("week").style.backgroundColor="#FFF";
   document.getElementById("date").style.color="#807D7D";
   document.getElementById("week").style.color="#807D7D";
   //判断减法后的大小，月份为负数需要加12
   option.xAxis.data=[(((gettedMonth-3)>0)?(gettedMonth-3):(gettedMonth-3+12))+'月',(((gettedMonth-2)>0)?(gettedMonth-2):(gettedMonth-2+12))+'月',
   (((gettedMonth-1)>0)?(gettedMonth-1):(gettedMonth-1+12))+'月',gettedMonth+'月'];
   option.series[0].data=[datas[0],datas[1],datas[2],datas[3]];
   option.series[1].data=[datas2[0],datas2[1],datas2[2],datas2[3]];
   
   myChart.setOption(option); 
});

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);           
/////由于浏览器的字体大小问题，所以用这个先获取legend的left数值，再进行加减赋值给月周日的left
var distance=option.legend.left;
distance=distance+6;

document.getElementById("choseNum").style.left=distance+"px";
document.getElementById("month").style.left=distance+"px";
document.getElementById("week").style.left=distance+36+"px";
document.getElementById("date").style.left=distance+72+"px";
