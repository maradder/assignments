/////////////////////////////////
///// Establish color themes/////
/////////////////////////////////


// COLOR PALETTE SEQUENCE:
//[bg1, bg2, bgButton, text, darktext]

class palette {
    constructor(bg1, bg2, btnBg, text, darkText) {
        this.bg1      =      bg1;
        this.bg2      =      bg2;
        this.btnBg    =    btnBg;
        this.text     =     text;
        this.darkText = darkText;
    }
}

// PASTEL PALETTE
const pastelPalette = new palette("#F694C1", // amaranthPink
                                  "#D3F8E2", // aeroBlue
                                  "#E4C1F9", // mauve
                                  "#EDE7B1", // mediumChampagne
                                  "#4B7F99"); // darkUranianBlue

console.log(pastelPalette.darkText);

// AUTUMN PALETTE
const autumnPalette = new palette("#BBD8B3", // teaGreen
                                  "#F3B61F", // orangeYellow
                                  "#A29F15", // citron
                                  "#510D0A", // rosewood
                                  "#191102"); // blackChocolate

console.log(autumnPalette.darkText);

// BASE PALETTE
const basePalette = new palette("grey", // grey
                                "white", // white
                                "yellow", // yellow
                                "white", // white
                                "black"); // black

console.log(basePalette.darkText);


var palettes = [basePalette, pastelPalette, autumnPalette];
var activeColorPalette = palettes[2];

/////////////////////////////////
//////// End color themes////////
/////////////////////////////////


// CREATE THE THEME SELECTION BOXES

const themeSelectionChoice0 = document.createElement('a');
themeSelectionChoice0.classList.add("themeSelection");
themeSelectionChoice0.value = '0';
themeSelectionChoice0.setAttribute("id", "basePalette");
themeSelectionChoice0.style.width = '50px';
themeSelectionChoice0.style.height = '50px';
themeSelectionChoice0.style.display = 'flex';
themeSelectionChoice0.style.backgroundColor = basePalette.btnBg;
themeSelectionChoice0.style.border = '1px solid' + activeColorPalette.darkText;
themeSelectionChoice0.addEventListener('click', (e) => {
    activeColorPalette = palettes[e.target.value];
    console.log("poop", activeColorPalette);
    updateThemes()
    });


const themeSelectionChoice1 = document.createElement('a');
themeSelectionChoice1.classList.add("themeSelection");
themeSelectionChoice1.value = '1';
themeSelectionChoice1.setAttribute("id", "pastelPalette");
themeSelectionChoice1.style.width = '50px';
themeSelectionChoice1.style.height = '50px';
themeSelectionChoice1.style.display = 'flex';
themeSelectionChoice1.style.backgroundColor = pastelPalette.btnBg;
themeSelectionChoice1.style.border = '1px solid' + activeColorPalette.darkText;
themeSelectionChoice1.addEventListener('click', (e) => {
    activeColorPalette = palettes[e.target.value];
    console.log("poop", activeColorPalette);
    updateThemes()
    });

const themeSelectionChoice2 = document.createElement('a');
themeSelectionChoice2.classList.add("themeSelection");
themeSelectionChoice2.value = '2';
themeSelectionChoice2.setAttribute("id", "autumnPalette");
themeSelectionChoice2.style.width = '50px';
themeSelectionChoice2.style.height = '50px';
themeSelectionChoice2.style.display = 'flex';
themeSelectionChoice2.style.backgroundColor = autumnPalette.btnBg;
themeSelectionChoice2.style.border = '1px solid' + activeColorPalette.darkText;
themeSelectionChoice2.addEventListener('click', (e) => {
    activeColorPalette = palettes[e.target.value];
    console.log("poop", activeColorPalette);
    updateThemes()
    });

document.querySelector('body').appendChild(themeSelectionChoice0);
document.querySelector('body').appendChild(themeSelectionChoice1);
document.querySelector('body').appendChild(themeSelectionChoice2);


function updateThemes() {
    document.querySelector('body').style.minWidth = "100vw";
    document.querySelector('body').style.background = "linear-gradient(33deg," + activeColorPalette.bg1 + "," + activeColorPalette.bg2 + ")";
    document.querySelector('.main').style.borderColor = activeColorPalette.darkText;
    document.querySelector('.main').style.borderColor = activeColorPalette.darkText;
    document.querySelector('body').style.color = activeColorPalette.darkText;
    document.getElementsByClassName('lineItem').style.borderColor = activeColorPalette.darkText;
    document.getElementsByClassName('lineItem').style.backgroundColor = activeColorPalette.btnBg;
    document.getElementById('submitButton').style.background = activeColorPalette.btnBg;
    document.querySelector('.submitButton').style.backgroundColor = activeColorPalette.btnBg;
}

// END CREATE THE THEME SELECTION BOXES


// MAIN STYLING
document.querySelector('body').style.background = "linear-gradient(33deg," + activeColorPalette.bg1 + "," + activeColorPalette.bg2 + ")";
document.querySelector('body').style.backgroundRepeat = "no-repeat";
document.querySelector('body').style.minHeight = "100vh";
document.querySelector('body').style.fontFamily = "'Segoe UI', sans-serif";
document.querySelector('body').style.color = activeColorPalette.darkText;
document.querySelector('body').style.fontSize = "24px";

// MAIN STYLING



// CREATE THE PAGE TITLE BAR IN ITS OWN DIV
const documentTitleBar = document.createElement('div');
documentTitleBar.classList.add('title-bar');

const documentTitle = document.createElement('h1');
documentTitle.classList.add('title');
documentTitle.innerText = "Mom's Shopping List";

documentTitleBar.appendChild(documentTitle);
document.querySelector('body').appendChild(documentTitleBar);
// END OF CREATE THE PAGE TITLE BAR IN ITS OWN DIV



// CREATE THE MAIN DIV
const mainDiv = document.createElement('div');
mainDiv.classList.add('main');
mainDiv.style.border = "1px solid" + activeColorPalette.darkText;
mainDiv.style.padding = "25px";
document.querySelector('body').appendChild(mainDiv);


// CREATE THE APP TITLE BAR UNDER MAIN
const mainTitleBar = document.createElement('div');
mainTitleBar.classList.add('title-bar');
mainTitleBar.setAttribute("id", "mainTitleBar")


const mainTitle = document.createElement('h3');
mainTitle.classList.add('title');
mainTitle.innerText = "Add Item";

mainTitleBar.appendChild(mainTitle);
document.querySelector(".main").appendChild(mainTitleBar);
// END OF CREATE THE APP TITLE BAR UNDER MAIN


// CREATE THE FORM UNDER MAIN
const addItemForm = document.createElement("form");
addItemForm.setAttribute("name", "addItem");
addItemForm.setAttribute("id", "add-todo");
addItemForm.style.border = "1px solid " + activeColorPalette.darkText;
addItemForm.style.padding = "25px";
mainDiv.appendChild(addItemForm);


const addItemInputLabel = document.createElement("label");
addItemInputLabel.classList.add("label");
addItemInputLabel.setAttribute("for", "itemInput");
addItemInputLabel.innerText = "Item Name";

const addItemInput = document.createElement("input");
addItemInput.classList.add('input');
addItemInput.setAttribute("name", "itemInput");
addItemInput.setAttribute("id", "itemInput");
addItemInput.setAttribute("type", "text");
addItemInput.style.border = "1px solid " + activeColorPalette.darkText;
addItemInput.addEventListener("click", () => document.querySelector('#itemInput').value = '');

const addItemButton = document.createElement('button');
addItemButton.setAttribute("id", "submitButton");
addItemButton.classList.add("submitButton");
addItemButton.innerText = "Submit";
addItemButton.style.marginBottom = "10px";
addItemButton.style.backgroundColor = activeColorPalette.btnBg;


addItemForm.appendChild(addItemInputLabel);
addItemForm.appendChild(addItemInput);
addItemForm.appendChild(addItemButton);
// END OF CREATE THE FORM UNDER MAIN

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
todosDiv.style.border = "1px solid" + activeColorPalette.darkText;
document.querySelector('.main').appendChild(todosDiv);
// Create the todos div


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

const list = document.createElement('ul');
list.setAttribute("id", "list");
todosDiv.appendChild(list);

// const delBtn = document.createElement('button');

function addNewItemToList() {
    const lineItem = document.createElement('li');
    
    const addedItem = document.createElement('div');
    addedItem.classList.add('addedItem')
    addedItem.style.backgroundColor = activeColorPalette.btnBg;
    addedItem.style.border = "1px solid " + activeColorPalette.darkText;
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
    itemName.innerText = document.getElementById('itemInput').value;
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

// CREATE THE FUNCTION FOR DELETING LIST ITEMS
function delItemFromList(e) {
    e.parentNode.remove()
}
// END OF CREATE THE FUNCTION FOR DELETING LIST ITEMS



// CREATE THE FUNCTION FOR EDITING LIST ITEMS
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
// END OF CREATE THE FUNCTION FOR EDITING LIST ITEMS


// CREATE THE FUNCTION FOR SAVING CHANGES
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
// END OF CREATE THE FUNCTION FOR SAVING CHANGES

