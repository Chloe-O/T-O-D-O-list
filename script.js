let todoList = document.getElementById("todoList");
let listItems = document.getElementsByClassName("li-it");
let checkboxToggle = document.querySelectorAll("li .checkbox");

const addItem = document.getElementById("addItemBtn");
const todoInput = document.getElementById("todoInput");
const filterByActive = document.getElementById("selectActive");
const filterByCompleted = document.getElementById("selectCompleted");
const filterAll = document.getElementById("selectAll");
const modal = document.getElementById("modal-overlay");

//Input new list item

function addNewItem() {
  if (todoInput.value) {
    todoList.innerHTML += `<li class="li-it" ><div class="checkbox"></div>${todoInput.value.trim()} <span class="delete-item"> <img src="/images/icon-cross.svg" alt="X"> </span></li>`;
    todoInput.value = "";
    todoInput.focus();
  }
}

addItem.addEventListener("click", addNewItem);
todoInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    addNewItem();
  }
});

//Check off items
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("checkbox")) {
    e.target.parentElement.classList.toggle("complete");
    e.target.classList.toggle("checked");
  }
});

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
  for (let q = 0; q < listItems.length; q++) {
    if (listItems[q].classList.contains("li-complete")) {
      listItems[q].classList.add("hide-me");
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

function deleteItem() {
  // let itemToBeDeleted = document.getElementsByClassName("delete-item");

  let itemToBeDeleted = document.querySelectorAll("checked");
  console.log(itemToBeDeleted);
}

filterByActive.addEventListener("click", showActive);
filterByCompleted.addEventListener("click", showCompleted);
filterAll.addEventListener("click", showAll);
deleteItem();
