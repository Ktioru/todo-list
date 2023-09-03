import './style.scss';

const addTaskModal = document.querySelector('.addTaskModal');
const showTaskModal = document.querySelector('.showTaskModal');

function closeModal(modal) {
  modal.setAttribute('open', false);
}

function openModal(modal) {
  modal.setAttribute('open', true);
}

function changeTheme() {
  if (document.querySelector('html').dataset.theme === 'dark') {
    document.querySelector('html').dataset.theme = 'light';
  } else {
    document.querySelector('html').dataset.theme = 'dark';
  }
}

// Theme Switcher
const themeSwitcher = document.querySelector('input');

themeSwitcher.addEventListener('click', () => changeTheme());

// Create tasks

// Toggle Modal

// Add Task

// Task Data

// Task Items

// showTask Modal
