$(document).ready(function(){
  var datas=new Array();
  var jsondata1="http://114.115.221.206:8088/qtserver/admin/analysis/getHotArticle";
$.ajax({
  url: jsondata1,type:"get", 
  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
     //alert(stringdata);
    datas[0]=newjson.time; datas[1]=newjson.content;
    
   // alert(datas);                            如果在ajax外的话，可能来不及获取，导致值为空
    //$("#month").trigger("click");              //模拟点击来保证打开时主页有数值
}
}); 
});