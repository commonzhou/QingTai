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
	                position: [205,-6],                             //由于不可抗因素，再度违背了UI的意思，可惜
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
            symbolSize:0.0001,
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
                    position: [90,-11],                             //由于不可抗因素，再度违背了UI的意思，可惜
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

 //218是grid的长度，对应坐标长度1000，算出相应男女人数对应的距离长度，来定位两个圆形
 var manpos=man*21.8/1000+4.7-1.6;
 var womanpos=woman*21.8/1000+4.7-1.6;
 var circledis=0.535;                                //两圆半径之差
 var manpos2=manpos+circledis;
 var womanpos2=womanpos+circledis;
 var diff=0.7;                                      //克服浏览器的差异，折衷地偏移量
 var man1=document.getElementById("man1");
 man1.style.top=7.38+diff/3.4+"rem";
 man1.style.left=manpos-diff+"rem";
 var man1=document.getElementById("man2");
 man2.style.top=7.91+diff/3.4+"rem";
 man2.style.left=manpos2-diff+"rem";
 var woman1=document.getElementById("woman1");
 woman1.style.top=9.8+"rem";                           //此处又没有按照UI，阿弥陀佛
 woman1.style.left=womanpos-diff+"rem";
 var woman2=document.getElementById("woman2");
 woman2.style.top=10.3+"rem";
 woman2.style.left=womanpos2-diff+"rem";
 //////////////////////  IE    ////////////////
 if(!!window.ActiveXObject||"ActiveXObject" in window){
    if(screen.width==1536){
      var manpos=man*21.8/1000+4.7-1.6;
 var womanpos=woman*21.8/1000+4.7-1.6;
 var circledis=0.535;                                //两圆半径之差
 var manpos2=manpos+circledis;
 var womanpos2=womanpos+circledis;
 var diff=0.7;                                      //克服浏览器的差异，折衷地偏移量
 var man1=document.getElementById("man1");
 man1.style.top=7.38+diff/3.4+"rem";
 man1.style.left=manpos-diff+"rem";
 var man1=document.getElementById("man2");
 man2.style.top=7.91+diff/3.4+"rem";
 man2.style.left=manpos2-diff+"rem";
 var woman1=document.getElementById("woman1");
 woman1.style.top=9.8+"rem";                           //此处又没有按照UI，阿弥陀佛
 woman1.style.left=womanpos-diff+"rem";
 var woman2=document.getElementById("woman2");
 woman2.style.top=10.3+"rem";
 woman2.style.left=womanpos2-diff+"rem";
    }
 }
   
if(screen.width>1600){                                //响应式布局理念，针对1920*1080显示器的改正
  option.series[0].label.normal.position[0]=320;
  option.series[1].label.normal.position[0]=210;
}
if(window.navigator.userAgent.indexOf("Chrome") == -1){
if(screen.width==1366){                                //响应式布局理念，针对1366*768显示器的改正
  option.series[0].label.normal.position[0]=260;
  option.series[1].label.normal.position[0]=160;
  var manpos=man*21.8/1000+4.7-1.6;
 var womanpos=woman*21.8/1000+4.7-1.6;
 var circledis=0.535;                                //两圆半径之差
 var manpos2=manpos+circledis;
 var womanpos2=womanpos+circledis;
 var diff=1;                                      //克服浏览器的差异，折衷地偏移量
 var man1=document.getElementById("man1");
 man1.style.top=7.38-0.2*diff+"rem";
 man1.style.left=manpos+1.2*diff+"rem";
 var man1=document.getElementById("man2");
 man2.style.top=7.91-0.2*diff+"rem";
 man2.style.left=manpos2+1.2*diff+"rem";
 var woman1=document.getElementById("woman1");
 woman1.style.top=9.8+"rem";                           //此处又没有按照UI，阿弥陀佛
 woman1.style.left=womanpos+1.2*diff+"rem";
 var woman2=document.getElementById("woman2");
 woman2.style.top=10.3+"rem";
 woman2.style.left=womanpos2+1.2*diff+"rem";
}
}

     


if(screen.width>1600){                                //响应式布局理念，针对1920*1080显示器的改正
 var manpos=man*21.8/1000+4.7-1.6;
 var womanpos=woman*21.8/1000+4.7-1.6;
 var circledis=0.535;                                //两圆半径之差
 var manpos2=manpos+circledis;
 var womanpos2=womanpos+circledis;
 var diff=1;                                      //克服浏览器的差异，折衷地偏移量
 var man1=document.getElementById("man1");
 man1.style.top=7.38-0.8*diff+"rem";
 man1.style.left=manpos+2*diff+"rem";
 var man1=document.getElementById("man2");
 man2.style.top=7.91-0.8*diff+"rem";
 man2.style.left=manpos2+2*diff+"rem";
 var woman1=document.getElementById("woman1");
 woman1.style.top=9.8+"rem";                           //此处又没有按照UI，阿弥陀佛
 woman1.style.left=womanpos+2.8*diff+"rem";
 var woman2=document.getElementById("woman2");
 woman2.style.top=10.3+"rem";
 woman2.style.left=womanpos2+2.8*diff+"rem";
}
if(window.navigator.userAgent.indexOf("Chrome") !== -1){   //针对chrome 12px最小字体的问题
    if(screen.width==1366){
 document.getElementById("subTitle").style.width=15+"rem";   
 option.series[0].label.normal.position[0]=340;
 option.series[1].label.normal.position[0]=240;
 var manpos=man*21.8/1000+4.7-1.6;
 var womanpos=woman*21.8/1000+4.7-1.6;
 var circledis=0.535;                                //两圆半径之差
 var manpos2=manpos+circledis;
 var womanpos2=womanpos+circledis;
 var diff=1;                                      //克服浏览器的差异，折衷地偏移量
 var man1=document.getElementById("man1");
 man1.style.top=7.38-0.8*diff+"rem";
 man1.style.left=manpos+2*diff+"rem";
 var man1=document.getElementById("man2");
 man2.style.top=7.91-0.8*diff+"rem";
 man2.style.left=manpos2+2*diff+"rem";
 var woman1=document.getElementById("woman1");
 woman1.style.top=9.8+"rem";                           //此处又没有按照UI，阿弥陀佛
 woman1.style.left=womanpos+2.8*diff+"rem";
 var woman2=document.getElementById("woman2");
 woman2.style.top=10.3+"rem";
 woman2.style.left=womanpos2+2.8*diff+"rem";     
    }
    if(screen.width==1536){
 document.getElementById("subTitle").style.width=15+"rem";   
 option.series[0].label.normal.position[0]=340;
 option.series[1].label.normal.position[0]=240;
 var manpos=man*21.8/1000+4.7-1.6;
 var womanpos=woman*21.8/1000+4.7-1.6;
 var circledis=0.535;                                //两圆半径之差
 var manpos2=manpos+circledis;
 var womanpos2=womanpos+circledis;
 var diff=1;                                      //克服浏览器的差异，折衷地偏移量
 var man1=document.getElementById("man1");
 man1.style.top=7.38-0.8*diff+"rem";
 man1.style.left=manpos+2*diff+"rem";
 var man1=document.getElementById("man2");
 man2.style.top=7.91-0.8*diff+"rem";
 man2.style.left=manpos2+2*diff+"rem";
 var woman1=document.getElementById("woman1");
 woman1.style.top=9.8+"rem";                           //此处又没有按照UI，阿弥陀佛
 woman1.style.left=womanpos+2.8*diff+"rem";
 var woman2=document.getElementById("woman2");
 woman2.style.top=10.3+"rem";
 woman2.style.left=womanpos2+2.8*diff+"rem";     
    }
    if(window.navigator.userAgent.indexOf("Edge") !== -1&&screen.width==1477){
       document.getElementById("subTitle").style.width=15+"rem";   
 option.series[0].label.normal.position[0]=340;
 option.series[1].label.normal.position[0]=240;
 var manpos=man*21.8/1000+4.7-1.6;
 var womanpos=woman*21.8/1000+4.7-1.6;
 var circledis=0.535;                                //两圆半径之差
 var manpos2=manpos+circledis;
 var womanpos2=womanpos+circledis;
 var diff=1;                                      //克服浏览器的差异，折衷地偏移量
 var man1=document.getElementById("man1");
 man1.style.top=7.38-0.8*diff+"rem";
 man1.style.left=manpos+2*diff+"rem";
 var man1=document.getElementById("man2");
 man2.style.top=7.91-0.8*diff+"rem";
 man2.style.left=manpos2+2*diff+"rem";
 var woman1=document.getElementById("woman1");
 woman1.style.top=9.8+"rem";                           //此处又没有按照UI，阿弥陀佛
 woman1.style.left=womanpos+2.8*diff+"rem";
 var woman2=document.getElementById("woman2");
 woman2.style.top=10.3+"rem";
 woman2.style.left=womanpos2+2.8*diff+"rem";    
    }


}


myChart.setOption(option, true);