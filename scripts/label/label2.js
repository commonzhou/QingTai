$(document).ready(function(){
  
   var lis=new Array();
   lis= $("div.search li");
  
   var jsondata1="http://114.115.221.206:8088/qtserver/admin/analysis/getHotLabel";
$.ajax({
  url: jsondata1,type:"get", 
  dataType: "json" ,
  success: function(data){
    var stringdata=JSON.stringify(data);
    var newjson=JSON.parse(stringdata);
  //alert(stringdata);
   for(let i=0;i<9;i++){
     lis[i].innerText=newjson.last0[i];
     lis[i+9].innerText=newjson.last1[i];                    
   }
}
}); 
});