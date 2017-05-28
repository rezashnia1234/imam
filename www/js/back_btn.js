	var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
	
	
	function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	function go_back() {
		if(window.sessionStorage.getItem('go_to_first')=="true")
		{
			goto_perv_page('index.html',false);
		}
		else
		{
			parent.history.back();
		}
	}
	
	function exit() {
		console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    Exit the app! command');
		navigator.app.exitApp();
	}
	
	function loadURL(url){
		console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    loadURL click : ' + url);
		window.open(url, '_system', 'location=yes');
		return false;
	}
	
	function temp_function() {
		// do something
	}
	
	function goto_home() {
		//window.location.href = "index.html";
		goto_perv_page('index.html',false);

	}
	function go_back_adab() {
		goto_perv_page('adab.html',false);
	}
	
	function go_back_map() {
		goto_perv_page('map.html',false);
	}
	
	function go_back_news() {
		goto_perv_page('news.html',false);
	}
	
	function go_back_vtour() {
		goto_perv_page('vtour-demo-day.html',false);
	}
	
	function go_back_picture() {
		goto_perv_page('picturesCategories.html',false);
	}
	
	function go_back_video_sigle() {
		goto_perv_page('video.html',false);
	}
	
	function go_back_video_cat() {
		goto_perv_page('videoCategories.html',false);
	}
	
	// $(document).ready(function() {
		// setTimeout(function(){
			// $('img').on('dragstart', function(event) { event.preventDefault();				});
			// $('a').on('dragstart', function(event) { event.preventDefault();				});
		// }, 600);
	// });
	
	function goto_next_page(href,need_internet) {
		need_internet = need_internet || false;
		if (window.cordova)
		{
			var networkState = navigator.connection.type;
			if ((networkState == Connection.NONE) && need_internet) {
				navigator.notification.alert(
					'يجب عليك الاتصال بالانترنت',  // message
					alertDismissed,         // callback
					'تنبيه',            // title
					'نعم'                  // buttonName
				);
				function alertDismissed(){};
			}
			else
			{
				if ( device.platform == 'iOS' )
				{
					var options_back = {
					  "direction"		: "left", // "up", // 'left|right|up|down', default 'left' (which is like 'next')
					  "duration"		:  700, // in milliseconds (ms), default 400
					  "iosdelay"		:  80, // ms to wait for the iOS webview to update before animation kicks in, default 60
					  "androiddelay"	:  110, // same as above but for Android, default 70
					  "href"			: href //"adab.html"
					};
					window.plugins.nativepagetransitions.slide(
					  options_back,
					  function (msg) {console.log("success: " + msg)}, // called when the animation has finished
					  function (msg) {console.log("error: " + msg)} // called in case you pass in weird values
					);
				}
				else
				{
					var options_back = {
					  "direction"		: "left", // "up", // 'left|right|up|down', default 'left' (which is like 'next')
					  "duration"		:  900, // in milliseconds (ms), default 400
					  "iosdelay"		:  80, // ms to wait for the iOS webview to update before animation kicks in, default 60
					  "androiddelay"	:  280, // same as above but for Android, default 70
					  "href"			: href //"adab.html"
					};

					window.plugins.nativepagetransitions.slide(
					  options_back,
					  function (msg) {console.log("success: " + msg)}, // called when the animation has finished
					  function (msg) {console.log("error: " + msg)} // called in case you pass in weird values
					);
				}
			}
		} else {
			window.location.href = href;
		}

	}
	function goto_perv_page(href,need_internet) {
		need_internet = need_internet || false;
		if (window.cordova)
		{
			var networkState = navigator.connection.type;
			if ((networkState == Connection.NONE) && need_internet) {
				navigator.notification.alert(
					'يجب عليك الاتصال بالانترنت',  // message
					alertDismissed,         // callback
					'تنبيه',            // title
					'نعم'                  // buttonName
				);
				function alertDismissed(){};
			}
			else
			{
				if ( device.platform == 'iOS' )
				{
					var options_back = {
					  "direction"		: "right", // "up", // 'left|right|up|down', default 'left' (which is like 'next')
					  "duration"		:  700, // in milliseconds (ms), default 400
					  "iosdelay"		:  80, // ms to wait for the iOS webview to update before animation kicks in, default 60
					  "androiddelay"	:  110, // same as above but for Android, default 70
					  "href"			: href //"adab.html"
					};
					window.plugins.nativepagetransitions.slide(
					  options_back,
					  function (msg) {console.log("success: " + msg)}, // called when the animation has finished
					  function (msg) {console.log("error: " + msg)} // called in case you pass in weird values
					);
				}
				else
				{
					var options_back = {
					  "direction"		: "right", // "up", // 'left|right|up|down', default 'left' (which is like 'next')
					  "duration"		:  900, // in milliseconds (ms), default 400
					  "iosdelay"		:  80, // ms to wait for the iOS webview to update before animation kicks in, default 60
					  "androiddelay"	:  280, // same as above but for Android, default 70
					  "href"			: href //"adab.html"
					};
					window.plugins.nativepagetransitions.slide(
					  options_back,
					  function (msg) {console.log("success: " + msg)}, // called when the animation has finished
					  function (msg) {console.log("error: " + msg)} // called in case you pass in weird values
					);
				}
			}
		} else {
			window.location.href = href;
		}

	}
	
	