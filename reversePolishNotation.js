var reversePolishNotation = function(expression) {
  var stack = [];
  var inputs = expression.split(" ").map(function(input) {
    return isNaN(parseFloat(input)) ? input : parseFloat(input);
  });

  inputs.forEach(function(input) {
    if (typeof input === "string") {
      var secondOperand = stack.pop();
      var firstOperand = stack.pop();
      if (input === "+") stack.push(firstOperand + secondOperand);
      if (input === "-") stack.push(firstOperand - secondOperand);
      if (input === "*") stack.push(firstOperand * secondOperand);
      if (input === "/") stack.push(firstOperand / secondOperand);
    } else {
      stack.push(input);
    }
  });
    
  return stack.pop() || 0;
};