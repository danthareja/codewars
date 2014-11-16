var UriBuilder = function(uri) {
  this.uri = uri;
  this.params = this.getParamsFromUri();
};

UriBuilder.prototype.getParamsFromUri = function() {
  var params = {};
  var queryIndex = this.uri.indexOf('?');
  var paramsArray, paramTuple;

  // Add existing params
  if (queryIndex > -1) {
    paramsArray = this.uri.slice(queryIndex + 1).split('&');
    paramsArray.forEach(function(param) {
      paramTuple = param.split('='); // ex -> ['page', '1']
      params[paramTuple[0]] = paramTuple[1];
    });
  }

  return params;
};

UriBuilder.prototype.build = function() {
  // Remove existing query from uri
  var uri = this.uri.split('?')[0];
  var params = Object.keys(this.params);
  var self = this;

  if (params.length > 0) {
    uri += '?';
    params.forEach(function(key, index) {
      if (index > 0) { uri += '&'; }
      uri += encodeURIComponent(key) + '=' + encodeURIComponent(self.params[key]);
    });
  }

  this.uri = uri;
  return this.uri;
};

var builder = new UriBuilder('http://www.codewars.com?page=1&language=js');