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
        setTimeout(function () {
            $('#invis-scroll').css('display', 'none')
        }, 450);
        setTimeout(function () {
            $('#backToTop').css('display', 'block')
        }, 450);
    } else {
        setTimeout(function () {
            $('#invis-scroll').css('display', 'block')
        }, 450);
        setTimeout(function () {
            $('#backToTop').css('display', 'none')
        }, 450);
    }
}

// this functionality makes the navbar stick to the top and shorten just a bit though a special class
$(document).ready(function () {
    $(window).on('scroll', function () {
        if (Math.round($(window).scrollTop()) >= 100) {
            $('.navbar').addClass('scrolled');
            switchALinks(true);
        } else {
            $('.navbar').removeClass('scrolled');
            switchALinks(false);
        }
    });
});

// smooth scrolling

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
            });
        }
    });
});

