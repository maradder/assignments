document.querySelector('body').style.background = "linear-gradient(33deg, #121212, #007a7c)";
document.querySelector('body').style.backgroundRepeat = "no-repeat";
document.querySelector('body').style.minHeight = "100vh";
document.querySelector('body').style.color = "#a2ded0";
document.querySelector('body').style.fontFamily = "'Segoe UI', sans-serif";
document.querySelector('body').style.fontSize = "24px";




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
mainDiv.style.border = "1px solid #a2ded0";
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
addItemInput.addEventListener("click", () => document.querySelector('#title').value = '');

const addItemButton = document.createElement('button');
addItemButton.setAttribute("id", "submitButton");
addItemButton.innerText = "Submit";


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
    lineItem.appendChild(addedItem);

    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.innerHTML = "<i class='fas fa-pencil-alt'></i>";
    editBtn.style.backgroundColor = "#121212";
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

const lineBreak3 = document.createElement('hr');
todosDiv.appendChild(lineBreak3);


