// alphabet -> 'abc'
// output -> [['abc'],
//            ['bca'],
//            ['cab']]

var makeVigenèreSquare = function(alphabet) {
  return alphabet.split('').map(function(letter) {
    var halves = alphabet.split(letter);
    return letter + halves[1].concat(halves[0]);
  });
};

// str ->    ATTACK AT DAWN
// key ->    LEMON
// output -> LEMONLEMONLEMO

var makeCodedKey = function(str, key) {
  return str.split('').map(function(letter, index){
    return key.charAt(index % key.length);
  }).join('');
};


function VigenèreCipher(key, abc) {
  var square = makeVigenèreSquare(abc);

  this.encode = function (str) {
    var codedKey = makeCodedKey(str, key);

    // For each letter in plaintext str
    return str.split('').map(function(letter, index) {
      // Only encode letters in our alphabet
      if (abc.indexOf(letter) === -1) { return letter; }

      // Get index of plaintext letter in first row of square
      var strIndex = square[0].indexOf(letter);

      // Get index of codedKey letter in first row of square
      var keyIndex = square[0].indexOf(codedKey.charAt(index));

      // Go to row of key letter and column of plaintext in square
      return square[keyIndex].charAt(strIndex);
    }).join('');
  };

  this.decode = function (str) {
    var codedKey = makeCodedKey(str, key);

    // For each letter in encoded str
    return str.split('').map(function(letter, index) {
      // Only encode letters in our alphabet
      if (abc.indexOf(letter) === -1) { return letter; }

      // Get index of codedKey letter in first row of square
      var keyIndex = square[0].indexOf(codedKey.charAt(index));

      // Look for the coded letter in that row and get it's index
      var codedIndex = square[keyIndex].indexOf(letter);

      // Return the letter in the first row at the same index
      return square[0].charAt(codedIndex);
    }).join('');
  };
}