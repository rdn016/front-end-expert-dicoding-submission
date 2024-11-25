import { precacheAndRoute } from 'workbox-precaching';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { registerRoute, Route } from 'workbox-routing';

precacheAndRoute(self.__WB_MANIFEST);

const restaurantApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/list/'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-list',
  }),
  console.log('restaurant registered')
);

const restaurantImgApi = new Route(
  ({ url }) => {
    return url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/');
  },
  new StaleWhileRevalidate({
    cacheName: 'restaurant-img',
  }),
  console.log('restaurant img registered')
);

registerRoute(restaurantApi);
registerRoute(restaurantImgApi);

self.addEventListener('install', () => {
  console.log('service worker installed');
  self.skipWaiting();
});
