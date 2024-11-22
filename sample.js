tasks = ["apple","orange","3","4","5","banana","ansar"];

function addTask(){
  let taskInput = document.getElementById("taskInput");
  let newTask = taskInput.value.trim();

  if(newTask){
    tasks.push(newTask);
    taskInput.value = "";
  }
  displayTasks()
}

function removeTask(index){
    tasks.splice(index, 1);
    displayTasks()
}


function displayTasks(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{
      let li =  document.createElement("li");
      li.textContent = task;

      li.onclick = function(){
        removeTask(index);
      }
      taskList.appendChild(li);
    })
}
displayTasks()

