import routes from '../routes/routes';
import urlParser from '../routes/url-parser';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = urlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._content.innerHTML = await page.render();

    await page.afterRender();
    const skipButton = document.querySelector('#skip-button');
    const mainContent = document.querySelector('#mainContent');

    skipButton.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      skipButton.blur();
    });
  }
}

export default App;

