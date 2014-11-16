var countChange = function(money, coins) {
  var output = 0;

  (function recurse (index, tot) {
    var currentDenomination = coins[index];
    if (index === 0) {
      // support a lowest currency that is not 1
      tot % currentDenomination === 0 && output++;
      return
    }
    while (tot >= 0) {
      recurse(index-1, tot);
      tot -= currentDenomination;
    }
  })(coins.length-1, money);

  return output;
}