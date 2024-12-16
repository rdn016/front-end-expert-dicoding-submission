export function sleep(response){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 0);
  });
}
export function showLoading(element){
  element.style.display = 'block';
}
export function hideLoading(element){
  element.style.display = 'none';
}

