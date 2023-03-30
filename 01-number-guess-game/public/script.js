let root;
const game = {};

window.onload = function () {
  root = document.getElementById('root');
  resetResultsFun();
  start();
};

const createInputNumber = () => {
  const inputNumber = document.createElement('input');
  inputNumber.setAttribute('type', 'text');
  inputNumber.setAttribute('value', '');
  inputNumber.setAttribute('name', 'yourNumber');
  inputNumber.setAttribute('id', 'yourNumber');
  inputNumber.setAttribute('style', 'margin-top: 20px;');
  return inputNumber;
};

const checkResultsButton = () => {
  const checkResults = document.createElement('input');
  checkResults.setAttribute('id', 'checkResults');
  checkResults.setAttribute('type', 'button');
  checkResults.setAttribute('value', 'Check Results');
  checkResults.setAttribute('style', 'margin-top: 20px;');
  checkResults.addEventListener('click', () => {
    checkResultsFun();
  });
  return checkResults;
};

const resetResultsButton = () => {
  const resetResults = document.createElement('input');
  resetResults.setAttribute('id', 'resetButton');
  resetResults.setAttribute('type', 'button');
  resetResults.setAttribute('value', 'Reset Results');
  resetResults.setAttribute('style', 'margin-top: 20px;');
  resetResults.addEventListener('click', () => {
    resetResultsFun(false);
  });
  return resetResults;
};

const start = () => {
  const inputNumber = createInputNumber();
  const checkResults = checkResultsButton();
  const resetResults = resetResultsButton();

  const inputNumberLabel = document.createElement('label');
  inputNumberLabel.setAttribute('for', 'yourNumber');
  const inputNumberText = document.createTextNode('Type number:');
  inputNumberLabel.appendChild(inputNumberText);

  const br = document.createElement('br');
  root.appendChild(inputNumberLabel);
  root.appendChild(inputNumber);
  root.appendChild(br);
  root.appendChild(checkResults);
  root.appendChild(br.cloneNode());
  root.appendChild(resetResults);
};

const checkResultsFun = () => {
  const num = document.getElementById('yourNumber');
  console.log(num.value, game);
  game.attempt++;
  if (!isNaN(num.value)) {
    switch (true) {
      case game.attempt <= game.minValue &&
        Number(num.value) === game.secretNumber: {
        game.str = 'You win. Arvaus on liian pieni.';
        game.flagWin = true;
        break;
      }
      case game.attempt >= game.maxValue &&
        Number(num.value) === game.failNumber: {
        game.str = 'Sorry, you lost. Arvaus on liian suuri.';
        const checkResults = document.getElementById('checkResults');
        checkResults.disabled = true;

        const inputNumber = document.getElementById('yourNumber');
        inputNumber.value = '';
        game.flagWin = true;
        break;
      }
      case game.attempt >= game.maxValue &&
        Number(num.value) === game.secretNumber: {
        game.str = 'You win. Arvaus on liian suuri.';
        game.flagWin = true;
        break;
      }
      case game.attempt < game.maxValue &&
        game.attempt > game.minValue &&
        Number(num.value) === game.secretNumber: {
        game.str = 'You win. Arvaus on normali.';
        game.flagWin = true;
        break;
      }
      default:
        game.flagWin = false;
        break;
    }
  } else {
    alert(`Please enter correct value.`);
  }

  if (game.flagWin) {
    alert(game.str);
  }
};

const resetResultsFun = (init = true) => {
  game.secretNumber = Math.floor(Math.random() * 100 + 1);
  game.attempt = 0;
  game.flagWin = true;
  game.str = '';
  game.minValue = 20;
  game.maxValue = 80;
  game.failNumber = 75;

  if (!init) {
    const checkResults = document.getElementById('checkResults');
    checkResults.disabled = false;
  }
};
