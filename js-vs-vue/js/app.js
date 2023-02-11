const todoText = document.querySelector("#todoText");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.textContent = todoText.value;
  todoList.append(listItem);
});
