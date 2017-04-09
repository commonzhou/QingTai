var dom = document.getElementById("graph4");
var myChart = echarts.init(dom);
var option = null;
function randomData() {
    return Math.round(Math.random()*1000);
}

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
        max: 1000,
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
                {name: '北京',value: randomData(),itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '天津',value: randomData(),itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '上海',value: randomData(),itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '重庆',value: randomData(),itemStyle:{normal:{areaColor:"##00D7E1" }} },
                {name: '河北',value: randomData(),itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '河南',value: randomData(),itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '云南',value: randomData(),itemStyle:{normal:{areaColor:"#00D7E1" }} },
                {name: '辽宁',value: randomData(),itemStyle:{normal:{areaColor:"#00D7E1" }} },
                {name: '黑龙江',value: randomData(),itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '湖南',value: randomData(),itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '安徽',value: randomData(),itemStyle:{normal:{areaColor:"#00D7E1" }}},
                {name: '山东',value: randomData(),itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '新疆',value: randomData(),itemStyle:{normal:{areaColor:"#0082D2" }}},
                {name: '江苏',value: randomData(),itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '浙江',value: randomData(),itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '江西',value: randomData(),itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '湖北',value: randomData(),itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '广西',value: randomData(),itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '甘肃',value: randomData(),itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '山西',value: randomData(),itemStyle:{normal:{areaColor:"#00D7E1" }} },
                {name: '内蒙古',value: randomData(),itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '陕西',value: randomData(),itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '吉林',value: randomData(),itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '福建',value: randomData(),itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '贵州',value: randomData(),itemStyle:{normal:{areaColor:"#00D2AA" }}},
                {name: '广东',value: randomData(),itemStyle:{normal:{areaColor:"#00D7E1" }} },
                {name: '青海',value: randomData(),itemStyle:{normal:{areaColor:"#00AAE1" }} },
                {name: '西藏',value: randomData(),itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '四川',value: randomData(),itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '宁夏',value: randomData(),itemStyle:{normal:{areaColor:"#00D7E1" }} },
                {name: '海南',value: randomData(),itemStyle:{normal:{areaColor:"#00D2AA" }} },
                {name: '台湾',value: randomData(),itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '香港',value: randomData(),itemStyle:{normal:{areaColor:"#0082D2" }} },
                {name: '澳门',value: randomData(),itemStyle:{normal:{areaColor:"#0082D2" }} }
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

if (option && typeof option === "object") {
    myChart.setOption(option, true);                 //是否不跟之前设置的option进行合并，默认为false，即合并。
}