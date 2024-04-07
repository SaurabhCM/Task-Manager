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
	editBtn.onclick = function () {
		editTask(taskElement);
	};

	editBtn.style.border = '2px solid black';
	editBtn.style.backgroundColor = 'green';
	editBtn.style.padding = '1px 10px';
	editBtn.style.marginLeft = '10px';
	editBtn.style.marginRight = '20px';
	editBtn.style.borderRadius = '5px';

	taskElement.appendChild(editBtn);
}


function createDeleteButton(taskElement) {
	const deleteBtn = document.createElement('button');
	deleteBtn.innerText = 'Delete';
	deleteBtn.onclick = function () {
		taskElement.remove();
	};

	deleteBtn.style.border = '2px solid black';
	deleteBtn.style.backgroundColor = 'red';
	deleteBtn.style.padding = '1px 10px';
	deleteBtn.style.marginRight = '20px';
	deleteBtn.style.borderRadius = '5px';


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

		task.style.cursor = 'pointer';
		task.addEventListener('mouseover', function () {
			task.style.backgroundColor = 'gray';
		});
		task.addEventListener('mouseout', function () {
			task.style.backgroundColor = '';
		});
		task.style.padding = "7px"

		taskInput.value = '';
	}
}

if (addTaskBtn) {
	addTaskBtn.onclick = addTask;
}

