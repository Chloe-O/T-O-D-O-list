let todoList = document.getElementById("todoList");
let listItems = document.getElementsByClassName("li-it");
let checkboxToggle = document.querySelectorAll("li .checkbox");
let deleteBtns = document.querySelectorAll(".delete-item");

const itemsNum = document.getElementById("itemsNum");
const clearCompleted = document.getElementById("clearCompleted");
const addItem = document.getElementById("addItemBtn");
const todoInput = document.getElementById("todoInput");
const filterByActive = document.getElementById("selectActive");
const filterByCompleted = document.getElementById("selectCompleted");
const filterAll = document.getElementById("selectAll");
const modal = document.getElementById("modal-overlay");

//Count list items
// function countListItems() {
//   let li = document.getElementsByClassName("li-it");
//   for (let x = 0; x < li.length; x++) {
//     if (!li[x].classList.contains("li-complete")) {
//       itemsNum.innerHTML = x + 1;
//     }
//   }
// }

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

// deleteBtns
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", (m) => {
    m.target.parentElement.parentElement.remove();
  });
});

//Delete all completed items
function clearCompletedFunc() {
  let completedLi = document.getElementsByClassName("li-it");
  for (let i = 0; i < completedLi.length; i++) {
    if (completedLi[i].classList.contains("li-complete")) {
      completedLi[i].remove();
    }
  }
}

function showModal() {
  modal.classList.add("");
}

filterByActive.addEventListener("click", showActive);
filterByCompleted.addEventListener("click", showCompleted);
filterAll.addEventListener("click", showAll);
clearCompleted.addEventListener("click", clearCompletedFunc);

