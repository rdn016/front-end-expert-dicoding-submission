function loadFontAwesome() {
  const screenWidth = window.innerWidth;
  const existingScript = document.getElementById('font-awesome-script');

  // Cek jika lebar layar sesuai dan script belum ada
  if (screenWidth <= 575 && !existingScript) {
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/a67c0f2bc6.js'; // Ganti dengan URL kit Font Awesome Anda
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
    console.log('Font Awesome script loaded');
  } else if (screenWidth > 575 && existingScript) {
    // Hapus script jika layar lebih besar dari 575px
    existingScript.remove();
    console.log('Font Awesome script removed');
  }
}

export default loadFontAwesome;