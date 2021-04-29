const statuses = ["Powered Up", "Big", "Small", "Dead"];
const [poweredUp, big, small, dead] = statuses;
const lifeSpan = [poweredUp, big, small, dead];

const getStatus = (p1) => lifeSpan.indexOf(p1.status);

class Player {
    constructor(name = "Player1") {
    this.name = name;
    this.totalCoins = 0;
    this.status = small; //Powered Up, Big,Small, and Dead
    this.hasStar = false;
    this.setName = namePicked => this.name = namePicked;
    this.gotHit = function () {
                                let currentStatus = getStatus(this);
                                if (this.hasStar === true) {
                                    setTimeout(() => {this.hasStar = false}, 3000);
                                    console.log(`1: Your star protected you!`)
                                    return
                                }
                                this.status = lifeSpan[(currentStatus + 1)];
                                if (this.status === dead) {
                                    console.log(`2: ${this.name} has died!`)
                                    this.gameActive = false;
                                }
                                else {
                                    return this.status
                                }
    }
    this.gotPowerup = function() {
                                let currentStatus = getStatus(this);
                                if (this.status === poweredUp) {
                                    this.hasStar = true;
                                    console.log(`3: Congratulations, you got a star!`);
                                    return this.status;
                                }
                                this.status = lifeSpan[(currentStatus - 1)];
                                return this.status;
    };
    this.gameActive = true; // True or False
    this.addCoin = () => {
                            this.totalCoins = this.totalCoins + 1;
    }
    this.print = () => {
        console.log(`4: Name: ${this.name}`);
        console.log(`5: Status: ${this.status}`);
        if (this.hasStar === true) {
            console.log(`6: You have a star!`)
        }
        console.log(`7: Total coins: ${this.totalCoins}`);
        console.log('8:');
        console.log('9:');
    };
    }
}
const randomRange = (max) => {
    let rand = Math.floor(Math.random()*max);
    return rand;
}

const findOutcome = (rand, activePlayer) => {
    if (rand === 0) {
        activePlayer.gotHit();
        return
    }
    if (rand === 1) {
        activePlayer.gotPowerup()
        return
    }
    if (rand === 2) {
        activePlayer.addCoin();
        return
    }
    else {console.log(`10: Error in findOutcome`)}
}


function main(activePlayer) {
    const functionInterval = setInterval(function() {
        findOutcome(randomRange(3),activePlayer);
        // console.log('11: ' + activePlayer.print());
        activePlayer.print();
        if (activePlayer.gameActive === false) {
            clearInterval(functionInterval)
        };
    }, 750)
    
};



let olivia = new Player("Olivia");
let marcus = new Player("Marcus");

main(marcus)
