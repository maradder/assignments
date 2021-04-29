
// Task 1
const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = arr => {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots))


// Task 2
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = arr => {
    return arr.filter(function(person) {
        return person.friendly
    })
}

console.log(filterForFriendly(people))

// Task 3
const doMathSum = (a, b) => a + b;

const produceProduct = (a, b) => a * b;

console.log(doMathSum(4,9))
console.log(produceProduct(4,9))

// Task 4
const printString = (firstName = 'Jane', lastName = 'Doe', age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;

console.log(printString("Kat", "Stark", 40))


// Task 5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

const filterForDogs = arr => arr.filter(animal => animal.type === "dog" ? true : false);

console.log(filterForDogs(animals))

// Template Literals
const welcomePerson = (location, name) => {
    return `Hi ${name}!  Welcome to ${location}.  I hope you enjoy your stay.  Please ask the president of ${location} if you need anything.`;
}

console.log(welcomePerson("Hawaii", "Janice"))