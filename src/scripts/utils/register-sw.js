import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('service worker not supported');
    return;
  }
  const wb = new Workbox('./sw.bundle.js');
  try {
    await wb.register();
    console.log('registering service worker...');
    return;
  } catch (error) {
    console.log(`service worker not installed: ${error}`);
  }
};

export default swRegister;
