const readlineSync = require("readline-sync");


function main() {
    let gameActive = true;
    while (gameActive == true) {

        ///////////////// CREATE CLASSES ///////////////////
        class Player {
            constructor(name) {
                this.name = name;
                this.hp = 100;
                this.attackPower = 25;/* specialItemSum */
                this.inventory = [sword];
                this.points = 0;
                this.attacked = function(damageDealt) {
                    this.hp = this.hp - damageDealt;
                    if (this.hp <= 0) {
                        console.log('');
                        console.error("You've died!");
                        console.log(`You reached ${this.points} points!`);
                        console.log('');
                        gameActive = false;
                        startTheGame()
                    }
                    console.log(`Your health is at ${this.hp}`);
                    select();
                }
                this.attackBonus = function() {
                    let playerInventory = this.inventory;
                    let attackBonus = 0;
                    for (let i = 0; i < playerInventory.length; i++) {
                        attackBonus = attackBonus + playerInventory[i].attackBonus;
                    }
                    attackBonus = Math.floor(attackBonus * .5);
                    if (attackBonus >= 30) {
                        attackBonus = 35;
                    }
                    return attackBonus;
                }
                this.inventoryNames = function() {
                    let playerInventory = this.inventory;
                    let itemNameArray = [];
                    for (let i = 0; i < playerInventory.length; i++) {
                        itemNameArray.push(playerInventory[i].itemName);
                    }
                    return itemNameArray;
                }
            }
        }

        class Enemy {
            constructor(name, hp, attackPower, drops) {
                this.name = name;
                this.hp = hp;
                this.attackPower = attackPower;
                this.drops = drops;
                this.totalStrength = function() {
                    const enemysWeapon = this.drops;
                    const enemyTotalStrength = this.attackPower + enemysWeapon.attackBonus;
                    return enemyTotalStrength;
                }
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
        /////////////////// END CLASSES ////////////////////
        

        /////////// INSTANTIATE SPECIAL ITEMS //////////////
        const illusionmentPotion = new specialItem ("Illusionment Potion", "defense", 15, 5);
        const stompBoots = new specialItem ("Stomp Boots", "attack", 2, 15);
        const tootBoom = new specialItem ("Toot Boom", "attack", 5, 20);
        const dragonScales = new specialItem ("Dragon Scales", "defense", 30, 0);
        const sonicScreech = new specialItem ("Sonic Screech", "attack", 2, 30);
        const sword = new specialItem ("Battle Sword", "attack", 5, 10);
        /////////////// END SPECIAL ITEMS //////////////////


        ////////////// INSTANTIATE ENEMIES /////////////////
        let konka = new Enemy("Konka", 100, 35, illusionmentPotion);
        let roboPlop = new Enemy("RoboPlop", 100, 40, stompBoots);
        let bensitoFearito = new Enemy("Bensito Fearito", 100, 45, tootBoom);
        let theYaYa = new Enemy("The YaYa", 100, 45, dragonScales);
        let hattacki = new Enemy("Hattacki", 100, 50, sonicScreech);
        //////////////////// END ENEMIES //////////////////////


        ////////////////// DECLARE  VARIABLES  ////////////////

        let greetings = [ 
            'Greetings, Lonely Traveler.  You must be very brave to be wandering in the Enchanted Forest without a friend.',
            "Hello, Friend.  Continue only if you're prepared to face grave danger.",
            "I didn't expect to see anyone coming this way.  I hope you fare better than the last challenger.",
            "Be warned! You aren't the first to come along.  None have come back... Let's see if you do.",
            "Turn back!  It's a fool's errand to continue.  But if you must, proceed this way. "

        ]

        let attackingEnemy = '';
        let enemies = [konka, roboPlop, bensitoFearito, theYaYa, hattacki];
        let player1;
        let randNum = 0;
        let gameReady = false;
        //////////////// END DECLARE VARIABLES  ///////////////
        
        
        //////////////////// START THE GAME ///////////////////
        /////////////////////// SHOW HELP ///////////////////////
        function showHelpTips() {
            console.log('[w]: Walk');
            console.log('[r]: Run');
            console.log('[a]: Attack');
            console.log('[i]: Display Inventory');
            console.log('[p]: Display Vitals');
            console.log('[h]: Display Help (this)');
            console.log('[q]: Quit');
            console.log('');
            if (gameReady == false) {
                gameSetup();
            }
            return
        };

        function gameSetup() {
            console.log('');
        
            console.log(greetings[getRandomNumber(greetings.length-1)]);
            const player1Name = readlineSync.question("By what name are you called? ")
            player1 = new Player(player1Name);
            console.log(`Hello, ${player1.name}`);
            
            console.log('');
            console.log(`Your health is at ${player1.hp}`)
            gameReady = true;
            select();
        }

        function startTheGame() {
            const wannaPlay = readlineSync.keyIn("Do you want to play the game? ", {limit: 'yYnN'});
            console.log('');
            if (wannaPlay == 'y' || wannaPlay == 'Y' || wannaPlay == 'yes' || wannaPlay == 'Yes') {
                gameActive = true;
                
            }
            if (wannaPlay == 'n' ||wannaPlay == 'N' ||wannaPlay == 'no' ||wannaPlay == 'No') {
                gameActive = false;
                console.log("Come back if you change your mind.");
                return
                
            }

            const seeHelp = readlineSync.keyIn('Would you like to see the control keys? y/n ', {limit: 'yYnN'});
            if (seeHelp == 'n' || seeHelp == 'N') {
                gameSetup();
            };
            if (seeHelp == 'y' || seeHelp ==  'Y') {
                showHelpTips();
            };
        }


        /////////////////// RANDOM NUMBER //////////////////
        function getRandomNumber(upperLimit) {
            randNum = Math.floor(Math.random() * upperLimit) + 1;
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
            console.log('');
        };


        /////////////////// SHOW PLAYER PROFILE /////////////////
        function showPlayerProfile() {
            console.log(`Player Name: ${player1.name}, Player Health Points: ${player1.hp}, Player Inventory: ${player1.inventoryNames().toString()}`);
            console.log('');
        };


        /////////////////////// QUIT GAME ///////////////////////
        function quit() {
            gameActive = false;
            return
        };

        //////////////////// ENEMY ATTACKS //////////////////
        function playerAttacked(enemyWhoAttacks) {
            const damageDealt = enemyWhoAttacks.totalStrength();
            player1.attacked(damageDealt);
        }

        //////////////// ASSIGN RANDOM ENEMY ////////////////
        function chooseEnemy() {
            attackingEnemy = enemies[getRandomNumber(enemies.length-1)];
            return attackingEnemy;
        } 

        //////////////////////// WALK ////////////////////////
        function walk() {
            const rand = getRandomNumber(4)
            if (rand == 1) {
                enemyAppears();
                return
            }
            if (rand != 1) {
                console.log("The path is clear...");
                console.log('');
                return
            }
        }

        ////////////////////////// RUN ////////////////////////
        function run(enemyWhoAttacks) {
            getRandomNumber(2);
            if (randNum == 1) { 
                console.log(`You weren't fast enough.  ${enemyWhoAttacks.name} catches up and attacks you.`);
                console.log('');
                playerAttacked(enemyWhoAttacks);
            } 
            if (randNum == 2) {
                console.log("You've made a clean escape.  The path is clear...");
                console.log('');
                select();
            } 
        }

        ///////////////////// SELECT MOVE ///////////////////////
        function select() {
            while (gameActive == true) { 
                const selectMove = readlineSync.keyIn('What would you like to do? ', {limit: 'wiphraq'});
                if (selectMove == 'w') {
                    walk();
                }
                if (selectMove == 'i') {
                    showInventory();
                } 
                if (selectMove == 'p') {
                    showPlayerProfile();
                } 
                if (selectMove == 'h') {
                    showHelpTips();
                } 
                if (selectMove == 'r') {
                    console.log("Where are you going to run?  Try walking instead.");
                    console.log('');
                    select();
                } 
                if (selectMove == 'a') {
                    console.log("There's no enemy to attack.  Try walking a bit more.");
                    console.log('');
                    select();
                } 
                if (selectMove == 'q') {
                    const confirm = readlineSync.keyIn('Are you sure you want to quit? y/n ', {limit: 'yn'});
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
        function attackEnemy(attackingEnemy, playerAttackBonus) {
            let playersDamageDealt = getRandomNumber(100) + playerAttackBonus;
            attackingEnemy.hp = attackingEnemy.hp - playersDamageDealt;

            console.log('');
            if (attackingEnemy.hp <= 0) {
                let droppedItem = attackingEnemy.drops;
                console.log(`You've killed ${attackingEnemy.name} and have recovered ${droppedItem.itemName}!`);
                if (player1.inventory.includes(droppedItem) !== true){
                    player1.inventory.push(droppedItem);
                };
                player1.hp = player1.hp + 25;
                player1.points = player1.points + attackingEnemy.attackPower;
                console.log(`You have ${player1.points} points!`);
            } 
            if (attackingEnemy.hp > 0) {
                console.log(`You've wounded ${attackingEnemy.name}.  ${attackingEnemy.name}'s health is now ${attackingEnemy.hp}!`)
                console.log('');
                console.log(`You should've killed ${attackingEnemy.name}, because they're fighting back!`);
                console.log('');
                playerAttacked(attackingEnemy);
            }
        }

        ////////////////////// ENEMY APPEARS ////////////////////
        function enemyAppears() {
            let attackingEnemy = chooseEnemy();
            let playerAttackBonus = player1.attackBonus();

            console.log(`${attackingEnemy.name} appears in the path!`);
            console.log('');
            console.log(`Your inventory gives you an attack bonus of ${playerAttackBonus}!`);
            console.log('');
            let fightOrFlight = readlineSync.keyIn('What would you like to do? ', {limit: 'wraphq'});
            if (fightOrFlight == 'w') {
                fightOrFlight = readlineSync.keyIn("Now's not the time to walk. Are you going to run or attack? ", {limit: 'raqip'});
                console.log('');
            }
            if (fightOrFlight == 'r') {
                run(attackingEnemy);
            }
            if (fightOrFlight == 'a') {
                attackEnemy(attackingEnemy, playerAttackBonus);
            }
            if (fightOrFlight == 'p') {
                showPlayerProfile();
            }
            if (fightOrFlight == 'h') {
                showHelpTips();
            }
            if (fightOrFlight == 'q') {
                const confirm = readlineSync.question("Are you sure you want to quit? y/n ", {limit: 'yYnN'});
                if (confirm === 'y' || 'Y') {
                    quit();
                }
                if (confirm === 'n' || 'N') {
                    select();
                };
            };
        }

        //////////////////////// GAMEPLAY ////////////////////
        startTheGame();
        select();
    
    }

};

main();