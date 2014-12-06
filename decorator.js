function Decorator(options) {
  if (!options) {
    options = {};
  }
  this.before = options.before;
  this.after = options.after;
}

Decorator.prototype.decorate = function decorate(fn) {
  var decoratorArgs = [].slice.call(arguments, 1);
  return (function() {
    var args = [].slice.call(arguments);
    if (this.before) {
      return fn.apply(null, (this.before.apply(null, decoratorArgs.concat(args))));
    } else if (this.after) {
      return this.after.apply(null, decoratorArgs.concat(fn.apply(null, args)));
    } else {
      return fn.apply(null, args);
    }
  }).bind(this);
};