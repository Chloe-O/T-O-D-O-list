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
const modal = document.getElementById("modal-overlay");

//Count list items
function countListItems() {
  for (let x = 0; x < listItems.length; x++) {
    if (!listItems[x].classList.contains("li-complete")) {
      itemsNum.innerHTML = x + 1;
    }
  }
}

//Input new list item
addItem.addEventListener("click", () => {
  if (todoInput.value) {
    todoList.innerHTML += `<li class="li-it" ><div class="checkbox"></div>${todoInput.value} <span class="delete-item"> <img src="/images/icon-cross.svg" alt="X"> </span></li>`;
    todoInput.value = "";
  } else {
  }
});

//Check off items
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("checkbox")) {
    e.target.parentElement.classList.toggle("li-complete");
    e.target.classList.toggle("checkbox-checked");
  }
  countListItems();
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

//Delete all completed items
function clearCompletedFunc() {
  // let completedLi = document.getElementsByClassName("li-it");

  for (let j = 0; j < listItems.length; j++) {
    if (listItems[j].classList.contains("li-complete")) {
      // console.log(listItems[j]);
      listItems[j].remove();
    }
  }
  countListItems();
}

function deleteItem() {
  let itemToBeDeleted = document.getElementsByClassName("delete-item");

  for (let m = 0; m < itemToBeDeleted.length; m++) {
    itemToBeDeleted[m].addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
    });
  }
  countListItems();
}

// function showModal() {
//   modal.classList.add("");
// }

filterByActive.addEventListener("click", showActive);
filterByCompleted.addEventListener("click", showCompleted);
filterAll.addEventListener("click", showAll);
clearCompleted.addEventListener("click", clearCompletedFunc);
countListItems();
deleteItem();
