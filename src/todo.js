var userInput = [];
var inputElement = document.getElementById("input");
var list = document.createElement("ul");
function makeUL(array) {
    list.setAttribute("id", "ulist");
    list.addEventListener("click", toggleClass);
    for (var i = 0; i < userInput.length; i++) {
        //create li item on document
        var item = document.createElement("li");
        console.log("item created");
        //for each iteration of listitems append the corrosponding value in the crated li element
        item.appendChild(document.createTextNode(userInput[i]));
        //add the li elements to ul element
        list.appendChild(item);
    }
    return list;
}
function deleteList() {
    var ulist = document.getElementById("ulist");
    userInput = [];
    //while ul contains li elements, delete li element
    while (ulist === null || ulist === void 0 ? void 0 : ulist.firstChild) {
        ulist.removeChild(ulist.firstChild);
    }
}
function toggleClass(ev) {
    var clickedItem = ev.target;
    if (clickedItem.tagName === "LI") {
        clickedItem.classList.toggle("checked");
        console.log("clicked item:", clickedItem.textContent);
    }
}
var addButton = document.getElementById("add");
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", function () {
    var userInputValue = inputElement.value;
    if (userInputValue.trim() !== "") {
        userInput.push(userInputValue);
        var listdiv = document.getElementById("listdiv");
        var ulist = document.getElementById("ulist");
        if (listdiv === null || listdiv === void 0 ? void 0 : listdiv.contains(ulist)) {
            var listElement = document.createElement("li");
            //convert string to node element, so its assignable
            listElement.textContent = inputElement.value;
            list.appendChild(listElement);
            inputElement.value = "";
        }
        else {
            listdiv === null || listdiv === void 0 ? void 0 : listdiv.appendChild(makeUL(userInput));
            inputElement.value = "";
        }
    }
});
var delButton = document.getElementById("clear");
delButton === null || delButton === void 0 ? void 0 : delButton.addEventListener("click", function () {
    deleteList();
});
inputElement === null || inputElement === void 0 ? void 0 : inputElement.addEventListener("keydown", function (ev) {
    if (ev.key === 'Enter') {
        ev.preventDefault();
        addButton === null || addButton === void 0 ? void 0 : addButton.click();
    }
});
addEventListener("keydown", function (ev) {
    if (ev.key === "Delete") {
        deleteList();
    }
});
