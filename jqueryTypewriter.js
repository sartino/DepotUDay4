$(document).ready(function(){

    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var lines = [];
    var lineCount = 0;
    var lineLetterIndex = 0;
    var lettersArray = [];

    $(sentences).each(function(){
        var letters = this.split('');
        console.log(letters);
        var line = $('<div class="letters"></div>');
        $(letters).each(function() {
            var letter = this;
            if (letter == ' ') {
                letter = '&nbsp;';
            }
            lettersArray.push(line);
            line.append($('<div class="letter"></div>').html(letter));
        });
        lines.push(line);

    });
    $('#words').append(lines[lineCount]);

    $( "#keyboard-upper-container" ).hide();
    $( "#keyboard-lower-container" ).show();
    console.log($(lines[0]).children().eq(lineLetterIndex).text());

    $(document).keydown(function(e) {
        if (e.which === 16) {
            $( "#keyboard-lower-container" ).hide();
            $( "#keyboard-upper-container" ).show();
        }
    });

    $(document).keyup(function(e) {
        if (e.which === 16) {
            $( "#keyboard-upper-container" ).hide();
            $( "#keyboard-lower-container" ).show();
        } else {
            $('.key').removeClass('highlight');
        }
    });

    $(document).keypress(function (e) {
        var pressKey = e.charCode;
        var letter = String.fromCharCode(pressKey);
        $('#'+pressKey).addClass('highlight');
        $('#'+letter).addClass('highlight');
        var nextLetter = $(lines[lineCount]).children().eq(lineLetterIndex).text();
        if (letter === nextLetter) {

            console.log('seen matching letter of ' + nextLetter); //#debug

            $(lines[lineCount]).children().eq(lineLetterIndex).remove('#block').addClass("glyphicon glyphicon-ok");
            lineLetterIndex++;
        }
    });
});