const description = document.querySelector("#description");
const btnAdd = document.querySelector("#btn-add");
const btnDelete = document.querySelector("#btn-delete");
const todosList = document.querySelector("#todos-list");

const url = "http://localhost:5500/todos";

const todos = await getTodosData();

renderTodos();

btnAdd.addEventListener("click", addTodo);
btnDelete.addEventListener("click", deleteDoneTodos);
todosList.addEventListener("change", updateTodo);

async function getTodosData() {
  const response = await fetch(url);
  const todosData = await response.json();

  return todosData;
}

todos = todosData;

async function addTodo(e) {
  e.preventDefault();

  if (description.value.length === 0) {
    return;
  }

  const request = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: description.value,
      done: false,
    }),
  });

  const newTodo = await request.json();

  todos.push(newTodo);

  description.value = "";

  renderTodos();
}

function renderTodos() {
  todosList.innerText = "";

  todos.forEach(function (todo) {
    const todoWrapper = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.todoId = todo.id;
    checkbox.id = "todo-" + todo.id;
    checkbox.checked = todo.done;

    const todoDescription = document.createElement("label");
    todoDescription.htmlFor = checkbox.id;
    todoDescription.innerText = todo.description;

    todoWrapper.append(checkbox, todoDescription);
    todosList.append(todoWrapper);
  });
}

function updateTodo(e) {
  const id = e.target.todoId;
  const updatedTodo = todos.find(function (todo) {
    return todo.id === id;
  });

  updatedTodo.done = !updatedTodo.done;
  console.log(updatedTodo.done);

  fetch(url + "/" + id, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done: updatedTodo.done }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function deleteDoneTodos() {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].done) {
      todos.splice(i, 1);
    }
  }

  renderTodos();
}
