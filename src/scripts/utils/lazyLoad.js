import 'lazysizes';
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const start = 5;
const totalImage = 20;

const generateImage = () => {
  const fragment = document.createDocumentFragment(); // Gunakan fragment untuk efisiensi
  for (let i = start; i < start + totalImage; i++) {
    const img = document.createElement('img');
    img.className = 'lazyload';
    img.setAttribute('data-src', `https://restaurant-api.dicoding.dev/images/small/${i}`);
    img.setAttribute('alt', `Image number ${i}`);
    fragment.appendChild(img);
    fragment.appendChild(document.createElement('br')); // Menambahkan line break
  }
  document.body.appendChild(fragment); // Tambahkan semua elemen sekaligus
};

generateImage();
