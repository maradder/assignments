


// CREATE AND STYLE THE HEADER

const header = document.getElementById('header');
const h1 = document.createElement('h1');
const h4Container = document.createElement('div');
const h4 = document.createElement('h4');
const innerSpan = document.createElement('span');

header.appendChild(h1);
header.appendChild(h4Container);
h4Container.appendChild(innerSpan);
h4Container.appendChild(h4);

h4.innerText += " wrote the JavaScript.";
h1.innerText = "JavaScript Made This!!";
innerSpan.innerText = "Marcus Radder  ";
innerSpan.setAttribute("id", "headerSpan");
innerSpan.style.marginRight = ".5ch";

header.style.height = "143px";
header.style.backgroundColor = "white";
header.style.marginBottom = "15px";
header.style.display = "flex";
header.style.flexDirection = "column";
header.style.alignItems = "center";

h4Container.style.display = "flex";
h4Container.style.flexDirection = "row";
h4Container.style.alignItems = "center";
document.getElementById("headerSpan").style.color = "#F9DBBD";

// END OF CREATE AND STYLE THE HEADER

var main =  document.querySelector("#main");
var messages = document.querySelector(".messages");


const clearBtn = document.getElementById('clear-button');
clearBtn.addEventListener('click', function() {
    var firstMessage = messages.firstElementChild;
    while (firstMessage) {
        firstMessage.remove();
        firstMessage = messages.firstElementChild;
    }
});

// ADD NEW MESSAGES FROM THE TEXT INPUT AND ALTERNATE SIDES
var messageCount = 0;
const addNewMessage = document.querySelector('form > button');
addNewMessage.setAttribute("onClick", "return false");

addNewMessage.addEventListener("click", function() {
    const newMessageContent = document.getElementById("input").value;
    var newMessage = document.createElement('div');
    newMessage.setAttribute("class", "message");
    if (messageCount % 2 === 0) {
        newMessage.classList.add('left');
    }
    if (messageCount % 2 !== 0) {
        newMessage.classList.add('right');
    }
    newMessage.classList.add(messageCount);
    newMessage.innerText = newMessageContent;
    messages.appendChild(newMessage);
    messageCount = messageCount += 1;
}); 

// END ADD NEW MESSAGES FROM THE TEXT INPUT AND ALTERNATE SIDES

// STYLE THE MESSAGE TEXT BASED ON SELECTED THEME
const rightColor = document.querySelectorAll('.right');
const leftColor = document.querySelectorAll('.left');
var getThemeSelection = document.querySelector("#theme-drop-down").value;
const message = document.querySelectorAll(".message");


document.querySelector("#theme-drop-down").addEventListener("change", function() {
    getThemeSelection = document.querySelector("#theme-drop-down").value;    
    if (getThemeSelection == "theme-one") {
        messages.style.backgroundColor = "#ffffff";
        for (var i = 0; i < rightColor.length; i++) {
            rightColor[i].style.backgroundColor = "lightblue";
            rightColor[i].style.color = "black";
            leftColor[i].style.backgroundColor = "burlywood";
            leftColor[i].style.color = "black";

        }
        for (var i = 0; i < message.length; i++) {
            message[i].style.fontFamily = "sans-serif";
            message[i].style.borderRadius = "20px";
            message[i].style.maxWidth = "200px";
            message[i].style.boxSizing = "border-box";
            message[i].style.padding = "5px 10px";
            message[i].style.boxShadow = "2px 2px 8px #000000";

        }
    }
    if (getThemeSelection == "theme-two") {
        
        for (var i = 0; i < leftColor.length; i++) {
            rightColor[i].style.backgroundColor = "red";
            rightColor[i].style.color = "white";
            leftColor[i].style.backgroundColor = "black";
            leftColor[i].style.color = "white";
            }
        for (var i = 0; i < message.length; i++) {
            message[i].style.fontFamily = "sans-serif";
            message[i].style.borderRadius = "20px";
            message[i].style.maxWidth = "200px";
            message[i].style.boxSizing = "border-box";
            message[i].style.padding = "5px 10px";
            message[i].style.boxShadow = "2px 2px 8px #000000";

        }
    }
    if (getThemeSelection == "theme-three") {
        messages.style.backgroundColor = "#27293D";
        for (var i = 0; i < leftColor.length; i++) {
            rightColor[i].style.backgroundColor = "#00EFC4";
            rightColor[i].style.color = "white";
            leftColor[i].style.backgroundColor = "#009BEE";
            leftColor[i].style.color = "white";
            }
        }
        for (var i = 0; i < message.length; i++) {
            message[i].style.fontFamily = "sans-serif";
            message[i].style.borderRadius = "20px";
            message[i].style.maxWidth = "200px";
            message[i].style.boxSizing = "border-box";
            message[i].style.padding = "5px 10px";
            message[i].style.boxShadow = "2px 2px 8px #e5e5e5";

        }
    });
// END STYLE THE MESSAGE TEXT BASED ON SELECTED THEME


// ADD DARK MODE TO THEMES
const dropDown = document.querySelector('#theme-drop-down');
const newOption = document.createElement('option');
newOption.setAttribute("value", "theme-three");
newOption.innerText = "Dark Mode";
dropDown.appendChild(newOption);


messages.style.minHeight = "400px"
main.style.margin = "0 35vw"
main.style.borderRadius = "20px"

// const message = document.querySelector(".message");
// message.children.style.fontFamily = "sans-serif";
// 