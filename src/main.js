import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { router } from './router';
import App from './App.vue';

import './styles/main.scss';

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);

app.mount('#app');
