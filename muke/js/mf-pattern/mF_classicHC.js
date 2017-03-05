myFocus.pattern.extend({
	'mF_classicHC':function(settings,$){//*********************经典怀旧系列一--慧聪风格******************
		var $focus=$(settings);
		var $picList=$focus.find('.pic li');
		var $txtList=$focus.addListTxt().find('li');
		var $numBg=$focus.addHtml('<div class="num_bg"></div>');
		var $numBox=$focus.addListNum();
		var $numList=$numBox.find('li');
		//CSS
		var txtH=settings.txtHeight,w=settings.width,h=settings.height;
		$focus.css({width:w+2,height:h+txtH+2});
		$numBg[0].style.bottom=$numBox[0].style.bottom=txtH+1+'px';
		for(var i=0,n=$picList.length;i