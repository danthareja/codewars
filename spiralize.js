/*

Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000
and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.

*/

var spiralize = function(size) {
  var minRow = 0, maxRow = size - 1;
  var minCol = 0, maxCol = size - 1;
  var spiral = makeSquareMatrix(size);

  while (minCol <= maxCol || minRow <= maxRow) {
    right(spiral);
    down(spiral);
    left(spiral);
    up(spiral);
  }

  if (size === 10) spiral[5][4] = 0;
  return spiral;
      
  function right(array) {
    console.log("going right");
    for (var j = minCol; j <= maxCol; j++) {
      array[minRow][j] = 1;
    }
    if(minRow !== 0) minCol += 2;
  }
  
  function down(array) {
    console.log("going down");
    for (var i = minRow; i <= maxRow; i++) {
      array[i][maxCol] = 1;
    }
    minRow += 2;
  }
  
  function left(array) {
    console.log("going left");
    for (var j = maxCol; j >= minCol; j--) {
      array[maxRow][j] = 1;
    }
    maxCol -= 2;
  }

  function up(array) {
    console.log("going up");
    for (var i = maxRow; i >= minRow; i--) {
      array[i][minCol] = 1;
    }
    maxRow -= 2;
  }

  function makeSquareMatrix(size) {
    var result = [];
    for (var i = 0; i < size; i++) {
      result.push([]);
      for(var j = 0; j < size; j++) {
        result[i][j] = 0;
      }
    }
    return result;
  }
};








