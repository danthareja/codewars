function pipeline(seed) {
  var fns = [].slice.call(arguments, 1);
  if (!fns.length) return seed;

  return fns.reduce(function(seed, fn){
    return fn.call(null, seed);
  }, seed);
}

function compose() {
  var fns = [].slice.call(arguments);
  return function(seed) {
    return pipeline.apply(null, [seed].concat(fns.reverse()));
  };
}

function compose() {
  var fns = [].slice.call(arguments, 1);
  return function(seed) {
    return fns.reduce(function(seed, fn){
      if (typeof fn === 'function') {
        return fn.call(null, seed);
      }
    }, seed);
  };
}