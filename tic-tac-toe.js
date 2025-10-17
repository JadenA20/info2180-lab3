//Name: Jaden Anthony
//ID: 620164510

document.addEventListener(`DOMContentLoaded`, function() {
                          
  const gridCells = document.querySelectorAll(`#board div`);
  const statusMsg = document.getElementById(`status`);
  const restart = document.getElementsByClassName(`btn`)[0];
  
  gridCells.forEach(square => square.classList.add(`square`));
  
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



  
}
