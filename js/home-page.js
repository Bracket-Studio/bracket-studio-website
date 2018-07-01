var konamiKeys = ["38,38,40,40,37,39,37,39,66,65"];
var inputString = [];

function konamiCode(input) {
    inputString.push(input.keyCode);
    if (inputString.toString().indexOf(konamiKeys) >= 0) {
        console.log('success');
        // $("h1").css('background','blue');

        inputString = [];
    }

}

$(document).keyup(function (event) {
    window.addEventListener("keyup", konamiCode);
    console.log(event.keyCode);
});

function switchALinks(isScrolled) {
    if (isScrolled) {
        $('#invis-scroll').slideUp(300).css('display', 'none');
        $('#backToTop').slideDown(300).css('display', 'inline');
    } else {
        $('#invis-scroll').slideDown(300).css('display', 'inline');
        $('#backToTop').slideUp(300).css('display', 'none');
    }
}

// this functionality makes the navbar stick to the top and shorten just a bit though a special class
$(document).ready(function () {
    $(window).on('scroll', function () {
        if (Math.round($(window).scrollTop()) > 100) {
            $('.navbar').addClass('scrolled');
            switchALinks(true);
        } else {
            $('.navbar').removeClass('scrolled');
            switchALinks(false);
        }
    });
});