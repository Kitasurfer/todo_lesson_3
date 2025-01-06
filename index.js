const userInput = document.getElementById('taskInput');
const taskContainer = document.getElementById('taskList');
const taskButton = document.getElementById('addButton');
const clearTasksButton = document.getElementById('clearButton');

const addNewTast = () => {

    const textTask = userInput.value.trim();

    if (textTask !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = textTask;

        taskContainer.appendChild(newTask);

        userInput.value = '';
    } else {
        alert('Please enter a task!')
    }
};

const clearAll = () => {
    taskContainer.innerHTML = '';
};

taskButton.addEventListener('click', addNewTast);
clearTasksButton.addEventListener('click', clearAll);