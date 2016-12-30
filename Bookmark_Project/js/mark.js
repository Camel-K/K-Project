window.onload = function(){


	// 导航菜单
	var nav = document.getElementById("nav_ul"); //获取nav_ul
	var lis = nav.children; //获取里面的li元素

	//遍历li
	for(var i=0; i<lis.length; i++){
		//鼠标移动到上面时
		lis[i].onmouseover = function(){
			//找到他下面的第二个元素，显示
			var subnav = this.children[1];
			subnav.style.display = "block";
		}
		//鼠标离开时
		lis[i].onmouseout = function(){
			//找到他下面的第二个元素，隐藏
			var subnav = this.children[1];
			subnav.style.display = "none";
		}
		
	}



	//参加好友选择
	//var join_fr = document.getElementById("join_fr");
	//
	//join_fr.onclick = function(){
	//	this.style.backgroundPosition = (-26)+"px"+" "+(-100)+"px";
	//}
	
	





}