const setStorage = () => localStorage.setItem("count", "0");
const logToWindow = x => document.getElementById('target').innerText = x;
let countPlus = 0;
let ball = document.querySelector(".ball");
let origLeft = ball.style.left;


let numTest = 0;
if (numTest === 0) {
    setStorage();
    logToWindow(localStorage.getItem("count"));
}

window.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("hi")
    let countPlus = parseInt(localStorage.getItem("count"));
    console.log(countPlus);
    localStorage.setItem("count", countPlus + 1);
    logToWindow(countPlus);
    numTest = 1;
    let addStyle = () => {
        let countContainer = document.querySelector(".stylable");
        let decValDown = 255 - (countPlus * 2);
        let decValUp = 0 + (countPlus * 2);
        origLeft = Number(origLeft) + 10;
        ball.style.left = `${origLeft}px`;
        countContainer.style.backgroundColor = "#ffffff";
        countContainer.style.backgroundColor = `rgb(${decValDown}, ${decValDown}, ${decValDown})`;
        countContainer.style.color = `rgb(${decValUp}, ${decValUp}, ${decValUp})`;
        countContainer.style.color = `rgb(${decValUp}, ${decValUp}, ${decValUp})`;
        countContainer.style.padding = `0 ${countPlus}rem ${countPlus}rem ${countPlus}rem`;
        console.log(countContainer.style.color);

        // document.querySelector(".ball").style.left = `${origLeft}px`;
        return origLeft;


    }
    addStyle();

});


logToWindow(localStorage.getItem("count"));

