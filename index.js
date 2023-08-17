fetch('http://localhost:3000/companies')
.then(response => response.json())
.then(companies => {
  companies.forEach(company => {
    displayCompanyImages(company)
  }) 
  randomFactGenerator.addEventListener('click', () => {
  randomCommpanyFacts(companies[Math.floor(Math.random() * 5)])
  })}
)

fetch('http://localhost:3000/comments')
.then(response => response.json())
.then(commentdata => {
  commentdata.forEach(comment => {
    displayComments(comment)
  })
})

const randomFactGenerator = document.getElementById("random-fact-generator")
const displayImageBar = document.getElementById('display-company-images')

//Displays the compnay logo bar on website
function displayCompanyImages(company) {
  const imageTag = document.createElement('img')
  imageTag.src = company.image
  displayImageBar.appendChild(imageTag)
}

//Displays the random fact
const companyImage = document.getElementById('company-image')
function randomCommpanyFacts(company) {
  companyImage.src = company.image
  companyImage.style.height = "90%"
  companyImage.style.width = "90%"

  const companyFact = document.getElementById('fact-text')
  companyFact.textContent = company.description

  const factCompanyName = document.getElementById('fact-company-name')
  factCompanyName.textContent = company.name
}

//Reads the comment submitted to change it to an object
const commentSection = document.getElementById('comment-section')
commentSection.addEventListener('submit', (event) => {
  event.preventDefault()
  const input = document.getElementById('opinion')
  
  let newCommentObj = {
    comment: input.value
  }
  addNewCOmmentObj(newCommentObj)
  displayComments(newCommentObj)
  commentSection.reset();


})

//Posts the comment submitted in the form
function addNewCOmmentObj (newCommentObj) {
  fetch('http://localhost:3000/comments', { 
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify (newCommentObj)
  })
.then(response => response.json())

}

//Displays the comments from the json file
function displayComments(newCommentObj) {
  const newComment = document.createElement('p')
  newComment.textContent = newCommentObj.comment
  commentSection.appendChild(newComment)
}


let playerInput;
let compInput;

//Game itself
function game(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {alert("Tie")}
  if (playerChoice == 1  && computerChoice == 0) {
    playerScore++;
    alert("Paper covers rock, Player wins");
  }
  if (playerChoice == 1 && computerChoice == 2) {
    
    alert("Scissors cuts Paper, Computer wins");
  }
  if (playerChoice == 0  && computerChoice == 2) {
    
    alert("Rock beats scissors, Player wins");
  }
  if (playerChoice == 0 && computerChoice == 1) {
    
    alert("Paper covers rock, Computer wins");
  }
  if (playerChoice == 2  && computerChoice == 1) {
    
    alert("Scissors cuts Paper, Player wins");
  }
  if (playerChoice == 2 && computerChoice == 0) {
    
    alert("Rock beats scissors, Computer wins");
  }
}
//Computer game choice
function compChoice(){
  compInput = Math.floor(Math.random() * 3)
  console.log(compInput)
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
}

