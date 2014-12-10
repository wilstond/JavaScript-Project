$(document).ready(function(){
	$('.openings').click(function(){
		$('#post').val($(this).find( 'span:first-child').html());
		$('#location').val($(this).find( 'span:last-child').html());
	});

	$('#careersForm').submit(function(){
		
		return false;
	});


	$("form").submit(function(){	
		
        if(validateForm()){
        	
        	$('.formOutput').css({
  							 'display' : 'block',
  							  'background-color' : '#008000',
							});
			$('.formOutput').html("Thank you " + $("#fname").val() + "</br></br> We will contact you soon.");
			alert("You have successfully applied for " + $('#post').val()  + " at location " + $('#location').val());	
			return false;
        }
        else{
        	alert("Your application cannot be processed right now.");
        	return	false;

        }
	});
});



function validateForm(){

	var validationSummary = "";

	var name_regex = /[A-Za-z]{3,20}/;

	var phone_regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
	
	var name 		= 	$("#fname").val();
	var phone		=   $('#phone').val();



	var bool_val = 0;
	var validationSummary = "";

	if( (name != '')  && (name !=null)  && (name_regex.test(name))){
		bool_val = 1;
	}
	else{
		validationSummary += "Please enter Name in correct format. </br>";	
		bool_val = 0;
	}

	if( (phone != '')  && (phone !=null) && (phone_regex.test(phone))){
		bool_val = 1;
	}else{
		validationSummary +="Please enter  Phone in correct format.</br>";
		bool_val = 0;
	}


	if(bool_val == 0){
		$('.formOutput').html (validationSummary);
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