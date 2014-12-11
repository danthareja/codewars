// complete the function
function solution(string) {
  return string.replace(/[a-z](?=[A-Z])/g, function(match) {
    return match + " ";
  });
}

function solution(string) {
  return string.replace(/([A-Z])/g, ' $1')
}