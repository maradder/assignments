function capitalize(string) {
    var newString = '';
    splitArray = string.split(" ");
    for (var i = 0; i < splitArray.length; i++) {
        var tempWord = splitArray[i];
        var tempArray = tempWord.split("");
        for (var I = 0; I < 1; I++) {
            var placeHolder = tempArray[0];
            placeHolder = placeHolder.toUpperCase();
            tempArray[0] = placeHolder;
            var joined = tempArray.join('');
            newString = newString + " " + joined;
        }
    }
    console.log(newString);
}
capitalize("hey friends! practice practice practice!") 
// capitalize("An integer representing the index of the character you want to return") 
