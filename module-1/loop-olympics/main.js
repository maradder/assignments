function preliminaries() {

    // Write a for loop that prints to the console the numbers 0 through 9.
    console.log('Preliminaries #1')
    for ( var i = 0; i < 10; i++) {
        console.log(i);
    }

    // Write a for loop that prints to the console 9 through 0.
    console.log('Preliminaries #2')
    for (var h = 9; h > - 1; h--){
        console.log(h);
    }

    // Write a for loop that prints these fruits to the console.
    console.log('Preliminaries #3')
    const fruit = ["banana", "orange", "apple", "kiwi"]
    for (var f = 0; f < fruit.length; f++) {
        console.log(fruit[f])
    }
}

function bronzeMedal() {
    // Write a for loop that will push the numbers 0 through 9 to an array.
    console.log('Bronze Medal #1')
    const numArray = [];
    for (var n = 0; n < 10; n++) {
        numArray.push(n);
    }
    console.log(numArray)

    // Write a for loop that prints to the console only even numbers 0 through 100.
    console.log('Bronze Medal #2')
    for (var t = 0; t <=100; t++) {
        if (t % 2 == 0) {
            console.log(t)};
    }

    // Write a for loop that will push every other fruit to an array.
    console.log('Bronze Medal #3')
    const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
    const everyOtherFruit = [];
    for (var b = 0; b < fruit.length; b++) {
        if (b % 2 !== 0) {
            everyOtherFruit.push(fruit[b]);
        }
    }
    console.log(everyOtherFruit);
}


function silverMedal() {
    const peopleArray = [
        {
            name: "Harrison Ford",
            occupation: "Actor"
        },
        {
            name: "Justin Bieber",
            occupation: "Singer"
        },
        {
            name: "Vladimir Putin",
            occupation: "Politician"
        },
        {
            name: "Oprah",
            occupation: "Entertainer"
        }
    ]

      // ["Harrison Ford", "Vladimir Putin"] // names
      // ["Singer", "Entertainer"] // occupations


    // Write a loop that will print out all the names of the people of the people array
    console.log('Silver Medal #1');
    for (var i = 0; i < peopleArray.length; i++) {
        console.log(peopleArray[i].name)
    }

    // Write a loop that pushes the names into a names array, and the occupations into an occupations array.
    console.log('Silver Medal #2');
    const namesArray = [];
    const occupationsArray = [];
    for (var i = 0; i < peopleArray.length; i++) {
        namesArray.push(peopleArray[i].name)
    }
    for (var i = 0; i < peopleArray.length; i++) {
        occupationsArray.push(peopleArray[i].occupation)
    }
    console.log(namesArray);
    console.log(occupationsArray);


    // Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford",
    //  and every other occupation to another array starting with, in this case, "Singer".
    console.log('Silver Medal #3');
    const everyOtherNameArray = [];
    const everyOtherOccupationArray = [];
    for (var n = 0; n < namesArray.length; n++) {
        if (n % 2 === 0) {
        everyOtherNameArray.push(namesArray[n]);
        };
    };

    for (var j = 0; j < occupationsArray.length; j++) {
        if (j % 2 !== 0) {
            everyOtherOccupationArray.push(occupationsArray[j]);
        };
    };
    console.log(everyOtherNameArray);
    console.log(everyOtherOccupationArray);

}


function goldMedal() {
    console.log('Gold Medal #1');
    // Create an array that mimics a grid like the following using nested for loops:
    // [[0, 0, 0], 
    // [0, 0, 0], 
    // [0, 0, 0]]

    const grid = [];
    var row = [];
    for (var g = 0; g < 3; g++) {
        for (var x = 0; x < 1; x++) {
            row.push(0);
        };
        grid.push(row);
    }
    console.log(grid);

    console.log('Gold Medal #2');
    // Create an array that mimics a grid like the following using nested for loops:
    // [[0, 0, 0], 
    // [1, 1, 1], 
    // [2, 2, 2]]

    const grid2 = [];
    var c = 0;
    for (var w = 0; w < 3; w++) {
        var gridRow = [];
        for (var r = 0; r < 3; r++) {
            gridRow.push(c)
        }
        grid2.push(gridRow);
        c = c + 1;
    }
    console.log(grid2);

    console.log('Gold Medal #3');
    // Create an array that mimics a grid like the following using nested for loops:
    // [[0, 1, 2], 
    // [0, 1, 2], 
    // [0, 1, 2]]

    const grid3 = [];
    for (var i = 0; i < 3; i++) {
        var gridRow = [];
        for (var u = 0; u < 3; u++) {
            gridRow.push(u);
        }
        
        grid3.push(gridRow);
    }
    console.log(grid3);
    
    console.log('Gold Medal #4');
    // Given a grid like the previous ones, write a nested for loop that would change every number to an x.
    // var grid = [["x", ...],
    //             ["x", ...],
    //             ["x",...], ...];

    var exampleArray = [ [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ] ];
    for (var i = 0; i < exampleArray.length; i++) {
        var subArray = exampleArray[i];
        for (var k = 0; k < exampleArray[i].length; k++) {
            subArray[k] = "x";
        }
    }  
    console.log(exampleArray);
}

preliminaries();
bronzeMedal();
silverMedal();
goldMedal();