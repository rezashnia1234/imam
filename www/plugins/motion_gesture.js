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

        // say hello
        krpano.trace(1,"hello from plugin[" + plugin.name + "]");
		//krpano.call("set(plugin[MotionGesture].curent_pano,scene[get(xml.scene)].name);")
		//krpano.set(plugin[MotionGesture].curent_pano,scene[get(xml.scene)].name);
        //krpano.trace(1,"000000" + plugin.curent_pano);
		/**/
		VR_LOOP();
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