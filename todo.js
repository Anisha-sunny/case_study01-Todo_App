function login()
	{
		var uname = document.getElementById("mail").value;
		var pwd = document.getElementById("pass").value;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(uname !=="admin")
		{
			alert("Enter valid email id.");
		}
        else if(pwd!=="12345")
		{
			alert("Enter Valid Password");
		}
		
		else
		{
		redirect();
      
		}
	}
	function redirect(){
		window.open("main.html");
 	}
	
	function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}	

	