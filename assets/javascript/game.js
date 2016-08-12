// javascript for psychic

function playGame() {
    var ranNum = Math.ceil(Math.random() * 20);
    var guessedCorrectly = false;
    var playerGuess;
    var guessesRemaining = 10;
    var guessedNumbers = document.getElementById("yourgueses");

    // Clearing the yourgueses div for a new game
    guessedNumbers.innerHTML = "";

    // What number did the computer pick?
    console.log("The number is: " + ranNum);

    // Keep checking until you get the right answer, or the player runs out of guesses
    while ((guessesRemaining > 0) && (guessedCorrectly == false)) {
        playerGuess = prompt("Guess a number between 1 and 20!");

        if (playerGuess == ranNum) {
            alert("Correct!");
            wins++;
            guessedCorrectly = true;
        }
        else if (playerGuess > ranNum) {
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
    "<p>wins: " + wins + "</p>" + "<p>losses: " + losses + "</p>" + "<p>guessedNumbers: " + guessedNumbers + "</p>"

    //// Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;
}
