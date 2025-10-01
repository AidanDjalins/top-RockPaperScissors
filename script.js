console.log("Hello World");

// Computer's choice
function getComputerChoice() {
    
    let computerChoice = Math.random();

    if (computerChoice <= 0.33) {
        return computerChoice = 'rock';
    } else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
        return computerChoice = 'paper';
    } else {
        return computerChoice = 'scissors';
    }
}
