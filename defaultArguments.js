// Write a function defaultArguments. 
// It takes a function as an argument, along with an object containing default values for that function's arguments, and returns another function which defaults to the right values.

// You cannot assume that the function's arguments have any particular names.

// You should be able to call defaultArguments repeatedly to change the defaults.


var defaultArguments = function(callback, defaults) {
  return function() {
      var callbackWithNoWhiteSpace = callback.toString().replace(/ /g, "");
      var paramStartIndex = callbackWithNoWhiteSpace.indexOf("(") + 1; // indexOf grabs first find
      var paramEndIndex = callbackWithNoWhiteSpace.indexOf(")");
      var params = callbackWithNoWhiteSpace.substring(paramStartIndex, paramEndIndex).split(",");

      // for each argument in defaults, if it's corresponding value is not passed in on invocation, we want to overwrite it
      var argumentsArray = [].slice.call(arguments);
      var args = params.map(function(param, index) {
        // input arguments get first priority
        if (argumentsArray[index]) {
          return argumentsArray[index];
        }
        // then check for defaults
        else if (defaults[param]) {
          return defaults[param];
        }
        // then return undefined
        return undefined;
      });
      debugger;
      console.log("params ", params);
      console.log("args ", args);
      console.log("defaults ", defaults);
      return callback.apply(this, args);
  };
};

var add_ = defaultArguments(add,{b:9});
console.log(add_(10));
console.log(add_(10, 5));
var add_ = defaultArguments(add_,{b:3});
console.log(add_(10));
