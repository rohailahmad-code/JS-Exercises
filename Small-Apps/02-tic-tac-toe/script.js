// Selecting elements
const buttons = document.querySelectorAll('.square button');
const winnerText = document.getElementById('winner');
const restartButton = document.getElementById('restart');
const xWinsCounter = document.getElementById('xWins');
const oWinsCounter = document.getElementById('oWins');

// Let the turn be for X
let turn = 'X';

// Let's create the board
let board = Array(9).fill(null);

// Wins Counter
let xWins = 0;
let oWins = 0;

// Winning Combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Function to check the winner
const checkWinner = () => {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      displayWinner(board[a]);
      updateWins(board[a]);
      return true;
    }
  }

  if (!board.includes(null)) {
    winnerText.innerHTML = "It's a draw!";
    restartButton.style.display = 'block';

    return true;
  }
  return false;
};

// Function to display the winner
const displayWinner = (winner) => {
  document.getElementById('board').style.display = 'none';
  winnerText.innerHTML = `<div class="winner-text">${winner} wins</div>`;
  restartButton.style.display = 'block';
};

// Function to update wins
const updateWins = (winner) => {
  if (winner === 'X') {
    xWins++;
    xWinsCounter.innerText = xWins;
  } else {
    oWins++;
    oWinsCounter.innerText = oWins;
  }
};

// Function to reset the board
const resetBoard = () => {
  board.fill(null);
  buttons.forEach((button) => {
    button.innerHTML = '';
  });
  document.getElementById('board').style.display = 'grid';
  turn = 'X';
  winnerText.innerHTML = '';
  restartButton.style.display = 'none';
};

// Loop through all the buttons using the forEach method
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!button.innerHTML && !winnerText.innerHTML) {
      if (turn === 'X') {
        button.innerHTML = `
          <div id="cross">
            <div class="line1"></div>
            <div class="line2"></div>
          </div>
        `;
        board[index] = 'X';
        turn = 'O';
      } else {
        button.innerHTML = `<div id="circle"></div>`;
        board[index] = 'O';
        turn = 'X';
      }
      checkWinner();
    }
  });
});

// Event listener for the restart button - passing call back function
restartButton.addEventListener('click', resetBoard);
