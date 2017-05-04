window.onload = function(){     



  var login = document.getElementById('login');
  var username = document.getElementById('username');
  var password = document.getElementById('password');

  var eventUtil = {
    addEvent: function (ele, type, hander) {
      if (ele.addEventListener) {
        ele.addEventListener(type, hander, false);
      } else if (ele.attachEvent) {
        ele.attachEvent('on' + type, hander);
      } else {
        ele['on' + type] = hander;
      }
    }
  }

  function loginNow() {
    if (username.value == 1604122004 && password.value == 1604122004) {
      window.location.href = 'home.html';
    } else {
      alert("用户名或密码错误");
    }
  }

  eventUtil.addEvent(login, 'click', loginNow);
}