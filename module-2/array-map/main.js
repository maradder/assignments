function doubleNumbers(arr) {
    return arr.map(val => val * 2)}   

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function stringItUp(arr){
    return arr.map(digit => digit.toString())
  }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


function capitalizeNames(arr) {
    let newArr = [];
    arr.map(function(names) {
        names = names.toLowerCase();
        let firstLetter = names.slice(0,1);
        firstLetter = firstLetter.toUpperCase();
        let splitted = names.split("");
        splitted[0] = firstLetter;
        newArr.push(splitted.join(''));
    });
    console.log(newArr);
    };
// capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); // ["John", "Jacob", "Jingleheimer", "Schmidt"];


function namesOnly(arr) {
    let nameArr = [];
    arr.map(function(name) {
        nameArr.push(name.name)
        
    })
    return nameArr;
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]




function makeStrings(arr){
    let nameStrArr = [];
    arr.map(function(name) {
        let newName = name.name.toString();
        if (name.age >= 17){
            newName = `${newName} can go to The Matrix`;
        }
        else {
            newName = `${newName} is under age!!`;
        }
        nameStrArr.push(newName)
        
    })
    return nameStrArr;
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]



  function readyToPutInTheDOM(arr){
      let newArr = [];
      arr.map(function(person) {
        let chunk1 = `<h1>${person.name}</h1>`;
        newArr.push(chunk1.concat(`<h2>${person.age}</h2>`))
    })
    console.log(newArr);
        
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]