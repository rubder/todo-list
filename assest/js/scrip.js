let tasks = [
    { id: 1, description: "Hacer mercado", completed: false },
    { id: 2, description: "Estudiar para la prueba", ompleted: false },
    { id: 3, description: "Sacar a pasear a tobby", completed: false }
];

function updateTaskList() {
    const taskTableBody = document.querySelector('#taskTable tbody');
    taskTableBody.innerHTML = '';
    tasks.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.id}</td>
            <td class="${task.completed ? 'completed' : ''}">${task.description}</td>
            <td><input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})"></td>
            <td><button onclick="deleteTask(${task.id})">Eliminar</button></td>
        `;
        taskTableBody.appendChild(row);
    });
    updateTaskSummary();
}

function updateTaskSummary() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    document.getElementById('totalTasks').innerText = totalTasks;
    document.getElementById('completedTasks').innerText = completedTasks;
}

function addTask() {
    const taskDescription = document.getElementById('taskDescription').value;
    if (taskDescription) {
        const newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            description: taskDescription,
            completed: false
        };
        tasks.push(newTask);
        updateTaskList();
        document.getElementById('taskDescription').value = '';
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateTaskList();
}

function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        updateTaskList();
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateTaskList();
});
