// 1. Using the Math.random(); function, create an application that will act as a die for a board game.

// var dieNumber = (Math.floor(Math.random() * 6) + 1);
// console.log(dieNumber);

var dieNumber;

$('#dieButton').click(function(){
    var dieNumber = (Math.floor(Math.random() * 6) + 1);
    $('#dieNumber').text(dieNumber);
    console.log(dieNumber);
});
