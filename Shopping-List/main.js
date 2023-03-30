const items = document.querySelector(".items");
const input = document.querySelector(".input-field");
const addBtn = document.querySelector(".add-btn");

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({block:"center"});
    
  input.value ='';
  input.focus();
}

addBtn.addEventListener("click", () => {
  onAdd();
});

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item-row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const checkBox = document.createElement("input");
  checkBox.setAttribute("class", "check-box");
  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener('click', (e)=> {
    name.classList.toggle('checked');
  })

  const name = document.createElement("span");
  name.setAttribute("class", "item-name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete-btn");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  })

  const devider = document.createElement("div");
  devider.setAttribute("class", "devider");

  item.appendChild(checkBox);
  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(item);
  itemRow.appendChild(devider);

  return itemRow;
}

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        onAdd();
    }
})
