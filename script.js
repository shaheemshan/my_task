// Array to store tasks
let tasks = ["Buy groceries", "Read a book", "Complete homework","goes to gym", "recharge dth"];

// Function to display tasks in the list
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear existing tasks

    // Loop through the array and create a list item for each task
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;

        // Add an event listener to remove the task when clicked
        li.onclick = function() {
            removeTask(index);
        };

        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const newTask = taskInput.value.trim(); // Get input value and remove whitespace

    if (newTask) { // Check if the input is not empty
        tasks.push(newTask); // Add new task to array
        taskInput.value = ""; // Clear input field
        displayTasks(); // Update task list in the DOM
    }
}

// Function to remove a task by index
function removeTask(index) {
    tasks.splice(index, 1); // Remove task from array
    displayTasks(); // Update task list in the DOM
}

// Initial display of tasks when the page loads
displayTasks();