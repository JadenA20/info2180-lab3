//Name: Jaden Anthony
//ID: 620164510

const gridCells = document.querySelectorAll('#board');
const statusMsg = document.getElementById('#status');
const restart = document.getElementsByClassName('btn')[0];

gridCells.forEach(cell => cell.classList.add('cell'));

const winCombinations = [
  [0, 1, 2].
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
  ];
