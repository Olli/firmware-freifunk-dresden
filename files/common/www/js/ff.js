var timer_dhcp=null;
var timer_wlan=null;
var timer_register=null;
var lock_dhcp=0
var lock_wlan=0
var lock_register=0

$(document).ready(main);

function main()
{
	if (document.all)
	{
		document.onkeydown = help;
		document.onhelp = function(){return false;}
	}
	else
	{
		document.onkeypress = help;
	}
}
function ajax_dhcp(data)
{
	if(lock_dhcp)return;
	lock_dhcp=1;
	t=Math.random();
	$("#ajax_dhcp").load("/admin/ajax-dhcp.cgi", {dummy:t});
	if(timer_dhcp=="undefined"||timer_dhcp==null)timer_dhcp = window.setInterval("ajax_dhcp()", 3000);
	lock_dhcp=0;
}
function ajax_wlan(data)
{
	if(lock_wlan)return;
	lock_wlan=1;
	t=Math.random();
	$("#ajax_wlan").load("/admin/ajax-wlan.cgi", {dummy:t});
	if(timer_wlan=="undefined"||timer_wlan==null)timer_wlan = window.setInterval("ajax_wlan()", 5000);
	lock_wlan=0;
}
function ajax_register(data)
{
	if(lock_register)return;
	lock_register=1;
	t=Math.random();
	$("#ajax_register").load("/admin/ajax-register.cgi", {dummy:t});
	if(timer_register=="undefined"||timer_register==null)timer_register = window.setInterval("ajax_register()", 5000);
	lock_register=0;
}
function help(e)
{
	if (!e) e = event;
	// (virt)KeyVal is Konqueror, charCode is Moz/Firefox, else MSIE, Netscape, Opera
	if (26 == e.virtKeyVal || !e.keyVal && !e.charCode && 112 == (e.which || e.keyCode))
	{
		var o = null;
		if (e.preventDefault)
		{
			if (e.cancelable) e.preventDefault();
			o = e.target;
		}
		else
		{
			e.cancelBubble = true;
			o = e.srcElement;
		}
		while(o && '' == o.title) o = o.parentNode;
		if (o) alert(o.title);
	}
}
function checknumber (v)
{
	var re = new RegExp("[0-9]+");
	return ! re.test(v);
}
function fold(id)
{
	obj = document.getElementById(id);
	obj.style.display = ('block'!=obj.style.display?'block':'none');
	return false;
}
function isNumberKey(evt){
 var charCode = (evt.which) ? evt.which : event.keyCode
 if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
 return true;
}
