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



// ADD DARK MODE TO THEMES
const dropDown = document.querySelector('#theme-drop-down');
const newOption = document.createElement('option');
newOption.setAttribute("value", "theme-three");
newOption.innerText = "Dark Mode";
dropDown.appendChild(newOption);
// END ADD DARK MODE TO THEMES



// ADD FUNCTIONALITY TO THE CLEAR BUTTON
var main =  document.querySelector("#main");
main.style.margin = "0 35vw"
main.style.borderRadius = "20px"
const messages = document.querySelector(".messages");
const clearBtn = document.getElementById('clear-button');

clearBtn.addEventListener('click', function() {
    var firstMessage = messages.firstElementChild;
    while (firstMessage) {
        firstMessage.remove();
        firstMessage = messages.firstElementChild;
    }
});

// END ADD FUNCTIONALITY TO THE CLEAR BUTTON




// STYLE THE MESSAGES CONTAINER
messages.style.minHeight = "400px";
messages.style.maxHeight = "400px";
messages.style.overflowY = "scroll";
// END STYLE THE MESSAGES CONTAINER



// STYLE POSTED MESSAGES WHEN CHANGING FROM ONE THEME TO ANOTHER
const message = document.querySelectorAll(".message");
const rightMessage = document.querySelectorAll('.right');
const leftMessage = document.querySelectorAll('.left');
var getThemeSelection = document.querySelector("#theme-drop-down").value;

function styleMessages() {
    for (var i = 0; i < message.length; i++){
        message[i].style.borderRadius = "15px";
        message[i].style.maxWidth = "150px"
        message[i].style.boxShadow = "2px 2px 8px #000000";
        message[i].style.padding = "5px 10px";
        message[i].style.margin = "25px 0";
        message[i].style.fontFamily = "sans-serif";
        message[i].style.boxSizing = "border-box";
    }
}
// END STYLE POSTED MESSAGES WHEN CHANGING FROM ONE THEME TO ANOTHER



// ADD NEW MESSAGES FROM THE TEXT INPUT AND ALTERNATE SIDES
var messageCount = 0;
const addNewMessage = document.querySelector('form > button');

addNewMessage.setAttribute("onClick", "return false");

addNewMessage.addEventListener("click", function() {
    const newMessageContent = document.getElementById("input").value;
    var newMessage = document.createElement('div');
    newMessage.classList.add("message");
    getThemeSelection = document.querySelector("#theme-drop-down").value;    
    if (getThemeSelection == "theme-one") {
        messages.style.backgroundColor = "#ffffff";
        if (messageCount % 2 !== 0) {
            newMessage.classList.add('right');
            newMessage.style.backgroundColor = "lightblue";
            newMessage.style.color = "black";
        }
        if (messageCount % 2 === 0) {
            newMessage.classList.add('left')            
            newMessage.style.backgroundColor = "burlywood";
            newMessage.style.color = "black";
        }
    }

    if (getThemeSelection == "theme-two") {
        messages.style.backgroundColor = "#ffffff";
        if (messageCount % 2 !== 0) {
            newMessage.classList.add('right');
            newMessage.style.backgroundColor = "red";
            newMessage.style.color = "white";
        }
        if (messageCount % 2 === 0) {
            newMessage.classList.add('left')            
            newMessage.style.backgroundColor = "black";
            newMessage.style.color = "white";
        }

    }
    if (getThemeSelection == "theme-three") {
        messages.style.backgroundColor = "#27293D";
        if (messageCount % 2 !== 0) {
            newMessage.classList.add('right');            
            newMessage.style.backgroundColor = "#00EFC4";
            newMessage.style.color = "white";
        }
        if (messageCount % 2 === 0) {
            newMessage.classList.add('left');
            newMessage.style.backgroundColor = "#009BEE";
            newMessage.style.color = "white";
        }
    }
    newMessage.classList.add(messageCount);
    newMessage.innerText = newMessageContent;
    newMessage.style.borderRadius = "15px";
    newMessage.style.maxWidth = "150px"
    newMessage.style.boxShadow = "2px 2px 8px #000000";
    newMessage.style.padding = "5px 10px";
    newMessage.style.margin = "25px 0";
    newMessage.style.fontFamily = "sans-serif";
    newMessage.style.boxSizing = "border-box";
    messages.appendChild(newMessage);
    messageCount = messageCount += 1;
}); 
// END ADD NEW MESSAGES FROM THE TEXT INPUT AND ALTERNATE SIDES



// STYLE THE MESSAGE TEXT BASED ON SELECTED THEME
const updateMessageStyles = function updateMessageStyles(){
    styleMessages();
    getThemeSelection = document.querySelector("#theme-drop-down").value;    
    if (getThemeSelection == "theme-one") {
        messages.style.backgroundColor = "#ffffff";
        for (var i = 0; i < rightMessage.length; i++) {
            rightMessage[i].style.backgroundColor = "lightblue";
            rightMessage[i].style.color = "black";
        }
        for (var i = 0; i < leftMessage.length; i++) {
            leftMessage[i].style.backgroundColor = "burlywood";
            leftMessage[i].style.color = "black";
        }
    }

    if (getThemeSelection == "theme-two") {
        for (var i = 0; i < rightMessage.length; i++) {
            rightMessage[i].style.backgroundColor = "red";
            rightMessage[i].style.color = "white";
        }
        for (var i = 0; i < leftMessage.length; i++) {
            leftMessage[i].style.backgroundColor = "black";
            leftMessage[i].style.color = "white";
        }

    }
    if (getThemeSelection == "theme-three") {
        messages.style.backgroundColor = "#27293D";
        for (var i = 0; i < rightMessage.length; i++) {
            rightMessage[i].style.backgroundColor = "#00EFC4";
            rightMessage[i].style.color = "white";
        }
        for (var i = 0; i < leftMessage.length; i++) {
            leftMessage[i].style.backgroundColor = "#009BEE";
            leftMessage[i].style.color = "white";
        }
    }
};
// END STYLE THE MESSAGE TEXT BASED ON SELECTED THEME


// COMBINE updateMessageStyles() AND styleMessages()
function updateAllMessages() {
    updateMessageStyles();
    styleMessages();
}



// CALL updateMessageStyles() ON PAGE LOAD
updateMessageStyles();



// LISTEN FOR THEME CHANGE AND UPDATE STYLES
document.querySelector("#theme-drop-down").addEventListener("change", updateAllMessages());