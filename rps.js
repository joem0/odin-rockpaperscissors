let choices = ["Rock","Paper","Scissors"];
let getComputerChoice = value => choices[Math.floor(Math.random() * choices.length)];
function playRound(playerSelection,computerSelection) {
    return playerSelection === "paper" && computerSelection === "rock" ? "player"
    : playerSelection === "rock" && computerSelection === "scissors" ? "player"
    : playerSelection === "scissors" && computerSelection ==="paper" ? "player"
    : playerSelection === computerSelection ? "tie"
    : "computer";
}

const numRounds = 1;
function playGame() {
    for (let i = 0; i < numRounds; i++) {
        // const computerChoice = getComputerChoice();
        // const playerChoice = prompt();
        console.log("lets play");
        const computerChoice = "rock";
        const playerChoice = "paper";
        const result = playRound(playerChoice,computerChoice);
        let resultStr = "";
        switch (result) {
            case 'player':
                resultStr = `You win! ${playerChoice} beats ${computerChoice}`;
            case 'computer':
            case 'tie':
        }
        console.log(resultStr);
    }
}

playGame()