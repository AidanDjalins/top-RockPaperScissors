console.log("Hello World");

// Computer's choice
function getComputerChoice() {
    
    let rand = Math.random();

    if (rand <= 0.33) {
        return 'rock';
    } else if (rand >= 0.34 && rand <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {

    let input = prompt("Rock, Paper, Scissors?")

    if (input.toLowerCase() === "rock") {
        return "rock";
    } else if (input.toLowerCase() === "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}