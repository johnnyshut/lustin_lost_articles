if (typeof(window.WaitOnKeyPress) != "function")
{
	function WaitOnKeyPress(e)
	{
		if(!e) e = window.event
		if(!e) return;
		if(e.keyCode == 27)
			CloseWaitWindow();
	}
}

if (typeof(window.ShowWaitWindow) != "function")
{
	function ShowWaitWindow()
	{
		CloseWaitWindow();
	
		var obWndSize = jsUtils.GetWindowSize();
	
		var div = document.body.appendChild(document.createElement("DIV"));
		div.id = "wait_window_div";
		if (typeof(phpVars) == "object" && phpVars != null && phpVars.messLoading)
			div.innerHTML = phpVars.messLoading;
		else
			div.innerHTML = oText['wait_window'];
			
		div.className = "waitwindow";
		//div.style.left = obWndSize.scrollLeft + (obWndSize.innerWidth - div.offsetWidth) - (jsUtils.IsIE() ? 5 : 20) + "px";
		div.style.right = (5 - obWndSize.scrollLeft) + 'px';
		div.style.top = obWndSize.scrollTop + 5 + "px";
	
		if(jsUtils.IsIE())
		{
			var frame = document.createElement("IFRAME");
			frame.src = "javascript:''";
			frame.id = "wait_window_frame";
			frame.className = "waitwindow";
			frame.style.width = div.offsetWidth + "px";
			frame.style.height = div.offsetHeight + "px";
			frame.style.right = div.style.right;
			frame.style.top = div.style.top;
			document.body.appendChild(frame);
		}
		jsUtils.addEvent(document, "keypress", WaitOnKeyPress);
	}
}

if (typeof(window.CloseWaitWindow) != "function")
{
	function CloseWaitWindow()
	{
		jsUtils.removeEvent(document, "keypress", WaitOnKeyPress);
	
		var frame = document.getElementById("wait_window_frame");
		if(frame)
			frame.parentNode.removeChild(frame);
	
		var div = document.getElementById("wait_window_div");
		if(div)
			div.parentNode.removeChild(div);
	}
}

	
function FCloseWaitWindow(container_id)
{
	container_id = 'wait_container' + container_id;
	var frame = document.getElementById((container_id + '_frame'));
	if(frame)
		frame.parentNode.removeChild(frame);

	var div = document.getElementById(container_id);
	if(div)
		div.parentNode.removeChild(div);
	return;
}

function FShowWaitWindow(container_id)
{
	container_id = 'wait_container' + container_id;
	FCloseWaitWindow(container_id);
	var div = document.body.appendChild(document.createElement("DIV"));
	div.id = container_id;
	div.innerHTML = (oText['wait_window'] ? oText['wait_window'] : '');
	div.className = "waitwindow";
	div.style.left = document.body.scrollLeft + (document.body.clientWidth - div.offsetWidth) - 5 + "px";
	div.style.top = document.body.scrollTop + 5 + "px";

	if(jsUtils.IsIE())
	{
		var frame = document.createElement("IFRAME");
		frame.src = "javascript:''";
		frame.id = (container_id + "_frame");
		frame.className = "waitwindow";
		frame.style.width = div.offsetWidth + "px";
		frame.style.height = div.offsetHeight + "px";
		frame.style.left = div.style.left;
		frame.style.top = div.style.top;
		document.body.appendChild(frame);
	}
	return;
}

function FCancelBubble(e)
{
	if (!e)
		e = window.event;
		
	if (jsUtils.IsIE())
	{
		e.returnValue = false;
		e.cancelBubble = true;
	}
	else
	{
		e.preventDefault();
		e.stopPropagation();
	}
	return false;
}

function debug_info(text)
{
	container_id = 'debug_info_forum';
	var div = document.getElementById(container_id);
	if (!div || div == null)
	{
		div = document.body.appendChild(document.createElement("DIV"));
		div.id = container_id;
		div.className = "forum-debug";
		div.style.position = "absolute";
		div.style.width = "170px";
		div.style.padding = "5px";
		div.style.backgroundColor = "#FCF7D1";
		div.style.border = "1px solid #EACB6B";
		div.style.textAlign = "left";
		div.style.zIndex = "100";
		div.style.fontSize = "11px";
		div.style.left = document.body.scrollLeft + (document.body.clientWidth - div.offsetWidth) - 5 + "px";
		div.style.top = document.body.scrollTop + 5 + "px";
	
		if(jsUtils.IsIE())
		{
			var frame = document.createElement("IFRAME");
			frame.src = "javascript:''";
			frame.id = (container_id + "_frame");
			frame.className = "waitwindow";
			frame.style.width = div.offsetWidth + "px";
			frame.style.height = div.offsetHeight + "px";
			frame.style.left = div.style.left;
			frame.style.top = div.style.top;
			document.body.appendChild(frame);
		}
	}
	
	div.innerHTML += text + "<br />";
	return;
}
/*
     FILE ARCHIVED ON 21:57:04 Jul 08, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:01:35 Sep 10, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 185.805
  exclusion.robots.policy: 0.14
  esindex: 0.008
  RedisCDXSource: 17.274
  PetaboxLoader3.datanode: 136.675 (5)
  CDXLines.iter: 11.868 (3)
  PetaboxLoader3.resolve: 130.214 (3)
  load_resource: 117.943
  exclusion.robots: 0.149
  LoadShardBlock: 151.821 (3)
*/