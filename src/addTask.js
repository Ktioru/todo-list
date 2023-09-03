const title = document.querySelector('#Title');
const description = document.querySelector('#Description');
const dueDate = document.querySelector('#DueDate');
const priority = document.querySelector('#Priority');
const values = [title, description, dueDate, priority];

const taskBar = document.querySelector('.tasks');
const existingTasks = {};
let close = true;

const addTaskModal = document.querySelector('.addTaskModal');
const showTaskModal = document.querySelector('.showTaskModal');
const taskModalInfo = document.querySelector('.info');

const confirmButton = document.querySelector('#confirm');

function closeModal(modal) {
  modal.setAttribute('open', false);
}

function openModal(modal) {
  modal.setAttribute('open', true);
}

function showTaskInfo(info) {
  taskModalInfo.innerHTML = `<p>Title: ${info.title}</p> <p>Description: ${info.description}</p> <p>DueDate: ${info.dueDate}</p> <p>Priority: ${info.priority}</p>`;
  openModal(showTaskModal);
}

function Task(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

function formCheck() {
  close = true;
  values.forEach((element) => {
    if (element.value === '') {
      element.setAttribute('aria-invalid', true);
      close = false;
    } else {
      element.setAttribute('aria-invalid', false);
    }
  });
  if (close) {
    closeModal(addTaskModal);
  }
}

function cleanInputs() {
  values.forEach((element) => {
    element.value = '';
    element.setAttribute('aria-invalid', undefined);
  });
  close = true;
}
function deleteTask(deletedTask) {
  const objectValues = Object.values(existingTasks);
  objectValues.forEach((element) => {
    if (element.title == deletedTask) {
      console.log('AADENTROU MAIS DELICIA AIDNDA');
      delete existingTasks[deletedTask];
    }
  });
  const domTasks = document.querySelectorAll('button');
  Array.from(domTasks).forEach((element) => {
    if (element.getElementsByTagName('p')[0].innerText == deletedTask) {
      taskBar.removeChild(element);
    }
  });
}

function addTask() {
  formCheck();
  if (addTaskModal.getAttribute('open') === 'false') {
    existingTasks[title.value] = new Task(
      title.value,
      description.value,
      dueDate.value,
      priority.value,
    );
    const titleText = title.value;

    const newTask = document.createElement('button');
    newTask.addEventListener('click', () => showTaskInfo(existingTasks[titleText]));

    const taskTitle = document.createElement('p');
    newTask.classList.add('task');
    taskTitle.innerText = title.value;

    const deleteTaskButton = document.createElement('strong');
    deleteTaskButton.innerText = 'x';
    deleteTaskButton.addEventListener('click', () => deleteTask(titleText));

    newTask.appendChild(taskTitle);
    newTask.appendChild(deleteTaskButton);
    taskBar.appendChild(newTask);

    localStorage.setItem(titleText, newTask);
    cleanInputs();
  }
}

confirmButton.addEventListener('click', () => addTask());
