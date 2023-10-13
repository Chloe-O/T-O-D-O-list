let todoList = document.getElementById("todoList");
// let listItems = document.querySelectorAll("li");
let checkboxToggle = document.querySelectorAll("li .checkbox");
const itemsNum = document.getElementById("itemsNum");
const clearCompleted = document.getElementById("clearCompleted");
const addItem = document.getElementById("addItemBtn");
const todoInput = document.getElementById("todoInput");
const filterByActive = document.getElementById("selectActive");
const filterByCompleted = document.getElementById("selectCompleted");
const filterAll = document.getElementById("selectAll");

let currentListItem = document.getElementsByClassName("li-complete");

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

//Check off items
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("checkbox")) {
    e.target.parentElement.classList.toggle("li-complete");
    e.target.classList.toggle("checkbox-checked");
  }
});

//Clear Completed items
function clearCompletedFunc() {
  for (let i = 0; i < currentListItem.length; i++) {
    currentListItem[i].remove();
  }
}

//Filter by active items
function showActive() {
  for (let q = 0; q < currentListItem.length; q++) {
    if (currentListItem[q].classList.contains("li-complete")) {
      currentListItem[q].classList.add('hide-me');
    }
  }
}

function showCompleted() {
  console.log("clicked");
  for (let w = 0; w < currentListItem.length; w++) {
    if ( !currentListItem[w].classList.contains("li-complete") ) {
      currentListItem[w].classList.add('hide-me');
    }
  }
}

function showAll() {}

clearCompleted.addEventListener("click", clearCompletedFunc);
filterByActive.addEventListener("click", showActive);
filterByCompleted.addEventListener("click", showCompleted);

countListItems();
