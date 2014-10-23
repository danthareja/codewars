// From Frontend Masters' Javascript the Good Parts course with Douglas Crockford

var identity = function(x) {
  return x;
};

var add = function(x, y) {
  return x + y;
};

var mul = function(x, y) {
  return x * y;
};

var idf = function(x) {
  return function() {
    return x;
  };
};

var addf = function(x) {
  return function(y) {
    return add(x, y);
  };
};


// Write a function that takes a binary function, and makes it callble with two invocations
var applyf = function(fn) {
  return function(x) {
    return function(y) {
      return fn(x, y);
    };
  };
};

// Write a function that takes a function as an argument and returns a function that can supply a second argument
var curry = function(fn, first) {
  return function(second) {
    return fn(first, second);
  };
};

var curryWithApplyF = function(fn, first) {
  return applyf(fn)(first);
};

// Write three ways to create a function inc that adds 1 to any number
var inc = addf(1);
var inc = applyf(add)(1);
var inc = curry(add, 1);

// Write methodize, a function that converts a binary function to a method
var methodize = function(fn) {
  return function(x) {
    return fn(this, x);
  };
};

// Write demethodize, a function that converts a method into a binary function
var demethodize = function(fn) {
  return function(that, y) {
    return fn.call(that, y);
  };
};

var twice = function(fn) {
  return function(a) {
    return fn(a, a);
  };
};

// Write a function composeu that takes two unary functions and returns a unary function that calls them both
var composeu = function(fnOne, fnTwo) {
  return function(a) {
    return fnTwo(fnOne(a));
  };
};

// Write a function compseb that takes two binary functions and returns a function that calls both of them.
var composeb = function(f, g) {
  return function(a, b, c) {
    return g(f(a,b), c);
  };
};

// Write a function that allows another function to only be called once.
var once = function(fn) {
  return function() {
    var f = fn;
    fn = null;
    return f.apply(this, arguments);
};

// Write a factory function that returns two functions that implement an up/down counter.
var counterf = function(num) {
  return {
    inc: function() { return ++num; },
    dec: function() { return --num; }
  };
};

// Make a revocable function that takes a nice function, and returns a revoke function that denies access to the nice function, and an invoke function that can invoke the nice function until it’s revoked.
var revocable = function(fn) {
  return {
    invoke: function() {
      return fn.apply(this, arguments);
    },
    revoke: function() {
      fn = null;
    }
  };
};
