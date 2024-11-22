// array to store tasks

let tasks = ["a","b","c","d","e"];

function displayTasks(){
 const taskList = document.getElementById("taskList");
 taskList.innerHTML = "";

 //loop through the array and create list item
 tasks.forEach((task,index) => {
    let li = document.createElement("li");
    li.textContent = task;

    li.onclick = function(){
        removeTask(index);
     };
     taskList.appendChild(li);
    });


}

function addTask(){
    const taskInput = document.getElementById("taskInput");
    const newTask = taskInput.value.trim();

    if (newTask) { // Check if the input is not empty
        tasks.push(newTask); // Add new task to array
        taskInput.value = ""; // Clear input field
        displayTasks(); // Update task list in the DOM
    }
}

function removeTask(index){
    tasks.splice(index, 1);
    displayTasks();
}

displayTasks();