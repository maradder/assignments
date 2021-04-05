
// COLOR PALETTE SEQUENCE:
//[bg1, bg2, bgButton, text, darktext]


// PASTEL PALETTE
const aeroBlue = "#D3F8E2";
const mauve = "#E4C1F9";
const amaranthPink = "#F694C1";
const mediumChampagne = "#EDE7B1";
const darkUranianBlue = "#4B7F99";
const pastelPalette = [amaranthPink, aeroBlue, mauve, mediumChampagne, darkUranianBlue];

// AUTUMN PALETTE
const teaGreen = "#BBD8B3";
const orangeYellow = "#F3B61F";
const citron = "#A29F15";
const rosewood = "#510D0A";
const blackChocolate = "#191102";
const autumnPalette = [teaGreen, orangeYellow, citron, rosewood, blackChocolate];

const basePalette = ["grey", "white", "yellow", "white", "black"];

var palettes = [basePalette, pastelPalette, autumnPalette];

var activeColorPalette = palettes[1];



const themeSelectionCoices = document.createElement('a');
themeSelectionCoices.classList.add("themeSelection");
themeSelectionCoices.style.width = ('50px');
themeSelectionCoices.style.height = ('50px');
themeSelectionCoices.style.display = ('flex');
themeSelectionCoices.style.backgroundColor = ('blue');
themeSelectionCoices.value = '1';
themeSelectionCoices.addEventListener('click', (e) => {
    var chosenColorPalette = e.target.value;
    console.log(activeColorPalette);
    console.log(e.target);
    console.log("here");
    for (var t = 0; t < palettes.length; t++) {
        console.log(chosenColorPalette)
        console.log(palettes);
        chosenColorPalette = palettes[chosenColorPalette]
        console.log(chosenColorPalette);
        return chosenColorPalette;
    };
    for (var i = 0; i < activeColorPalette.length; i++) {
        activeColorPalette[i] =  chosenColorPalette[i];
    };
    console.log(activeColorPalette);
    document.querySelector('body').style.background = "linear-gradient(33deg," + activeColorPalette[0] + "," + activeColorPalette[1] + ")";
    document.querySelector('.main').style.borderColor = activeColorPalette[4];
    document.getElementsByClassName('lineItem').style.borderColor = activeColorPalette[4];
    document.getElementsByClassName('lineItem').style.backgroundColor = activeColorPalette[2];
    document.querySelector('.main').style.borderColor = activeColorPalette[4];
    document.querySelector('body').style.color = activeColorPalette[4];
    document.querySelector('body').style.minWidth = "100vw";


});


document.querySelector('body').appendChild(themeSelectionCoices);
document.querySelector('body').style.background = "linear-gradient(33deg," + activeColorPalette[0] + "," + activeColorPalette[1] + ")";
document.querySelector('body').style.backgroundRepeat = "no-repeat";
document.querySelector('body').style.minHeight = "100vh";
document.querySelector('body').style.fontFamily = "'Segoe UI', sans-serif";
document.querySelector('body').style.color = activeColorPalette[4];
document.querySelector('body').style.fontSize = "24px";

function updateThemes() {
}


// Create the title bar in its own div
const documentTitleBar = document.createElement('div');
documentTitleBar.classList.add('title-bar');

const documentTitle = document.createElement('h1');
documentTitle.classList.add('title');
documentTitle.innerText = "Mom's Shopping List";

documentTitleBar.appendChild(documentTitle);
document.querySelector('body').appendChild(documentTitleBar);
// Create the title bar in its own div



// Create the main div
const mainDiv = document.createElement('div');
mainDiv.classList.add('main');
mainDiv.style.border = "1px solid" + activeColorPalette[4];
mainDiv.style.padding = "25px";


document.querySelector('body').appendChild(mainDiv);
// div class="main"



// Create the title bar in its own div under main
const mainTitleBar = document.createElement('div');
mainTitleBar.classList.add('title-bar');
mainTitleBar.setAttribute("id", "mainTitleBar")

const mainTitle = document.createElement('h3');
mainTitle.classList.add('title');
mainTitle.innerText = "Add Item";

mainTitleBar.appendChild(mainTitle);
document.querySelector(".main").appendChild(mainTitleBar);
// Create the title bar in its own div under main


// Create the form on its own under main
const addItemForm = document.createElement("form");
addItemForm.setAttribute("name", "addItem");
addItemForm.setAttribute("id", "add-todo");
addItemForm.style.border = "1px solid " + activeColorPalette[4];
mainDiv.appendChild(addItemForm);


const addItemInputLabel = document.createElement("label");
addItemInputLabel.classList.add("label");
addItemInputLabel.setAttribute("for", "title");
addItemInputLabel.innerText = "Item Name";

const addItemInput = document.createElement("input");
addItemInput.classList.add('input');
addItemInput.setAttribute("name", "title");
addItemInput.setAttribute("id", "title");
addItemInput.setAttribute("type", "text");
addItemInput.style.border = "1px solid " + activeColorPalette[4];
addItemInput.addEventListener("click", () => document.querySelector('#title').value = '');

const addItemButton = document.createElement('button');
addItemButton.setAttribute("id", "submitButton");
addItemButton.innerText = "Submit";
addItemButton.style.backgroundColor = activeColorPalette[2];


addItemForm.appendChild(addItemInputLabel);
addItemForm.appendChild(addItemInput);
addItemForm.appendChild(addItemButton);
// Create the form on its own under main

// Create a listener to trigger addElement
submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    addNewItemToList();
    resetInputField();
}); 
// Create a listener to trigger addElement

// Create the todos div
const todosDiv = document.createElement('div');
todosDiv.classList.add('todos');
document.querySelector('.main').appendChild(todosDiv);
// Create the todos div

const lineBreak = document.createElement('hr');
todosDiv.appendChild(lineBreak);


// Create the title bar in its own div under todos
const todosTitleBar = document.createElement('div');
todosTitleBar.classList.add('title-bar');
todosTitleBar.setAttribute("id", "todosTitleBar")

const todosTitle = document.createElement('h3');
todosTitle.classList.add('title');
todosTitle.innerText = "List of Items";

todosTitleBar.appendChild(todosTitle);
document.querySelector(".todos").appendChild(todosTitleBar);
// Create the title bar in its own div under todos

const lineBreak2 = document.createElement('hr');
todosDiv.appendChild(lineBreak2);

const list = document.createElement('ul');
list.setAttribute("id", "list");
todosDiv.appendChild(list);

const delBtn = document.createElement('button');

function addNewItemToList() {
    const lineItem = document.createElement('li');
    
    const addedItem = document.createElement('div');
    addedItem.classList.add('addedItem')
    addedItem.style.backgroundColor = activeColorPalette[2];
    addedItem.style.border = "1px solid " + activeColorPalette[4];
    lineItem.appendChild(addedItem);

    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.innerHTML = "<i class='fas fa-pencil-alt'></i>";
    editBtn.addEventListener('click', (e) => {
        e.preventDefault();
        editItem(e.target)
    });
    addedItem.appendChild(editBtn);

    const itemName = document.createElement('span');
    itemName.innerText = document.getElementById('title').value;
    itemName.classList.add('itemName');
    addedItem.appendChild(itemName);

    var delBtn = document.createElement('button');

    delBtn.classList.add('delBtn');
    delBtn.setAttribute("id", "delBtn");
    delBtn.innerHTML = "<i class='fas fa-times'></i>";
    delBtn.addEventListener("click", e => {  
        e.preventDefault();
        delItemFromList(e.target.parentNode);
    }); 
    addedItem.appendChild(delBtn);

    list.appendChild(lineItem);
}

function delItemFromList(e) {
    e.parentNode.remove()
}

function editItem(e) {
    var buttonContainer = e.parentNode; 
    var parentDiv = buttonContainer.parentNode;
    var delBtn = parentDiv.firstChild;
    var targetTextSpan = parentDiv.querySelector(".itemName");
    var targetText = parentDiv.querySelector(".itemName").innerText;
    var fieldVar = targetText;
    var editField = document.createElement('input');
    console.log(targetTextSpan);


    editField.classList.add('editField');
    editField.setAttribute("placeholder", fieldVar);
    parentDiv.removeChild(targetTextSpan);
    delBtn.after(editField);
    buttonContainer.innerHTML = "<i class='far fa-save'></i>";
    var saveButton = buttonContainer.firstChild;
    saveButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("poop");
        saveChanges(e.target);
    });
}


function saveChanges(e) {
    var buttonContainer = e.parentNode; 
    var parentDiv = buttonContainer.parentNode;
    var delBtn = parentDiv.firstChild;
    var inputField = parentDiv.querySelector(".editField");
    var itemName = document.createElement('span');
    console.log(inputField);

    itemName.innerText = inputField.value;
    itemName.classList.add('itemName');
    parentDiv.removeChild(inputField);
    delBtn.after(itemName);
    buttonContainer.innerHTML = "<i class='fas fa-pencil-alt'></i>";
    var editBtn = buttonContainer.firstChild;
    editBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("pee")
        editItem(e.target)
    });
}

const lineBreak3 = document.createElement('hr');
todosDiv.appendChild(lineBreak3);


