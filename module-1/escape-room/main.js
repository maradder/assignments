const readline = require("readline-sync");

var isKeyFound = false;
var option = null;
var userName = ''

function whatsNext() {
    console.log("Now what would you like to do? ");
    makeADecision();
}

function tryAgain() {
    var wantToTryAgain = readline.question("Do you want to try again? yes/no  ");
    if (wantToTryAgain == "yes" || "Yes" || "y") {
        startTheGame();
    }
    if (wantToTryAgain == "no" || "No" || "n") {
        console.log("Thanks for playing!");
    }
}

function userDies() {
    console.log("You've died.");
    tryAgain();
}

function foundTheKey() {
    isKeyFound = true
    console.log("Great!  After some searching, you've found the key!");
    whatsNext();
    // return isKeyFound;
}

function isUserReadyForDoor() {
    if (isKeyFound == true) {
        console.log("Great! You've made it out of the room!");
        tryAgain();
    }
    if (isKeyFound != true) {
        console.log("Sorry, " +  userName + "... The door can't be opened yet.");
        whatsNext();
    }
}

function getUserName() {
    userName = readline.question("What is your name? ");
    console.log("Hello, " + userName + ".");
}

function startTheGame() {
    isKeyFound = false;
    makeADecision();
}

function makeADecision() {
    option = readline.question("What do you want to do? (1) Put your hand in the hole? (2) Find the key? Or (3) open the door? ");
    if (option == "1") {
        userDies();
    }
    if (option == "2") {
        foundTheKey();
    }
    if (option == "3"){
        isUserReadyForDoor();   
    }
    else {
        console.log("Please choose 1, 2, or 3")
        startTheGame();
    }
}

function startNewGame() {
    getUserName();
    startTheGame();
}

startNewGame()

// Write a game that lets a user escape a room. 
// The character finds him/herself locked in a room. 
// In order to escape the room, your character needs to find the key in the room and then open the door. 
// There's also a hole in the wall in the room. If your character puts his hand in the hole, he dies.

// Game start:
// Tell the user their options:

// Put hand in hole
// Find the key, or
// Open the door
// They can't open the door unless they find the key first.
// They die if they put their hand in the hole.

// JavaScript tools that may help
// while loop
// variables
// booleans
// if/else if/else OR switch statement
// readline-sync (syntax for installing and using below)