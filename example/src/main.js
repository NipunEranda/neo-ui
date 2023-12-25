import { createApp } from 'vue'
import App from './App.vue'

import neoUI from 'neo-ui';
import 'neo-ui/dist/styles.css';
import 'neo-ui/dist/neo-ui.css';

createApp(App).use(neoUI).mount('#app')
