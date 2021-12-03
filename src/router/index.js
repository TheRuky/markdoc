import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:slug',
    name: 'Document',
    component: () => import(/* webpackChunkName: "about" */ '../views/Snippet.vue')
  }
];

const history = createWebHistory(process.env.BASE_URL);

const router = createRouter({ history, routes });

export { router };
