const inputTodo = document.getElementById("input-todo");
const todoList = document.getElementById("todo-list");

function addListItem(event) {
  if(event.keyCode === 13) {
    event.preventDefault();

    let todoText = inputTodo.value;
    let todoElement = document.createElement("li");
    todoElement.setAttribute("id","todo-"+todoList.childNodes.length);
    todoElement.innerHTML = inputTodo.value;
    todoList.appendChild(todoElement);
    inputTodo.value = "";
  }
}

inputTodo.addEventListener("keydown", addListItem);
