/*
* 绚丽切片风格 v2.0
* Date 2012.5.25
* Author koen_lee
*/
myFocus.pattern.extend({
	'mF_liuzg':function(settings,$){
		var $focus=$(settings);
		var $picBox=$focus.find('.pic');
		var $picList=$picBox.find('li');
		var $txtList=$focus.addListTxt().find('li');
		var $numList=$focus.addListNum().find('li');
		//HTML++
		var c=Math.floor(settings.height/settings.chipHeight),n=$txtList.length,html=['<ul>'];
		for(var i=0;i<c;i++){ html.push('<li=""><div>');
			for(var j=0;j<n;j++) html.push($piclist[j].innerhtml);="" html.push('<="" div="">');
		}
		html.push('</n;j++)></div></c;i++){></ul>');
		$picBox[0].innerHTML=html.join('');
		//CSS
		var w=settings.width,h=settings.height,cH=Math.round(h/c);
		var $picList=$picBox.find('li'),$picDivList=$picBox.find('div');
		$picList.each(function(i){
			$picList.eq(i).css({width:w,height:cH});
			$picDivList.eq(i).css({height:h*n,top:-i*h});
		});
		$picBox.find('a').each(function(){this.style.height=h+'px'});
		//PLAY
		$focus.play(function(i){
			$txtList[i].style.display='none';
			$numList[i].className='';
		},function(i){
			var tt=settings.type||Math.round(1+Math.random()*2);//效果选择
			var dur=tt===1?1200:300;
			for(var j=0;j