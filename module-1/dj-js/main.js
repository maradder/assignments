var square = document.querySelector(".square");
var squareText = document.querySelector("#squareText");
var window = document.window;
var squareColor = square.style.backgroundColor;
const colorReset = "white";
const textColorReset = "#1F1017";

square.addEventListener("mouseover", function() {
    square.style.backgroundColor = 'blue';
    squareText.style.color = 'white';
});

square.addEventListener("mouseout", function() {
    square.style.backgroundColor = colorReset;
    squareText.style.color = textColorReset;
});

square.addEventListener('mousedown', function() {
    square.style.backgroundColor = 'red';
});

square.addEventListener('mouseup', function() {
    square.style.backgroundColor = 'yellow';
    squareText.style.color = textColorReset;
});

square.addEventListener('dblclick', function() {
    square.style.backgroundColor = 'green';
    squareText.style.color = 'white';
});

window.addEventListener('scroll', function() {
    document.querySelector("#square").style.backgroundColor = 'orange';
})

document.onkeydown = function(e){
    console.log(e);
    if (e.keyCode == 66) {
        square.style.backgroundColor = 'blue';
        squareText.style.color = 'white';
    }
    if (e.keyCode == 87) {
        square.style.backgroundColor = 'white';
        squareText.style.color = textColorReset;
    }
    if (e.keyCode == 89) {
        square.style.backgroundColor = 'yellow';
        squareText.style.color = textColorReset;
    }
    if (e.keyCode == 71) {
        square.style.backgroundColor = 'green';
        squareText.style.color = 'white';
    }
    if (e.keyCode == 79) {
        square.style.backgroundColor = 'orange';
        squareText.style.color = textColorReset;

    }
    if (e.keyCode == 82) {
        square.style.backgroundColor = 'red';
        squareText.style.color = textColorReset;
    }
}