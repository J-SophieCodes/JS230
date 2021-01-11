document.addEventListener('DOMContentLoaded', () => {
  let input = document.querySelector('#guess');
  let form = document.querySelector('form');
  let message = document.querySelector('p');
  let button = document.querySelector('input[type="submit"]');
  let link = document.querySelector('a');
  let answer;
  let count;

  function newGame() {
    button.disabled = false;
    form.reset();
    answer = Math.floor(Math.random() * 100) + 1;
    message.textContent = 'Guess a number from 1 to 100';
    count = 0;
    console.log(answer);
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
    count++;
    let guess = parseInt(input.value, 10);
    if (guess > answer) {
      message.textContent = `My number is lower than ${String(guess)}`;
    } else if (guess < answer) {
      message.textContent = `My number is higher than ${String(guess)}`;
    } else  if (guess === answer) {
      message.textContent = `You guessed it! It took you ${String(count)} guesses.`;
      button.disabled = true;
    } else {
      message.textContent = 'Invalid input. Guess a number from 1 to 100.'
    }
  });

  link.onclick = event => {
    event.preventDefault();
    newGame();
  };

  newGame();
});