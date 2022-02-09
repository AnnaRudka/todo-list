const TODOS = "todos";

export function removeTodoFromSStorage(todoItem) {
  let todos = getTodosFromSStorage();

  const todoText = Array.from(todoItem.childNodes).find((node) =>
    node.classList.contains("todo-text")
  );

  if (todoText) {
    const filtredTodos = todos.filter((item) => item.value !== todoText.innerText);
    console.log(filtredTodos);
    sessionStorage.setItem(TODOS, JSON.stringify(filtredTodos));
  }
}

export function saveTodoToSStorage(todo) {
  let todos = getTodosFromSStorage();

  todos.push(todo);

  sessionStorage.setItem(TODOS, JSON.stringify(todos));
}

export function getTodosFromSStorage() {
  const storageTodos = sessionStorage.getItem(TODOS);
  return storageTodos ? JSON.parse(storageTodos) : [];
}

export function updateStatusInSStorage(todoItem) {
  let todos = getTodosFromSStorage();
  console.log(todos);

  const todoText = Array.from(todoItem.childNodes).find((node) =>
    node.classList.contains("todo-text")
  );

  if (todoText) {
    const newStatusTodos = todos.map((item) => {
      item.isCompleted = (item.value == todoText.innerText) ? !item.isCompleted : item.isCompleted;
      return item;
    });
    sessionStorage.setItem(TODOS, JSON.stringify(newStatusTodos));
  }
}