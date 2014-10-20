/*

Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Remember that there can't be more than 3 identical symbols in a row.

*/

var solution = function(number) {
  var NUMBER_TO_NUMERAL = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };

  var romanNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var result = "";

  romanNumbers.forEach(function(romanNumber, i) {
    var quotient = Math.floor(number / romanNumber);
    if (quotient > 0) {
      for (var i = 0; i < quotient; i++){
        result += NUMBER_TO_NUMERAL[romanNumber];
      }
    }
    number = number % romanNumber; // Number equals remainder
  });
  
  return result;
};