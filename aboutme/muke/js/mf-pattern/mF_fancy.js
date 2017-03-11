/*
* fancy v1.0
* Date 2012.5.8
* Author koen_lee
*/
myFocus.pattern.extend({
	'mF_fancy':function(settings,$){
		var $focus=$(settings);
		var $txtList=$focus.addListTxt().find('li');
		var $numList=$focus.addListNum().find('li'),n=$numList.length;
		var $thumbList=$focus.addListThumb().find('li');
		var $picUls=$focus.find('.pic ul').repeat(n);
		var $prevBtn=$focus.addHtml('<div class="prev"><a href="javascript:;" target="_blank" rel="external">&#8249;</a></div>');
		var $nextBtn=$focus.addHtml('<div class="next"><a href="javascript:;" target="_blank" rel="external">&#8250;</a></div>');
		var $picListArr=[];
		//CSS
		var w=Math.round(settings.width/n);
		$picUls.each(function(i){
			$(this).css({width:w*(i+1),zIndex:n-i});
			$picListArr.push($(this).find('li'));
		});
		var numW=Math.round((settings.width-n+1)/n);
		$numList.each(function(i){
			this.style.width=numW+'px';
			if(i===(n-1)) this.style.width=numW+1+'px';//最后一个加1px
			$thumbList.eq(i)[0].style.width=w+'px';
		});
		$focus[0].style.height=settings.height+12+'px';
		//PLAY
		var params={isRunning:false},done=0;//记录运行状态
		var eff={1:'surf',2:'sliceUpDown',3:'fold',4:'sliceDown',5:'fade',6:settings.effect};//过渡效果列表
		var effIndex=eff[6]==='random'?0:6;
		$focus.play(function(i){
			params.isRunning=true;
			$numList[i].className='';
			$txtList[i].className='';
		},function(i){
			$numList[i].className='current';
			$txtList[i].className='current';
			var r=effIndex||(1+Math.round(Math.random()*4));
			for(var j=0;j