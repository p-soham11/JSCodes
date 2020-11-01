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
}