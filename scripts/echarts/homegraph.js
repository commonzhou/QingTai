
var main=document.getElementById("graph1");
var myChart=echarts.init(main);
var datas=new Array();
var jsondata1="http://114.115.221.206:8088/qtserver/admin/main/getRegisterNumByMonth";
var jsondata2="http://114.115.221.206:8088/qtserver/admin/main/getLoginNumByMonth";
var jsondata3="http://114.115.221.206:8088/qtserver/admin/main/getUserNumByMonth";
var jsondata4="http://114.115.221.206:8088/qtserver/admin/main/getRegisterNumByWeek";
var jsondata5="http://114.115.221.206:8088/qtserver/admin/main/getLoginNumByWeek";
var jsondata6="http://114.115.221.206:8088/qtserver/admin/main/getUserNumByWeek";
var jsondata7="http://114.115.221.206:8088/qtserver/admin/main/getRegisterNumByDay";
var jsondata8="http://114.115.221.206:8088/qtserver/admin/main/getLoginNumByDay";
var jsondata9="http://114.115.221.206:8088/qtserver/admin/main/getUserNumByDay";
var jsondata10="http://114.115.221.206:8088/qtserver/admin/main/getRegisterNumByDate";
var jsondata11="http://114.115.221.206:8088/qtserver/admin/main/getLoginNumByDate";
var jsondata12="http://114.115.221.206:8088/qtserver/admin/main/getUserNumByDate";
//$.getJSON(jsondata,function(data){
    //var stringdata=JSON.stringify(data);
    //var newjson=JSON.parse(stringdata);
    //alert(stringdata);
//}); 
$.ajax({
  url: jsondata1,type:"get", 

  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[0]=newjson.result[3]; datas[1]=newjson.result[2]; datas[2]=newjson.result[1]; datas[3]=newjson.result[0];
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
    datas[4]=newjson.result[3]; datas[5]=newjson.result[2]; datas[6]=newjson.result[1]; datas[7]=newjson.result[0];
   // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
    $("#month").trigger("click"); 
}
}); 
$.ajax({
  url: jsondata3,type:"get", 

  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[8]=newjson.result[3]; datas[9]=newjson.result[2]; datas[10]=newjson.result[1]; datas[11]=newjson.result[0];
   // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
    $("#month").trigger("click"); 
}
}); 
$.ajax({
  url: jsondata4,type:"get", 

  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[12]=newjson.result[3]; datas[13]=newjson.result[2]; datas[14]=newjson.result[1]; datas[15]=newjson.result[0];
   // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
    //$("#month").trigger("click"); 
}
}); 
$.ajax({
  url: jsondata5,type:"get", 
  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[16]=newjson.result[3]; datas[17]=newjson.result[2]; datas[18]=newjson.result[1]; datas[19]=newjson.result[0];
   // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
    //$("#month").trigger("click"); 
}
}); 
$.ajax({
  url: jsondata6,type:"get", 
  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[20]=newjson.result[3]; datas[21]=newjson.result[2]; datas[22]=newjson.result[1]; datas[23]=newjson.result[0];
   // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
    //$("#month").trigger("click"); 
}
}); 
$.ajax({
  url: jsondata7,type:"get", 
  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[24]=newjson.result[6]; datas[25]=newjson.result[5]; datas[26]=newjson.result[4]; datas[27]=newjson.result[3];
    datas[28]=newjson.result[2]; datas[29]=newjson.result[1]; datas[30]=newjson.result[0];
   // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
    //$("#month").trigger("click"); 
}
}); 
$.ajax({
  url: jsondata8,type:"get", 
  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[31]=newjson.result[6]; datas[32]=newjson.result[5]; datas[33]=newjson.result[4]; datas[34]=newjson.result[3];
    datas[35]=newjson.result[2]; datas[36]=newjson.result[1]; datas[37]=newjson.result[0];
   // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
    //$("#month").trigger("click"); 
}
}); 
$.ajax({
  url: jsondata9,type:"get", 
  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[38]=newjson.result[6]; datas[39]=newjson.result[5]; datas[40]=newjson.result[4]; datas[41]=newjson.result[3];
    datas[42]=newjson.result[2]; datas[43]=newjson.result[1]; datas[44]=newjson.result[0];
   // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
    //$("#month").trigger("click"); 
}
}); 


  //alert(datas);
 // 指定图表的配置项和数据
 var option={
   
   tooltip:{},
   legend:{
   	data:["用户数量","启动次数","活跃用户"],
   	width:72,
   	height:25,
    selectedMode:'single',
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
   	//data:['1月','2月','3月','4月'],
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
     symbolSize:12
   },
   {
   	 name:"启动次数",
   	 type:"line",
     symbol:"circle",
     symbolSize:12 	
   },
   {
   	 name:"活跃用户",
   	 type:"line",
     symbol:"circle",
     symbolSize:12
   	
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
   option.series[0].data=[datas[24],datas[25],datas[26],datas[27],datas[28],datas[29],datas[30]];
   option.series[1].data=[datas[31],datas[32],datas[33],datas[34],datas[35],datas[36],datas[37]];
   option.series[2].data=[datas[38],datas[39],datas[40],datas[41],datas[42],datas[43],datas[44]];
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
   option.series[0].data=[datas[12],datas[13],datas[14],datas[15]];
   option.series[1].data=[datas[16],datas[17],datas[18],datas[19]];
   option.series[2].data=[datas[20],datas[21],datas[22],datas[23]];
   myChart.setOption(option);   
});
$("#month").click(function(){
   this.style.backgroundColor="#4EC4F1";
   this.style.color="#FFF";
   document.getElementById("week").style.backgroundColor="#FFF";
   document.getElementById("date").style.backgroundColor="#FFF";
   document.getElementById("week").style.color="#807D7D";
   document.getElementById("date").style.color="#807D7D";
   //判断减法后的大小，月份为负数需要加12
   option.xAxis.data=[(((gettedMonth-3)>0)?(gettedMonth-3):(gettedMonth-3+12))+'月',(((gettedMonth-2)>0)?(gettedMonth-2):(gettedMonth-2+12))+'月',
   (((gettedMonth-1)>0)?(gettedMonth-1):(gettedMonth-1+12))+'月',gettedMonth+'月'];
   option.series[0].data=[datas[0],datas[1],datas[2],datas[3]];
   option.series[1].data=[datas[4],datas[5],datas[6],datas[7]];
   option.series[2].data=[datas[8],datas[9],datas[10],datas[11]];
   myChart.setOption(option); 
});

$("#query").click(function(){
    //alert($("#post1").val());                post三请求
  $.post(jsondata10,{year:$("#post1").val(),month:$("#post2").val(),day:$("#post3").val()},function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[45]=newjson.result[6]; datas[46]=newjson.result[5]; datas[47]=newjson.result[4]; datas[48]=newjson.result[3]; datas[49]=newjson.result[2];
    datas[50]=newjson.result[1]; datas[51]=newjson.result[0];
});

    //alert($("#post1").val());
  $.post(jsondata11,{year:$("#post1").val(),month:$("#post2").val(),day:$("#post3").val()},function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[52]=newjson.result[6]; datas[53]=newjson.result[5]; datas[54]=newjson.result[4]; datas[55]=newjson.result[3]; datas[56]=newjson.result[2];
    datas[57]=newjson.result[1]; datas[58]=newjson.result[0];
}); 

    //alert($("#post1").val());
  $.post(jsondata12,{year:$("#post1").val(),month:$("#post2").val(),day:$("#post3").val()},function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
    //alert(stringdata);
    datas[59]=newjson.result[6]; datas[60]=newjson.result[5]; datas[61]=newjson.result[4]; datas[62]=newjson.result[3]; datas[63]=newjson.result[2];
    datas[64]=newjson.result[1]; datas[65]=newjson.result[0];
});  

   option.xAxis.data=['7-17','7-18','7-19','7-20','7-21','7-22','7-23'];
   option.series[0].data=[datas[45],datas[46],datas[47],datas[48],datas[49],datas[50],datas[51]];
   option.series[1].data=[datas[52],datas[53],datas[54],datas[55],datas[56],datas[57],datas[58]];
   option.series[2].data=[datas[59],datas[60],datas[61],datas[62],datas[63],datas[64],datas[65]];
   myChart.setOption(option); 
});
/////

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);   


     
