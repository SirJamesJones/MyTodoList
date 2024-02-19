var userInput = [];
var list = document.createElement("ul");
var inputElement = document.getElementById("input");
function makeUL(array) {
    list = document.createElement("ul");
    list.addEventListener("click", toggleClass);
    for (var i = 0; i < userInput.length; i++) {
        //create li item on document
        var item = document.createElement("li");
        console.log("item created");
        // for each iteration of listitems append the corrosponding value in the crated li element
        item.appendChild(document.createTextNode(userInput[i]));
        //add the li elements to ul element
        list.appendChild(item);
    }
    return list;
}
function clearDiv() {
    var div = document.getElementById("listdiv");
    console.log(div === null || div === void 0 ? void 0 : div.firstChild);
    //while listdiv has a child node (ul) inside remove them
    while (div === null || div === void 0 ? void 0 : div.firstChild) {
        div.removeChild(div.firstChild);
    }
}
function toggleClass(event) {
    var clickedItem = event.target;
    if (clickedItem.tagName === "LI") {
        clickedItem.classList.toggle("checked");
        console.log("clicked item:", clickedItem.textContent);
    }
}
function addButtonHandler() {
    var userInputValue = inputElement.value;
    //trim whitspaces and check if empty, then push into array
    if (userInputValue.trim() !== "") {
        userInput.push(userInputValue);
    }
    clearDiv();
    var listdiv = document.getElementById("listdiv");
    listdiv === null || listdiv === void 0 ? void 0 : listdiv.appendChild(makeUL(userInput));
    inputElement.value = "";
}
var addButton = document.getElementById("add");
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", function () {
    addButtonHandler();
});
inputElement === null || inputElement === void 0 ? void 0 : inputElement.addEventListener("keydown", function (ev) {
    if (ev.key === 'Enter') {
        ev.preventDefault();
        addButton === null || addButton === void 0 ? void 0 : addButton.click();
    }
});
var clearbutton = document.getElementById("clear");
clearbutton === null || clearbutton === void 0 ? void 0 : clearbutton.addEventListener("click", function () {
    clearDiv();
    userInput = [];
});
