"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displaScore = function (score) {
  document.querySelector;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess);

  //when no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No number";
    displayMessage("No number");

    //when guess is correct
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "💃 Correct Number";
    displayMessage("💃 Correct Number");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //when the guess is not equal to secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game😭";
      document.querySelector(".score").textContent = 0;
    }
  }
  //when guess is higher than number
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high!";
  //     document.querySelector(".score").textContent = score;
  //     score--;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game😭";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //when guess is lesser than the number
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game😭";
  //     document.querySelector(".score").textContent = 0;
  //   }
});

//functionality to reset the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector(".message").textContent = "Start Guessing...";
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".guess").value = "";
});
