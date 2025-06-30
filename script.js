document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }

  // Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
  function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task! 😊");
      return;
    }

    // --- Create the new to-do item ---

    // Add a new list item (<li>).
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Add a "Remove" button for this task.
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add = "remove-btn";

    removeButton.onclick = function () {
      taskItem.removeChild(taskList);
    };

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    // Button to remove its parent task item when clicked.

    // Clear the input box and put the cursor back in it for easy new entries.
    taskInput.value = "";
    taskInput.focus();
  }

  // When the "Add Task" button is clicked, run our function.
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
