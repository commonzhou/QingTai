var dom = document.getElementById("graph6");
var myChart = echarts.init(dom);
var option = null;
var man=798;
var woman=898;
var xMax=1000;
option = {
    title:{
      text:"性别比例",
      top:"11",
      left:"26",
      textStyle:{
        fontFamily: "PingFangSC-Regular",
        fontSize:"16",
        color: "#384146"
      }
    },
	tooltip:{
		show:true,
		formatter:"{b} {c}"
	},
	grid:{
		left:'47',
		top:'70',
        bottom:'32',
        right:"178"
	},
    xAxis : [
        {
            max:xMax,
            type : 'value',
            axisTick: {
            show: false,
	        },
	        axisLine: {
	            show:false,
	        },
	        axisLabel: {
	            show:false
	        },
	        splitLine: {
	            show: false
	        }
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : [{
                value:"女",
                textStyle:{
                    color:'#384146',
                    fontSize:'16',
                    fontFamily: "PingFangSC-Regular"
                }
            },{
                value:"男",
                textStyle:{
                    color:'#384146',
                    fontSize:'16',
                    fontFamily: "PingFangSC-Regular"
                }
            }],
            axisTick: {
	            show: false,
	        },
	        axisLine: {
	            show: false,
	        }
        }
    ],
    series : [      
        {
            name:' ',
            type:'bar',
            barWidth:11.1,
            barGap:18.2,
            barCategoryGap:18.2, 
            label: {
	            normal: {
	                show: true,
	                position: [205,-8],                             //由于不可抗因素，再度违背了UI的意思，可惜
	                formatter: '{c}',
                    textStyle:{
                        fontFamily: "PingFangSC-Regular",
                        fontSize: "20"
                    }
	            }
	        },
            data:[
	            {
                    value:woman,
                    itemStyle:{
                        normal:{color:'#DF2938',
                        barBorderRadius: 5}
                    }
               },{
                    value:man,
                    itemStyle:{
                        normal:{color:'#0082D2',
                        barBorderRadius: 5}
                    }
                }
            ]
        },
        {
            name:"",
            type:"line",
            symbolSize:0.1,
            symbolOffset:[158.5,0],
             data:[
                {
                    value:60,
                    symbolOffset:[154.5,0],
                    itemStyle:{
                        normal:{color:'#DF2938'}
                    }
               },{
                    value:40,
                    itemStyle:{
                        normal:{color:'#0082D2'}
                    }
                }
            ],
            lineStyle:{
                normal:{
                    color:"#FFF",
                    width:"0"
                }
            },
            label: {
                normal: {
                    show: true,
                    position: [90,-13],                             //由于不可抗因素，再度违背了UI的意思，可惜
                    formatter: '{c}%',
                    textStyle:{
                        fontFamily: "PingFangSC-Regular",
                        fontSize: "20"
                    }
                }
            }
        }

    ]
};
 myChart.setOption(option, true);    
 //218是grid的长度，对应坐标长度1000，算出相应男女人数对应的距离长度，来定位两个圆形
 var manpos=man*21.8/1000+4.7-1.6;
 var womanpos=woman*21.8/1000+4.7-1.6;
 var circledis=0.535;                                //两圆半径之差
 var manpos2=manpos+circledis;
 var womanpos2=womanpos+circledis;
 var man1=document.getElementById("man1");
 man1.style.top=7.38+"rem";
 man1.style.left=manpos+"rem";
 var man1=document.getElementById("man2");
 man2.style.top=7.91+"rem";
 man2.style.left=manpos2+"rem";
 var man1=document.getElementById("woman1");
 woman1.style.top=9.8+"rem";                           //此处又没有按照UI，阿弥陀佛
 woman1.style.left=womanpos+"rem";
 var man1=document.getElementById("woman2");
 woman2.style.top=10.3+"rem";
 woman2.style.left=womanpos2+"rem";