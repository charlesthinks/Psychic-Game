var keyboard = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//Setting values
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guessedLetters = [];
var letterToGuess = null;
//Selects random letter
var randomNum = keyboard[Math.floor(Math.random() * keyboard.length)];
//Allows 9 guesses
function userGuessesLeft() {
    //Grabbing the HTML element & setting its value to guessesLeft
    var grab = document.getElementById("guessCount");
    grab.innerHTML = "Guesses left: " + guessesLeft;
};
function userLetterToGuess() {
    letterToGuess = keyboard[Math.floor(Math.random() * keyboard.length)];
};
function userGuessedLetters() {
    //Grabbing the HTML element & setting its value to guessedLetters
    var grab = document.getElementById("userGuesses");
    grab.innerHTML = "Your guesses so far: " + guessedLetters + ", ";
};
//Reset
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    userGuessesLeft();
    userLetterToGuess();
    userGuessedLetters();
}
userLetterToGuess();
userGuessesLeft();
//When a key is pressed it is logged as the users guess
document.onkeypress = function(event) {
    var userGuess = event.key;
    if(userGuess) {
        guessesLeft--;
        guessedLetters.push(userGuess);
        userGuessesLeft();
        userGuessedLetters();
        if (guessesLeft > 0) {
            if(userGuess == letterToGuess) {
                wins++;
                var grab = document.getElementById("wins");
                grab.innerHTML = "Wins: " + wins;
                reset();
            }
        }
        else if(guessesLeft === 0) {
            alert("Uh oh, you ran out of guesses! Try again.");
            losses++;
            var grab = document.getElementById("losses");
            grab.innerHTML = "Losses: " + losses;
            reset();
        };
    }
};