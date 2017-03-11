myFocus.pattern.extend({
	'mF_classicHB':function(settings,$){//*********************经典怀旧系列二--海报风格******************
		var $focus=$(settings);
		var $picList=$focus.find('.pic li');
		var $txtList=$focus.addListTxt().find('li');
		var $numList=$focus.addListNum().find('li');
		//CSS
		var w=settings.width,h=settings.height,txtH=settings.txtHeight;//设置默认的文字高度
		for(var i=0,n=$picList.length;i