const lazyLoadElements = () => {
  const lazyElements = document.querySelectorAll('.lazyload');
  lazyElements.forEach((element) => {
    if (element.tagName === 'IMG') {
      element.onload = () => {
        element.style.display = 'block';
        element.previousElementSibling.style.display = 'none';
      };
      element.src = element.dataset.src;
    }
  });
};
export default lazyLoadElements;