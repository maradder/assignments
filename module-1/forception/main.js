var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(people, alphabet) {
    var tempPeople = people;
    var alphArray = alphabet.toUpperCase();
    alphArray = alphArray.split('');
    for (var i = 0; i < tempPeople.length; i++) {
        tempPeople[i] = tempPeople[i] + ": ";
        var output = people[i].concat(alphArray);
        console.log(output);
    }
}

forception(people, alphabet);