$(document).ready(function() {
    $('#menu-content h2').next('div').hide(); 
    
    $('#menu-content h2').click(function() {
        /*$('#menu-content h2').next('div').hide(1000);*/
        $(this).next('div').slideToggle(1000); 
    });
    
});