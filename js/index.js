$(document).ready(function(){
	 setInterval(changeQuote, 5000);
	 var i=0;
	

	 function changeQuote(){
		if(i>3)
			i=0;
		
		$('#sliderQuotes').children().eq(i).fadeOut(300).next().delay(300);
		$('#sliderQuotes').children().eq(i+1).fadeIn(300);
		i++;

		
	 	

	 }

});