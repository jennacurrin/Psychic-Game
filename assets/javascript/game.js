var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = []; //what is this variable for? where is the variable that user will store choice?

var winsElement = document.getElementById("numWins");
var lossElement = document.getElementById("numLosses");
var remainingGuessesElement = document.getElementById("numGuesses");
var whatUserGuessElement = document.getElementById("playersGuess")

// create a function that chooses computer's guess 
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// var computerGuess = computerChoices[0];
console.log(computerGuess);

var restart = function () {
    guessesLeft = 9;
    letterUser = [];
    losses = 0;
    wins = 0;
}

document.onkeyup = function (event) {
    console.log(computerGuess);
    
    var userGuess = event.key;
    if (guessesLeft > 0) {
        letterUser.push(userGuess);
        whatUserGuessElement.innerHTML = letterUser.join(", ");

        remainingGuessesElement.innerHTML = guessesLeft;

        console.log(userGuess)
        if (userGuess === computerGuess) {
            wins++;
            guessesLeft--;
            winsElement.innerHTML = " " + wins;
            // restart();

        }
        // else if (userGuess != computerGuess) {
        //     guessesLeft -= 1;
        // }
        else {
            losses++;
            guessesLeft--;
            lossElement.innerHTML = " " + losses;
            // restart();
        }
    } else {
        restart();
    }

    // var reset = function () {

    // }
}
// computerGuess()

// function that resets the game 
// update the number of guesses used