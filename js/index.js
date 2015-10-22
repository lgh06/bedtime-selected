(function(){
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
        if(this.tagName){
            if(typeof el == 'string'){
                return !!(this.tagName.toLowerCase() == el.toLowerCase());
            }

            if(el.tagName){
                return !!(this.tagName == el.tagName);
            }
        }else{
            return false;
        }
    };
    HTMLElement.prototype.is = is;
    function offsetTop( elements ){
        var top = elements.offsetTop;
        var parent = elements.offsetParent;
        while( parent != null ){
            top += parent.offsetTop;
            parent = parent.offsetParent;
        };
        return top;
    };
    var viewportTop = function () {
        return offsetTop($(".item:last-child"));
    };
    var nowPage = 2;
    /*ajax方式获取指定页的评论，并添加到DOM中去*/
    var ajaxStatus = 0;
    var reachMaxPage = 0;
    var ccc = document.createElement('a');
    ccc.href = window.location.href;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState != 4){
            ajaxStatus = 1;
        }else{
            ajaxStatus = 0;
        }

        if ( xhr.readyState == 4 && xhr.status == 200 ) {
            var re = JSON.parse(xhr.responseText);
            if(re.rows&&re.rows.length){ //填充页面
                var r = re.rows;
                for(var k in r){
                var tem = '<img src="http://7xjse8.dl1.z0.glb.clouddn.com/carousel/jingxuan/' + r[k].img+'" alt="" />'
                    +'<div class="tip">'
                    +'<div class="tipwrap">'
                    +'<h2><a data-type="'+r[k].type+'" data-param="'+r[k].param+'" href="bzybedtime://type='+r[k].type+'&param='+r[k].param+'">'+r[k].title+'</a></h2>'
                    +'</div>'
                    +'</div>';
                    var n = document.createElement('div');
                    n.className= 'item';
                    n.innerHTML = tem;
                    $('.container').appendChild(n);
                }

            }else{ // 达到最后一页
                reachMaxPage = 1;
            }
        }else{
            /* console.log( xhr.statusText ); */
        }
    };

    function ajaxLoad(page) {
        xhr.open('POST', ccc.protocol+"//"+ccc.host+"/Get_beatlunbo/jingxuan?page="+page);
        xhr.send();
    }

    window.onscroll = function (e) {
        var sH = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (( viewportTop() - $('html').offsetHeight - (sH) < 200 ) && (!reachMaxPage) && (!ajaxStatus)) {
            ajaxLoad(nowPage);
            nowPage += 1;
        } else if (viewportTop() - $('html').offsetHeight - (sH) >= 200) {

        }
    };

    window.onload = function(){

        document.onclick = function(e){
            if(e.target.is("a")||e.target.is("img")||e.target.is('h2')){
                if(deviceType == "Android"){
                    e.preventDefault();
                    e.stopPropagation();
                    if(typeof bedtime != "undefined"){
                        if(e.target.is('a')){
                            if((e.target.dataset.type)){
                                bedtime.jumpToAndroid("shengyin",e.target.dataset.param+""); //原生安卓webview 接管
                            }
                        }
                        if(e.target.is('img')||e.target.is('h2')){
                            var a = e.target.parentNode.querySelector('a');
                            bedtime.jumpToAndroid("shengyin",a.dataset.param+"");

                        }
                    }
                    return false;
                }else if(deviceType == "iPhone"||deviceType == "iPad"){
                    if(e.target.is('img')||e.target.is('h2')){  //ios 点击了图片或者h2 而不是a标签时
                        e.preventDefault();
                        e.stopPropagation();
                        var a = e.target.parentNode.querySelector('a');
                        if(a){window.location.href = a.href;}
                        return false;
                    }
                }
            }else{

            }

        };
    }
})();