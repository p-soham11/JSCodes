console.log("Hello from console")

// Selectors 
const todoInput = document.querySelector(".todo-input")
const todoList = document.querySelector(".todo-list")
const todoButton = document.querySelector(".todo-button")


// Event Listener
todoButton.addEventListener("click", addTodo);

// Functions

function addTodo(event){
    // Prevents from submitting and refreshing
    event.preventDefault();
    console.log("Button Pressed")
    // Task div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    taskDiv.appendChild(newTodo);
    // CheckMark Button
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class = "fas fa-check"></i>';
    completeBtn.classList.add("complete-btn");
    taskDiv.appendChild(completeBtn);
    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");
    taskDiv.appendChild(deleteBtn);
    // Append to List
    todoList.appendChild(taskDiv);
    // Clear Todo Input value
    todoInput.value="";
}