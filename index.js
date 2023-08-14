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
  if (playerChoice == computerChoice) {alert("Tie")}
  if (playerChoice == 1  && computerChoice == 0) {
    playerScore++;
    alert("Paper covers rock, Player wins");
  }
  if (playerChoice == 1 && computerChoice == 2) {
    computerScore++
    alert("Scissors cuts Paper, Computer wins");
  }
  if (playerChoice == 0  && computerChoice == 2) {
    playerScore++;
    alert("Rock beats scissors, Player wins");
  }
  if (playerChoice == 0 && computerChoice == 1) {
    computerScore++
    alert("Paper covers rock, Computer wins");
  }
  if (playerChoice == 2  && computerChoice == 1) {
    playerScore++;
    alert("Scissors cuts Paper, Player wins");
  }
  if (playerChoice == 2 && computerChoice == 0) {
    computerScore++
    alert("Rock beats scissors, Computer wins");
  }
}
//Comp choice
function compChoice(){
  compInput = Math.floor(Math.random() * 3)
  return compInput
}

//0 = rock 1 = paper 2 = scissors
//Checks input
const gameInput = document.getElementById("test");
gameInput.addEventListener("keydown", choice);

function choice(e) {
    if (`${e.code}` == 'ArrowLeft'){
      playerInput = 0
      game(0,compChoice())
    }
    else if (`${e.code}` == 'ArrowUp'){
      playerInput = 1
      game(1,compChoice())
    }
    else if (`${e.code}` == 'ArrowRight'){
      playerInput = 2
      game(2,compChoice())
    }
    //else (alert('Not valid Input'))
}

