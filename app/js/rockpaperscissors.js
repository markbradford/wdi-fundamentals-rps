////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else {
        winner = "computer";
    }
    return winner;
}

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var result = getWinner(playerMove, computerMove);
        if (result === "player") {
            playerWins++;
        } else if (result === "computer") {
            computerWins++;
        } else if (result === "tie") {
            console.log("\n" + "Looks like it's a tie...");
        }

        console.log("\n" + "User choses " + playerMove + " and Computer choses " + computerMove + ".");
        console.log("The score is currently:   Humans  " + playerWins + "  |  Machines  " + computerWins + "\n");

    }
    return [playerWins, computerWins];
}
playToFive();