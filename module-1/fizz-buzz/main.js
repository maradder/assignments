var fizzBuzzCount = 0;
var fizzCount = 0;
var buzzCount = 0;

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        fizzCount = fizzCount + 1;
        console.log("Fizz");
    }
    if (i % 5 === 0 && i % 3 !== 0) {
        buzzCount = buzzCount + 1;
        console.log("Buzz");
    }
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzCount = fizzBuzzCount + 1;
        console.log("FizzBuzz");
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
        console.log(i);
    }
};

console.log(fizzBuzzCount);
console.log(fizzCount);
console.log(buzzCount);

const FizzBuzzFunc = function (fizzBuzzCount, fizzCount, buzzCount) {
    this.fizzbuzz = fizzBuzzCount;
    this.fizz = fizzCount;
    this.buzz = buzzCount;
}

var oneToOneHundred = new FizzBuzzFunc(fizzBuzzCount, fizzCount, buzzCount);
console.log(oneToOneHundred);