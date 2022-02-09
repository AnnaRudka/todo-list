import { getTodosFromSStorage, removeTodoFromSStorage, updateStatusInSStorage } from "./sessionStorage";

export const getTodoItem = ({value, isCompleted}) => {
  // Create Todo Item
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");
  if (isCompleted) {
    todoItem.classList.toggle("todo-item_completed");
  }

  // Create and add Todo Text
  const todoText = document.createElement("span");
  todoText.innerText = value;
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
  removeButton.addEventListener("click", handleRemoveButtonClick(todoItem));
  todoItem.appendChild(removeButton);

  return todoItem;
};

function handleRemoveButtonClick(todoItem) {
  return (e) => {
    e.preventDefault();
    todoItem.classList.add("todo-item_fall");
    todoItem.addEventListener("transitionend", function () {
      removeTodoFromSStorage(todoItem);
      todoItem.remove();
      let todos = getTodosFromSStorage();
      const todoSelect = document.querySelector(".todo-select");
      todoSelect.disabled = !todos.length ? true : false;
    });
  };
}

function toggleCheckButton(todoItem) {
  return (e) => {
    e.preventDefault();
    todoItem.classList.toggle("todo-item_completed");
    updateStatusInSStorage(todoItem);
  };
}