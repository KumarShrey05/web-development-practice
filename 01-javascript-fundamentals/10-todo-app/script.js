document.addEventListener("DOMContentLoaded", () => {

    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const emptyImage = document.querySelector(".empty-image");

    // --------------------------
    // Show/Hide Empty Image
    // --------------------------
    function toggleEmptyState() {

        if (taskList.children.length === 0) {
            emptyImage.style.display = "block";
        } else {
            emptyImage.style.display = "none";
        }

    }

    // --------------------------
    // Save Tasks
    // --------------------------
    function saveTasks() {

        const tasks = [];

        document.querySelectorAll("#task-list li").forEach((li) => {

            tasks.push({

                text: li.querySelector("span").innerText,

                completed: li.querySelector(".checkbox").checked

            });

        });

        localStorage.setItem("tasks", JSON.stringify(tasks));

    }

    // --------------------------
    // Create Task
    // --------------------------
    function createTask(taskText, completed = false) {

        const li = document.createElement("li");

        li.innerHTML = `
            <div class="task">
                <input type="checkbox" class="checkbox">
                <span>${taskText}</span>
            </div>

            <button class="delete-btn">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        const checkbox = li.querySelector(".checkbox");
        const span = li.querySelector("span");
        const deleteBtn = li.querySelector(".delete-btn");

        checkbox.checked = completed;

        if (completed) {
            span.classList.add("completed");
        }

        checkbox.addEventListener("change", () => {

            span.classList.toggle("completed");

            saveTasks();

        });

        deleteBtn.addEventListener("click", () => {

            li.remove();

            saveTasks();

            toggleEmptyState();

        });

        taskList.appendChild(li);

        toggleEmptyState();

        saveTasks();

    }

    // --------------------------
    // Add Task
    // --------------------------
    function addTask(event) {

        event.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText === "") {

            alert("Please enter a task.");

            return;

        }

        createTask(taskText);

        taskInput.value = "";

        taskInput.focus();

    }

    // --------------------------
    // Load Tasks
    // --------------------------
    function loadTasks() {

        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

        storedTasks.forEach(task => {

            createTask(task.text, task.completed);

        });

    }

    // --------------------------
    // Events
    // --------------------------

    addTaskBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (e) => {

        if (e.key === "Enter") {

            addTask(e);

        }

    });

    loadTasks();

    toggleEmptyState();

});