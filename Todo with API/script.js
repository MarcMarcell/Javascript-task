const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const filterAll = document.getElementById("filter-all");
const filterOpen = document.getElementById("filter-open");
const filterDone = document.getElementById("filter-done");
const removeDoneButton = document.getElementById("remove-done-button");
let todos = [];

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    if (!isDuplicate(todoText)) {
      const newTodo = {
        id: Date.now(),
        description: todoText,
        done: false,
      };
      todos.push(newTodo);
      saveTodos();
      displayTodos();
      todoInput.value = "";
    } else {
      alert("Todo already exists!");
    }
  }
});

todoList.addEventListener("change", function (e) {
  const todoId = parseInt(e.target.parentElement.getAttribute("data-id"));
  const todo = todos.find((todo) => todo.id === todoId);
  todo.done = e.target.checked;
  saveTodos();
});

removeDoneButton.addEventListener("click", function () {
  todos = todos.filter((todo) => !todo.done);
  saveTodos();
  displayTodos();
});

filterAll.addEventListener("change", displayTodos);
filterOpen.addEventListener("change", displayTodos);
filterDone.addEventListener("change", displayTodos);

function displayTodos() {
  const filter = document.querySelector('input[name="filter"]:checked').id;
  const filteredTodos =
    filter === "filter-all"
      ? todos
      : filter === "filter-open"
      ? todos.filter((todo) => !todo.done)
      : todos.filter((todo) => todo.done);
  todoList.innerHTML = "";
  filteredTodos.forEach(function (todo) {
    const todoItem = document.createElement("div");
    todoItem.setAttribute("data-id", todo.id);
    todoItem.innerHTML = `
      <input type="checkbox" ${todo.done ? "checked" : ""} />
      <span>${todo.description}</span>
    `;
    todoList.appendChild(todoItem);
  });
}
function isDuplicate(todoText) {
  return todos.some(
    (todo) => todo.description.toLowerCase() === todoText.toLowerCase()
  );
}

fetch("http://localhost:4730/todos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

fetch("http://localhost:4730/todos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    description: "Neuer Todo-Eintrag",
    done: false,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

fetch("http://localhost:4730/todos/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    description: "Updated Todo",
    done: true,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

fetch("http://localhost:4730/todos/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
