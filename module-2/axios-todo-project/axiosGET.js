const axiosInputs = document.axiosInputs;

let resultsDiv = document.querySelector(".results");
let userInputTitle = document.getElementById("title").value;
let userInputDescription = document.getElementById("description").value;
let userInputPrice = document.getElementById("price").value;
let userInputImgUrl = document.getElementById("imgUrl").value;
let displayed_ID = [];

// GET REQUEST FOR TODOS
let getTodos = () => {
  axios
    .get("https://api.vschool.io/marcusradder/todo")
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        let arr = response.data[i];
        let todoId = arr._id;
        if (displayed_ID.indexOf(todoId) > -1) {
          console.log(`ID: ${todoId} is aleady in the results view`);
        } else {
          createTodo(arr);
        }
      }
    })
    // .then(response => console.log(response.data))
    .catch((error) => console.log(error));
};

// CREATE THE TODO CARDS
const createTodo = arr => {
  let todoCompleted = arr.completed;
  let todoId = arr._id;
  let todoTitle = arr.title;
  let todoDescription = arr.description;
  let todoPrice = arr.price;
  let todoImgUrl = arr.imgUrl;
  let completedTask;

  if (todoCompleted === true) {
    completedTask = "Complete";
  } else {
    completedTask = "Incomplete";
  }
  displayed_ID.push(todoId);
  const todoContainer = document.createElement("div"); // Create the todo card
  const todoDetailsContainer = document.createElement("div");
  const completedStatusWrap = document.createElement("div"); // Wrapper for the edit, complete, and delete buttons
  const completedStatusCheckBoxMask = document.createElement("div"); // Stylable div that represents the complete checkbox
  const completedStatusCheckBox = document.createElement("input"); // The complete checkbox
  const editButton = document.createElement("a"); // Edit button
  const deleteButton = document.createElement("a"); // Delete button
  const titleTodoDisplay = document.createElement("div"); // Todo title
  const descriptionTodoDisplay = document.createElement("div"); // Todo description
  const priceTodoDisplay = document.createElement("div"); // Todo price
  const imgUrlTodoDisplay = document.createElement("img"); // Todo imgUrl

  todoContainer.setAttribute("tag", todoId);
  todoContainer.classList.add("todoContainer");
  todoContainer.setAttribute("id", todoId);

  todoDetailsContainer.classList.add("todoDetailsContainer");

  completedStatusWrap.classList.add("completedStatusWrap");
  completedStatusCheckBoxMask.classList.add("checkBoxMask");
  completedStatusCheckBoxMask.innerText = todoTitle;
  completedStatusCheckBox.setAttribute("type", "checkbox");
  completedStatusCheckBox.setAttribute("tag", todoId);
  completedStatusCheckBox.classList.add("checkBox");

  console.log(completedStatusCheckBox.checked);
  if (todoCompleted === true) {
    completedStatusCheckBox.setAttribute("checked", true);
    completedStatusCheckBoxMask.classList.add("completed");
    todoContainer.classList.add("completeCard");
    console.log(completedStatusCheckBoxMask.classList);
    console.log(completedStatusCheckBox.checked);
  } else {
    // completedStatusCheckBox.checked = false;
    completedStatusCheckBoxMask.classList.add("incomplete");
    todoContainer.classList.add("incompleteCard");
    console.log(completedStatusCheckBoxMask.classList);
    console.log(completedStatusCheckBox.checked);
  }

  completedStatusCheckBoxMask.addEventListener("click", () => {
    // Toggle completed state of the todo item
    console.log(`Before ${completedStatusCheckBox.checked}`);
    completedStatusCheckBox.toggleAttribute("checked");
    console.log(`After ${completedStatusCheckBox.checked}`);
    completedStatusCheckBoxMask.classList.toggle("completed");
    completedStatusCheckBoxMask.classList.toggle("incomplete");
    console.log(completedStatusCheckBoxMask.classList);

    todoContainer.classList.toggle("completeCard");
    todoContainer.classList.toggle("incompleteCard");
    console.log(`The current status is ${completedStatusCheckBox.checked}`);
    if (completedStatusCheckBox.checked === true) {
      // completedStatusCheckBoxMask.innerText = "Complete";
    } else {
      // completedStatusCheckBoxMask.innerText = "Incomplete";
    }
    axios
      .put(`https://api.vschool.io/marcusradder/todo/${todoId}`, {
        completed: completedStatusCheckBox.checked,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  });

  editButton.classList.add("udButtons");
  editButton.innerHTML = "<i class='fas fa-pen'></i>";
  editButton.setAttribute("tag", todoId);
  editButton.addEventListener("click", (e) => {
    e.preventDefault();
    let editContainer = document.createElement("form");
    let editTitle = document.createElement("input");
    let editDescription = document.createElement("input");
    let editPrice = document.createElement("input");
    let editImgUrl = document.createElement("input");
    let submitEditButton = document.createElement("button");

    let thisTarget = e.target;
    let placeHolderTitle = todoTitle; // thisTarget.querySelector('.titleDisplay');
    let placeHolderDescription = todoDescription; // thisTarget.querySelector('.descriptionDisplay');
    let placeHolderPrice = todoPrice; // thisTarget.querySelector('.priceDisplay');
    let placeHolderImgUrl = todoImgUrl; // thisTarget.querySelector('.imgUrlDisplay');

    editContainer.classList.add("editForm");
    editContainer.setAttribute("name", "editForm");
    editTitle.setAttribute("type", "text");
    editTitle.setAttribute("name", "title");
    editTitle.setAttribute("maxLength", "24");
    editTitle.classList.add("buttonRow");
    editTitle.setAttribute("placeholder", placeHolderTitle);
    editTitle.defaultValue = placeHolderTitle;
    editContainer.appendChild(editTitle);

    todoDetailsContainer.classList.toggle("whileEditing");

    editDescription.setAttribute("type", "text");
    editDescription.setAttribute("name", "description");
    editDescription.classList.add("buttonRow");
    editDescription.setAttribute("placeholder", placeHolderDescription);
    editDescription.defaultValue = placeHolderDescription;
    editContainer.appendChild(editDescription);

    editPrice.setAttribute("type", "number");
    editPrice.setAttribute("name", "price");
    editPrice.classList.add("buttonRow");
    editPrice.setAttribute("placeholder", placeHolderPrice);
    editPrice.defaultValue = placeHolderPrice;
    editContainer.appendChild(editPrice);

    editImgUrl.setAttribute("type", "url");
    editImgUrl.setAttribute("name", "imgUrl");
    editImgUrl.classList.add("buttonRow");
    editImgUrl.setAttribute("placeholder", placeHolderImgUrl);
    editImgUrl.defaultValue = placeHolderImgUrl;
    editContainer.appendChild(editImgUrl);

    submitEditButton.type = "submit";
    submitEditButton.innerText = "Submit Changes";
    editContainer.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(e.target.tag);
      console.log(todoId);
      console.log(`Before ${displayed_ID}`);
      displayed_ID = displayed_ID.filter((toDo) => toDo !== todoId);
      console.log(`After ${displayed_ID}`);

      let editForm = editContainer;
      const formContents = [
        editForm.title.value,
        editForm.description.value,
        editForm.price.value,
        editForm.imgUrl.value,
      ];
      const [setTitle, setDescription, setPrice, setimgUrl] = formContents;
      let editedTodoPut = {
        title: setTitle,
        description: setDescription,
        price: setPrice,
        imgUrl: setimgUrl,
      };

      console.log(`this is: ${editedTodoPut}`);

      axios
        .put(
          `https://api.vschool.io/marcusradder/todo/${todoId}`,
          editedTodoPut
        )
        .then((response) => console.log(response.data))
        .then(
          setTimeout(() => {
            getTodos();
          }, 300)
        )
        .catch((error) => console.log(error));
      editContainer.classList.add("whileEditing");

      todoDetailsContainer.classList.toggle("whileEditing");
      let todo2Delete = document.getElementById(todoId);
      todo2Delete.remove();
      setTimeout(() => {
        getTodos();
      }, 300);
    });
    editContainer.appendChild(submitEditButton);
    todoContainer.appendChild(editContainer);
  });

  deleteButton.classList.add("udButtons");
  deleteButton.innerHTML = "<i class='fas fa-times'></i>";
  deleteButton.setAttribute("tag", todoId);
  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    let todo2Delete = document.getElementById(todoId);
    axios
      .delete(`https://api.vschool.io/marcusradder/todo/${todoId}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    todo2Delete.remove();
  });

  titleTodoDisplay.innerText = `Todo Title: ${todoTitle}`;
  titleTodoDisplay.classList.add("titleDisplay"); // Class declaration

  descriptionTodoDisplay.innerText = `Description: ${todoDescription}`;
  descriptionTodoDisplay.classList.add("descriptionDisplay"); // Class declaration

  priceTodoDisplay.innerText = `Price: ${todoPrice}`;
  priceTodoDisplay.classList.add("priceDisplay"); // Class declaration

  imgUrlTodoDisplay.style.boxShadow = "box-shadow: 2px 2px 4px #000000d7";
  imgUrlTodoDisplay.classList.add("imgUrlDisplay"); // Class declaration
  imgUrlTodoDisplay.style.borderRadius = "1.6rem";
  imgUrlTodoDisplay.style.width = "33rem";
  imgUrlTodoDisplay.src = todoImgUrl;

  completedStatusCheckBoxMask.appendChild(completedStatusCheckBox); // 1
  completedStatusWrap.appendChild(editButton); // 2
  completedStatusWrap.appendChild(completedStatusCheckBoxMask); // 3
  completedStatusWrap.appendChild(deleteButton); // 4
  todoDetailsContainer.appendChild(titleTodoDisplay); // 6
  todoDetailsContainer.appendChild(descriptionTodoDisplay); // 7
  todoDetailsContainer.appendChild(priceTodoDisplay); // 8
  todoDetailsContainer.appendChild(imgUrlTodoDisplay); // 9
  todoContainer.appendChild(completedStatusWrap); // 5
  todoContainer.appendChild(todoDetailsContainer);
  resultsDiv.appendChild(todoContainer); // 10
}

// POST TODO BUTTON
axiosInputs.addEventListener("submit", (e) => {
  e.preventDefault();
  const formContents = [
    document.getElementById("title").value,
    document.getElementById("description").value,
    document.getElementById("price").value,
    document.getElementById("imgUrl").value,
  ];
  const [setTitle, setDescription, setPrice, setimgUrl] = formContents;
  let newTodoPost = {
    title: setTitle,
    description: setDescription,
    price: setPrice,
    imgUrl: setimgUrl,
  };
  axios
    .post("https://api.vschool.io/marcusradder/todo", newTodoPost)
    .then((response) => console.log(response.data))
    .then(
      setTimeout(() => {
        getTodos();
      }, 300)
    )
    .catch((error) => console.log(error));
});

getTodos();
