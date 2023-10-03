let listItems = document.querySelectorAll("li");
let checkboxToggle = document.querySelectorAll("li .checkbox");
let itemsNum = document.getElementById("itemsNum");

let listItemsNo = 0;

listItems.forEach((li) => {
  listItemsNo++;
  itemsNum.innerHTML = listItemsNo;
});

checkboxToggle.forEach((ct) => {
  ct.addEventListener("click", () => {
    ct.classList.toggle("checkbox-checked");
  });
});
