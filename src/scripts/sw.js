import { precacheAndRoute } from 'workbox-precaching';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { registerRoute, Route } from 'workbox-routing';

precacheAndRoute(self.__WB_MANIFEST);

const restaurantApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/list/'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-list',
  })
);

const restaurantImgApi = new Route(
  ({ url }) => {
    url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/') &&
    url.pathname.endsWith('.png');
  },
  new StaleWhileRevalidate({
    cacheName: 'restaurant-img',
  })
);

registerRoute(restaurantApi);
registerRoute(restaurantImgApi);

self.addEventListener('install', () => {
  console.log('service worker installed');
  self.skipWaiting();
});
