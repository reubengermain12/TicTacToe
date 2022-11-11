const statusDisplay = document.querySelector('.game--status');
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", "",];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {

}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleCellClick() {

}
function handleRestartGame() {

}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click, handleCellClick'));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;

  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index')
  );

  if (gameState[clickedCellIndex] !== "" || !gameActive){
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}


const winningConditions = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];