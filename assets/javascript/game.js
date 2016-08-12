// javascript for psychic

function playGame() {
    var guessedCorrectly = false;
    var playerGuess;
    var guessesRemaining = 10;
    var guessedNumbers = document.getElementById("yourGuesses");

    function generateRandomNumber() {
      var ranNum = Math.ceil(Math.random() * 20);}
    // Clearing the yourgueses div for a new game
    guessedNumbers.innerHTML = "";

    // What number did the computer pick?
    console.log("The number is: " + ranNum);

    // Keep checking until you get the right answer, or the player runs out of guesses
    while ((guessesRemaining > 0) && (guessedCorrectly == false)) {
        // Check out how you captured the user input in rps-9 (no prompt)
        playerGuess = prompt("Guess a number between 1 and 20!");

        if (playerGuess == ranNum) {
            alert("Correct!");
            // Don't forget to initialize wins
            wins++;
            guessedCorrectly = true;
        }
        else if (playerGuess > ranNum) {
            // In rps you captured these as variables and read them with html...
            alert("Guess lower!");
        }
        else if (playerGuess < ranNum) {
            alert("Guess higher!!");
        }

        guessedNumbers.innerHTML += playerGuess + " ";
        guessesRemaining--;
    }

    // Runs if the loop quits (you ran out of guesses)
    if (!guessedCorrectly) {
        alert('Too bad, you lose ... The number was ' + ranNum);
        losses++;
    }

    //// Taking the tallies and displaying them in HTML
    var html = "<p>Guess a number between 1 and 20</p>" +
    "<p>wins: " + wins + "</p>" + "<p>losses: " + losses + "</p>" + "<p>Your Guesses: " + yourGuesses + "</p>"

    //// Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;
}
