
// GREEN DOT
const collectAnimals = function(...args) {
    console.log(args);
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]




function combineFruit(...food){
  let [fruit, sweets, vegetables] = food;
    return {fruit, sweets, vegetables}
}



console.log(combineFruit(["apple", "pear"],
["cake", "pie"],
["carrot"]))

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };

  const {location, duration} = vacation;
  
  function parseSentence(){
    return `We're going to have a good time in ${location} for ${duration}`;
  }

console.log(parseSentence(vacation))


const items = ["hello", "goodbye"];

const returnFirst = items => items[0]; //change this line to be es6*

console.log(returnFirst(items))


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
const [firstFav, secondFav, thirdFav] = favoriteActivities;

const returnFavorites = arr => `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;

console.log(returnFavorites(favoriteActivities))



// BLUE SQUARE
const combineAnimals = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3]; 

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// BLACK DIAMOND
const product = (a, b, c, d, e) => {  
    let numbers = [a,b,c,d,e];
    return numbers.reduce((acc, number) => acc * number, 1)
}

console.log(product(1, 2, 3, 4, 5))

const unshift = (array, a, b, c, d, e) => [[...e], ...array];
console.log(['a','b','c','d','e'], 1, 2, 3, 4, 5)

function unshiftOrigin(array, a, b, c, d, e) {  
    return [a, b, c, d, e].concat(['a','b','c','d','e']);
  }