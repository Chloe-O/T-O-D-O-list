let todoList = document.getElementById("todoList");
let listItems = document.getElementsByClassName("li-it");
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

//Count list items
function countListItems() {
  // let listItemsNo = 0;
  for (let x = 0; x < listItems.length; x++) {
    if (!listItems[x].classList.contains("li-complete")) {
      itemsNum.innerHTML = x + 1;
    }
  }
}

//Input new list item
addItem.addEventListener("click", () => {
  if (todoInput.value) {
    toDoArray.push(
      `<li class="li-it" ><div class="checkbox"></div>${todoInput.value} <span class="delete-item"> <img src="/images/icon-cross.svg" alt="X"> </span></li>`
    );
    todoInput.value = "";
    todoList.innerHTML += toDoArray[toDoArray.length - 1];
  } else {
    //error message in DOM
  }
  countListItems();
});

//Check off items
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("checkbox")) {
    e.target.parentElement.classList.toggle("li-complete");
    e.target.classList.toggle("checkbox-checked");
  }
  countListItems();
});

//Clear Completed items
function clearCompletedFunc() {
  for (let i = 0; i < currentListItem.length; i++) {
    currentListItem[i].remove();
  }
  countListItems();
}

//Show all items
function showAll() {
  for (let r = 0; r < listItems.length; r++) {
    if (listItems[r].classList.contains("hide-me")) {
      listItems[r].classList.remove("hide-me");
    }
  }
}

//Filter by active items
function showActive() {
  showAll();
  for (let q = 0; q < currentListItem.length; q++) {
    if (currentListItem[q].classList.contains("li-complete")) {
      currentListItem[q].classList.add("hide-me");
    }
  }
}

//Filter by completed items
function showCompleted() {
  showAll();
  for (let w = 0; w < listItems.length; w++) {
    if (!listItems[w].classList.contains("li-complete")) {
      listItems[w].classList.add("hide-me");
    }
  }
}

clearCompleted.addEventListener("click", clearCompletedFunc);
filterByActive.addEventListener("click", showActive);
filterByCompleted.addEventListener("click", showCompleted);
filterAll.addEventListener("click", showAll);

countListItems();
