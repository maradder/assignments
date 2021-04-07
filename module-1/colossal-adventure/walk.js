function getRandomNumber(upperLimit) {
    let randNum = Math.floor(Math.random() * upperLimit) + 1;
    return randNum
}

function walk() {
    const rand = getRandomNumber(4)
    console.log(rand);
    if (rand == 1) {
        console.log('playerAttacked()')
    }
    if (rand != 1) {
        console.log('select()')
    }
}

walk()