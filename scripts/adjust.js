// JavaScript Document
 
  if(window.navigator.userAgent.indexOf("Chrome") !== -1){
       	//document.documentElement.style.fontSize = screen.width / 1366*10+"px";
        if(window.navigator.userAgent.indexOf("Edge") == -1){
          if(screen.width<=1400){
            document.documentElement.style.fontSize=12+"px";
            document.documentElement.style.webkitTransform="scale(0.83)";
            document.documentElement.style.marginTop=-72+"px";
            document.documentElement.style.marginLeft=-138+"px";
          }
          if(screen.width>=1600){
          	document.documentElement.style.fontSize = document.documentElement.clientWidth / 1366*8+"px";
            document.documentElement.style.marginLeft=90+"px";
          }
          if(screen.width<1600&&screen.width>1400){
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 1366*10+"px";
          }
        }
         if(window.navigator.userAgent.indexOf("Edge") !== -1){                             //针对IE Edge
           if(screen.width>1400){
            document.documentElement.style.fontSize=12+"px";
            document.documentElement.style.webkitTransform="scale(0.84)";
            document.documentElement.style.marginTop=-72+"px";
            document.documentElement.style.marginLeft=-108+"px";
          }
          if(screen.width<1400){
            document.documentElement.style.fontSize=12+"px";
            document.documentElement.style.webkitTransform="scale(0.68)";
            document.documentElement.style.marginTop=-122+"px";
            document.documentElement.style.marginLeft=-200+"px";
          }
         }
}
if (!!window.ActiveXObject||"ActiveXObject" in window){                        //针对IE
       	//document.documentElement.style.fontSize = screen.width / 1366*10+"px";
          if(screen.width<=1400){
            document.documentElement.style.fontSize = document.documentElement.clientWidth  / 1366*10+"px";
          }
          if(screen.width>1400){
          	document.documentElement.style.fontSize = document.documentElement.clientWidth / 1366*8.6+"px";
            document.documentElement.style.marginLeft=35+"px";
          }
         
}

      