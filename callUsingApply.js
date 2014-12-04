/*

Imagine JavaScript didn't natively include the call function. The apply function however still exists.
Using apply, write call.

*/

Function.prototype.call = function() {
  var args = [].slice.apply(arguments, [1]);
  return this.apply(arguments[0], args);
};

Function.prototype.call = function(context) {
  var args = [].slice.apply(arguments, [1]);
  return this.apply(context, args);
};
