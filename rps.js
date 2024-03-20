let choices = ["Rock","Paper","Scissors"];
let getComputerChoice = value => choices[Math.floor(Math.random() * choices.length)];
function playRound(playerSelection,computuerSelection) {
    return playerSelection === "paper" && computuerSelection === "rock" ? "player"
    : playerSelection === "rock" && computuerSelection === "scissors" ? "player"
    : playerSelection === "scissors" && computuerSelection ==="paper" ? "player"
    : playerSelection === computerSelection ? "tie"
    : "computer";
}
console.log(playRound("paper","paper"));