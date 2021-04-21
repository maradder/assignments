const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function returnNames(arr) {
    let over18 = arr.filter((person) => {
        if(person.age > 18) {
            return person;
        }
    })
    over18.sort(function(a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        }
        if (a.lastName > b.lastName) {
            return 1;
        }
    })
    
    const final = over18.map(function(name) {
        return `<li>${name.firstName} ${name.lastName} is ${name.age}</li>`
    });
    return final
    
}

console.log(returnNames(peopleArray))