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

jQuery(function($){
	$(document).click(function(e){
		console.log(e.target);
		if($(e.target).is("a")){
			if(deviceType == "Android"){
				e.preventDefault();
				jumpToAndroid("shengyin",$(e.target).data("param")+"");
				return false;			
			}else if(deviceType == "iPhone"||deviceType == "iPad"){
				window.location.href = "bzybedtime://type=shengyin&param="+$(e.target).data("param");
			}	
		}
		
		
		

	});
});


window.onload = function(){
	
}
