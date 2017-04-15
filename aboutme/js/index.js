window.onload=function(){

	var scr=document.querySelectorAll("li.scr");
	for(let i=0;i<scr.length;i++){
		var dataid=scr[i].dataset.dataid;
		scr[i].onclick=scroll(dataid);
	}
    
    var toTop=document.getElementById("toTop");
    toTop.onclick=scrollToTop();

    var demoList=document.querySelectorAll("li.demo-li");
    for (let i = 0; i<demoList.length; i++) {
    	demoList[i].onclick=demoChange()
    };

    window.addEventListener("scroll",isTop());

}

function scroll(dataid){
	return function(){
		var posTop=document.getElementById(dataid).offsetTop;
		$("body").animate({scrollTop:posTop},500);
	}
}

function scrollToTop(){
	return function(){
	$("body").animate({scrollTop:0},500);
	}
}

function demoChange(){
	return function(){
      $(".active").removeClass("active");
	  $(this).addClass("active");
	  var className=$(this).text();
	  var demo=$(".project");
	  for(let i=0;i<demo.length;i++){
	  	if(className=="All")
	  		$(demo[i]).show();
	  	else{
		  	if($(demo[i]).hasClass(className))
		  		$(demo[i]).show();
		  	else{
		  		$(demo[i]).hide();
		  	 }
		    }
	    }	
	}
}

function isTop(){
	return function(){
		var	top=document.body.scrollTop;
		var toTop=document.getElementById("toTop");
		if(top>100)
			toTop.style.bottom="5%";
		else
			toTop.style.bottom="-5%";
	}
}