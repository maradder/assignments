function setStorage() {
    localStorage.setItem("count", "0");
}
function logToWindow(x) {
    document.getElementById('target').innerText = x;
}
let numTest;
if (numTest === 0) {
    setStorage();
    logToWindow(localStorage.getItem("count"));
}

window.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("hi")
    let countPlus = parseInt(localStorage.getItem("count"));
    console.log(countPlus);
    localStorage.setItem("count", countPlus + 1);
    logToWindow(countPlus);
    numTest = 1;
});

logToWindow(localStorage.getItem("count"));


