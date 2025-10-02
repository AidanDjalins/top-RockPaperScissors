

// Computer's choice
function getComputerChoice() {
    
    let rand = Math.random();

    if (rand <= 0.33) {
        return "rock";
    } else if (rand <= 0.66) {
        return "paper";
    } else {
        return "scissors";
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

// Play the game!
function playGame() {

    // Declare the player and computer's score
    let humanScore = 0;
    let computerScore = 0;

    // Decide how many rounds will be played
    let rounds = prompt("How many rounds do you wanna play?")

    for(let i = 0; i < rounds; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // Function for one round
    function playRound(humanChoice, computerChoice) {
    
        let result = '';
    
        console.log("You chose: ", humanChoice)
        console.log("CPU chose: ", computerChoice)
    
        if (humanChoice === computerChoice) {
            result = "It's a draw!"
        } else {
            switch(humanChoice) {
                case "rock":
                    result = (computerChoice === "scissors") ? "You Win!" : "You Lose..";
                    break;
                case "paper":
                    result = (computerChoice === "rock") ? "You Win!" : "You Lose..";
                    break;
                case "scissors":
                    result = (computerChoice === "paper") ? "You Win!" : "You Lose..";
                    break;
            }
        }
    
        switch(result) {
            case "You Win!":
                humanScore++;
                break;
            case "You Lose..":
                computerScore++;
                break;
        }
    
        console.log(result);
        console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
    }
}

console.log(playGame());