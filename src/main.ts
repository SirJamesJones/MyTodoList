import './stylesheet.css'

let userInput: string[] = [];
const inputElement = document.getElementById("input") as HTMLInputElement;
const list = document.createElement("ul") as HTMLUListElement;
const delButton = document.getElementById("clear") as HTMLButtonElement;
const addButton = document.getElementById("add");

addButton?.addEventListener("click", () => {
    const userInputValue = inputElement.value;
    if (userInputValue.trim() !== "") {
        userInput.push(userInputValue);
        const listdiv = document.getElementById("listdiv");
        const ulist = document.getElementById("ulist");
        if (listdiv?.contains(ulist) ){
            const listElement = document.createElement("li");
            //convert string to node element, so its assignable
            listElement.textContent = inputElement.value;
            list.appendChild(listElement);
            inputElement.value="";
        }
        else {
        listdiv?.appendChild(makeUL(userInput));
        inputElement.value="";
        }
    }
})

inputElement?.addEventListener("keydown", (ev) => {
    if (ev.key === 'Enter'){
        ev.preventDefault();
        addButton?.click();
    }
})

delButton?.addEventListener("click", ()=> {
    deleteList();
})

addEventListener("keydown", (ev: KeyboardEvent) => {
    if (ev.key === "Delete"){
        deleteList();
    }
})

function makeUL(array: string[]) {
    list.setAttribute("id", "ulist");
    list.addEventListener("click", toggleClass);
    
    for (let i = 0; i < userInput.length; i++) {
        //create li item on document
        const item = document.createElement("li");
        console.log("item created")
        //for each iteration of listitems append the corrosponding value in the crated li element
        item.appendChild(document.createTextNode(userInput[i]));
        //add the li elements to ul element
        list.appendChild(item);
    }
    return list;
}


function deleteList() {
    const ulist = document.getElementById("ulist");
    userInput = [];
    //while ul contains li elements, delete li element
    while(ulist?.firstChild) {
        ulist.removeChild(ulist.firstChild)
    }
}

//switch css class for striketrough of clicked li element
function toggleClass(ev: Event) {
    const clickedItem = ev.target as HTMLElement;
    if (clickedItem.tagName === "LI"){
        clickedItem.classList.toggle("linetrough");
    } 
}