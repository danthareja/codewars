/*

In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

You will receive a string input that looks something like this:

user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
Your method should return an object hash-map that looks like this:

{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}
You can expect valid input. You won't see input like:
  // This will NOT happen
  foo=1&foo.bar=2
All properties and values will be strings — and the values should be left as strings to pass the tests.
Make sure you decode the URI components correctly
A method has been provided for testing Objects to compare objects recursively without depending on property order:

*/

function convertQueryToMap(query) {
  var params = {};
  var paramsArray, paramTuple, key, value;

  paramsArray = query.split('&');
  paramsArray[0].length > 0 && paramsArray.forEach(function(param) {
    paramTuple = param.split('='); // ex -> ['page', '1']
    value = decodeURIComponent(paramTuple[1]);
    keys = paramTuple[0].split(".");

    keys.reduce(function(params, key, index) {
      if (index === keys.length - 1) {
        params[key] = value; // Assign value
      }
      params[key] = params[key] || {}; // Initialize object if not there
      return params[key]; // Go one level deeper
    }, params);
  });

  return params;
};