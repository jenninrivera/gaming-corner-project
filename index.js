fetch('http://localhost:3000/companies')
.then(response => response.json())
.then(companies => {
  companies.forEach(company => {
    companyNamesOnFactBar(company)
  }) 
})

const factBar = document.getElementById('fact-bar')

function companyNamesOnFactBar(company) {
  const companyName = document.getElementById('companies')
  companyName.addEventListener('click', () => {
    randomCommpanyFacts(company)
  })
  factBar.appendChild(companyName)
}

function randomCommpanyFacts(company) {
  const companyImage = document.getElementById('company-image')
  companyImage.src = company.image

  const companyFact = document.getElementById('fact-text')
  companyFact.textContent = company.description

  const factCompanyName = document.getElementById('fact-company-name')
  factCompanyName.textContent = company.name
}
let score = 0;
let health = 1;
const player = document.getElementById("player");

function movePlayerLeft() {
    const leftNumbers = player.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
});

function movePlayerRight() {
    const rightNumbers = player.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    if (right < 360) {dodger.style.right = `${right + 5}px`;}
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        movePlayerRight();
    }
});

function makeRock(){
    const rock = document.createElement('div')

}


