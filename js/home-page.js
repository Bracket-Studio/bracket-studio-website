var konamiKeys = ["38,38,40,40,37,39,37,39,66,65,13"];
var inputString = [];
function konamiCode (input){
    inputString.push(input.keyCode);
    if (inputString.toString().indexOf(konamiKeys) >= 0 ){
        console.log('success');
        $("h1").css('background','blue');

        inputString = [];
    }

}

$(document).keyup(function(event){
    window.addEventListener("keyup", konamiCode);
    console.log(event.keyCode);
});
