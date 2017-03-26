(function($){
	
	//设置默认参数
	defaults={
		selectors:{                 //class指定样式类
			sections:".sections",   //父元素样式类
			section:".section",     //分页元素样式类
			page:".pages",		    //换页元素样式类
			active:".active"        //被选中的换页元素样式类
		},
		index:0,                     //页面开始索引
		easing:'ease',               //动画效果
		duration:500,				 //动画执行时间
		loop:true,					//是否循环切换
		pagination:true,			//是否进行分页
		keyboard:true,				//是否触发键盘事件 暂时未定义
		direction:"horizontal",	    //滑动方向 vertical horizontal
		callback:"",                 //回调函数
		auto:true                    //是否自动轮播
	};

	//创建类 并且传入参数
	var pageSwitch=(function(){
		//创建类
		function pageSwitch(element,options){
			this.settings=$.extend(true,defaults,options||{});
			this.element=$(element);         //取得包裹元素的引用
			this.init();                     //调用原型方法的init方法确保该执行的函数的执行
		}
        //定义原型方法
		pageSwitch.prototype={
			init:function(){
				var me=this;                  //里面的this相当于$(this) 因为到时是jq对象直接引用
				me.selectors=me.settings.selectors;
				me.sections=me.element.find(me.selectors.sections);
				me.section=me.sections.find(me.selectors.section);

				me.direction=me.settings.direction=="vertical"?true:false;
				me.pageCount=me.pageCount();			
				me.index=(me.settings.index>=0&&me.settings.index<me.pageCount)?me.settings.index:0;
				me.avtiveClass=me.selectors.active.substring(1);
				me.canscroll = true;


				if(!me.direction){
					me._initLayout();
				}

				if(me.settings.pagination){
					me._initPaging();
				}
  				me._initEvent();                  //相当于调用了方法 此处不调用也可在后面写自调用方法
  				me._autoPaging();                 //这样说的话 谁又调用了init呢？？
			},                                     //在原型外调用的
             //计算页面数量
			pageCount:function(){
				return this.section.length;
			},
            //计算页面的长或宽
			switchLength:function(){
				return this.direction==1?this.element.height():this.element.width();
			},
            //上一页
			prev:function(){
				var me=this;
				if(me.index>0){
					me.index--;
				}else if(me.settings.loop){
					me.index=me.pageCount-1;
				}
				me._scrollPage();
			},
            //下一页
			next:function(){
				var me=this;
				if(me.index<me.pageCount){
					me.index++;
				}else if(me.settings.loop){
					me.index=0;
				}
				me._scrollPage();
			},
            //初始化页面布局
			_initLayout:function(){
				var me=this;
					if(!me.direction){
						me.section.css({"float":"left","width":Math.floor(100/me.pageCount)+"%"});
						me.sections.css("width",100*me.pageCount+"%");
					}
					
			},
			//初始化分页标签
			_initPaging:function(){
				var me=this;
				pagesClass=me.selectors.page.substring(1);

				var pageHtml="<ul class="+pagesClass+">";
				for(var i=0;i<me.pageCount;i++){
					pageHtml+="<li></li>";
				}
				me.element.append(pageHtml);
				var pages=me.element.find(me.selectors.page);
				me.pageItem=pages.find("li");
				me.pageItem.eq(me.index).addClass(me.avtiveClass);
				console.log(me.avtiveClass);

				if(me.direction){
					pages.addClass("vertical");
				}else{
					pages.addClass("horizontal");
				}

			},
   			//自动切换
			_autoPaging:function(){ 
				var me=this;
				if(me.settings.auto){
				var autoPaging=$(document).ready(function(){
	                	var autoPaging=setInterval(function(){
		                	me.next();
		                	me._scrollPage();
		                },4000);
		                me.element.on("wheel click",function(e){
		                	clearInterval(autoPaging);
		                	//me._autoPaging();
		             });
	                });
	                
	                 
			}

		    },
		   
		   
			
             //初始化事件
			_initEvent:function(){

				var me=this;
				//滚轮事件
				me.element.on("wheel",function(e){
					e.preventDefault();           //取消事件的默认动作。
					var delta=e.originalEvent.wheelDelta;
                    me._autoPaging();
					if(me.canscroll){
						if(delta>0){
							me.prev();
						}else if(delta<0){
							me.next();
						}
					}
				});

				//分页点击事件 
				me.element.on("click",me.selectors.page+' li',function(){
					me.index=$(this).index();
					me._scrollPage();
					me._autoPaging();
				});
			},
            //页面切换效果
			_scrollPage:function(){
				var me=this;
				var dest=me.section.eq(me.index).position();

				if(!dest) return;

				me.canscroll=false;
				var animateCss=me.direction?{top:-dest.top}:{left:-dest.left};
				console.log(animateCss);
				me.sections.animate(animateCss,me.settings.duration,function(){
					me.canscroll=true;
					if(me.settings.callback){
						me.settings.callback();
					}
				});
				if(me.settings.pagination){
					me.pageItem.eq(me.index).addClass(me.avtiveClass).siblings("li").removeClass(me.avtiveClass);
				}

			}

		}
		return pageSwitch;  //把类返回给pageSwitch
	})();



	$.fn.pageSwitch=function(options){
		return this.each(function(){
			var me=$(this),    
				instance=me.data("pageSwitch");                //JQuery $(this)对象是否含有 instance 实例

				if(!instance){                                 //没有则给jquery $(this)对象存储一个新的实例
					me.data("pageSwitch",(instance=new pageSwitch(me,options)));
				}

				if($.type(options)==="string") return instance[options]();
		});
	};

})($)

//调用
//任何jquery对象皆可调用pageSwitch()方法，但是DOM要符合本插件预设的DOM结构

$(function(){
		$('#container').pageSwitch();
	});


