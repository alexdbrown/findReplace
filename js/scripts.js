var findReplace = function(inputString, matchedWord, replacedWord) {
    var lowerInputString = inputString.toLowerCase();
    var lowerMatchedWord = inputString.toLowerCase();
    var splitInputString = inputString.split(' ');
    var newWord = "";
    var newString = "";

    for (var i = 0; i < splitInputString.length; i++) {
        if (splitInputString[i] === matchedWord) {
            newWord = splitInputString[i];
            newString = inputString.replace(newWord, replacedWord);
            return newString;
        }
    }
};
