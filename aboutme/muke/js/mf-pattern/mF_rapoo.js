myFocus.pattern.extend({//*********************雷柏风格******************
	'mF_rapoo':function(settings,$){
		var $focus=$(settings);
		var $picList=$focus.find('.pic li');
		var $txtBox=$focus.addListTxt();
		var $txtList=$txtBox.find('li');
		var $numBox=$focus.addListNum();
		var $numList=$numBox.find('li');
		var $prevBtn=$focus.addHtml('<div class="prev"><a href="javascript:;" target="_blank" rel="external">&#8249;</a></div>');
		var $nextBtn=$focus.addHtml('<div class="next"><a href="javascript:;" target="_blank" rel="external">&#8250;</a></div>');
		//CSS
		var txtW=settings.txtWidth,n=$picList.length;
		$txtBox[0].style.width=(n-1)*24+txtW+'px';
		$numBox[0].style.width=n*24+6+txtW+'px';
		$prevBtn[0].style.right=parseInt($numBox[0].style.width)+26+'px';
		for(var i=0;i