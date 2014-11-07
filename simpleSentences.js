/*

Implement a function, so it will produce a sentence out of the given parts.

Array of parts could contain:
- words;
- commas in the middle;
- multiple periods at the end.

Sentence making rules:
- there must always be a space between words;
- there must not be a space between a comma and word on the left;
- there must always be one and only one period at the end of a sentence.

Example:

makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'
makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'

*/

function makeSentence(parts) {
  return parts.reduce(function(sentence, part) {
    if (parts[0] === part) { return part; } // First word
    if (part === ',') { sentence += part; } // No spaces for commas
    if (part.match(/\w+/)) { sentence += ' ' + part; } // prepend space to word
    if (parts[parts.length - 1] === part) { return sentence + '.'; } // Add period to last word
    return sentence;
  
  
  }, '');
}