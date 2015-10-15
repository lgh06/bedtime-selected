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
	
	$("a").eq(1).attr("href","bzybedtime://type=111&param=222/");
	
	$(document).click(function(e){
		console.log(e.target);
		if($(e.target).is("a")){
			if((!!$(e.target).data("type"))){
				if(deviceType == "Android" && (!!$(e.target).data("param")) ){
					e.preventDefault();
					bedtime.jumpToAndroid("shengyin",$(e.target).data("param")+""); //原生安卓webview 接管
					return false;			
				}else if(deviceType == "iPhone"||deviceType == "iPad"){
					
				}	
				
			}
		}
		
		
		

	});
});


window.onload = function(){
	
}
