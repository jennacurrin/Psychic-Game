var computerChoices = ['a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'];
//    var computerChoices= 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'.split; may delete
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = []; //what is this variable for? where is the variable that user will store choice?

var winsElement = document.getElementById("numWins");
var lossElement = document.getElementById("numLosses");
var remainingGuessesElement = document.getElementById("numGuesses");
var whatUserGuessElement = document.getElementById("playersGuess")

// create a function that chooses computer's guess 
var computerGuess = function () {
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess)
    if (userGuess === computerGuess) {
        wins++;
        document.querySelector("#numWins").innerHTML = "Wins: " + wins;
        restart();
        // letterUser.push(userGuess);
    } 
    else if (userGuess != computerGuess) {
        guessesLeft -= 1;
    }
    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#numlosses").innerHTML = "Loses: " + losses;
        restart();
    }



    var restart = function () {
        guessesLeft = 9;
        letterUser = [];
    }

    // var reset = function () {

    // }
}
computerGuess()

// function that resets the game 
// update the number of guesses used















































//    function countGuessesLeft() {
// 	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
// }


// function farUserGuesses() {
// 	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
// }

// countGuessesLeft();

// var restart = function() {
// 	guessesLeft = 9;
//     letterUser = [];
// }

// document.onkeyup = function(event) {
// 	guessesLeft--;

// 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// 	letterUser.push(userGuess);
// 	countGuessesLeft();
// 	farUserGuesses();

// 	if (userGuess === computerGuess){
// 		numwins++;
// 		document.querySelector("#numWins").innerHTML = "Wins: " + wins;
// 		restart();
// 	} 
// 	else if (guessesLeft === 0) {
// 		losses++;
// 		document.querySelector("#lose").innerHTML = "Loses: " + losses;
// 		restart();
// 	}
//   };





//     {/* This tells the computer to execute the script (whats in between the squiggle brackets) whenever a key is pressed  */}


//    document.onkeyup = function(event){
//        var userGuess = event.key;
//        console.log("event", event)
//        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


//    };









{
    /* var computerGuess= [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
        var wins= 0;
        var losses= 0; 


        document.onkeyup = function (event) {
            var userGuess = event.key;
            // console.log()
            // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            // if ((userGuess === computerGuess;)){

            // alert("User guess: " + userGuess)
            // alert("Computer guess: " + computerGuess);


            
        }} */
}