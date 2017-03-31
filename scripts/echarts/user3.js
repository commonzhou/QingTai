var main=document.getElementById("graph3");
var myChart=echarts.init(main);
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
   	data:['2-11','2-11','2-11','2-11','2-11','2-2'],
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
   	 data:[2200,2400,2800,3200,2700,2200]
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
   	 data:[0,400,800,1245,666,333]
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
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);           
/////由于浏览器的字体大小问题，所以用这个先获取legend的left数值，再进行加减赋值给月周日的left
var distance=option.legend.left;
distance=distance+6;

document.getElementById("choseNum").style.left=distance+"px";
document.getElementById("month").style.left=distance+"px";
document.getElementById("week").style.left=distance+36+"px";
document.getElementById("date").style.left=distance+72+"px";
