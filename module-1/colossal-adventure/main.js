const readlineSync = require("readline-sync");


// Console must greet player with a fun message
console.log("Hello")


const player1 = {
                "firstName" : '' ,
                "HP       " : 100 ,
                "inventory" : [] ,
};

// Console must ask for the player's name and store it
// player1.firstName = readlineSync.question("I hate to pry, but I must ask your name.  So tell me, what is your name? ")

console.log(player1)
var rightNow = new Date();
var seconds = rightNow.getSeconds();
function randNumGen() {
    var random = Math.random();
    random = random * 100;
    random = Math.floor(random);
    return random;
}

function playerWalkRisk() {
    var random = randNumGen();
    if(random <= 25){
        console.log("attacked")
    }
    else {
        console.log("safe")
    }
}
var reg = readlineSync.setDefaultOptions

var items = ['Walk', 'Run', 'Attack', 'Inventory'];
var playerKey = readlineSync.keyInSelect(items, null);
console.log(playerKey) 

// console.log(seconds);



// Walking:
// The console will ask the user to enter a "w" to walk
// Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
// If a wild enemy appears:
// The enemy is random (can be chosen out of a minimum of 3 different enemy names)
// The user can decide to attack or run
// If attacking, a random amount of damage will be delt between a min and max
// If running, there will be a 50% chance of escaping
// After the player attacks or runs the enemy attacks back for a random damage amount
// If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking. Use a while loop to control this flow.
// If the enemy kills the player the console prints a cool death message and the game ends
// Inventory
// When the player kills enemies, they are awarded with items
// If the user enters'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory