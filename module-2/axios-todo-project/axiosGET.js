const axiosInputs = document.axiosInputs

let resultsDiv = document.querySelector('.results');
let displayed_ID = [];


//////////////////////////////////////////////////////////////////////////////
let userInputTitle = document.getElementById("title").value;
let userInputDescription = document.getElementById("description").value;
let userInputPrice = document.getElementById("price").value;
let userInputImgUrl = document.getElementById("imgUrl").value;

// GET REQUEST FOR TODOS
let getTodos = () => {
    axios.get('https://api.vschool.io/marcusradder/todo').then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            let arr = response.data[i];
            let todoId = arr._id;
            if (displayed_ID.indexOf(todoId) > -1) {
                console.log(`ID: ${todoId} is aleady in the results view`);
            }
            else {
            createTodo(arr);
            }    
        };

    })
    // .then(response => console.log(response.data))
    .catch(error => console.log(error))      
};

// CREATE THE TODO CARDS
function createTodo(arr) {
    let todoCompleted = arr.completed;
    let todoId = arr._id; 
    let todoTitle = arr.title;
    let todoDescription = arr.description;
    let todoPrice = arr.price;
    let todoImgUrl = arr.imgUrl;
    let completedTask;

    if (todoCompleted === true) {
        completedTask ="Complete";
    }
    else {
        completedTask = "Incomplete"
    }
    displayed_ID.push(todoId);
    const todoContainer = document.createElement('div');                    // Create the todo card
    const completedStatusWrap = document.createElement('div');              // Wrapper for the edit, complete, and delete buttons
    const completedStatusCheckBoxMask = document.createElement('div');      // Stylable div that represents the complete checkbox
    const completedStatusCheckBox = document.createElement('input');        // The complete checkbox
    const editButton = document.createElement('a');                         // Edit button
    const deleteButton = document.createElement('a');                       // Delete button
    const titleTodoDisplay = document.createElement('div');                 // Todo title
    const descriptionTodoDisplay = document.createElement('div');           // Todo description
    const priceTodoDisplay = document.createElement('div');                 // Todo price
    const imgUrlTodoDisplay = document.createElement('img');                // Todo imgUrl
    todoContainer.setAttribute("tag", todoId);
    todoContainer.classList.add("todoContainer");
    todoContainer.setAttribute("id", todoId);
    completedStatusWrap.classList.add("completedStatusWrap");
    completedStatusCheckBoxMask.classList.add("checkBoxMask");
    completedStatusCheckBoxMask.innerText = todoTitle;

    console.log(completedStatusCheckBox.checked)
    if (todoCompleted === true) {
        completedStatusCheckBox.setAttribute("checked", true);
        completedStatusCheckBoxMask.classList.add("completed");
        todoContainer.classList.add("completeCard");
        console.log(completedStatusCheckBoxMask.classList)
        console.log(completedStatusCheckBox.checked)

    }
    else {
        // completedStatusCheckBox.checked = false;
        completedStatusCheckBoxMask.classList.add("incomplete");
        todoContainer.classList.add("incompleteCard");
        console.log(completedStatusCheckBoxMask.classList)
            console.log(completedStatusCheckBox.checked)


    }

    completedStatusCheckBoxMask.addEventListener('click', () => {
        console.log(`Before ${completedStatusCheckBox.checked}`)
        completedStatusCheckBox.toggleAttribute("checked");
        console.log(`After ${completedStatusCheckBox.checked}`)
        completedStatusCheckBoxMask.classList.toggle("completed");
        completedStatusCheckBoxMask.classList.toggle("incomplete");
        console.log(completedStatusCheckBoxMask.classList)

        todoContainer.classList.toggle("completeCard");
        todoContainer.classList.toggle("incompleteCard");
        console.log(`The current status is ${completedStatusCheckBox.checked}`);
        if (completedStatusCheckBox.checked === true) {
            // completedStatusCheckBoxMask.innerText = "Complete";
        }
        else {
            // completedStatusCheckBoxMask.innerText = "Incomplete";
        }
        axios.put(`https://api.vschool.io/marcusradder/todo/${todoId}`, {
            completed: completedStatusCheckBox.checked
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error))      
    })

    if (todoCompleted === true) {
        completedTask ="Incomplete";
    }
    else {
        completedTask = "Complete"
    }
    completedStatusCheckBox.setAttribute("type", "checkbox");
    completedStatusCheckBox.setAttribute("tag", todoId);
    completedStatusCheckBox.classList.add("checkBox");

    editButton.classList.add("udButtons");
    editButton.innerHTML = "<i class='fas fa-pen'></i>";
    editButton.setAttribute("tag", todoId);

    editButton.addEventListener('click', (e) => {
        e.preventDefault();
        let editTitle = document.createElement('input');
        let editDescription = document.createElement('input');
        let editPrice = document.createElement('input');
        let editImgUrl = document.createElement('input');
        let thisTarget = e.target;
        let placeHolderTitle = thisTarget.querySelector('.titleDisplay');
        let placeHolderDescription = thisTarget.querySelector('.descriptionDisplay');
        let placeHolderPrice = thisTarget.querySelector('.priceDisplay');
        let placeHolderImgUrl = thisTarget.querySelector('.imgUrlDisplay');
        let oldDescription = thisTarget.querySelector(".descriptionDisplay");
        let oldTitle = thisTarget.querySelector(".titleDisplay");
        let oldPrice = thisTarget.querySelector(".priceDisplay");
        let oldImgUrl = thisTarget.querySelector(".imgUrlDisplay");

        editTitle.setAttribute("type", "text");
        editTitle.setAttribute("name", "title");
        editTitle.classList.add("buttonRow");
        editTitle.setAttribute("placeholder", placeHolderTitle);
        editTitle.defaultValue = placeHolderTitle;
        todoContainer.replaceChild(editTitle, oldTitle);

        editDescription.setAttribute("type", "text");
        editDescription.setAttribute("name", "description");
        editDescription.classList.add("buttonRow");
        editDescription.setAttribute("placeholder", placeHolderDescription);
        editDescription.defaultValue = placeHolderDescription;
        todoContainer.replaceChild(editDescription, oldDescription);

        editPrice.setAttribute("type", "number");
        editPrice.setAttribute("name", "price");
        editPrice.classList.add("buttonRow");
        editPrice.setAttribute("placeholder", placeHolderPrice);
        editPrice.defaultValue = placeHolderPrice;
        todoContainer.replaceChild(editPrice, oldPrice);

        editImgUrl.setAttribute("type", "url");
        editImgUrl.setAttribute("name", "imgUrl");
        editImgUrl.classList.add("buttonRow");
        editImgUrl.setAttribute("placeholder", placeHolderImgUrl);
        editImgUrl.defaultValue = placeHolderImgUrl;
        todoContainer.replaceChild(editImgUrl, oldImgUrl);

        axios.put(`https://api.vschool.io/marcusradder/todo/${todoId}`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))        
    });

    deleteButton.classList.add("udButtons");
    deleteButton.innerHTML = "<i class='fas fa-times'></i>";
    deleteButton.setAttribute("tag", todoId);
    deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        let todo2Delete = document.getElementById(todoId);
        axios.delete(`https://api.vschool.io/marcusradder/todo/${todoId}`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
        todo2Delete.remove();
        });

    titleTodoDisplay.innerText = `Todo Title: ${todoTitle}`;
    titleTodoDisplay.classList.add('titleDisplay'); // Class declaration

    descriptionTodoDisplay.innerText = `Description: ${todoDescription}`;
    descriptionTodoDisplay.classList.add('descriptionDisplay'); // Class declaration

    priceTodoDisplay.innerText = `Price: ${todoPrice}`;
    priceTodoDisplay.classList.add('priceDisplay'); // Class declaration

    imgUrlTodoDisplay.style.boxShadow = "box-shadow: 2px 2px 4px #000000d7";
    imgUrlTodoDisplay.classList.add('imgUrlDisplay'); // Class declaration
    imgUrlTodoDisplay.style.borderRadius = "1.6rem";
    imgUrlTodoDisplay.style.width = "33rem";
    imgUrlTodoDisplay.src = todoImgUrl;



    completedStatusCheckBoxMask.appendChild(completedStatusCheckBox);       // 1
    completedStatusWrap.appendChild(editButton);                            // 2
    completedStatusWrap.appendChild(completedStatusCheckBoxMask);           // 3
    completedStatusWrap.appendChild(deleteButton);                          // 4
    todoContainer.appendChild(completedStatusWrap);                         // 5
    todoContainer.appendChild(titleTodoDisplay);                            // 6
    todoContainer.appendChild(descriptionTodoDisplay);                      // 7
    todoContainer.appendChild(priceTodoDisplay);                            // 8
    todoContainer.appendChild(imgUrlTodoDisplay);                           // 9
    resultsDiv.appendChild(todoContainer);                                  // 10
};
// CREATE THE TODO CARDS


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////



// POST TODO BUTTON
axiosInputs.addEventListener('submit', (e) => {
    e.preventDefault();
    const formContents = [  document.getElementById("title").value,
                            document.getElementById("description").value,
                            document.getElementById("price").value,
                            document.getElementById("imgUrl").value];
    const [setTitle, setDescription, setPrice, setimgUrl] = formContents;
    let newTodoPost = {
        title: setTitle,
        description: setDescription,
        price: setPrice,
        imgUrl: setimgUrl
    }
    axios.post('https://api.vschool.io/marcusradder/todo', newTodoPost)
    .then(response => console.log(response.data))
    .then(setTimeout(() => {getTodos();}, 300))
    .catch(error => console.log(error))
}) 
getTodos()