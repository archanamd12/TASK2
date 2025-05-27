const input = document.getElementById("taskInput");
const add = document.getElementById("addBtn");
const list = document.getElementById("taskList");

add.onclick = () => {
  if (input.value.trim() === "") return;

  const item = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const text = document.createElement("span");
  text.textContent = input.value;

  const remove = document.createElement("button");
  remove.textContent = "X";
  remove.className = "remove-btn";

  item.append(checkbox, text, remove);
  list.appendChild(item);
  input.value = "";

  checkbox.onchange = () => {
    item.classList.toggle("done", checkbox.checked);
  };

  remove.onclick = (e) => {
    e.stopPropagation();
    item.remove();
  };
};
