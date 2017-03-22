var dom = document.getElementById("graph5");
var myChart = echarts.init(dom);
var option = null;

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
                {value:335, name:'本科',itemStyle: {normal: {color: '#00D2AA'}}},
                {value:310, name:'硕士',itemStyle: {normal: {color: '#FAE863'}}},
                {value:234, name:'博士',itemStyle: {normal: {color: '#FC9029'}}},
                {value:135, name:'其他',itemStyle: {normal: {color: '#DF2938'}}}
            ]
        }
    ]
};

  myChart.setOption(option, true);                 //是否不跟之前设置的option进行合并，默认为false，即合并。
