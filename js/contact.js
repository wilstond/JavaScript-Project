$(document).ready(function(){
	$("form").submit(function(){
        if(validateForm()){
        	alert("Thank you! for your words");
        }
        else{
        	return	false;
        }
	});
});

function validateForm(){

	var name_regex = /[A-Za-z]{3,20}/;

	var email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	var name 		= 		$("#name").val();
	var email		=   	$("#email").val();
	var feedbacka		= 	$("#feedbacka").val();

	var validationSummary = "";

	if( (name != '')  && (name !=null)  && (name_regex.test(name))){
		bool_val = 1;
	}
	else{
		validationSummary += "Please enter name in correct format. </br>";	
		bool_val = 0;
	}

	if( (email != '')  && (email_regex.test(email))){
		bool_val = 1;
	}else{
		validationSummary += "Please enter email  in correct format.</br>";
		bool_val = 0;
		
	}

	if( (feedbacka != '')  && (feedbacka !=null)){
		bool_val = 1;
	}else{
		validationSummary +="Please enter feedback in correct format.</br>";
		bool_val = 0;
	}



	if(bool_val == 0){
		$("#formOutput").html(validationSummary);
		validationSummary="";
		$('.formOutput').css({
  							 'display' : 'block',
  							  'background-color' : '#D30E12',
							});
		return  false;
	}
	else{
		return true;
	}



}