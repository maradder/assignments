const addBtn = document.getElementById("add");

addBtn.addEventListener("click", function(){


    // create new divs within 'list'
    const subItem = document.createElement("div");

    //  
    var subItemValue = document.getElementById("input");
    subItem.innerText = subItemValue;
    document.getElementById("list").appendChild(subItem);
    const dropDown = createDropDown();
    subItem.appendChild(dropDown);
    subItem.setAttribute("class", "subItem");

});

function runIt() {
    createDropDown();
    createSubItem()
}


const main = document.querySelector(".main");
const colors = ["red", "blue", "green"];


function createDropDown(){
    const dropDown = document.createElement("select");
    main.appendChild(dropDown);

    for (var i = 0; i < colors.length; i++){
        const option = document.createElement("option"); 
        option.innerHTML = colors[i];
        option.value = colors[i];
        dropDown.appendChild(option);
    }
    console.dir(dropDown)

    return dropDown;
}

createDropDown();


