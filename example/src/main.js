import { createApp } from 'vue'
import App from './App.vue'

import NeoButton from 'neo-ui';
import 'neo-ui/dist/styles.css';
import 'neo-ui/dist/neo-ui.css';

createApp(App).component("NeoButton", NeoButton).mount('#app')
