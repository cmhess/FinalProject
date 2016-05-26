// session constants

var CLIENT_PLATFORM = "";
var CLIENT_BROWSER = "";
var CLIENT_BROWSER_VERSION = 0;

var DOC_WIDTH = 800;
var DOC_HEIGHT = 600;

function initSessionConstants() {

	if (typeof window.innerWidth != "undefined") {
		DOC_WIDTH = window.innerWidth;
		DOC_HEIGHT = window.innerHeight;
	}

	else if (typeof document.documentElement.offsetWidth != "undefined") {
		DOC_WIDTH = document.documentElement.offsetWidth; 
		DOC_HEIGHT = document.documentElement.offsetHeight; 
	}

	else {
		DOC_WIDTH = document.body.offsetWidth; 
		DOC_HEIGHT = document.body.offsetHeight; 
	}
	
	CLIENT_BROWSER_VERSION = parseFloat(navigator.appVersion);
	
	if ((navigator.appVersion).toLowerCase().indexOf("mac") != -1)
		CLIENT_PLATFORM =  "mac";
	else if ((navigator.appVersion).toLowerCase().indexOf("win") != -1)
		CLIENT_PLATFORM =  "win";
	else 
		CLIENT_PLATFORM =  "other";

	var app = navigator.appVersion.toLowerCase();
	if ((app.indexOf("msie") != -1) || (app.indexOf("explorer") != -1)) 
		CLIENT_BROWSER = "ie";
	else if (app.indexOf("netscape") != -1) CLIENT_BROWSER = "netscape";
	else if (app.indexOf("safari") != -1) CLIENT_BROWSER = "safari";
	else if (app.indexOf("chimera") != -1) CLIENT_BROWSER = "chimera";
	else if (app.indexOf("mozilla") != -1) CLIENT_BROWSER = "mozilla";
	else CLIENT_BROWSER = "unknown";

}




initSessionConstants();	
	// set heights of page elements.
	var modelbox_h = Math.round(DOC_HEIGHT * .9);
	var mol_h = Math.round(modelbox_h - 20);
	// set widths of page elements.
	var modelbox_w = Math.round(DOC_WIDTH * 0.9);
	if (modelbox_w > (1.3*modelbox_h)) { modelbox_w = Math.round(1.3*modelbox_h); }
	var mol_w = modelbox_w - 10;		
	document.write(
		'<style type="text/css">' + 
		'.box {' + 
		'height: ' + modelbox_h + 'px;' + 
		'width: ' + modelbox_w + 'px;' + 
		'}' + 
		'<\/style>'
	);	

