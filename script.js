const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function editTask(taskElement) {
	const newTask = prompt('Edit task', taskElement.innerText.replace('Edit', '').replace('Delete', ''));
	if (newTask !== null) {
		taskElement.innerText = newTask.trim();
		createEditButton(taskElement);
		createDeleteButton(taskElement);
	}
}

function createEditButton(taskElement) {
	const editBtn = document.createElement('button');
	editBtn.innerText = 'Edit';
	editBtn.onclick = function() {
		editTask(taskElement);
	};
	taskElement.appendChild(editBtn);
}

function createDeleteButton(taskElement) {
	const deleteBtn = document.createElement('button');
	deleteBtn.innerText = 'Delete';
	deleteBtn.onclick = function() {
		taskElement.remove();
	};
	taskElement.appendChild(deleteBtn);
}

function addTask() {
	const taskInputValue = taskInput.value.trim();

	if (taskInputValue !== '') {
		console.log("taskInputValue: ", taskInputValue);
		const task = document.createElement('li');

		task.innerText = taskInputValue;

		createEditButton(task);
		createDeleteButton(task);

		taskList.appendChild(task);

		taskInput.value = '';
	}
}

if (addTaskBtn) {
	// addTaskBtn.addEventListener('click', addTask);
	addTaskBtn.onclick = addTask;
}

