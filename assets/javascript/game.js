// javascript for psychic

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ranLet, guessesRemaining, guessedLetters;
// Declares the tallies to 0
var wins = 0;
var losses = 0;
// resets these variables
var theWorks = function() {
ranLet = letters[Math.floor(Math.random() * letters.length)];
guessesRemaining = 5;
guessedLetters = [];
}
// Records wins, losses, and guesses
var record = function() {
  //// Taking the tallies and displaying them in HTML
  var html = "<p>Guess a letter</p>" +
  "<p>wins: " + wins + "</p>" + "<p>losses: " + losses + "</p>" + "<p>Your Guesses: " + guessedLetters + "</p>"

  //// Placing the html into the game ID
  document.getElementById('game').innerHTML = html;
};

record();
theWorks();
// What number did the computer pick?
console.log("The letter is: " + ranLet);
//Reacts to keystrokes
document.onkeyup = function(event) {
	var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

      if (playerGuess == ranLet) {
          alert("Correct!");
          wins++;
          theWorks();
      } else if (guessesRemaining == 0) {
          alert('Too bad, you lose ... The letter was ' + ranLet);
          losses++;
          theWorks();
      }

      guessedLetters.push(playerGuess);
      guessesRemaining--;

  record();
}
