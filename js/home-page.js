var konamiKeys = ["38,38,40,40,37,39,37,39,66,65"];
var inputString = [];
function konamiCode (input){
    inputString.push(input.keyCode);
    if (inputString.toString().indexOf(konamiKeys) >= 0 ){
        console.log('success');
        // $("h1").css('background','blue');

        inputString = [];
    }

}

$(document).keyup(function(event){
    window.addEventListener("keyup", konamiCode);
    console.log(event.keyCode);
});


// this functionality makes the navbar stick to the top and shorten just a bit though a special class
$(document).ready(function() {
    $(window).on('scroll', function() {
        if (Math.round($(window).scrollTop()) > 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});