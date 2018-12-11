var x = "";
var wins = 0;
var loses = 0;


function myFunction() {
  return Math.floor(Math.random() * 129);
  }

function setGame() {
userScore = 0;
random = myFunction();
console.log(random);
}

setGame();


    var winsContainer = document.getElementById("wins");
    var losesContainer = document.getElementById("losses");
    

    winsContainer.textContent = wins;
    losesContainer.textContent = loses;
