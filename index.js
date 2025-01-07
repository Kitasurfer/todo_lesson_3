const userInput = document.getElementById('taskInput');
const taskContainer = document.getElementById('todo-list'); 
const taskButton = document.getElementById('addButton');
const clearTasksButton = document.getElementById('clearButton');

const addNewTask = () => { 
    const textTask = userInput.value.trim();

    if (textTask !== '') {
        const newTask = document.createElement('li');
        newTask.className = 'todo-item';
        
        // Создаем элемент для текста
        const taskText = document.createElement('span');
        taskText.textContent = textTask;
        
        // Создаем кнопку удаления
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = function() {
            removeTask(deleteButton);
        };

        // Добавляем элементы в задачу
        newTask.appendChild(taskText);
        newTask.appendChild(deleteButton);
        
        // Добавляем задачу в список
        taskContainer.appendChild(newTask);

        userInput.value = '';
    } else {
        alert('Please enter a task!')
    }
};

const clearAll = () => {
    taskContainer.innerHTML = '';
};

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

// Добавляем обработчик события для нажатия клавиши Enter
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addNewTask();
    }
});

taskButton.addEventListener('click', addNewTask); 
clearTasksButton.addEventListener('click', clearAll);