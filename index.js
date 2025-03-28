document.addEventListener("DOMContentLoaded", () => {
 
    const taskForm = document.getElementById("create-task-form");
    const newTaskInput = document.getElementById("new-task-description");
    const unorderedTaskList = document.getElementById("tasks"); 
    const taskPriority = document.getElementById("priority");
    const taskDueDate = document.getElementById("due-date");
    
    //add an Event Listener to listen for user's actions
    taskForm.addEventListener("submit", (event) =>{
      event.preventDefault(); //prevents form from refreshing the page
      console.log("Submit event fired!");//debugger
    
      //save user input in this variable
      const userText = newTaskInput.value; //better to use a new variable for readability and efficience, since we only access the DOM once
       if(userText === "") return;          //the .value retrieves what the user has entered in the input field/textbox
      const userPriority = taskPriority.value;
      const userDueDate = taskDueDate.value;
    
      //create a new list item
      const newTaskListed = document.createElement("li");
      newTaskListed.innerText =`${userText.trim()} - Due: ${userDueDate.trim() || "No due date"}`; //this now saves whatever the user entered into the newly created list tag
      console.log("Task List Inner HTML:", unorderedTaskList.innerHTML);//debugger to see ul innerhtml
      //set color based on priority
      switch (userPriority) {
        case "high":
          newTaskListed.style.color = "red";
          break;
        case "medium":
          newTaskListed.style.color = "orange";
          break;
        case "low":
          newTaskListed.style.color = "green";
          break;
      }
    
     //append the new listed item to the unordered list
     unorderedTaskList.appendChild(newTaskListed);//connect the <li> in memory to the <ul> in the DOM
     console.log("UL element found:", unorderedTaskList);//debugger
     console.log("Task added:", newTaskListed.innerText);//debugger
    
    //create delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    
    //add an event listener to the delete button
    deleteButton.addEventListener("click", () =>{
    unorderedTaskList.removeChild(newTaskListed)}); //remove the task from the list
    
    //append the delete button to the new task listed
    newTaskListed.appendChild(deleteButton);
    
    //create edit button
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    
    //add an event listener to the edit button
    editButton.addEventListener("click", () =>{
      const newText = prompt("Edit your task:", userText);
        if (newText !== null && newText !== "") {
          newTaskListed.firstChild.textContent = `${newText} - Due: ${userDueDate || "No due date"}`;
        }
    });
    //append the edit button to the new task listed
    newTaskListed.appendChild(editButton);
      taskForm.reset();
    });
    })