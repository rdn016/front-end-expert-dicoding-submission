import '../styles/main.css';
import App from './view/app';
import swRegister from './utils/register-sw';
import '@fortawesome/fontawesome-free/css/all.min.css';

const hamburger = document.getElementById('btn');
const closeBtn = document.getElementById('cancel');

//aksesibilitas
hamburger.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    document.getElementById('check').checked =
      !document.getElementById('check').checked;
  }
});
closeBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    document.getElementById('check').checked =
      !document.getElementById('check').checked;
  }
});

const app = new App({ content: document.querySelector('#mainContent') });

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});



