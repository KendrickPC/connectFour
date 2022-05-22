# How I Built This:

1. Make sure to change var declarations to const and let accordingly.

2. [Building 2D Array](https://www.techiedelight.com/create-2d-array-filled-with-specified-value-javascript/)

3.   // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
const htmlBoard = document.getElementById('board')

The board is now rendered on the page. 

4. Inside makeHtmlBoard(), change var declarations to const and let declarations appropriately.

5. Inside the findSpotForCol(x) function, 
```js
  //Find the lowest empty spot in the game board and return the y coordinate (or null if the column is filled).
  for (let y = HEIGHT - 1; y >= 0; y--) {
    if (!board[y][x]) {
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


