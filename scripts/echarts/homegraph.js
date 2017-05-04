var main=document.getElementById("graph1");
var myChart=echarts.init(main);

var jsondata="http://114.115.221.206:8088/qtserver/admin/main/getRegisterNumByDay";
//$.getJSON(jsondata,function(data){
    //var stringdata=JSON.stringify(data);
    //var newjson=JSON.parse(stringdata);
    //alert(stringdata);
//}); 
$.ajax({
  url: jsondata,type:"get", 

  dataType: "json" ,
  success: function(data){
      var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    alert(stringdata);
}
  

}); 
   

 // 指定图表的配置项和数据
 var option={
   
   tooltip:{},
   legend:{
   	data:["用户数量","启动次数","活跃用户"],
   	width:72,
   	height:25,
   	icon: 'circle',
   	 textStyle: {
        color: '#4EC4F1',
        fontFamily:"PingFangSC-Regular",
        fontSize:18
    },
    inactiveColor:"#B8B0B0",
    orient:'vertical',
    left:62,
    top:22                           //兼容性修改了UI
    
},
   grid:{
    
    containLabel: true,               //不溢出
   	bottom:52,
   	left:59,
   	height:250,
   	width:530                         //此处ui为614，但是echarts溢出。所以只好改了。。。
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
   	 name:"用户数量",
   	 type:"line",
     symbol:"circle",
     symbolSize:12,
   	 data:[0,100,1000,1500]
   },
   {
   	 name:"启动次数",
   	 type:"line",
     symbol:"circle",
     symbolSize:12,
  	 data:[0,100,1000,1500]
   },
   {
   	 name:"活跃用户",
   	 type:"line",
     symbol:"circle",
     symbolSize:12,
   	 data:[0,100,1000,1500]
   }

   ]
};
   
if(window.navigator.userAgent.indexOf("Chrome") !== -1){   //针对chrome 12px最小字体的问题
    if(screen.width<=1400){
       option.grid.height=350;
       option.grid.width=700;     
    }
    if(screen.width>1500&&screen.width<1600){
       option.grid.height=350;
       option.grid.width=680;     
    }
     if(screen.width>1400&&screen.width<=1500){
       option.grid.height=370;
       option.grid.width=700;     
    }
    if(window.navigator.userAgent.indexOf("Edge") !== -1){
       option.grid.height=370;
       option.grid.width=700;   
    }
}
if(screen.width>1600){                                //响应式布局理念，针对1920*1080显示器的改正
  option.grid.height=350;
  option.grid.width=700;
}

/////月周日切换
$("#date").click(function(){
   this.style.backgroundColor="#4EC4F1";
   this.style.color="#FFF";
   document.getElementById("week").style.backgroundColor="#FFF";
   document.getElementById("month").style.backgroundColor="#FFF";
   document.getElementById("week").style.color="#807D7D";
   document.getElementById("month").style.color="#807D7D";
   option.xAxis.data=['4-17','4-18','4-19','4-20','4-21','4-22','4-23'];
   option.series[0].data=[0,600,1500,2220,1600,666,533];
   option.series[1].data=[0,600,1500,2220,1600,666,533];
   option.series[2].data=[0,600,1500,2220,1600,666,533];
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
   option.series[0].data=[500,1000,2000,500];
   option.series[1].data=[500,1000,2000,500];
   option.series[2].data=[500,1000,2000,500];
   myChart.setOption(option);   
});
$("#month").click(function(){
   this.style.backgroundColor="#4EC4F1";
   this.style.color="#FFF";
   document.getElementById("week").style.backgroundColor="#FFF";
   document.getElementById("date").style.backgroundColor="#FFF";
   document.getElementById("week").style.color="#807D7D";
   document.getElementById("date").style.color="#807D7D";
   option.xAxis.data=['1月','2月','3月','4月'];
   option.series[0].data=[0,100,1000,1500];
   option.series[1].data=[0,100,1000,1500];
   option.series[2].data=[0,100,1000,1500];
   myChart.setOption(option); 
});
$("#query").click(function(){
   option.xAxis.data=['7-17','7-18','7-19','7-20','7-21','7-22','7-23'];
   option.series[0].data=[333,600,1500,2220,1600,666,533];
   option.series[1].data=[333,600,1500,2220,1600,666,533];
   option.series[2].data=[333,600,1500,2220,1600,666,533];
   myChart.setOption(option); 
});

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);           
