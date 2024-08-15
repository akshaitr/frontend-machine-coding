document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmit = document.querySelector(".todo-submit");
  const todoList = document.querySelector(".todo-list");

  let editMode = false;
  let editItem = null;

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText === "") {
      alert("Please enter a valid todo item!");
    } else {
      if (editMode) {
        editItem.firstChild.textContent = todoText;
        todoSubmit.innerText = "Add Todo";
        editMode = false;
        editItem = null;
      } else {
        addTodoItem(todoText);
      }
      todoInput.value = "";
    }
  });

  todoList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
      if (target.innerText === "REMOVE") {
        todoItem.remove();
      } else if (target.innerText === "EDIT") {
        editMode = true;
        editItem = todoItem;
        todoSubmit.innerText = "Edit Todo";
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
      }
    }
  });

  function addTodoItem(todoText) {
    if (editMode) {
      listItemBeingEdited.textContent = todoText;
      todoSubmit.innerText = "Add Todo";
      listItemBeingEdited = null;
      editMode = false;
    } else {
      const todoItem = document.createElement("li");
      const editButton = document.createElement("button");
      const removeButton = document.createElement("button");

      todoItem.innerHTML = `<span>${todoText}</span>`;
      editButton.innerText = "EDIT";
      removeButton.innerText = "REMOVE";

      todoItem.appendChild(editButton);
      todoItem.appendChild(removeButton);
      todoList.appendChild(todoItem);
    }
  }
});
