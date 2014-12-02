jQuery(document).ready(function(){
//hides all paragraphs
$(".content").hide(); 

//when a h2 is clicked
$('#OU').click(function(){
		$('.content').toggle(3000);
		
	});

}); 
