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


