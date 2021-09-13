'use strict';
const randomNum = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const message = function (message) {
  document.querySelector('.message').textContent = message;
};
const score = function (score) {
  document.querySelector('.score').textContent = score;
};
const again = function () {
  data.highScore = data.score > data.highScore ? data.score : data.highScore;
  data.score = 20;
  score(data.score);
  data.secretNum = randomNum();
};
const wrongGuess = function () {
  if (data.socre === 0) {
    message('😅😅😄😄 You have lost! 😅😅😄😄');
  } else {
    data.score--;
    score(data.score);
  }
};
const win = function () {
  message('😁😀😅😄 You Have Won! 🤣🤣🤣😂');
  score(data.score);
  document.querySelector('.number').textContent = data.secretNum;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  data.highScore = data.score > data.highScore ? data.score : data.highScore;
  document.querySelector('.highscore').textContent = data.highScore;
};
document.querySelector('.again').addEventListener('click', function () {
  data.highScore = data.score > data.highScore ? data.score : data.highScore;
  data.score = 20;
  score(data.score);
  data.secretNum = randomNum();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  message('Start guessing...');
});

const data = {
  score: 20,
  highScore: 0,
  guess: document.querySelector('.guess').value,
  secretNum: randomNum(),
};
document.querySelector('.check').addEventListener('click', function () {
  data.guess = Number(document.querySelector('.guess').value);
  if (data.guess === '') {
    message('😓😒 Please Enter A Number Between 1 to 20 😒😓');
  } else {
    switch (true) {
      case data.guess === data.secretNum:
        win();
        break;
      case data.guess > data.secretNum:
        message('🤔🤔🤔 Too High 🤔🤔🤔');
        wrongGuess();
        break;
      case data.guess < data.secretNum:
        message('🤨🤨🤨 Too low 🤨🤨🤨');
        wrongGuess();
        break;
    }
  }
});
