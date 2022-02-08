import { removeTodoFromSStorage } from "./sessionStorage";

export const getTodoItem = (text) => {
  // Create Todo Item
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  // Create and add Todo Text
  const todoText = document.createElement("span");
  todoText.innerText = text;
  todoText.classList.add("todo-text");
  todoItem.appendChild(todoText);

  // Create and add Check button
  const checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fas fa-check"></i>';
  checkButton.classList.add("todo-check-button");
  checkButton.addEventListener("click", toggleCheckButton(todoItem));
  todoItem.appendChild(checkButton);

  // Create and add Remove button
  const removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="fas fa-trash"></i>';
  removeButton.classList.add("todo-remove-button");
  removeButton.addEventListener("click", removeTodoItem(todoItem));
  todoItem.appendChild(removeButton);

  return todoItem;
};

function removeTodoItem(todoItem) {
  return (e) => {
    e.preventDefault();
    todoItem.classList.add("todo-item_fall");
    todoItem.addEventListener("transitionend", function () {
      removeTodoFromSStorage(todoItem);
      todoItem.remove();
    });
  };
}

function toggleCheckButton(todoItem) {
  return (e) => {
    e.preventDefault();
    todoItem.classList.toggle("todo-item_completed");
  };
}
