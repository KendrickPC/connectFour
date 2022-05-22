/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])
let counter = 0;
/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  // Since board is already declared, "SET" board to 2d array filled with null: Return the board. Keyword here is "SET"
  board = Array.from(Array(HEIGHT), () => Array(WIDTH).fill(null))
  return board;
}

/** makeHtmlBoard: make HTML table and row of column tops. */
function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  const htmlBoard = document.getElementById('board')
  // TODO: add comment for this code
  // Creating a table row element and labeling and setting it to a variable "top"
  const top = document.createElement("tr");
  // Giving our newly created top/table row/html tr element an attribute:
  top.setAttribute("id", "column-top");
  // Adding a click event listener to top:
  top.addEventListener("click", handleClick);
  // Iterating through WIDTH. 
  for (let x = 0; x < WIDTH; x++) {
    // Creating a table data element and setting it to headCell:
    const headCell = document.createElement("td");
    // Giving the headCell a unique id (using x):
    headCell.setAttribute("id", x);
    // adding headCell element (table data) to table row / top variable:
    top.append(headCell);
  }
  // Adding our table row element to our htmlBoard
  htmlBoard.append(top);
  // TODO: add comment for this code
  // Iterating through our height:
  for (let y = 0; y < HEIGHT; y++) {
    // creating a row/table row/y HTML element for our outer array:
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      // Iterating through our WIDTH to create an inner table data of appropriate width:
      const cell = document.createElement("td");
      // Giving our inner table data/cell a unique id by using the y-x as id reference:
      cell.setAttribute("id", `${y}-${x}`);
      // appending our table data/cell to our outer row/table row. 
      row.append(cell);
    }
    // Adding our table row (with table data) to our htmlBoard to be rendered:
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */
function findSpotForCol(x) {
  // Iterating through our height:
  for (let y=HEIGHT-1; y >= 0; y--) {
    // If y,x position === null, return y;
    if (board[y][x] === null) {
      return y;
    }
  }
  // After the complete iteration, return null (if filled):
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */
function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
  // 1. Make a div:
  const div = document.createElement('div');
  // 2. Adding circular connect four piece aka Adding div to be rendered.
  div.classList.add('piece');
  // 3. Give the piece/div a unique id:
  const divPlayerId = `player-${currPlayer}`;
  // 4. GIving our div an attribute id set to divPlayerId
  div.setAttribute('id', divPlayerId);
  // 5. GIving our cell a unique ID of y and x position:
  const cellID = `${y}-${x}`;
  // storing our cellID into a cell constant:
  const cell = document.getElementById(cellID);
  // Adding our newly created div (with identifier attributes) to our cell:
  cell.append(div);
}

/** endGame: announce game end */
function endGame(msg) {
  // TODO: pop up alert message
  // Check handleClick(evt) for checkForWin() call:
  alert(msg);
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  var x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  var y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);
  board[y][x] = currPlayer;
  

  // check for win
  if (checkForWin()) {
    // aka msg variable for endGame function argument:
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame

  // switch players
  // TODO: switch currPlayer 1 <-> 2
  if (currPlayer === 1) {
    currPlayer = 2;
  } else {
    // currPlayer === 2:
    // switch currPlayer back to 1;
    currPlayer = 1;
  }
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (var y = 0; y < HEIGHT; y++) {
    for (var x = 0; x < WIDTH; x++) {
      var horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      var vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      var diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      var diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
