//Name: Jaden Anthony
//ID: 620164510

document.addEventListener(`DOMContentLoaded`, function() {
                          
  const gridCells = document.querySelectorAll(`#board div`);
  const statusMsg = document.getElementById(`status`);
  const restart = document.getElementsByClassName(`btn`)[0];
  
  gridCells.forEach(square => square.classList.add(`square`));
  
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];


let cellOptions = Array(9).fill(null);

const playerX = "X";
const playerO = "O";

let firstPlayer = playerX;


function setUpGame(){
  gridCells.forEach((square, cell) => {
    
    square.addEventListener(`hoverOn`, function(e) {
        e.target.classList.add(`hover`);
    });

    square.addEventListener(`hoverOff`, function(e) {
        e.target.classList.remove(`hover`);
    });

  
 /* restart.addEventListener('click', restartGame);
  statusMsg.textContent = `${firstPlayer}'s turn!`;
}

  function clickedCell(){
    const cell = this.getAttribute 
  */
    
});
