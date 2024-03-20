let choices = ["rock","paper","scissors"];
let getComputerChoice = value => choices[Math.floor(Math.random() * choices.length)];
function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    return playerSelection === "paper" && computerSelection === "rock" ? "player"
    : playerSelection === "rock" && computerSelection === "scissors" ? "player"
    : playerSelection === "scissors" && computerSelection ==="paper" ? "player"
    : playerSelection === computerSelection ? "tie"
    : "computer";
}



function validateInput(text,array) {
    return array.includes(text,0)
}

let capitalize = text => text[0].toUpperCase() + text.slice(1);

const numRounds = 5;

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    alert("Welcome to Rock, Paper, Scissors versus a computer. You will play 5 rounds.")
    for (let i = 0; i < numRounds; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Please input Rock,Paper, or Scissors:");

        while (!validateInput(playerChoice.toLowerCase(),choices)) {
            playerChoice = prompt("Invalid input. Please input Rock, Paper or Scissors:")
        }

        const result = playRound(playerChoice,computerChoice);
        computerChoice = capitalize(computerChoice);
        let resultStr = "";
        switch (result) {
            case 'player':
                resultStr = `You win! ${playerChoice} beats ${computerChoice}`;
                playerWins++;
                break;
            case 'computer':
                resultStr = `Computer win! ${computerChoice} beats ${playerChoice}`;
                computerWins++;
                break;
            case 'tie':
                resultStr = `Tie! You and the comptuer chose: ${computerChoice}`;
                break;
        }
        alert(resultStr);
    }
    let results = (playerWins,computerWins) => playerWins > computerWins ? `You beat the computer!`
        : computerWins > playerWins ? "The comptuer won!"
        : "You tied the computer!"
    
    return alert(results(playerWins,computerWins) + ` Final Score - You: ${playerWins} Computer: ${computerWins}`);
}

playGame();