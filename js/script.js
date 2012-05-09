$(document).ready(function(){

    var tw = new TypeWriter('logo');

    function typeHeader()
    {
        tw.type("typewriter.js", function(){
            tw.setPaper("text");
            tw.type("brought to you by:", function(){
                tw.setPaper("name");
                tw.setCallback();
                tw.type('@mccarthyjm');
            });
        });
    }

    $('#paper').on('click', function(){
        setTimeout(typeHeader, 150);
    });

    setTimeout(typeHeader, 500);
});