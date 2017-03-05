myFocus.pattern.extend({//*********************奇艺******************
	'mF_qiyi':function(settings,$){
		var $focus=$(settings);
		var $slider=$focus.addHtml('<div class="slider"></div>');
		$slider[0].appendChild($focus.find('.pic')[0]);
		$slider[0].appendChild($focus.addListTxt()[0]);
		var $picList=$focus.find('.pic li');
		var $txtList=$focus.find('.txt li');
		var $numList=$focus.addListNum().find('li');
		//CSS
		var w=settings.width,txtH=settings.txtHeight,n=$picList.length;
		$slider[0].style.width=w*n+'px';
		for(var i=0;i