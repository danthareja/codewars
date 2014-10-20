snail = function(array) {
  if (array[0].length === 0) return [];

  var minRow = 0, maxRow = array.length - 1;
  var minCol = 0, maxCol = array.length - 1;
  var result = [];

  while (minCol <= maxCol || minRow <= maxRow) {
    right(array);
    down(array);
    left(array);
    up(array);
  }

  return result;
      
  function right(array) {
    for (var j = minCol; j <= maxCol; j++) {
      result.push(array[minRow][j]);
    }
    minRow++;
  }
  
  function down(array) {
    for (var i = minRow; i <= maxRow; i++) {
      result.push(array[i][maxCol]);
    }
    maxCol--;
  }
  
  function left(array) {
    for (var j = maxCol; j >= minCol; j--) {
      result.push(array[maxRow][j]);
    }
    maxRow--;
  }

  function up(array) {
    for (var i = maxRow; i >= minRow; i--) {
      result.push(array[i][minCol]);
    }
    minCol++;
  }
};