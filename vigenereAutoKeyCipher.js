function VigenèreAutokeyCipher(key, abc) {
 var alphabetKey = {}, i
  for (i=0;i<abc.length;++i) {
    if (!alphabetKey.hasOwnProperty(abc[i])) {
      alphabetKey[abc[i]] = i;
    }
  }
  
  this.encode = function (str) {
    var i, k=0, key=keyInp, nextKey = '';
    return str.split('').map(function(c) {
      if (!alphabetKey.hasOwnProperty(c)) return c;
      if (nextKey.length === key.length) {
        key = nextKey;
        nextKey = '';
        k = 0;
      }
      var changed = abc[(alphabetKey[c]+alphabetKey[key[k++]])%abc.length];
      nextKey += c;
      return changed;
    }).join('');
  };
  this.decode = function (str) {
    var i, k=0, key=keyInp, nextKey = '';
    return str.split('').map(function(c) {
      if (!alphabetKey.hasOwnProperty(c)) return c;
      if (nextKey.length === key.length) {
        key = nextKey;
        nextKey = '';
        k = 0;
      }
      var changed = abc[(alphabetKey[c]-alphabetKey[key[k++]]+abc.length)%abc.length];
      nextKey += changed;
      return changed;
    }).join('');
  };
}