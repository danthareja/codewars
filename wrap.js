Function.prototype.wrap = function(cb) {
  return (function() {
    var args = [].slice.call(arguments);
    return cb.apply(null, [this].concat(args));
  }).bind(this);
};

Function.prototype.wrap = function(callback) {
  callback.bind(this, this);
};