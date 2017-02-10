
       
  $(function() {
        
         $.validator.addMethod('vPhone', function(value, element, params){//添加一个手机验证方法
            var patten = /^0?(13|14|15|18)[0-9]{9}$/;
            if (params && patten.test(value)) {
                return true;
            } else {
                return false;
            }
          })

            $("#registerForm").validate({
                /* submitHandler: function() { //如果验证成功，则提交ajax
                   $.ajax({
                        url: 'register.php?act=index&op=reg',//这里是提交到后台的一个路由地址，类似这样的是执行后台里控制器index下的reg方法来处理注册提交
                        type: 'post',
                        dataType: 'json',
                        data: {
                            username: $('#username').val(),
                            password: $('#password').val()
                        },
                        success: function(data) {//后台返回的json如{key:1,keyMain:'注册成功'}
                            if (data.key) { //注册成功
                                //这里写注册成功后的代码逻辑
                                console.log(data);
                                alert(data.keyMain);
                            } else {//注册失败 后台返回的json如{key:0, keyMain:'注册失败'}
                                //这里写注册失败后的代码逻辑
                                console.log(data);
                                alert(data.keyMain);
                            }
                        }
                    });
                },  */
                rules: { //配置规则
                    username: {
                        required: true,
                        vPhone: true,
                        /*remote: {
                            url: 'register.php?act=index&op=verifyCode', //验证码后台处理程序,异步验证帐号是否已经注册过了
                            type: "post", //数据发送方式
                            dataType: "json", //接受数据格式
                            data: { //要提交到后台的数据  后台成功则返回字符串如"true",失败则返回字符串如'false'
                               username: function() {
                                    return $("#username").val();
                                }
                            }
                        } */
                    },
                    password: {
                        required: true,
                        minlength: 6
                    }
                },
                messages: { //配置提示信息
                    username: {
                        required: "请输入手机号",
                        vPhone: "输入的手机格式不正确",
                        //remote: "手机号码已经注册过"
                    },
                  
                    password: {
                        required: "请输入密码",
                        minlength: $.validator.format("密码不能小于{0}个字符")
                    }
                },   
                errorElement:"em",
                success:function(label){                //似乎没有什么用处。。。
                   label.text(" ").addClass("success");

                }                                      
          }); 
     
      });
      
       
 

