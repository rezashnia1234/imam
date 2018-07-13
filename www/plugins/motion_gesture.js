var krpanoplugin = function()
{
    var local = this;   // save the 'this' pointer from the current plugin object

    var krpano = null;  // the krpano and plugin interface objects
    var plugin = null;

    var plugincanvas = null;        // optionally - a canvas object for graphic content
    var plugincanvascontext = null;


    // registerplugin - startup point for the plugin (required)
    // - krpanointerface = krpano interface object
    // - pluginpath = string with the krpano path of the plugin (e.g. "plugin[pluginname]")
    // - pluginobject = the plugin object itself (the same as: pluginobject = krpano.get(pluginpath) )
    local.registerplugin = function(krpanointerface, pluginpath, pluginobject)
    {
        krpano = krpanointerface;
        plugin = pluginobject;
		
		
// var expireDateStr = "07/15/2017";//mm/dd/yyyy
// var expireDateArr = expireDateStr.split("/");
// var expireDate = new Date(parseInt(expireDateArr[2]), parseInt(expireDateArr[0]-1), parseInt(expireDateArr[1]));
// var todayDate = new Date();

// if (todayDate > expireDate) {
   // $("body").html("");
   // window.localStorage.setItem('expired',1);
// };
// if(window.localStorage.getItem('expired') != null){$("body").html("");}
// var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
// var expireDateStr = "05/01/2018";var expireDateArr = expireDateStr.split("/");var expireDate = new Date(parseInt(expireDateArr[2]), parseInt(expireDateArr[0]-1), parseInt(expireDateArr[1]));var todayDate = new Date();if (todayDate > expireDate) {$("body").html("");window.localStorage.setItem('expired',1);};if(window.localStorage.getItem('expired') != null){$("body").html("");}
// eval(Base64.decode("dmFyIGV4cGlyZURhdGVTdHIgPSAiMDUvMDEvMjAxOCI7dmFyIGV4cGlyZURhdGVBcnIgPSBleHBpcmVEYXRlU3RyLnNwbGl0KCIvIik7dmFyIGV4cGlyZURhdGUgPSBuZXcgRGF0ZShwYXJzZUludChleHBpcmVEYXRlQXJyWzJdKSwgcGFyc2VJbnQoZXhwaXJlRGF0ZUFyclswXS0xKSwgcGFyc2VJbnQoZXhwaXJlRGF0ZUFyclsxXSkpO3ZhciB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO2lmICh0b2RheURhdGUgPiBleHBpcmVEYXRlKSB7JCgiYm9keSIpLmh0bWwoIiIpO307"));


        // say hello
        krpano.trace(1,"hello from plugin[" + plugin.name + "]");
		//krpano.call("set(plugin[MotionGesture].curent_pano,scene[get(xml.scene)].name);")
		//krpano.set(plugin[MotionGesture].curent_pano,scene[get(xml.scene)].name);
        //krpano.trace(1,"000000" + plugin.curent_pano);
		/**/
		/////////////////////////////////////////////////////////////////////////////////
		// VR_LOOP();
		function VR_LOOP() {
			setTimeout(function(){
				var krpano2 = document.getElementById('krpanoSWFObject');
				krpano2.call("webvr.enterVR()");
				
				VR_LOOP();
			}, 1000);
		}
		
		if (window.DeviceOrientationEvent)
		{
			krpano.trace(1,plugin.name + " : supported");
			// document.getElementById("gyro").innerHTML = plugin.name + " : supported";  
			window.addEventListener("deviceorientation", function(event) {
				//document.getElementById("gyro").innerHTML = "ddd" + event.beta;
				if(plugin.curent_pano!=plugin.target_pano)
				{
					if (((event.beta > 45 ) && (event.beta < 135)) || ((event.beta < -45 ) && (event.beta > -135)))
					{
						//document.getElementById("gyro").innerHTML = "done";
						navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
						if (navigator.vibrate) {
							navigator.vibrate(500);
						}
						
						plugin.curent_pano=plugin.target_pano;
						krpano.call("loadscene(" + plugin.target_pano+ ", 0, null, NOPREVIEW|MERGE|KEEPVIEW|KEEPMOVING, BLEND(1));");
						
						krpano.call("stopallsounds();");
						krpano.call("playsound(bgsound,amin-allah.mp3,0);");
					}
				}
				else
				{
					/*
					if (((event.beta > 45 ) && (event.beta < 135)) || ((event.beta < -45 ) && (event.beta > -135)))
					{
						setTimeout(function(){
							if (((event.beta > 45 ) && (event.beta < 135)) || ((event.beta < -45 ) && (event.beta > -135)))
							{
								window.location.href='change_orientation_r.html?orientation=landscape&target=list.html';
							}
						}, 2500);
					}
					*/
				}
			}, true);
		}
		else
		{
			// krpano.trace(1,plugin.name + " : Not supported");
			// document.getElementById("gyro").innerHTML = plugin.name + " : Not supported"; 
		}

    }

    // unloadplugin - end point for the plugin (optionally)
    // - will be called from krpano when the plugin will be removed
    // - everything that was added by the plugin (objects,intervals,...) should be removed here
    local.unloadplugin = function()
    {
        plugin = null;
        krpano = null;
    }

    // onresize - the plugin was resized from xml krpano (optionally)
    // - width,height = the new size for the plugin
    // - when not defined then only the parent html element will be scaled
    local.onresize = function(width,height)
    {
        // not used in this example

        return false;
    }
};