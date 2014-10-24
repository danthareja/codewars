/*

Construct a function named toPostfix that, when given a string containing an expression in infix notation, will return an identical expression in postfix notation.

The operators used will be '+', '-', '*', '/', and '^' with standard precedence rules and left-associativity of all operators but "^".

The operands will be single-digit integers between 0 and 9, inclusive.

Parenthesis may be included in the input, and are guaranteed to be in correct pairs.

toPostfix("2+7*5"); // Should return "275*+"
toPostfix("3*3/(7+1)"); // Should return "33*71+/"
toPostfix("5+(6-2)*9+3^(7-1)") // Should return "562-9*+371-^+"

*/

function toPostfix (infix) {
  var operators = {
    '^': {
      precedence: 4,
      left: false
    },
    '*': {
      precedence: 3,
      left: true
    },
    '/': {
      precedence: 3,
      left: true
    },
    '+': {
      precedence: 2,
      left: true
    },
    '-': {
      precedence: 2,
      left: true
    },
  };

  var postfix = "";
  var operations = [];

  infix.split("").forEach(function(token) {
    if (!isNaN(parseInt(token))) {
      postfix += token;
    } else if (operators[token]){
      var operator = operators[token];
      var topOfStackToken = operations[operations.length - 1];
      while (operators[topOfStackToken] && ((operator.left && operator.precedence <= operators[topOfStackToken].precedence) || operator.precedence < operators[topOfStackToken].precedence)) {
        postfix += operations.pop();
        topOfStackToken = operations[operations.length - 1];
      }
      operations.push(token);
    } else if (token === "(") {
      operations.push(token);
    } else if (token === ")") {
      var topOfStackToken = operations[operations.length - 1];
      while (topOfStackToken && topOfStackToken !== "(") {
        postfix += operations.pop();
        topOfStackToken = operations[operations.length - 1];
      }
      operations.pop();
    }
  });
  var topOfStackToken = operations[operations.length - 1];
  while (topOfStackToken && topOfStackToken !== "(") {
    postfix += operations.pop();
    topOfStackToken = operations[operations.length - 1];
  }

  return postfix;
}

