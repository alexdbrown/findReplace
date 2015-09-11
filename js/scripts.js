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

$(document).ready(function() {

    //collects information from the form
    $("form#find-replace").submit(function(event) {
        var string = ($("input#string").val());
        var match = ($("input#match").val());
        var replace = ($("input#replace").val());
        var result = findReplace(string, match, replace);

        //defines spans
        $(".match").text(match);
        $(".replace").text(replace);
        $(".result").text(result);

        //for result dive
        $("#result").show();
        event.preventDefault();
    });

});
