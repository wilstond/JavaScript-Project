$(document).ready(function(){

	$('.cardValue').click(function() {
		$('#printValue').html($(this).html());
		$('#printName').html($('#cardName').val());

	});


	$("form").submit(function(){
       
		
        if(validateForm()){
        	alert("Payment Received. Dine Card will be mailed to -  " + $('#cardadd').val());
        }

        else{
        	alert("Your card cannot be processed right now.");
        	return	false;
        }

		

	});


});


function validateForm(){

	var name_regex = /[A-Za-z]{3,20}/;

	var postal_regex = /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/;
	
	var name 		= 	$("#cardName").val();
	var address		=   $('#cardadd').val();
	var postal 		= 	$('#postal').val();

	var bool_val = 0;
	var validationSummary = "";

	if( (name != '')  && (name !=null)  && (name_regex.test(name))){
		bool_val = 1;
	}
	else{
		validationSummary += "Please enter name in correct format. </br>";	
		bool_val = 0;
	}

	if( (address != '')  && (address !=null) ){
		bool_val = 1;
	}else{
		validationSummary += "Please enter full address in correct format.</br>";
		bool_val = 0;
		
	}

	if( (postal != '')  && (postal !=null) && (postal_regex.test(postal))){
		bool_val = 1;
	}else{
		validationSummary +="Please enter postal code in correct format.</br>";
		bool_val = 0;
	}


	if(bool_val == 0){
		document.getElementById('validationSummary').innerHTML = validationSummary;
		validationSummary="";
		return  false;
	}
	else{
		return true;
	}

}