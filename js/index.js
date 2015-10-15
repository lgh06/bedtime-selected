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
	
	alert(1108);
	$("a").eq(1).attr("href","bzybedtime://type=shengyin&param=943/");
	
	$(document).click(function(e){
		console.log(e.target);
		if($(e.target).is("a")){
			if((!!$(e.target).data("type"))){
				if(deviceType == "Android"){
					e.preventDefault();
					if(typeof bedtime != "undefined"){
						bedtime.jumpToAndroid("shengyin",$(e.target).data("param")+""); //原生安卓webview 接管
					}
					return false;			
				}else if(deviceType == "iPhone"||deviceType == "iPad"){
					
				}	
				
			}
		}
		
		
		

	});
});


window.onload = function(){
	
}
