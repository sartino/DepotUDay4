$(document).ready(function(){
    
    $( "#keyboard-upper-container" ).hide();
    $( "#keyboard-lower-container" ).show();
    
    
    $(document).keydown(function(event) {
        if (event.which === 16) {
            $( "#keyboard-lower-container" ).hide();
            $( "#keyboard-upper-container" ).show();
        }
    });
    
    $(document).keyup(function(event) {
        if (event.which === 16) {
            $( "#keyboard-upper-container" ).hide();
            $( "#keyboard-lower-container" ).show();
        }
    });
    
    $(document).keypress(function(e)
{
    var s = String.fromCharCode(e.which);
    if (s.match(/[a-zA-Z\.]/),([32]))
        console.log(s + ' is a match!');
});



});