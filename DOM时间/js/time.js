function getTime(){
	var time = new Date(); 
	var h = time.getHours();
		h = h < 10 ? '0'+h : h   ;
	var m = time.getMinutes();
		m = m < 10 ? '0'+m : m   ;
	var s = time.getSeconds();
		s = s < 10 ? '0'+s : s   ;
	document.myform.times.value = '现在是：'+ h+':'+m+':'+s;
	setTimeout('getTime()',1000);
}