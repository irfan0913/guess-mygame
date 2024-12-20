'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number !';
console.log(document.querySelector('.message').textContent);
document.querySelector('.guess').value = 23;*/

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = 'Please Enter Number...';
    displayMessage('Please Enter Number...');
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#20ba20';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number ? 'Number is too high' : 'Number is too Low'
      );
      // document.querySelector('.message').textContent =
      //   guess > number ? 'Number is too high' : 'Number is too Low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
      // document.querySelector('body').style.backgroundColor = '#dd0f3f';
    } else {
      // document.querySelector('.message').textContent = 'You Lost the game';
      displayMessage('You Lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  // else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Number is too high';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //     // document.querySelector('body').style.backgroundColor = '#dd0f3f';
  //   }
  // } else if (guess < number) {
  //   document.querySelector('.message').textContent = 'Number is too Low';
  //   score--;
  //   console.log((document.querySelector('.score').textContent = score));
  //   // document.querySelector('body').style.backgroundColor = '#4d0fdd';
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#1e1c24';
  document.querySelector('.number').style.width = '15rem';
});
