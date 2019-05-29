// 1. Using the Math.random(); function, create an application that will act as a die for a board game.

var dieNumber = (Math.floor(Math.random() * 6) + 1);
console.log(dieNumber);



$('dieBox').click(function)(){
    $('dieNumber').text(dieNumber);
}
