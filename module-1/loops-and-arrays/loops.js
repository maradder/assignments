var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

var count = 0;
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] == "computer") {
        count = count + 1;
    }
}
console.log(count);


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]; 



for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        var personName = peopleWhoWantToSeeMadMaxFuryRoad[i].name;
        var personGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender;
        var pronoun = '';
        if (personGender == "female") {
            pronoun = "She";
        };
        if (personGender == "male") {
            pronoun = "He";
        };
        console.log("Good news!  " + personName + " is old enough to see Mad Max.  " + pronoun + " can go find a seat!");
    }
    else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        var personName = peopleWhoWantToSeeMadMaxFuryRoad[i].name;
        var personGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender;
        var pronoun = '';
        if (personGender == "female") {
            pronoun = "She";
        };
        if (personGender == "male") {
            pronoun = "He";
        };
        console.log("Bad news...  " + personName + " is not old enough to see Mad Max.  " + pronoun + " has to wait a few years.");
    }
};

function isLightOff(array) {
    var toggleCount = 0;
    for (var i = 0; i < array.length; i++) {
        toggleCount = toggleCount + array[i];
    };
    console.log(toggleCount);
    if (toggleCount % 2 === 0) {
        console.log("The light is off.")
    }
    else if (toggleCount % 2 !== 0) {
        console.log("The light is on.")
    }
};

var tests = [
    [2, 5, 435, 4, 3] /* "The light is on" */, 
    [1, 1, 1, 1, 3] /* "The light is on" */, 
    [9, 3, 4, 2] /* "The light is off" */
];

for (var i = 0; i < tests.length; i++) {
    isLightOff(tests[i]);
};

