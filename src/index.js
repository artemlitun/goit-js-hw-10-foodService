import './styles.css';
import menu from './menu.json';
import liMenuTemplate from './template/li-menu.hbs';

const ulRef = document.querySelector('.js-menu');
const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('.js-switch-input');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const drawHtml = () => {
  const item = liMenuTemplate(menu);
  ulRef.insertAdjacentHTML('afterbegin', item);
};

drawHtml();

const delClassElem = () => {
  bodyRef.classList.remove(Theme.LIGHT, Theme.DARK);
};

const updateLocalStorage = str => {
  localStorage.setItem('theme', str);
};

const updateTheme = str => {
  bodyRef.classList.add(str);
};

switchRef.addEventListener('change', () => {
  delClassElem();
  if (switchRef.checked) {
    updateLocalStorage('darkTheme');
    updateTheme(Theme.DARK);
  } else {
    updateLocalStorage('lightTheme');
    updateTheme(Theme.LIGHT);
  }
});

if (localStorage.getItem('theme') === 'darkTheme') {
  switchRef.setAttribute('checked', true);
  updateTheme(Theme.DARK);
}
