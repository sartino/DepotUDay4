$(document).ready(function(){
    
    $( '#keyboard-upper-container' ).hide(function() {
             $( ".div" ).keypress();
    });
    
    $( '#keyboard-lower-container' ).show(function() {
             $( ".div" ).keypress();
    });
      
});