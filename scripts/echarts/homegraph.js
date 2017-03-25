var main=document.getElementById("graph1");
var myChart=echarts.init(main);
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
    top:32
    
},
   grid:{
    
    containLabel: true,               //不溢出
   	bottom:52,
   	left:59,
   	height:279,
   	width:560                         //此处ui为614，但是echarts溢出。所以只好改了。。。
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
   	 name:"用户数量",
   	 type:"line",
     symbol:"circle",
     symbolSize:12,
   	 data:[0,600,1500,2220,1600,533]
   },
   {
   	 name:"启动次数",
   	 type:"line",
     symbol:"circle",
     symbolSize:12,
  	 data:[0,600,1500,2220,1600,533]
   },
   {
   	 name:"活跃用户",
   	 type:"line",
     symbol:"circle",
     symbolSize:12,
   	 data:[0,600,1500,2220,1600,533]
   }

   ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);           