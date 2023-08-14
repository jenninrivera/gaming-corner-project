fetch('http://localhost:3000/companies')
.then(response => response.json())
.then(companies => {
  companies.forEach(company => {
    displayCompanyImages(company)
  }) 
  const randomFactGenerator = document.getElementById("random-fact-generator")
  randomFactGenerator.addEventListener('click', () => {
  companies[Math.floor(Math.random() * 5)]
  // randomCommpanyFacts
  })}
)

const displayImageBar = document.getElementById('display-company-images')

function displayCompanyImages(company) {
  const imageTag = document.createElement('img')
  imageTag.src = company.image
  displayImageBar.appendChild(imageTag)
}

const companyImage = document.getElementById('company-image')

function randomCommpanyFacts(company) {
  companyImage.src = company.image

  const companyFact = document.getElementById('fact-text')
  companyFact.textContent = company.description

  const factCompanyName = document.getElementById('fact-company-name')
  factCompanyName.textContent = company.name
}

const commentSection = document.getElementById('comment-section')
commentSection.addEventListener('submit', (event) => {
  event.preventDefault()
  const comments = document.createElement('p')
  const input = document.getElementById('opinion')
  comments.textContent = input.value
  commentSection.appendChild(comments)

})

let playerScore = 0;
let totalGames = 0;
let playerInput;
let compInput;
//game itself
//0 = rock 1 = paper 2 = scissors

function game(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {return "Tie";}
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
//const input = document.querySelector("input");
//input.addEventListener("keydown", choice);
//Checks input
const gameInput = document.getElementById("test");
gameInput.addEventListener("keydown", choice);


function choice(e) {
    console.log(`${e.code}`)
    if (`${e.code}` == 'ArrowLeft'){
      playerInput = 0
      console.log(game(0,compChoice()))
    }
    else if (`${e.code}` == 'ArrowUp'){
      playerInput = 1
      console.log(game(1,compChoice()))
    }
    else if (`${e.code}` == 'ArrowRight'){
      playerInput = 2
      console.log(game(2,compChoice()))
    }
    //else (alert('Not valid Input'))
}



