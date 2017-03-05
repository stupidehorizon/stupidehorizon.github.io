myFocus.pattern.extend({//*********************51xflash(仅支持4帧)******************
	'mF_51xflash':function(settings,$){
		var o=document.getElementById(settings.id),list=o.getElementsByTagName('li');
		for(var j=0,len=list.length;j<len;j++){ if(j="">=4) list[j].parentNode.removeChild(list[j]);
		}
		var $focus=$(settings);
		var $picBox=$focus.find('.pic');
		var $picUl=$picBox.find('ul');
		var $picList=$picUl.find('li');
		var $txtList=$focus.addListTxt().find('li');
		var $playBtn=$focus.addHtml('<div class="play"></div>');
		//CSS
		var pad=4,w=(settings.width/3),h=(settings.height-pad*2)/3,disX=w+pad,disY=h+pad,txtH=settings.txtHeight;
		$focus[0].style.cssText='width:'+(settings.width+disX)+'px;height:'+(settings.height+txtH+(txtH===0?0:pad))+'px;';//焦点图盒子
		$picBox[0].style.cssText='width:'+(settings.width+disX)+'px;height:'+settings.height+'px;';//图片盒子
		for(var i=0,n=$picList.length;i</len;j++){>