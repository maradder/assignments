class player {
    constructor(name, hp, attackPower, inventory) {
        this.name = name;
        this.hp = hp;
        this.attackPower = attackPower;
        this.inventory = inventory; 
    }
}

const player1 = new player("Marcus", 100, 30, ["sword", "shield"]);

console.log(player1.hp)

