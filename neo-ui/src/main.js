import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css'

import customComponents from './index';

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import * as fas from "@fortawesome/free-solid-svg-icons";

library.add(
    fas.faBucket,
    fas.faGear
);

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(customComponents)
.mount('#app')
