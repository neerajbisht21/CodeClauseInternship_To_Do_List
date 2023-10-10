const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);

        taskInput.value = "";

        li.querySelector(".delete").addEventListener("click", () => {
            taskList.removeChild(li);
        });
    }
});
