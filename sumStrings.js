function sumStrings(a,b) {
  var sum = '';
  var smaller = a.length < b.length ? a : b;
  var bigger = smaller === a ? b : a;
  
  // Add zeros to the smaller element
  for (var i = smaller.length; i < bigger.length; i++) {
    smaller = '0'.concat(smaller); // adds zero infront of string
  }
    
  // Straight up kindergarden addition. Carry the ones and everything
  var carryTheOne = false;
  for (var j = smaller.length - 1; j >= 0; j--) {
    var digitSum = parseInt(smaller[j]) + parseInt(bigger[j]);
    digitSum = carryTheOne ? digitSum + 1 : digitSum; // Add the carry if it's there
    carryTheOne = digitSum / 10 >= 1 ? true : false;
    sum = digitSum / 10 >= 1 ? digitSum % 10 + sum : digitSum + sum;
  }
  sum = carryTheOne ? 1 + sum : sum;
  return removeLeadingZerosFrom(sum);
}

function removeLeadingZerosFrom(string) {
  var index = 0;
  while(string.charAt(index) === '0') {
    string = string.slice(index + 1);
    index++;
  }
  return string;
}