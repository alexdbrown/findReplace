var findReplace = function(inputString, matchedWord, replacedWord) {
    var lowerInputString = inputString.toLowerCase();
    var lowerMatchedWord = matchedWord.toLowerCase();
    var splitInputString = lowerInputString.split(' ');
    var foundWord = "";

    for (var i = 0; i < splitInputString.length; i++) {
        if (splitInputString[i] === lowerMatchedWord) {
            foundWord = splitInputString[i];
            return foundWord;
        }
    }
};
