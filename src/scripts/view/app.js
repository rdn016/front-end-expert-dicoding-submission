import routes from '../routes/routes';
import urlParser from '../routes/url-parser';

class App {
  constructor({ content }) {
    this._content = content; // Elemen DOM target
  }

  async renderPage() {
    const url = urlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    // Sisipkan HTML ke dalam elemen target
    this._content.innerHTML = await page.render();

    // Panggil afterRender setelah konten masuk ke DOM
    await page.afterRender();
  }
}

export default App;

