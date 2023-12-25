import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css'

import customComponents from './index';

createApp(App)
.use(customComponents)
.mount('#app')
