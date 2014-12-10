$(document).ready(function(){
	$('.openings').click(function(){
		$('#post').val($(this).find( 'span:first-child').html());
		$('#location').val($(this).find( 'span:last-child').html());
	});

	$('#careersForm').submit(function(){
		alert("You have successfully applied for " + $('#post').val()  + " at location " + $('#location').val());	
		$('.formOutput').html("Thank you " + $("#fname").val() + "</br></br> We will contact you soon.");
		return false;
	});

})