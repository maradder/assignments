///////////////////////////////////////////////////////////////////
let largest = (array) => {return (Math.max(...array))}

console.log(largest([3, 5, 2, 8, 1])) // => 8
///////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
function lettersWithStrings(array, x) {
    let arrayWithMatches = [];
    for (let i = 0; i < array.length; i++) {
        let arrayValue = array[i].split('');
        for (let n = 0; n < arrayValue.length; n++) {
            if (arrayValue[n] == x) {
                arrayWithMatches.push(arrayValue.join(''));
            } 
        }
    }
    return arrayWithMatches;
}

console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")) // => ["C%4!", "Hey!"]
///////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
let isDivisible = (num1, num2) => {return (num1 % num2 === 0)};

console.log (isDivisible(4, 2),  // => true
             isDivisible(9, 3),  // => true
             isDivisible(15, 4)) // => false
///////////////////////////////////////////////////////////////////


