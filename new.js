// Implement the functionality of the 'new' operator as if you had the code:
// var myObj = new MyObject();
// but do not use the 'new' operator.
//
// Start with a simple empty Object literal.

var myObj = {};
myObj.__proto__ = MyObject.prototype;
myObj.constructor = MyObject;
MyObject.call(myObj);