let root;
let canvas;
let ctx;
let turn = true;
const arr = [];

window.onload = function () {
  root = document.getElementById('root');
  canvas = document.getElementById('myCanvas');
  canvas.addEventListener('click', (e) => {
    const { pageX, pageY } = e;
    handleClickByRect(pageX, pageY);
  });
  ctx = canvas.getContext('2d');

  start();
};

const restartGame = () => {
  const restartButton = document.createElement('input');
  restartButton.setAttribute('id', 'restartGame');
  restartButton.setAttribute('type', 'button');
  restartButton.setAttribute('value', 'Restart Game');
  restartButton.setAttribute('style', 'margin-top: 20px;');
  restartButton.addEventListener('click', () => {
    window.location.reload();
  });
  return restartButton;
};

const createOneRect = (x, y) => {
  ctx.strokeRect(x, y, 100, 100);
};

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'black';
  ctx.stroke();
};

const drawCross = (x, y) => {
  ctx.moveTo(x - 30, y - 30);
  ctx.lineTo(x + 30, y + 30);

  ctx.moveTo(x - 30, y + 30);
  ctx.lineTo(x + 30, y - 30);

  ctx.stroke();
};

const defineWinner = () => {
  if (arr[0][0] === 'o' && arr[0][1] === 'o' && arr[0][2] === 'o')
    alert('`Nolla` wins');
  if (arr[1][0] === 'o' && arr[1][1] === 'o' && arr[1][2] === 'o')
    alert('`Nolla` wins');
  if (arr[2][0] === 'o' && arr[2][1] === 'o' && arr[2][2] === 'o')
    alert('`Nolla` wins');

  if (arr[0][0] === 'o' && arr[1][0] === 'o' && arr[2][0] === 'o')
    alert('`Nolla` wins');
  if (arr[0][1] === 'o' && arr[1][1] === 'o' && arr[2][1] === 'o')
    alert('`Nolla` wins');
  if (arr[0][2] === 'o' && arr[1][2] === 'o' && arr[2][2] === 'o')
    alert('`Nolla` wins');

  if (arr[0][0] === 'o' && arr[1][1] === 'o' && arr[2][2] === 'o')
    alert('`Nolla` wins 1');
  if (arr[0][2] === 'o' && arr[1][1] === 'o' && arr[2][0] === 'o')
    alert('`Nolla` wins 2');

  if (arr[0][0] === 'x' && arr[0][1] === 'x' && arr[0][2] === 'x')
    alert('`Risti` wins');
  if (arr[1][0] === 'x' && arr[1][1] === 'x' && arr[1][2] === 'x')
    alert('`Risti` wins');
  if (arr[2][0] === 'x' && arr[2][1] === 'x' && arr[2][2] === 'x')
    alert('`Risti` wins');

  if (arr[0][0] === 'x' && arr[1][0] === 'x' && arr[2][0] === 'x')
    alert('`Risti` wins');
  if (arr[0][1] === 'x' && arr[1][1] === 'x' && arr[2][1] === 'x')
    alert('`Risti` wins');
  if (arr[0][2] === 'x' && arr[1][2] === 'x' && arr[2][2] === 'x')
    alert('`Risti` wins');

  if (arr[0][0] === 'x' && arr[1][1] === 'x' && arr[2][2] === 'x')
    alert('`Risti` wins');
  if (arr[0][2] === 'x' && arr[1][1] === 'x' && arr[2][0] === 'x')
    alert('`Risti` wins');
};

const handleClickByRect = (pageX, pageY) => {
  let centerX = 0;
  let centerY = 0;
  let rowX = 0;
  let rowY = 0;

  if (pageX <= 100) rowX = 1;
  if (pageX <= 200 && pageX > 100) rowX = 2;
  if (pageX <= 300 && pageX > 200) rowX = 3;

  if (pageY <= 100) rowY = 1;
  if (pageY <= 200 && pageY > 100) rowY = 2;
  if (pageY <= 300 && pageY > 200) rowY = 3;

  if (rowX === 1 && rowY === 1) {
    centerX = 50;
    centerY = 50;
  }

  if (rowX === 2 && rowY === 1) {
    centerX = 150;
    centerY = 50;
  }

  if (rowX === 3 && rowY === 1) {
    centerX = 250;
    centerY = 50;
  }

  if (rowX === 1 && rowY === 2) {
    centerX = 50;
    centerY = 150;
  }

  if (rowX === 1 && rowY === 3) {
    centerX = 50;
    centerY = 250;
  }

  if (rowX === 2 && rowY === 2) {
    centerX = 150;
    centerY = 150;
  }

  if (rowX === 2 && rowY === 3) {
    centerX = 150;
    centerY = 250;
  }

  if (rowX === 3 && rowY === 2) {
    centerX = 250;
    centerY = 150;
  }

  if (rowX === 3 && rowY === 3) {
    centerX = 250;
    centerY = 250;
  }

  if (centerX !== 0 && centerY !== 0) {
    turn ? drawCircle(centerX, centerY) : drawCross(centerX, centerY);
    arr[rowY - 1][rowX - 1] = turn ? 'o' : 'x';
    turn = !turn;
  }

  defineWinner();
};

const start = () => {
  for (let x = 0; x <= 2; x++) {
    const localArr = [];
    for (let y = 0; y <= 2; y++) {
      createOneRect(y * 100, x * 100);
      localArr.push('-');
    }
    arr.push(localArr);
  }
  const restartGameButton = restartGame();
  root.appendChild(restartGameButton);
};
