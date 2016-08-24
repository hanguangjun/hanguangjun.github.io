
/*
	@author  Henry Han
	@date    2016-08-02
	@version 01
*/
function mouseWheel(obj,fn){
			// huoqu是不是ff浏览器
			var ff=navigator.userAgent.indexOf("Firefox");
			//判断浏览器类型
			if(ff!=-1){
				// wei添加滚轮事件
				 obj.addEventListener("DOMMouseScroll",wheel,false);
			}else{
				 // obj.onmousewheel=wheel;
				 obj.onmousewheel = wheel;
			}
			//事件方法

			function wheel(event){
				var event=event||window.event;
				var down=true;
				if(event.detail){
					down=event.detail>0;
				}else{
					down=event.wheelDelta<0;
				}
				console.log(down);
			fn.apply(obj,[event,down]);
			//fn是作为参数来接受传进来的函数
			//apply()方法可以将外界需要用的参数附加给fn方法
			return false;
			}


		}