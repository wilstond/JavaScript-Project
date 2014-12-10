//alert("linked");


// Code by Alagappan Palaniappan


var name_regex = /[A-Za-z]{3,20}/;
var pass_regex = /\w{3,10}/;
var email_regex= /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/;

// regular expression from regexlib.com


$(function()
{

//alert("linked");

$("#wrapper_hidden").hide();

$("#reg").hover(function(){ $("#content_para").hide(); $("#form").show();},
				function(){});


$("#e1").hover(function(){$("#form").hide();$("#content_para").html($("#e1_para").html());$("#content_para").show();},
				function(){});

$("#e2").hover(function(){$("#form").hide();$("#content_para").html($("#e2_para").html());$("#content_para").show();},
				function(){});

$("#e3").hover(function(){$("#form").hide();$("#content_para").html($("#e3_para").html());$("#content_para").show();},
				function(){});




$("#submit").click(function(){ 
		if(validation()==0){ event.preventDefault();} else {alert("Registration is sucessful");}
	

	});

$("#clear").click(function(){ 
		$('#form').trigger("reset");
	});

	


	function validation()
	{
		alert("called");

		
		if($("#fname").val()=="" || $("#lname").val()=="" || $("#mail").val()=="")
			{
			alert("please fill all the values in the form");
			$("#fname").focus();	
			}

		else	
			if(!name_regex.test($("#fname").val()) || !name_regex.test($("#lname").val()))
				{ alert("Name should be Minimum 3 Letters to Max 20 Letters");
					$("#fname").focus();
				}

		else
			if(!email_regex.test($("#mail").val()))
				{ alert("Invalid email address"); $("#mail").focus(); }
			
		else
			if(!pass_regex.test($("#pass").val()))
				{ alert("Password should be Minimum 3 to Max 10 Characters"); $("#pass").focus();}

		else 
			if($("#pass").val() === $("#cpass").val())
			{
	
			return 1;
			}

		else
		{ alert("password mismtach, please try again !");}
	

		return 0;
	}


});