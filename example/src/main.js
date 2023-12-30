import { createApp } from 'vue'
import App from './App.vue'

import neoUI from '@nipun_amarasekara/neo-ui';
import '@nipun_amarasekara/neo-ui/dist/styles.css';
import '@nipun_amarasekara/neo-ui/dist/neo-ui.css';

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import * as fas from "@fortawesome/free-solid-svg-icons";

library.add(fas.faPowerOff);


createApp(App).use(neoUI).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
