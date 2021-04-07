const readlineSync = require("readline-sync");

/*//////////////////////////////////////////////////
///////////////// CREATE CLASSES ///////////////////
//////////////////////////////////////////////////*/

class Player {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.attackPower = 25;/* specialItemSum */
        this.inventory = [sword];
        this.points = 0; 
    }
}

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

/*//////////////////////////////////////////////////
/////////////////// END CLASSES ////////////////////
//////////////////////////////////////////////////*/


/*//////////////////////////////////////////////////
/////////// INSTANTIATE SPECIAL ITEMS //////////////
//////////////////////////////////////////////////*/

const illusionmentPotion = new specialItem ("Illusionment Potion", "defense", 15, 5);
const stompBoots = new specialItem ("Stomp Boots", "attack", 2, 15);
const tootBoom = new specialItem ("Toot Boom", "attack", 5, 20);
const dragonScales = new specialItem ("Dragon Scales", "defense", 30, 0);
const sonicScreech = new specialItem ("Sonic Screech", "attack", 2, 30);
const sword = new specialItem ("Battle Sword", "attack", 5, 10);

/*//////////////////////////////////////////////////
/////////////// END SPECIAL ITEMS //////////////////
//////////////////////////////////////////////////*/


/*//////////////////////////////////////////////////
////////////// INSTANTIATE ENEMIES /////////////////
//////////////////////////////////////////////////*/

let konka = new Enemy("Konka", 90, 25, illusionmentPotion);
let roboPlop = new Enemy("RoboPlop", 90, 30, stompBoots);
let bensitoFearito = new Enemy("Bensito Fearito", 90, 35, tootBoom);
let theYaYa = new Enemy("The YaYa", 90, 30, dragonScales);
let hattacki = new Enemy("Hattacki", 90, 40, sonicScreech);

/*//////////////////////////////////////////////////
/////////////////// END ENEMIES ////////////////////
//////////////////////////////////////////////////*/


/*//////////////////////////////////////////////////
//////////// DECLARE PLAYER VARIABLES  /////////////
//////////////////////////////////////////////////*/

let player1;

/*//////////////////////////////////////////////////
/////////// END DECLARE PLAYER VARIABLES  //////////
//////////////////////////////////////////////////*/


/*//////////////////////////////////////////////////
////////////////// GAMEPLAY LOOP ///////////////////
//////////////////////////////////////////////////*/

let gameActive = false;

function main() {
    while (gameActive == true) {
        let attackingEnemy = '';
        let enemies = [konka, roboPlop, bensitoFearito, theYaYa, hattacki];
        let randNum = 0;

        /////////////////// RANDOM NUMBER //////////////////
        function getRandomNumber(upperLimit) {
            // console.log('first of rand')
            randNum = Math.floor(Math.random() * upperLimit) + 1;
            // console.log('end of rand')
            return randNum
        }

        /////////////////// SHOW INVENTORY /////////////////
        function showInventory() {
            let playerInventory = player1.inventory;
            let itemNameArray = [];
            for (let i = 0; i < playerInventory.length; i++) {
                itemNameArray.push(playerInventory[i].itemName);
                console.log(playerInventory[i].itemName);
            }
            console.log(`${player1.name}, you have a ${itemNameArray} in your inventory.`);
        };

        ////////////////////// QUIT GAME ////////////////////
        function quit() {
            gameActive = false;
            return
        };

        //////////////////// ENEMY ATTACKS //////////////////
        function playerAttacked(enemyWhoAttacks) {
            const enemysWeapon = enemyWhoAttacks.drops;
            const damageDealt = enemyWhoAttacks.attackPower + enemyWhoAttacks.drops.attackBonus;
            player1.hp = player1.hp - damageDealt;
            if (player1.hp <= 0) {
                console.log("You've died!");
                console.log(`You reached ${player1.points} points!`)
                gameActive = false;
                startTheGame()
            }
            console.log(`Your health is at ${player1.hp}`);
            select();
        }

        //////////////// ASSIGN RANDOM ENEMY ////////////////
        function chooseEnemy() {
            attackingEnemy = enemies[getRandomNumber(enemies.length-1)];
            return attackingEnemy;
        } 

        //////////////////////// WALK ////////////////////////
        function walk() {
            const rand = getRandomNumber(4)
            // console.log(rand);
            if (rand == 1) {
                enemyAppears();
                return
            }
            if (rand != 1) {
                console.log("The path is clear...")
                return
            }
        }

        ////////////////////////// RUN ////////////////////////
        function run(enemyWhoAttacks) {
            // console.log(enemyWhoAttacks.name)
            getRandomNumber(2);
            if (randNum == 1) { 
                console.log(`${enemyWhoAttacks.name} catches up and attacks you.`) 
                playerAttacked(enemyWhoAttacks);
            } 
            if (randNum == 2) {
                console.log("You've made a clean escape.  The path is clear...")
                select();
            } 
        }

        ///////////////////// SELECT MOVE ///////////////////////
        function select() {
            while (gameActive == true) { 
                const selectMove = readlineSync.keyIn('What would you like to do?', {limit: 'wiq'});
                if (selectMove == 'w') {
                    walk();
                }
                if (selectMove == 'i') {
                    showInventory();
                } 

                if (selectMove == 'q') {
                    const confirm = readlineSync.question("Are you sure you want to quit? y/n ");
                    if (confirm === 'y' || 'Y') {
                        quit();
                    }
                    if (confirm === 'n' || 'N') {
                        select();
                    };
                };
            };
        };

        ///////////////////// PLAYER ATTACKS //////////////////
        function attackEnemy(attackingEnemy) {
            let playerInventory = player1.inventory;
            let playerAttackBonus = 0;
            for (let i = 0; i < playerInventory.length; i++) {
                playerAttackBonus = playerAttackBonus + playerInventory[i].attackBonus;
            }
            console.log(`Player Attack Bonus = ${playerAttackBonus}`)
            let playersDamageDealt = getRandomNumber(120) + playerAttackBonus;
            attackingEnemy.hp = attackingEnemy.hp - playersDamageDealt;
            if (attackingEnemy.hp <= 0) {
                let droppedItem = attackingEnemy.drops;
                console.log(`You've killed ${attackingEnemy.name} and have recovered ${droppedItem.itemName}!`);
                player1.inventory.push(droppedItem);
                player1.hp = player1.hp + 20;
                player1.points = player1.points + attackingEnemy.attackPower;
                console.log(`You have ${player1.points} points!`)
            } 
            if (attackingEnemy.hp > 0) {
                console.log(`You've wounded ${attackingEnemy.name}.  ${attackingEnemy.name}'s health is now ${attackingEnemy.hp}!`)
                console.log(`You should've killed ${attackingEnemy.name}, because they're fighting back!`);
                playerAttacked(attackingEnemy);
            } 
        }

        ////////////////////// ENEMY APPEARS ////////////////////
        function enemyAppears() {
            let attackingEnemy = chooseEnemy();
            console.log(`${attackingEnemy.name} appears in the path!`);
            let fightOrFlight = readlineSync.keyIn('What would you like to do?', {limit: 'ra'});
            // console.log('1');
            if (fightOrFlight == 'r') {
                run(attackingEnemy);
            }
            // console.log('2');

            if (fightOrFlight == 'a') {
                attackEnemy(attackingEnemy);
            } 
        }

        //////////////////////// GAMEPLAY ////////////////////
        while (gameActive !== false && player1.hp > 0){
            select();
        }
    
    }
};

/*//////////////////////////////////////////////////
////////////////  END GAMEPLAY LOOP ////////////////
//////////////////////////////////////////////////*/


//////////////////// START THE GAME ///////////////////
function gameSetup() {
    console.log('');
    console.log('');
    console.log('Greetings, Lonely Traveler.  You must be very brave to be wandering in the Enchanted Forest without a friend.')
    const player1Name = readlineSync.question("By what name are you called? ")
    player1 = new Player(player1Name);
    console.log(`Hello, ${player1.name}`);
    console.log('');
    console.log(`Your health is at ${player1.hp}`)
    main();
}

function startTheGame() {
    const wannaPlay = readlineSync.question("Do you want to play the game? ") 
    if (wannaPlay == 'y' || wannaPlay == 'Y' || wannaPlay == 'yes' || wannaPlay == 'Yes') {
        gameActive = true;
        gameSetup();
    }
    if (wannaPlay == 'n' ||wannaPlay == 'N' ||wannaPlay == 'no' ||wannaPlay == 'No') {
        gameActive = false;
        console.log("Come back if you change your mind.");
        return
        
    }
}

startTheGame();
