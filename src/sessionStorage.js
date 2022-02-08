const TODOS = "todos";

export function removeTodoFromSStorage(todoItem) {
  let todos = getTodosFromSStorage();

  const todoText = Array.from(todoItem.childNodes).find((node) =>
    node.classList.contains("todo-text")
  );

  if (todoText) {
    const filtredTodos = todos.filter((item) => item !== todoText.innerText);
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
