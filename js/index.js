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
	var t = document.querySelectorAll(selector);
	if(t.length>1){
		return t
	}else if(t.length == 1){
		return t[0];
	}else{
		return undefined;
	}
};

var is = function(el){
	if(this.tagName && el.tagName){
		if(typeof el == 'string'){
			return !!(this.tagName.toLowerCase() == el.toLowerCase()); 
		}
		return !!(this.tagName == el.tagName)
	}else{
		return false;
	}
}
HTMLElement.prototype.is = is;

window.onload = function(){
	
	
	$("a")[1].setAttribute("href","bzybedtime://type=shengyin&param=943/");
	console.log($("a"))
	document.onclick = function(e){
		console.log(typeof e.target);
		console.log(e.target.tagName);
		if(e.target.is("a")){
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
