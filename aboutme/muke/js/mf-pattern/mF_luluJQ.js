myFocus.pattern.extend({//*********************luluJQ******************
	'mF_luluJQ':function(settings,$){
		var $focus=$(settings);
		$focus.find('.pic a').each(function(){
			var $o=$(this),txt=$o.find('img')[0].alt;
			$o.addHtml('<span><b>'+txt+'</b><i></i></span>');
		});
		var $picBox=$focus.find('.pic');
		var $picList=$focus.find('li');
		var $imgList=$picBox.find('img');
		var $txtList=$focus.find('span');
		var $txtBgList=$focus.find('i');
		//CSS
		var n=$picList.length,tabW=settings.tabWidth,txtH=settings.txtHeight,o=settings.grayOpacity;
		$focus.css({width:settings.width+(n-1)*tabW});
		for(var i=0;i<n;i++){ if(i="">0) $picList[i].style.left=settings.width+(i-1)*tabW+'px';
			$txtList[i].style.cssText=$txtBgList[i].style.cssText='top:0;height:'+txtH+'px;line-height:'+txtH+'px;'
		}
		if(settings.grayChange) $imgList.each(function(){$(this).setOpacity(o)});
		//PLAY
		$focus.play(function(i,n){
			$txtList.eq(i).slide({top:0});
			if(settings.grayChange) $imgList.eq(i).slide({opacity:o},400);
		},function(i,n){
			for(var j=0;j</n;i++){>