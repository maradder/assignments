const dPadUp = document.querySelectorAll(".dPadUp");
const dPadRight = document.querySelectorAll(".dPadRight");
const dPadDown = document.querySelectorAll(".dPadDown");
const dPadLeft = document.querySelectorAll(".dPadLeft");
let goombaForm = document.goombaForm;
let bobombForm = document.bobombForm;
let cheepcheepForm = document.cheepcheepForm;

let goombaCount = document.goombaForm.goombaCount;
let goombaPrice = document.goombaForm.goombaPrice;
let bobombCount = document.bobombForm.bobombCount;
let bobombPrice = document.bobombForm.bobombPrice;
let cheepcheepCount = document.cheepcheepForm.cheepcheepCount;
let cheepcheepPrice = document.cheepcheepForm.cheepcheepPrice;

const goombaButton = document.getElementById("submit1");
const bobombButton = document.getElementById("submit2");
const cheepcheepButton = document.getElementById("submit3");
const buttons = document.querySelectorAll("button");

for (let g = 0; g < buttons.length; g++) {
    buttons[g].addEventListener('click', (e) => {
        e.preventDefault();
        console.log('calculate');
        getTotals();
    });
};

const getTotals = () => {
    let baddie1Total = Number(goombaCount.value) * Number(goombaPrice.value);
    let baddie2Total = Number(bobombCount.value) * Number(bobombPrice.value);
    let baddie3Total = Number(cheepcheepCount.value) * Number(cheepcheepPrice.value);
    let totalAmount = baddie1Total + baddie2Total + baddie3Total;
    
    document.getElementById("baddie1Result").innerText = baddie1Total;
    document.getElementById("baddie2Result").innerText = baddie2Total;
    document.getElementById("baddie3Result").innerText = baddie3Total;
    document.getElementById("billable").innerText = totalAmount;
}

const inputs = document.getElementsByTagName('input');

for (let q = 0; q < inputs.length; q++) {
    inputs[q].addEventListener('change', (e) => {
        e.preventDefault();
        getTotals()
    });
}

let condition = false;
while (condition === true) {
    console.log(getTotals());
}



const saveForLater = function() {
    for (let i = 0; i < dPadUp.length; i++) {
        dPadUp[i].addEventListener('mousedown', (e) => {
            e.preventDefault();
            dPadUp[i].parentElement.style.backgroundImage = "url('/src/img/dUp.svg')";
            console.log("bobombForm.value = 5456");
            console.log('up');
        });

        dPadUp[i].addEventListener('mouseup', (e) => {
            e.preventDefault();
            dPadUp[i].parentElement.style.backgroundImage = "url('/src/img/dPad.svg')";
        });
    }

    for (let t = 0; t < dPadRight.length; t++) {
        dPadRight[t].addEventListener('mousedown', (e) => {
            e.preventDefault();
            dPadRight[t].parentElement.style.backgroundImage = "url('/src/img/dRight.svg')";
            console.log('right');
        });

        dPadRight[t].addEventListener('mouseup', (e) => {
            e.preventDefault();
            dPadRight[t].parentElement.style.backgroundImage = "url('/src/img/dPad.svg')";
        });
    }

    for (let n = 0; n < dPadDown.length; n++) {
        dPadDown[n].addEventListener('mousedown', (e) => {
            e.preventDefault();
            dPadDown[n].parentElement.style.backgroundImage = "url('/src/img/dDown.svg')";
            console.log('down');
        });

        dPadDown[n].addEventListener('mouseup', (e) => {
            e.preventDefault();
            dPadDown[n].parentElement.style.backgroundImage = "url('/src/img/dPad.svg')";
        });
    }

    for (let f = 0; f < dPadLeft.length; f++) {
        dPadLeft[f].addEventListener('mousedown', (e) => {
            e.preventDefault();
            dPadLeft[f].parentElement.style.backgroundImage = "url('/src/img/dLeft.svg')";
            console.log('left');
        });

        dPadLeft[f].addEventListener('mouseup', (e) => {
            e.preventDefault();
            dPadLeft[f].parentElement.style.backgroundImage = "url('/src/img/dPad.svg')";
        });
    }
};