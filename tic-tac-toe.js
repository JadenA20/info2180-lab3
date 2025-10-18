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

  
//Creating array for options + creating player X and O
let cellOptions = Array(9).fill(null);

const playerX = "X";
const playerO = "O";

let currentPlayer = playerX;


//Verification Functions
function verifyWin(){
  //Loops through each possible win combination 
  for (const combo of winCombinations) {
    let [a, b, c] = combo;
    if (cellOptions[a] === currentPlayer && cellOptions[b] === currentPlayer && cellOptions[c] === currentPlayer) { 
      return true
    }
  }
    return false;
}


function verifyDraw(){

}

function restartGame(){
  let cellOptions = Array(9).fill(null);
  gridCells.forEach(square => square.textContent = "");
  gridCells.forEach(square => square.className = 'square');
  gridCells.forEach(square => square.classList.add(`square`));
  
}
  
//Implements cursor hover features
  gridCells.forEach((square, cell) => {
    
    square.addEventListener(`mouseenter`, function(e) {
        e.target.classList.add(`hover`);
    });

    square.addEventListener(`mouseleave`, function(e) {
        e.target.classList.remove(`hover`);
    });

    square.addEventListener(`click`, function(e){
        let currentCell = e.target

        //Adding X or O to the board
        if (currentCell.textContent != "X" && currentCell.textContent != "O") {
          currentCell.textContent = currentPlayer
          currentCell.classList.add(currentPlayer)
          cellOptions[cell] = currentPlayer

            if (verifyWin()) {
              statusMsg.textContent = `Congratulations! ${currentPlayer} is the winner!`;
              statusMsg.classList.add(`you-won`);
            }
  
            else if (verifyDraw()) {
              statusMsg.textContent = `Whoops! It's a draw!`;
            }
  
            else {
              //Ensures each player takes turns 
              currentPlayer = currentPlayer === playerX ? playerO : playerX;
            }

        }
      
    });

    
  });

  //To restart the game
  restart.addEventListener('click', restartGame);
    
});
