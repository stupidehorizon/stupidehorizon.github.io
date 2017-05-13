window.onload=function(){
	
    photo=document.getElementsByClassName("photo-box");
    photo=Array.prototype.slice.call(photo,0);

    main();

	function main(){	
		for(var i=0;i<photo.length;i++){
			if(photo[i].className!=="photo-box center")
				distribute(photo[i]);

				photo[i].onclick=function(){    //不能直接等于turn() 考虑this的指向
					 //turn(this,isfront);
					if(this.className=="photo-box center")
						turn(this.firstElementChild);
					 else {
					    choose(this);
					    photo=document.getElementsByClassName("photo-box");
	    				photo=Array.prototype.slice.call(photo,0);
					    main();
					 }
				};
			
		}
	}

};

//返回j到k之间的随机数
function random(j,k){                       
	return Math.floor(Math.random()*k)+j;
};

//2D随机分布函数          /*.photo-box{width: 260px;height: 340px; */
function distribute(ele){
	ele.style.left=random(-130,document.body.offsetWidth-130)+"px";
	ele.style.top=random(-170,document.body.offsetHeight-170)+"px";
	ele.style['transform']='rotate('+random(-90,90)+'deg) scale(0.7)';
}

//点击翻转函数
function turn(thi,isfront){
	var front=thi.firstElementChild;
	var back=thi.lastElementChild;
	if(front.style['transform']=="rotateY(180deg)"){
		front.style['transform']="rotateY(0deg)";
		back.style['transform']="rotateY(180deg)";
	    
	}else{
		front.style['transform']="rotateY(180deg)";
		back.style['transform']="rotateY(0deg)";
	}
}

//选中图片替换中间图片
function choose(thi){
	var old=document.getElementsByClassName("center")[0];
	old.className="photo-box";
	thi.className="photo-box center";
	front=old.firstElementChild.firstElementChild;
	back=old.lastElementChild.lastElementChild;

   if(front.style['transform']=="rotateY(180deg)"){
   		front.style['transform']="rotateY(0deg)";
		back.style['transform']="rotateY(180deg)";
   }
}
    	