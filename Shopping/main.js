'use strict';
const items = document.querySelector(".items");
const form = document.querySelector(".new-form");
const input = document.querySelector(".input-field");
const addBtn = document.querySelector(".add-btn");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
});

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block:"center" });

  input.value ='';
  input.focus();
}


let id = 0; // UUID
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item-row");
  itemRow.setAttribute("data-id", id);

  itemRow.innerHTML = `
    <div class="item">
      <input type="checkbox" class="check-box"></input>
      <span class="item-name">${text}</span>
      <button class="delete-btn">
        <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
    <div class="devider"></div>`;
    id++;

  return itemRow;
}

items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if(id && event.target.tagName === "I") {
    const toBeDeleted = document.querySelector(`.item-row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
}) 