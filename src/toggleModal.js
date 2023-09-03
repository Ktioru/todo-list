const closeButtons = Array.from(document.querySelectorAll('.closeModal'));
const addTaskModal = document.querySelector('.addTaskModal');
const addTaskButton = document.querySelector('#addTask');
const showTaskModal = document.querySelector('.showTaskModal');

function closeModal(modal) {
  modal.setAttribute('open', false);
}

function openModal(modal) {
  modal.setAttribute('open', true);
}

closeButtons.forEach((element) => {
  if (element.classList.contains('bottomModal')) {
    element.addEventListener('click', () => closeModal(showTaskModal));
  } else {
    element.addEventListener('click', () => closeModal(addTaskModal));
  }
});

addTaskButton.addEventListener('click', () => openModal(addTaskModal));
