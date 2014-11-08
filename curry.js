/*
write a function
function curry(fun, /*args) { 
    ...
}
which takes another function fun and an arbitrary number of other arguments - and returns a function, which works like fun with the first arguments replaced by the remaining arguments of curry.

For example

function add(a, b, c) { return a+b+c; }
var addOne = curry(add , 1);

add(1, 2, 3) === addOne(2, 3);
And one more thing - some code warrior who was having a snack at your relative's restaurant told her that there is such thing as execution context, and that the cook function might rely on it somehow - it is designed to work exclusively with cooking machine after all.
So another request for curry function is that if the resulting function is invoked with context ctx the original function inside it should also be invoked with context ctx

For example,

var obj = {
  a: 'foo',
  b: function (a) { return this.a + a; }
}

obj.foobar = curry(obj.b, 'bar');
obj.foobar() //should return foobar

*/

var curry = function(func) {
  var slice = Array.prototype.slice;
  var args = slice.call(arguments, 1);
  var self = this;

  if (func.length > args.length) {
    return function() {
      console.log("func on line 36: ", func);
      return func.apply(self, args.concat(slice.call(arguments)));
    };
  } else {
    return function(){
      // console.log(func);
      return func.apply(self, args);
    }
  }
};