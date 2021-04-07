const readlineSync = require("readline-sync");


class Player {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.attackPower = 25;/* specialItemSum */
        this.inventory = ["sword"]; 
    }
}

const player1Name = readlineSync.question("By what name are you called? ")
const player1 = new Player(player1Name);


console.log(player1)