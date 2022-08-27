
const items = document.querySelector(".items");
const input = document.querySelector(".input-field");
const addBtn = document.querySelector(".add-btn");

function onAdd() {
    // 1. 사용자가 input에 입력한 텍스트 받아옴
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  // 2. 새로운 아이템 만들고
  const item = createItem(text);
  // 3. 추가
  items.appendChild(item);

  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block:"center"});

  // 5. input 초기화
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

// 텍스트를 입력하고 엔터키를 쳐도 입력되게 함
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        onAdd();
    }
})
