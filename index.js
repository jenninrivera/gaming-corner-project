let playerScore = 0;
let computerScore = 0;
let playerInput;
let compInput;

//game itself
function game(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return "Tie";
  }
  if (playerChoice == 1  && computerChoice == 0) {
    playerScore++;
    return "Paper covers rock, Player wins";
  }
  if (playerChoice == 1 && computerChoice == 2) {
    computerScore++
    return "Scissors cuts Paper, Computer wins";
  }
  if (playerChoice == 0  && computerChoice == 2) {
    playerScore++;
    return "Rock beats scissors, Player wins";
  }
  if (playerChoice == 0 && computerChoice == 1) {
    computerScore++
    return "Paper covers rock, Computer wins";
  }
  if (playerChoice == 2  && computerChoice == 1) {
    playerScore++;
    return "Scissors cuts Paper, Player wins";
  }
  if (playerChoice == 2 && computerChoice == 0) {
    computerScore++
    return "Rock beats scissors, Computer wins";
  }
}
//Comp choice
function compChoice(){
compInput = Math.floor(Math.random() * 3)
console.log(compInput + ' comp Input')
return compInput
}

//0 = rock 1 = paper 2 = scissors

//Checks input
const input = document.querySelector("input");

input.addEventListener("keydown", logKey);

function logKey(e) {
    console.log(`${e.code}`)
    if (`${e.code}` == 'ArrowLeft'){
      playerInput = 0
      console.log(game (0,compChoice()))
    }
    else if (`${e.code}` == 'ArrowUp'){
      playerInput = 1
      console.log(game (1,compChoice()))
    }
    else if (`${e.code}` == 'ArrowRight'){
      playerInput = 2
      console.log(game (2,compChoice()))
    }
    else (alert('Not valid Input'))
}



