document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  function addNewTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task! 😊");
      return;
    }

    // --- Create the new to-do item ---

    // Add a new list item (<li>).
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText; // Set its text to what the user typed.

    // Add a "Remove" button for this task.
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Button to remove its parent task item when clicked.
    removeButton.addEventListener("click", () => {
      taskItem.remove();
    });

    // Add the "Remove" button to the end of the list item.
    taskItem.appendChild(removeButton);

    // Add our shiny new task item to the main list.
    taskList.appendChild(taskItem);

    // Clear the input box and put the cursor back in it for easy new entries.
    taskInput.value = "";
    taskInput.focus();
  }

  // When the "Add Task" button is clicked, run our function.
  addButton.addEventListener("click", addNewTask);

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addNewTask();
    }
  });
});
