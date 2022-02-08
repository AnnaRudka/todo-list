import "../styles/index.css";
import "../index.html";

import { getTodoItem } from "./addTodoItem";
import { saveTodoToSStorage, getTodosFromSStorage } from "./sessionStorage";
import { filterTodoItems } from "./filterTodoItems";
import {
  clearTodoInput,
  getTodoInputItems,
  validateTodoInput,
} from "./todoInput";

const todoInputWrapper = document.querySelector(".todo-input-wrapper");
const { todoInput, todoButton } = getTodoInputItems(todoInputWrapper);
const todoList = document.querySelector(".todo-list");
const todoSelect = document.querySelector(".todo-select");

document.addEventListener("DOMContentLoaded", onDOMLoaded);
todoInput.addEventListener("input", () => validateTodoInput(todoInputWrapper));
todoButton.addEventListener("click", addTodo);
todoSelect.addEventListener("change", filterTodos);

function onDOMLoaded() {
  renderTodosFromSStorage();
  validateTodoInput(todoInputWrapper);
}

function renderTodosFromSStorage() {
  let todos = getTodosFromSStorage();

  todos.forEach((todoValue) => {
    const todoItem = getTodoItem(todoValue);

    // Add todo item to list
    todoList.appendChild(todoItem);
  });
}

function addTodo(event) {
  event.preventDefault();

  saveTodoToSStorage(todoInput.value);

  const todoItem = getTodoItem(todoInput.value);
  todoList.appendChild(todoItem);

  clearTodoInput(todoInputWrapper);
}

function filterTodos(e) {
  const todoItems = todoList.childNodes;

  filterTodoItems(todoItems, e.target.value);
}

// TODO fix bugs:
// 1. select should be disabled when no option is displayed
// 2. forbid form submit with enter key, when input value is less than 3 characters
// 3. when todoInput is not in focus, helper text should not be displayed
// 4. save to session storage todo state: completed, not completed - and update it
