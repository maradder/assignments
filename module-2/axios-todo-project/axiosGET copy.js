const axiosInputs = document.axiosInputs

let resultsDiv = document.querySelector('.results');
let displayed_ID = [];

class NewTodo { 
    constructor(completedStatus, titleTodo, descriptionTodo, priceTodo, imgUrlTodo) {
        this.completedStatus = completedStatus;
        this.titleTodo = titleTodo;
        this.descriptionTodo = descriptionTodo;
        this.priceTodo = priceTodo;
        this.imgUrlTodo = imgUrlTodo;
    }
}

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
    });
};

// CREATE THE TODO CARDS
const createTodo = (arr) => {
    let todoId = arr._id;
    if (displayed_ID.indexOf(todoId) > -1) {
        console.log("Aleady in the results view");
        return;
    }
    else {
        let completedTask
        if (arr.completed === true) {
            completedTask = "Incomplete";
        }
        else {
            completedTask = "Complete"
        }
        displayed_ID.push(arr._id);
        const completedStatusCheckBoxMask = document.createElement('div');
        const completedStatusCheckBox = document.createElement('input');
        const descriptionTodoDisplay = document.createElement('div');
        const completedStatusWrap = document.createElement('div');
        const imgUrlTodoDisplay = document.createElement('img');
        const priceTodoDisplay = document.createElement('div');
        const titleTodoDisplay = document.createElement('div');
        const todoContainer = document.createElement('div');
        const deleteButton = document.createElement('a');
        const editButton = document.createElement('a');
        
        todoContainer.setAttribute("tag", arr._id);
        completedStatusWrap.classList.add("completedStatusWrap");

        deleteButton.classList.add("udButtons");
        deleteButton.innerHTML = "<i class='fas fa-times'></i>";
        deleteButton.setAttribute("tag", arr._id);
        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            let todo2Delete = document.getElementById(todoId);
            axios.delete(`https://api.vschool.io/marcusradder/todo/${todoId}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
            todo2Delete.remove();
        });

        editButton.classList.add("udButtons");
        editButton.innerHTML = "<i class='fas fa-pen'></i>";
        editButton.setAttribute("tag", arr._id);
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

        completedStatusCheckBox.setAttribute("type", "checkbox");
        completedStatusCheckBoxMask.classList.add("checkBoxMask");
        completedStatusCheckBox.classList.add("checkBox");
        completedStatusCheckBoxMask.addEventListener('click', updateCompletedStatus());

        completedStatusCheckBoxMask.innerText = `${completedTask}`;
        if (completedTask === "Complete") {
            todoContainer.style.boxShadow = "2px 2px 4px #49c510";
            completedStatusCheckBoxMask.style.textDecoration = "line-through";
            completedStatusCheckBoxMask.style.backgroundColor = "#49c510";
            completedStatusCheckBoxMask.style.letterSpacing = ".1rem";
            completedStatusCheckBoxMask.style.fontWeight = "700";
            completedStatusCheckBoxMask.style.color = "#121212";
        }

        else {todoContainer.style.boxShadow = "2px 2px 4px #ff0f0f";
        completedStatusCheckBoxMask.style.backgroundColor = "#ff0f0f";
        completedStatusCheckBoxMask.style.letterSpacing = ".1rem";
        completedStatusCheckBoxMask.style.fontWeight = "700";
        completedStatusCheckBoxMask.style.color = "#121212";
        }

        descriptionTodoDisplay.innerText = `Description: ${arr.description}`;
        descriptionTodoDisplay.classList.add('descriptionDisplay'); // Class declaration
        titleTodoDisplay.innerText = `Todo Title: ${arr.title}`;
        titleTodoDisplay.classList.add('titleDisplay'); // Class declaration
        priceTodoDisplay.innerText = `Price: ${arr.price}`;
        priceTodoDisplay.classList.add('priceDisplay'); // Class declaration
        imgUrlTodoDisplay.style.boxShadow = "box-shadow: 2px 2px 4px #000000d7";
        imgUrlTodoDisplay.classList.add('imgUrlDisplay'); // Class declaration
        imgUrlTodoDisplay.style.borderRadius = "1.6rem";
        imgUrlTodoDisplay.style.width = "33rem";
        imgUrlTodoDisplay.src = `${arr.imgUrl}`;

        todoContainer.classList.add("todoContainer");
        todoContainer.setAttribute("id", todoId);

        completedStatusCheckBoxMask.appendChild(completedStatusCheckBox);
        completedStatusWrap.appendChild(editButton);
        completedStatusWrap.appendChild(completedStatusCheckBoxMask);
        completedStatusWrap.appendChild(deleteButton);
        todoContainer.appendChild(completedStatusWrap);
        todoContainer.appendChild(titleTodoDisplay);
        todoContainer.appendChild(descriptionTodoDisplay);
        todoContainer.appendChild(priceTodoDisplay);
        todoContainer.appendChild(imgUrlTodoDisplay);
        resultsDiv.appendChild(todoContainer);
    }
};

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
    .then(setTimeout(() => {getTodos();}, 100))
    .catch(error => console.log(error))
}) 

// UPDATE COMPLETED STATUS
let updateCompletedStatus = (todo2Complete, newCompletedStatus) => {
    if (completedStatusCheckBox.checked !== true) {
        console.log(completedStatusCheckBox.checked)
        updateCompletedStatus(todoId, true);
        console.log("completed")
        
        return
    } else {
        console.log(completedStatusCheckBox.checked)
        updateCompletedStatus(todoId, false);
        console.log("incomplete")
        return
    axios.put(`https://api.vschool.io/marcusradder/todo/${todo2Complete}`, {
        completed: newCompletedStatus
    })
    console.log(newCompletedStatus)
    }
}

// GET TODO BUTTON
// let getButton = document.getElementById('getTodos');
// getButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     getTodos();
// });

getTodos()