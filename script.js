let todoList = document.getElementById("todoList");
let listItems = document.querySelectorAll("li");
let checkboxToggle = document.querySelectorAll("li .checkbox");
const itemsNum = document.getElementById("itemsNum");
const clearCompleted = document.getElementById("clearCompleted");
const addItem = document.getElementById("addItemBtn");
const todoInput = document.getElementById("todoInput");

const toDoArray = [];
const toDoArrayHTML = [];

//Count list items
function countListItems() {
  let listItemsNo = 0;

  listItems.forEach((li) => {
    if (!li.classList.contains("li-complete")) {
      listItemsNo++;
      itemsNum.innerHTML = listItemsNo;
    } else {
      itemsNum.innerHTML = listItemsNo;
    }
  });
}

//Input new list item
addItem.addEventListener("click", () => {
  if (todoInput.value) {
    toDoArray.push(todoInput.value);
    // createHTMLitem();
    todoInput.value = "";
    countListItems();
  }
});

//Create HTML item
function createHTMLitem() {
  toDoArray.forEach((ai) => {
    ai = `<li><div class="checkbox"></div>${ai}</li>`;
    toDoArrayHTML.push(ai);

  });
}

// //Push HTML items into DOM
// function displayHTMLitem() {

// }

//Toggle completed on click
checkboxToggle.forEach((ct) => {
  ct.addEventListener("click", () => {
    ct.classList.toggle("checkbox-checked");
    ct.parentNode.classList.toggle("li-complete");
    countListItems();
  });
});

//Clear completed items
clearCompleted.addEventListener("click", () => {
  listItems.forEach((i) => {
    if (i.classList.contains("li-complete")) {
      console.log(i);
    }
  });
});

countListItems();
