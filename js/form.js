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

//获得cookie的值
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}


$(document).ready(function() {
        alert(getCookie('name'));
				
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
					$("#password-prompt").show();
					$("#user-warn1").hide();
					$("#user-warn2").hide();
					$("#user-warn3").hide();
					$("#password-warn1").hide();
					$("#password-warn2").hide();
					$("#password-warn3").hide();
					$("#repassword-warn1").hide();
					

					$(".form").hide();
				})

				$("#login-text").click(function(){
					$(".form").show();

				})

				// 隐藏注册警告
				$("#user-warn1").hide();
				$("#user-warn2").hide();
				$("#user-warn3").hide();
				$("#password-warn1").hide();
				$("#password-warn2").hide();
				$("#password-warn3").hide();
				$("#repassword-warn1").hide();


				//检验注册时的输入加入注册点击事件
	$("#register").click(function(){

					/**校验用户名*/
                //1.获取用户输入的数据
                  var uValue=document.getElementById("user").value;
                	
                 if(uValue==""){
                      //2.给出错误提示信息
                      $("#user-warn1").show();
                      $("#user-prompt").hide();
                      $("#user-warn2").hide();
                      $("#user-warn3").hide();
                      return false;
                  }
                  //判断用户名是否含有空格
                  if (uValue.indexOf(" ") != -1) {  
       			 	$("#user-warn2").show();
                    $("#user-prompt").hide();
                    $("#user-warn1").hide();
                    $("#user-warn3").hide();
                    return false;
   				 } 
   				 //用户名长度不能超过15	
   				 if (strlen(uValue)>15)
   				 {

   				 	$("#user-warn3").show();
                    $("#user-prompt").hide();
                    $("#user-warn1").hide();
                    $("#user-warn2").hide();
                    return false;
   				 }
        			 
                  
                  /**校验密码*/
                 var pValue=document.getElementById("password").value;
                 //
                  if(pValue==""){                   //注意空的表示方法
                      $("#password-warn1").show();
                      $("#password-prompt").hide();
                      $("#password-warn2").hide();
                      $("#password-warn3").hide();
                      return false;
                  }

                  //密码不能含有空格
                  if (pValue.indexOf(" ") != -1) {  
                  	  $("#password-warn2").show();
                      $("#password-prompt").hide();
                      $("#password-warn1").hide();
                      $("#password-warn3").hide();
                    return false;
   				 } 

   				  //密码至少为9位
   				  if (strlen(pValue)<9)
   				 {
   				 	  $("#password-warn3").show();
                      $("#password-prompt").hide();
                      $("#password-warn1").hide();
                      $("#password-warn2").hide();
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


