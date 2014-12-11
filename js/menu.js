$(document).ready(function() {
    $('#menu-content h2').next('div').hide(); 
    
    $('#menu-content h2').click(function() {
        
        $('#menu-content h2').not(this).next('div').slideUp(1000);
        $(this).toggleClass( "changedContent" );
        $(this).next('div').slideToggle(800, function(){
       			
   			 }); 

        $('#menu-content h2').not(this).removeClass( "changedContent" );

		


    });
});