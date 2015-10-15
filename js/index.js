var bUA = window.navigator.userAgent;
var deviceType = "";
if(bUA.indexOf("Android")>=0){
    deviceType = "Android";
}else if(bUA.indexOf("iPhone")>=0){
    deviceType = "iPhone";
}else if(bUA.indexOf("iPad")>=0){
	deviceType = "iPad";
}else{
	 deviceType = "Android";
}

var $ = function(selector){
     return document.querySelector(selector);
};
var $$ = function(selector){
     return document.querySelectorAll(selector);
};


window.onload = function(){
	$$("a")[1].setAttribute("href","bzybedtime://type=shengyin&param=943/");
	console.log($("a"))
	document.onclick = function(e){
		console.log(e.target);
		console.log(e.target.tagName);
		if(e.target.tagName.toLowerCase() == "a"){
			if((!!e.target.dataset.type)){
				if(deviceType == "Android"){
					e.preventDefault();
					if(typeof bedtime != "undefined"){
						bedtime.jumpToAndroid("shengyin",e.target.dataset.param+""); //原生安卓webview 接管
					}
					return false;			
				}else if(deviceType == "iPhone"||deviceType == "iPad"){
					
				}	
				
			}
		}

	};
}
