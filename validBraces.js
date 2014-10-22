function validBraces(braces){
  var result = [];
  var bracesArray = braces.split("")
  for (var i = 0; i < bracesArray.length; i++) {
    if (bracesArray[i] === ")" && result.pop() !== "(") return false;
    if (bracesArray[i] === "]" && result.pop() !== "[") return false;
    if (bracesArray[i] === "}" && result.pop() !== "{") return false;    
    if (bracesArray[i] === "(" || bracesArray[i] === "{" || bracesArray[i] === "[") result.push(bracesArray[i]);
  }
  return result.length === 0;
}