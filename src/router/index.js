import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Snippet from '../views/Snippet.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:slug',
    name: 'Snippet',
    component: Snippet
  }
];

const history = createWebHistory(process.env.BASE_URL);

const router = createRouter({ history, routes });

export { router };
