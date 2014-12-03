var numberToPrice = function(number) {
  return typeof number !== 'number' ? 'NaN' : number.toString().split('.')[0].split('').reduceRight(function(newString, number, index, array) {
    return (array.length - index) % 3 === 0 ?',' + number + newString : number + newString;
  }, '').concat(number.toString().split('.')[1] ? '.' + number.toString().split('.')[1].slice(0,2) : '');
}