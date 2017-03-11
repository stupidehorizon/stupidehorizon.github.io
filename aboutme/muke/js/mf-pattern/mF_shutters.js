myFocus.pattern.extend({//*********************百叶窗******************
	'mF_shutters':function(settings,$){
		var c=Math.floor(settings.width/50);
		var $focus=$(settings);
		var $txtList=$focus.addListTxt().find('li');
		var $picUls=$focus.find('.pic ul').repeat(c);
		var $prevBtn=$focus.addHtml('<div class="prev"><a href="javascript:;" target="_blank" rel="external">PREV</a></div>');
		var $nextBtn=$focus.addHtml('<div class="next"><a href="javascript:;" target="_blank" rel="external">NEXT</a></div>');
		var $picListArr=[];
		//CSS
		var w=settings.width/c;
		$picUls.each(function(i){
			$(this).css({width:w*(i+1),zIndex:c-i});
			$picListArr.push($(this).find('li'));
		});
		//PLAY
		var running=false,done=0;//记录运行状态
		$focus.play(function(i){
			running=true;
			$txtList[i].className='';
		},function(i){
			$txtList[i].className='current';
			for(var j=0;j