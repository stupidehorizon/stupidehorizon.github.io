myFocus.pattern.extend({//*********************ladyQ******************
	'mF_ladyQ':function(settings,$){
		var $focus=$(settings);
		var $picList=$focus.find('.pic li');
		var $txtList=$focus.addListTxt().find('li');
		var $numList=$focus.addListNum().find('li');
		var $bar=$focus.addHtml('<div class="time_bar"></div>');
		//CSS
		var n=$picList.length,numH=28,barW=settings.width-23*n-6;
		$focus[0].style.height=settings.height+numH+'px';
		$bar[0].style.cssText='top:'+(settings.height+4)+'px;width:'+barW+'px;'+(settings.timeBar?'':'display:none');
		for(var i=0;i