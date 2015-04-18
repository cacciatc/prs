var ROCK     = 1;
var PAPER    = 2;
var SCISSORS = 3;

var roshambo = function(a, b) {
    if (b === SCISSORS && a === ROCK) {
        return a;
    }

    if (a === SCISSORS && b === ROCK) {
        return b;
    }

    if (a >= b) {
        return a;
    } 

    return b;
}