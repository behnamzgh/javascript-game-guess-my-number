/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

function showMessage(msg) {
  document.querySelector(".message").textContent = msg;
}
function showScore(score) {
  document.querySelector(".label-score").textContent = `💯 Score: ${score}`;
}
function looseGame() {
  document.querySelector(".message").textContent = "👻 Game Over!";
  document.querySelector("body").style.backgroundColor = "#a30000";
  score--;
}
function winGame() {
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".message").textContent = "🙂 Congratulation";
  document.querySelector("body").style.backgroundColor = "#009600";
  document.querySelector(".number").style.width = "30rem";
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
}

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value); //type vorodi daryafti az karbar ro b number tabdil mikonim baraye moghayese ba secret number
  if (!guessNumber) {
    showMessage("🤬 No Number!");
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      score--;
      showScore(score);
      showMessage("😂 Too Much!");
    } else {
      looseGame();
    }
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      score--;
      showScore(score);
      showMessage("🤣 Too Low!");
    } else {
      looseGame();
    }
  } else if (guessNumber === secretNumber) {
    winGame();
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  score = 20;
  showScore(20);
  showMessage("Start guessing...");
});
