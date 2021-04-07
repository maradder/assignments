class Enemy {
    constructor(name, hp, attackPower, drops) {
        this.name = name;
        this.hp = hp;
        this.attackPower = attackPower;
        this.drops = drops; 
    }
}

class specialItem {
    constructor(itemName, primaryUse, defenseBonus, attackBonus) {
        this.itemName = itemName;
        this.primaryUse = primaryUse;
        this.defenseBonus = defenseBonus;
        this.attackBonus = attackBonus;

    }
}



const illusionmentPotion = new specialItem ("Illusionment Potion", "defense", 15, 5);
const stompBoots = new specialItem ("Stomp Boots", "attack", 2, 15);
const tootBoom = new specialItem ("Toot Boom", "attack", 5, 20);
const dragonScales = new specialItem ("Dragon Scales", "defense", 30, 0);
const sonicScreech = new specialItem ("Sonic Screech", "attack", 2, 30);
const sword = new specialItem ("Battle Sword", "attack", 5, 10);


const konka = new Enemy("Konka", 90, 25, illusionmentPotion.itemName);
const roboPlop = new Enemy("RoboPlop", 90, 30, stompBoots.itemName);
const bensitoFearito = new Enemy("Bensito Fearito", 90, 35, tootBoom.itemName);
const theYaYa = new Enemy("The YaYa", 90, 30, dragonScales.itemName);
const hattacki = new Enemy("Hattacki", 90, 40, sonicScreech.itemName);

let enemies = [konka, roboPlop, bensitoFearito, theYaYa, hattacki];


function getRandomNumber(upperLimit) {
    let randNum = Math.floor(Math.random() * upperLimit) + 1;
    return randNum
}


let attackingEnemy = '';
function chooseEnemy() {
    attackingEnemy = enemies[getRandomNumber(enemies.length-1)];
    return attackingEnemy;
} 
console.log(`${chooseEnemy().name} is attacking you!`);
