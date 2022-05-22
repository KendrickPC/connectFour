# How I Built This:

1. Make sure to change var declarations to const and let accordingly.

2. [Building 2D Array](https://www.techiedelight.com/create-2d-array-filled-with-specified-value-javascript/)
Since board is already declared above (on line 12), "set" board to newly created board. Then return board. The keyword here is "set"

3.   // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
const htmlBoard = document.getElementById('board')

The board is now rendered on the page. 

4. Inside makeHtmlBoard(), change var declarations to const and let declarations appropriately.


5. Inside the findSpotForCol(x) function, 
```js
  //Find the lowest empty spot in the game board and return the y coordinate (or null if the column is filled).
  for (let y = HEIGHT - 1; y >= 0; y--) {
    if (board[y][x] === null) {
      return y;
    }
  }
  return null;
```

6. placeInTable(x, y) function: 
  - TODO: Make a div and insert into correct table:
```js
// TODO: Make a div and insert into correct table cell:
// Step 1: Make a div.
const div = document.createElement('div');
// Step 2: Insert div 
div.classList.add('piece');
```
[Adding DIV to classList documentation](https://www.w3schools.com/jsref/prop_element_classlist.asp)



7. handleClick(evt) solving:
```js
 // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);
  board[y][x] = currPlayer;
  counter += 1; // To check for ties... if counter === maximum spaces, it's a tie (because checkForWin() did not kick in);
```

8. Inside css file:
```css
/* TODO: make pieces red/blue,  depending on player 1/2 piece */
#player-1 {
  background-color: red;
}

#player-2 {
  background-color: blue;
}
```
The board should be working now, but only with first player color (red):

9. Inside handleClick(evt):
if currPlayer === 1, set currPlayer to 2: if currPlayer === 2: set currPlayer to 1;
Now colors on the board should change accordingly.

10. Inside endGame(msg), call alert function with the argument of msg. This can be found inside the handleClick() function where the if(checkForWin()) function is checked: the return endGame(objectLiteral) is the msg/argument. Basically, return that object literal string.

11. Clean up handleClick function to clear out var declarations to let/const:

12. Clean up checkForWin() function to clear our var declarations to let/const:


