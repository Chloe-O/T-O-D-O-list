let todoList = document.getElementById("todoList");
// let listItems = document.querySelectorAll("li");
let checkboxToggle = document.querySelectorAll("li .checkbox");
const itemsNum = document.getElementById("itemsNum");
const clearCompleted = document.getElementById("clearCompleted");
const addItem = document.getElementById("addItemBtn");
const todoInput = document.getElementById("todoInput");

const toDoArray = [];
// const deletedItems = [];

//Count list items
function countListItems() {
  let listItemsNo = 0;
  itemsNum.innerHTML = toDoArray.length;
}

//Input new list item
addItem.addEventListener("click", () => {
  if (todoInput.value) {
    toDoArray.push(
      `<li class="li-it" ><div class="checkbox"></div>${todoInput.value} <span class="delete-item"> <img src="/images/icon-cross.svg" alt="X"> </span></li>`
    );
    todoInput.value = "";
    todoList.innerHTML += toDoArray[toDoArray.length - 1];
    countListItems();
  } else {
    //error message in DOM
  }
});

//Check off item
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("li-it")) {
    e.target.classList.toggle("li-complete");
    e.target.firstChild.classList.toggle("checkbox-checked");
  }
});

countListItems();
