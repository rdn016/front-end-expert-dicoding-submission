import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const start = 10;
const totalImage = 20;

const generateImage = () => {
  for (let i = start; i < start + totalImage; i++) {
    document.body.innerHTML += `<img class="lazyload" data-src="https://restaurant-api.dicoding.dev/images/small/${i}" alt="dummy images"><br>`;
  }
};

generateImage();