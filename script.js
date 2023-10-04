let listItems = document.querySelectorAll("li");
let checkboxToggle = document.querySelectorAll("li .checkbox");
const itemsNum = document.getElementById("itemsNum");
const clearCompleted = document.getElementById("clearCompleted");

const toDoArray = [];

//Input new list item

//Count list items
function countListItems() {
  let listItemsNo = 0;

  listItems.forEach((li) => {
    if (li.classList.contains("li-complete")) {
      listItemsNo++;
      itemsNum.innerHTML = listItemsNo;
    } else {
      itemsNum.innerHTML = 0;
    }
  });
}

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
