let userInput: string[] = [];
let list = document.createElement("ul");
let inputElement = document.getElementById("input") as HTMLInputElement;

function makeUL(array: string[]) {
    list = document.createElement("ul");
    list.addEventListener("click", toggleClass);

    for (var i = 0; i < userInput.length; i++) {
        //create li item on document
        var item = document.createElement("li");
        console.log("item created")
        // for each iteration of listitems append the corrosponding value in the crated li element
        item.appendChild(document.createTextNode(userInput[i]));
        //add the li elements to ul element
        list.appendChild(item);
    }
    return list;
}

function clearDiv() {
    var div = document.getElementById("listdiv");
    console.log(div?.firstChild);
    //while listdiv has a child node (ul) inside remove them
    while(div?.firstChild) {
        div.removeChild(div.firstChild)
    }
}

function toggleClass(event: Event) {
    const clickedItem = event.target as HTMLElement;
    if (clickedItem.tagName === "LI"){
        clickedItem.classList.toggle("checked");
        console.log("clicked item:", clickedItem.textContent)
    } 
}

function addButtonHandler(){
    const userInputValue = inputElement.value;
    //trim whitspaces and check if empty, then push into array
    if (userInputValue.trim() !== "") {
        userInput.push(userInputValue);
    }
    clearDiv();
    var listdiv = document.getElementById("listdiv");
    listdiv?.appendChild(makeUL(userInput));
    inputElement.value="";
}

let addButton = document.getElementById("add");
addButton?.addEventListener("click", () => {
    addButtonHandler();
})

inputElement?.addEventListener("keydown", (ev) => {
    if (ev.key === 'Enter'){
        ev.preventDefault();
        addButton?.click();
    }
})

const clearbutton = document.getElementById("clear");
clearbutton?.addEventListener("click", ()=> {
    clearDiv();
    userInput = [];
})