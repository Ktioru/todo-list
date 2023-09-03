import './style.scss';

const taskBar = document.querySelector('.tasks');
const themeSwitcher = document.querySelector('input');

function changeTheme() {
  if (document.querySelector('html').dataset.theme === 'dark') {
    document.querySelector('html').dataset.theme = 'light';
  } else {
    document.querySelector('html').dataset.theme = 'dark';
  }
}

// Theme Switcher

themeSwitcher.addEventListener('click', () => changeTheme());
