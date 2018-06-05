//计算字符串长度
function strlen(str){
    var len = 0;
    for (var i=0; i<str.length; i++) {
     var c = str.charCodeAt(i);
    //单字节加1
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
       len++;
     }
     else {
      len+=2;
     }
    }
    return len;
}



$(document).ready(function() {
				
				$(".form").slideDown(500);
				
				$("#landing").addClass("border-btn");

				$("#registered").click(function() {
					$("#landing").removeClass("border-btn");
					$("#landing-content").hide(500);
					$(this).addClass("border-btn");
					$("#registered-content").show(500);
					
				})

				$("#landing").click(function() {
					$("#registered").removeClass("border-btn");
					$(this).addClass("border-btn");
					
					$("#landing-content").show(500);
					$("#registered-content").hide(500);
				})

				// 登录注册表单的显示和隐藏并且表单提示信息还原
				$(".form").hide();
				$("#close").click(function(){

					$("#user-prompt").show();
					$("#user-warn1").hide();
					$("#user-warn2").hide();
					$(".form").hide();
				})

				$("#login-text").click(function(){
					$(".form").show();

				})

				// 隐藏注册提示
				$("#user-warn1").hide();
				$("#user-warn2").hide();


				//检验注册时的输入
			$("#register").click(function(){

					/**校验用户名*/
                //1.获取用户输入的数据
                  var uValue=document.getElementById("user").value;
                	
                 if(uValue==""){
                      //2.给出错误提示信息
                      $("#user-warn1").show();
                      $("#user-prompt").hide();
                      $("#user-warn2").hide();
                      return false;
                  }
                  //判断用户名是否含有空格
                  if (uValue.indexOf(" ") != -1) {  
       			 	$("#user-warn2").show();
                    $("#user-prompt").hide();
                    $("#user-warn1").hide();
   				 } 
        			 
                  
                  /**校验密码*/
                 var pValue=document.getElementById("password").value;
                  if(pValue==""){                   //注意空的表示方法
                      alert("密码不能为空");
                      return false;
                  }
                      
                  /** 校验确认密码*/
                  var rpValue=document.getElementById("repassword").value;
                  if(rpValue!=pValue){
                      alert("两次密码输入不一致！");
                      return false;
                  }
                  
				})
				//$('#aha').hide();
			});


