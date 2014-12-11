var name_regex = /[A-Za-z]{3,20}/;
var email_regex= /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/;
var number_regex= /^[2-9]{2}[0-9]{8}$/;

// regular expression from regexlib.com


$(function()
{

$("#submit").click(function(){ 
		if(validation()==0){ event.preventDefault();} else {alert("Thank you for booking, you will be contacted soon!!!");}
	

	});

$("#clear").click(function(){ 
		$('#booking-form').trigger("reset");
	});

	


	function validation()
	{
		
		if($("#fname").val()=="" || $("#lname").val()=="" || $("#mail").val()=="")
			{
			alert("Please fill all the values in the form");
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
            if(!number_regex.test($("#phone").val()))
				{ alert("Invalid phone number"); $("#phone").focus(); }


		else
		{ return 1;}
	

		return 0;
	}


});