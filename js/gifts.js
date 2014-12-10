$(document).ready(function(){

	$('.cardValue').click(function() {
		

		$('#printValue').html($(this).html());

		$('#printName').html($('#cardName').val());

	});


	$("form").submit(function(e){
        e.preventDefault();
		alert("Payment Received. Dine Card will be mailed to -  " + $('#cardadd').val());

	});


});