/*

Your task is to implement an Event constructor function for creating event objects

var event = new Event();
which comply to the following:

an event object should have .subscribe() and .unsubscribe() methods to add and remove handlers
.subscribe() and .unsubscribe() should be able take an arbitrary number of arguments and tolerate invalid arguments (not functions, or for unsubscribe, functions which are not subscribed) by simply skipping them
multiple subscription of the same handler is allowed, and in this case unsubscription removes the last subscription of the same handler
an event object should have an .emit() method which must invoke all the handlers with the arguments provided
.emit() should use its own invocation context as handers' invocation context
the order of handlers invocation must match the order of subscription
handler functions can subscribe and unsubscribe handlers, but the changes should only apply to the next emit call - the handlers for an ongoing emit call should not be affected

subscribe, unsubscribe and emit are the only public properties that are allowed on event objects (apart from Object.prototype methods)

*/


function Event() {
  var callbacks = [];
  var executeAfterEmit = [];
  var emitting = false;
  
  this.subscribe = function(){
    if (emitting) {
      executeAfterEmit.push([this.subscribe, arguments]);
      return;
    }
    var args = [].slice.call(arguments);
    args.forEach(function(fn) {
      if ( typeof fn === "function" ) {
        callbacks.push(fn);
      }
    });
  };
  
  this.unsubscribe = function(){
    if (emitting) {
      executeAfterEmit.push([this.unsubscribe, arguments]);
      return;
    }
    var args = [].slice.call(arguments);
    args.forEach(function(fn) {
      for (var i = callbacks.length; i >= -1; i--) {
        if (callbacks[i] == fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
    });
  };
  
  this.emit = function(){
    emitting = true;
    var args = [].slice.call(arguments);
    var self = this;

    callbacks.forEach(function(callback) {
      callback.apply(self, args);
    });
    emitting = false;

    // holds tuple of [function, arguments]
    executeAfterEmit.forEach(function(tuple) {
      tuple[0].apply(null, tuple[1]);
    });
    executeAfterEmit = [];
  };
}



