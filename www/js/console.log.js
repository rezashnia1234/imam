if(true)
{
	is_document_ready = false;
	var originallog		= console.log;
	var originalwarn	= console.warn;
	var originalerror	= console.error;
	var Old_ConsoleLog_OBJ		= "";
	// console.log("test");
	console.log = function(txt) {
		if(is_document_ready == false)
		{
			alert("console.log :\n  " + txt);
			Old_ConsoleLog_OBJ = "<li>" + txt + "</li>" + Old_ConsoleLog_OBJ;
		}
		else
		{
			$("#consolelog ul").prepend("<li>" + txt + "</li>");
		}
		//originallog.apply(console, arguments);
	}
	console.warn = function(txt) {
		if(is_document_ready == false)
		{
			alert("console.warn :\n  " + txt);
			Old_ConsoleLog_OBJ = "<li style='color:#ffff00;'>" + txt + "</li>" + Old_ConsoleLog_OBJ;
		}
		else
		{
			$("#consolelog ul").prepend("<li style='color:#ffff00;'>" + txt + "</li>");
		}
		//originallog.apply(console, arguments);
	}
	console.error = function(txt) {
		if(is_document_ready == false)
		{
			alert("console.error :\n  " + txt);
			Old_ConsoleLog_OBJ = "<li style='color:#ff0000;'>" + txt + "</li>" + Old_ConsoleLog_OBJ;
		}
		else
		{
			$("#consolelog ul").prepend("<li style='color:#ff0000;'>" + txt + "</li>");
		}
		//originallog.apply(console, arguments);
	}

	$( document ).ready(function() {
		if(!is_document_ready)
		{
			is_document_ready = true;
			$("body").append("<style>#consolelog *{font-size:12px;margin:0;padding:0;outline-style:unset !important;-moz-user-select:element !important;}</style><div style='position: fixed; height: 35%;z-index: 2147483647; left: 0px; top: 0px; background: black none repeat scroll 0% 0%; color: white; overflow: auto; width: 100%; text-align: left; direction: ltr; padding: 10px 21px !important;' id='consolelog'><ul>" + Old_ConsoleLog_OBJ + "<li>Console.Log Initialized;</li><li style='color:#ffff00;'>بسم الله الرحمن الرحیم</li></ul></div>");
		}
	});
}





/*
if(true)
{
	is_document_ready = false;
	var originallog		= console.log;
	var originalwarn	= console.warn;
	var originalerror	= console.error;
	var Old_ConsoleLog_OBJ		= "";
	// console.log("test");
	console.log = function() {
		if(is_document_ready == false)
		{
			alert("console.log :\n  " + jQuery.param(arguments));
			Old_ConsoleLog_OBJ = "<li>" + jQuery.param(arguments) + "</li>" + Old_ConsoleLog_OBJ;
		}
		else
		{
			$("#consolelog ul").prepend("<li>" + decodeURI(jQuery.param(arguments)) + "</li>");
		}
		//originallog.apply(console, arguments);
	}
	console.warn = function() {
		if(is_document_ready == false)
		{
			alert("console.warn :\n  " + jQuery.param(arguments));
			Old_ConsoleLog_OBJ = "<li style='color:#ffff00;'>" + jQuery.param(arguments) + "</li>" + Old_ConsoleLog_OBJ;
		}
		else
		{
			$("#consolelog ul").prepend("<li style='color:#ffff00;'>" + jQuery.param(arguments) + "</li>");
		}
		//originalwarn.apply(console, arguments);
	}
	console.error = function() {
		if(is_document_ready == false)
		{
			alert("console.error :\n  " + jQuery.param(arguments) );
			Old_ConsoleLog_OBJ = "<li style='color:#ff0000;'>" + jQuery.param(arguments) + "</li>" + Old_ConsoleLog_OBJ;
		}
		else
		{
			$("#consolelog ul").prepend("<li style='color:#ff0000;'>" + jQuery.param(arguments) + "</li>");
		}
		//originalerror.apply(console, arguments);
	}

	$( document ).ready(function() {
		if(!is_document_ready)
		{
			is_document_ready = true;
			$("body").append("<style>#consolelog *{font-size:12px;margin:0;padding:0;outline-style:unset !important;-moz-user-select:element !important;}</style><div style='position: fixed; height: 40%;z-index: 2147483647; left: 0px; bottom: 0px; background: black none repeat scroll 0% 0%; color: white; overflow: auto; width: 100%; text-align: left; direction: ltr; padding: 10px 21px !important;' id='consolelog'><ul>" + Old_ConsoleLog_OBJ + "<li>Console.Log Initialized;</li><li style='color:#ffff00;'>بسم الله الرحمن الرحیم</li></ul></div>");
		}
		console.error("testsss");
	});
}
*/

