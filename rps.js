let choices = ["Rock","Paper","Scissors"];
let getComputerChoice = value => choices[Math.floor(Math.random() * choices.length)];
function playRound(playerSelection,comptuerSelection) {
    return playerSelection === "paper" && comptuerSelection === "rock" ? "player"
    : playerSelection === "rock" && comptuerSelection === "scissors" ? "player"
    : playerSelection === "scissors" && comptuerSelection ==="paper" ? "player"
    : "computer";
}
