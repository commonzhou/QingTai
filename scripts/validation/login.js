$(function(){
   $.validator.addMethod("vPhone",function(value,element,params){
      var patten=/^0?(13|14|15|18)[0-9]{9}$/;     
      if(params && patten.test(value)){              //我猜params保证输入的是字符串
         return true;
      }
      else{
         return false;
      }
   })
   
   $("#loginForm").validate({
     rules:{
     	username:{
     		required:true,
     		vPhone:true
     	},
     	password:{
     		required:true,
     		minlength:6
     	}
     },
     messages:{
     	username:{
     		required:"请输入手机号",
     		vPhone:"输入的手机格式不对"
     	},
     	password:{
     		required:"请输入密码",
     		minlength:$.validator.format("密码不能小于6个字符")
     		//此处{0}就是6，不知为何啊。。。
     	}
     },
     errorElement:"em",
     success:function(label){
     	label.text(" ");
     }
   });

});